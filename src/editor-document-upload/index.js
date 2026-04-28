/**
 * Block editor sidebar plugin for document uploads.
 *
 * Registers a PluginDocumentSettingPanel in the Settings sidebar
 * that provides file upload/replace functionality via the WordPress
 * media library, mirroring the classic editor's ThickBox upload flow.
 *
 * Features:
 * - File upload/replace via MediaUpload
 * - File type badge and download link
 * - Revision summary textarea (post_excerpt)
 * - Lock status indicator
 * - Upload success/error snackbar notices
 * - Save lock for new documents without a file
 *
 * @see js/wp-document-revisions.dev.js (classic editor equivalent)
 * @package WP_Document_Revisions
 */

import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	Spinner,
	TextareaControl,
} from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState, useCallback, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { store as noticesStore } from '@wordpress/notices';

const LOCK_NAME = 'wp-document-revisions-upload';

/**
 * Extract file extension from a media object.
 *
 * Prefers the filename property (most reliable), falls back to
 * source_url parsing, then MIME type mapping.
 *
 * @param {Object} media Media object from WordPress.
 * @return {string} Uppercase file extension (e.g. "PDF") or empty string.
 */
function getFileExtension( media ) {
	if ( media?.filename ) {
		const ext = media.filename.split( '.' ).pop();
		if ( ext ) {
			return ext.toUpperCase();
		}
	}

	if ( media?.source_url ) {
		const urlPath = media.source_url.split( '?' )[ 0 ];
		const ext = urlPath.split( '.' ).pop();
		if ( ext && ext.length <= 5 ) {
			return ext.toUpperCase();
		}
	}

	if ( media?.mime_type ) {
		const sub = media.mime_type.split( '/' ).pop();
		const mimeMap = {
			pdf: 'PDF',
			msword: 'DOC',
			'vnd.openxmlformats-officedocument.wordprocessingml.document':
				'DOCX',
			'vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
			'vnd.ms-excel': 'XLS',
			'vnd.openxmlformats-officedocument.presentationml.presentation':
				'PPTX',
			'vnd.ms-powerpoint': 'PPT',
			plain: 'TXT',
			csv: 'CSV',
			rtf: 'RTF',
			zip: 'ZIP',
		};
		return mimeMap[ sub ] || sub?.toUpperCase() || '';
	}

	return '';
}

function DocumentUploadPanel() {
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	if ( postType !== 'document' ) {
		return null;
	}

	const [ meta, setMeta ] = useEntityProp( 'postType', 'document', 'meta' );
	const attachmentId = meta?.document_attachment_id || 0;

	const [ excerpt, setExcerpt ] = useEntityProp(
		'postType',
		'document',
		'excerpt'
	);

	const isNewPost = useSelect(
		( select ) => select( 'core/editor' ).isEditedPostNew(),
		[]
	);

	const { lockPostSaving, unlockPostSaving } = useDispatch( 'core/editor' );
	const { createSuccessNotice, createErrorNotice } =
		useDispatch( noticesStore );

	// Track whether a new upload happened this session (for success notice).
	const [ previousAttachmentId, setPreviousAttachmentId ] =
		useState( attachmentId );

	// Lock saving when a new document has no file attached.
	useEffect( () => {
		if ( isNewPost && ! attachmentId ) {
			lockPostSaving( LOCK_NAME );
		} else {
			unlockPostSaving( LOCK_NAME );
		}
	}, [ attachmentId, isNewPost, lockPostSaving, unlockPostSaving ] );

	// Resolve attachment details for display.
	const attachment = useSelect(
		( select ) => {
			if ( ! attachmentId ) {
				return null;
			}
			return select( 'core' ).getMedia( attachmentId );
		},
		[ attachmentId ]
	);

	const isResolving = useSelect(
		( select ) => {
			if ( ! attachmentId ) {
				return false;
			}
			return select( 'core/data' ).isResolving( 'core', 'getMedia', [
				attachmentId,
			] );
		},
		[ attachmentId ]
	);

	// Lock status from the editor store.
	const { isLocked, lockUser } = useSelect( ( select ) => {
		const editorSelect = select( 'core/editor' );
		return {
			isLocked: editorSelect.isPostLocked
				? editorSelect.isPostLocked()
				: false,
			lockUser: editorSelect.getPostLockUser
				? editorSelect.getPostLockUser()
				: null,
		};
	}, [] );

	// Detect stale attachment (deleted from media library).
	useEffect( () => {
		if ( attachmentId && ! isResolving && attachment === null ) {
			createErrorNotice(
				__(
					'The attached document file could not be found. It may have been deleted.',
					'wp-document-revisions'
				),
				{ id: 'wpdr-stale-attachment', isDismissible: true }
			);
		}
	}, [ attachmentId, isResolving, attachment, createErrorNotice ] );

	const onSelectMedia = useCallback(
		( media ) => {
			if ( ! media?.id ) {
				createErrorNotice(
					__(
						'Document selection failed.',
						'wp-document-revisions'
					),
					{ isDismissible: true }
				);
				return;
			}

			const oldId = previousAttachmentId;
			setMeta( { ...meta, document_attachment_id: media.id } );
			setPreviousAttachmentId( media.id );

			// Show appropriate success notice.
			const message = oldId
				? __(
						'New version selected. Press Update to save.',
						'wp-document-revisions'
				  )
				: __(
						'Document selected. Press Update to save.',
						'wp-document-revisions'
				  );
			createSuccessNotice( message, {
				type: 'snackbar',
				isDismissible: true,
			} );

			// Fire legacy CustomEvent for backward compatibility.
			const ext = media.filename
				? '.' + media.filename.split( '.' ).pop()
				: '';
			document.dispatchEvent(
				new CustomEvent( 'documentUpload', {
					detail: {
						attachmentID: String( media.id ),
						extension: ext,
					},
				} )
			);
		},
		[ meta, setMeta, previousAttachmentId, createSuccessNotice, createErrorNotice ]
	);

	// Custom media frame that auto-closes after a fresh upload.
	const frameRef = useRef( null );

	const openMediaFrame = useCallback( () => {
		// Reuse existing frame if already created.
		if ( frameRef.current ) {
			frameRef.current.open();
			return;
		}

		const frame = window.wp.media( {
			title: attachmentId
				? __( 'Upload New Version', 'wp-document-revisions' )
				: __( 'Upload Document', 'wp-document-revisions' ),
			multiple: false,
			button: {
				text: __( 'Select', 'wp-document-revisions' ),
			},
		} );

		// Standard select handler (user clicks "Select" button).
		frame.on( 'select', () => {
			const selected = frame
				.state()
				.get( 'selection' )
				.first()
				?.toJSON();
			if ( selected ) {
				onSelectMedia( selected );
			}
		} );

		// Auto-close: when a file finishes uploading, select it and close.
		frame.on( 'content:activate:upload', () => {
			const uploader = frame.uploader?.uploader?.uploader;
			if ( uploader ) {
				uploader.bind( 'FileUploaded', ( up, file, response ) => {
					try {
						const data = JSON.parse( response.response );
						if ( data?.success && data?.data?.id ) {
							onSelectMedia( data.data );
							frame.close();
						}
					} catch ( e ) {
						// Fall through to manual selection.
					}
				} );
			}
		} );

		frameRef.current = frame;
		frame.open();
	}, [ attachmentId, onSelectMedia ] );

	// Clean up frame on unmount.
	useEffect( () => {
		return () => {
			if ( frameRef.current ) {
				frameRef.current.dispose();
				frameRef.current = null;
			}
		};
	}, [] );

	const getFileName = () => {
		if ( attachment?.title?.raw ) {
			return attachment.title.raw;
		}
		if ( attachment?.source_url ) {
			return attachment.source_url.split( '/' ).pop();
		}
		return __( 'Attached document', 'wp-document-revisions' );
	};

	const fileExt = getFileExtension( attachment );

	return (
		<PluginDocumentSettingPanel
			name="wp-document-revisions-upload"
			title={ __( 'Document', 'wp-document-revisions' ) }
			className="wp-document-revisions-upload-panel"
		>
			{ /* Lock status indicator */ }
			{ isLocked && lockUser && (
				<div
					style={ {
						background: '#fcf0f1',
						border: '1px solid #d63638',
						borderRadius: '2px',
						padding: '8px 12px',
						marginBottom: '12px',
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
					} }
				>
					<span
						className="dashicons dashicons-lock"
						style={ { fontSize: '20px', width: '20px', height: '20px' } }
					/>
					<span>
						{ lockUser.name
							? /* translators: %s is the name of the user who has the document locked */
							  __(
									'%s is currently editing this document.',
									'wp-document-revisions'
							  ).replace( '%s', lockUser.name )
							: __(
									'This document is currently locked.',
									'wp-document-revisions'
							  ) }
					</span>
				</div>
			) }

			{ isResolving && <Spinner /> }

			{ /* File info display */ }
			{ attachmentId && attachment ? (
				<div style={ { marginBottom: '12px' } }>
					<div
						style={ {
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
							marginBottom: '4px',
						} }
					>
						{ fileExt && (
							<span
								style={ {
									background: '#ddd',
									borderRadius: '3px',
									padding: '2px 6px',
									fontSize: '11px',
									fontWeight: 600,
									letterSpacing: '0.5px',
									lineHeight: '1.4',
								} }
							>
								{ fileExt }
							</span>
						) }
						<strong>{ getFileName() }</strong>
					</div>
					<p style={ { margin: 0 } }>
						<a
							href={ attachment.source_url }
							target="_blank"
							rel="noopener noreferrer"
						>
							{ __( 'Download', 'wp-document-revisions' ) }
						</a>
					</p>
				</div>
			) : null }

			{ /* Upload / Replace button */ }
			{ ! isResolving && (
				<MediaUploadCheck>
					<Button
						variant="secondary"
						onClick={ openMediaFrame }
						disabled={ isLocked }
					>
						{ attachmentId
							? __(
									'Upload New Version',
									'wp-document-revisions'
							  )
							: __(
									'Upload Document',
									'wp-document-revisions'
							  ) }
					</Button>
				</MediaUploadCheck>
			) }

			{ /* Revision summary (post_excerpt) */ }
			<div style={ { marginTop: '16px' } }>
				<TextareaControl
					label={ __(
						'Revision Summary',
						'wp-document-revisions'
					) }
					help={ __(
						'A brief description of the changes in this version.',
						'wp-document-revisions'
					) }
					value={ excerpt || '' }
					onChange={ setExcerpt }
					rows={ 2 }
					disabled={ isLocked }
				/>
			</div>
		</PluginDocumentSettingPanel>
	);
}

registerPlugin( 'wp-document-revisions-upload', {
	render: DocumentUploadPanel,
	icon: 'media-document',
} );

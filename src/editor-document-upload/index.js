/**
 * Block editor sidebar plugin for document uploads.
 *
 * Registers a PluginDocumentSettingPanel in the Settings sidebar
 * that provides file upload/replace functionality via the WordPress
 * media library, mirroring the classic editor's ThickBox upload flow.
 *
 * @see js/wp-document-revisions.dev.js (classic editor equivalent)
 * @package WP_Document_Revisions
 */

import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, Spinner } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const LOCK_NAME = 'wp-document-revisions-upload';

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

	const isNewPost = useSelect(
		( select ) => select( 'core/editor' ).isEditedPostNew(),
		[]
	);

	const { lockPostSaving, unlockPostSaving } = useDispatch( 'core/editor' );

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

	const onSelectMedia = ( media ) => {
		setMeta( { ...meta, document_attachment_id: media.id } );

		// Fire legacy CustomEvent for backward compatibility.
		const ext = media.filename
			? '.' + media.filename.split( '.' ).pop()
			: '';
		document.dispatchEvent(
			new CustomEvent( 'documentUpload', {
				detail: { attachmentID: String( media.id ), extension: ext },
			} )
		);
	};

	const getFileName = () => {
		if ( attachment?.title?.raw ) {
			return attachment.title.raw;
		}
		if ( attachment?.source_url ) {
			return attachment.source_url.split( '/' ).pop();
		}
		return __( 'Attached document', 'wp-document-revisions' );
	};

	return (
		<PluginDocumentSettingPanel
			name="wp-document-revisions-upload"
			title={ __( 'Document', 'wp-document-revisions' ) }
			className="wp-document-revisions-upload-panel"
		>
			{ isResolving && <Spinner /> }
			{ attachmentId && attachment ? (
				<div style={ { marginBottom: '12px' } }>
					<p style={ { margin: '0 0 4px' } }>
						<strong>{ getFileName() }</strong>
					</p>
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
			{ ! isResolving && (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectMedia }
						render={ ( { open } ) => (
							<Button variant="secondary" onClick={ open }>
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
						) }
					/>
				</MediaUploadCheck>
			) }
		</PluginDocumentSettingPanel>
	);
}

registerPlugin( 'wp-document-revisions-upload', {
	render: DocumentUploadPanel,
	icon: 'media-document',
} );

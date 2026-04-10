<?php
/**
 * Allow E2E tests to request the classic editor via a query parameter.
 *
 * Navigate to post.php?post=X&action=edit&classic=1 to bypass the
 * block editor override from enable-document-rest.php.
 *
 * @package WP_Document_Revisions
 */

// phpcs:ignore WordPress.Security.NonceVerification.Recommended
if ( isset( $_GET['classic'] ) && '1' === $_GET['classic'] ) {
	add_filter( 'use_block_editor_for_post', '__return_false', 200 );
}

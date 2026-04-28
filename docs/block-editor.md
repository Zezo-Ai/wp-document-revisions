# Block Editor (Gutenberg) Support

WP Document Revisions includes opt-in support for the WordPress block editor (Gutenberg). By default, documents use the classic editor, which provides a streamlined upload-focused interface. The block editor can be enabled when you need full Gutenberg capabilities alongside document management.

## Enabling the Block Editor

Add the following filters to your theme's `functions.php` or a custom plugin:

```php
// Enable REST API for documents (required for block editor).
add_filter( 'document_show_in_rest', '__return_true' );

// Enable the block editor for documents.
add_filter( 'document_use_block_editor', '__return_true' );
```

Alternatively, you can create a [must-use plugin](https://developer.wordpress.org/advanced-administration/plugins/mu-plugins/) at `wp-content/mu-plugins/enable-block-editor.php`:

```php
<?php
add_filter( 'document_show_in_rest', '__return_true' );
add_filter( 'document_use_block_editor', '__return_true' );
```

Both filters are required. `document_show_in_rest` exposes documents to the REST API, and `document_use_block_editor` configures the plugin for block editor compatibility (enables Gutenberg for documents, allows REST write methods, adds excerpt support, and registers post meta).

## Document Sidebar Panel

When the block editor is enabled, a **Document** panel appears in the Settings sidebar with the following features:

### File Upload

- **Upload Document** / **Upload New Version** button opens the WordPress media library
- Select any file from the media library or upload a new one
- A success notice confirms your selection: *"Document selected. Press Update to save."*
- The file is stored as document metadata and synced to `post_content` on save

### File Information

- **File type badge** displays the file extension (e.g., PDF, DOCX, XLSX) as a visual label
- **Filename** shown alongside the badge
- **Download link** to access the current file directly

### Revision Summary

A textarea field for describing what changed in this version. This maps to the post excerpt and appears in the document's revision history, just like the classic editor's "Revision Summary" metabox.

### Lock Status

When another user is editing the document, a warning banner shows their name and the upload button is disabled. This uses the WordPress core editor lock (not the plugin's custom document lock with `document_lock_check` filter).

### Save Protection

New documents cannot be published until a file is attached. The editor's Publish/Update button is locked until you select a file.

### Error Handling

- If a previously attached file is deleted from the media library, an error notice alerts you
- Failed media selections display an error notice

## How It Differs from the Classic Editor

| Feature | Classic Editor | Block Editor |
|---------|---------------|-------------|
| Upload method | ThickBox iframe with plupload | WordPress media library modal |
| File storage | Direct `post_content` write | REST API meta sync |
| Feedback | Inline HTML notices | WordPress Snackbar notices |
| Lock system | Plugin's `document_lock_check` filter | Core editor lock |
| Revision summary | Custom metabox | Sidebar textarea (post excerpt) |
| Workflow states | Taxonomy metabox | Taxonomy panel in sidebar |

## Technical Details

### REST API

When block editor support is enabled, documents are exposed via the WordPress REST API at `/wp-json/wp/v2/{document_slug}/`. The plugin registers a `document_attachment_id` post meta field for REST read/write, and automatically syncs it to `post_content` (where the attachment reference is stored as `<!-- WPDR {ID} -->`).

POST, PUT, and DELETE methods are allowed when the block editor is enabled. All write methods require a valid nonce.

### Blocks

WP Document Revisions also provides three Gutenberg blocks for displaying documents on the front end, available regardless of whether the document post type uses the block editor:

- **Documents List** (`wp-document-revisions/documents-shortcode`) — Displays a list of documents, equivalent to the `[documents]` shortcode
- **Recently Revised Documents** (`wp-document-revisions/documents-widget`) — Shows recently updated documents, equivalent to the sidebar widget
- **Document Revisions** (`wp-document-revisions/revisions-shortcode`) — Shows the revision history for a specific document, equivalent to the `[document_revisions]` shortcode

## Considerations

- The block editor experience is opt-in and considered stable, but the classic editor remains the default and most thoroughly tested interface
- Document locking in the block editor uses WordPress core's lock mechanism, which differs from the plugin's custom `document_lock_check` filter used in the classic editor
- The block editor requires the REST API to be enabled for documents, which exposes document endpoints to authenticated users with appropriate capabilities

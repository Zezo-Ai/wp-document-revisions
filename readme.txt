=== WP Document Revisions ===

Contributors: benbalter, nwjames
Tags: documents, document management, version control, collaboration, revisions
Requires at least: 5.0
Tested up to: 6.9
Requires PHP: 7.4
Stable tag: 4.0.0
License: GPL-3.0-or-later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

A document management and version control plugin for WordPress that allows teams of any size to collaboratively edit files and manage their workflow.

== What is WP Document Revisions? ==

[WP Document Revisions](https://wordpress.org/plugins/wp-document-revisions/) is a [document management](https://en.wikipedia.org/wiki/Document_management_system) and [version control](http://en.wikipedia.org/wiki/Revision_control) plugin. Built for time-sensitive and mission-critical projects, teams can collaboratively edit files of any format -- text documents, spreadsheets, images, sheet music... anything -- all the while, seamlessly tracking the document's progress as it moves through your organization's existing workflow.

= WP Document Revisions is three things =

1. **📁 Document Management System (DMS)** - Track, store, and organize files of any format
2. **👥 Collaboration Tool** - Empower teams to collaboratively draft, edit, and refine documents
3. **🔒 File Hosting Solution** - Publish and securely deliver files to teams, clients, or the public

See [**the full list of features**](https://wp-document-revisions.github.io/wp-document-revisions/features/) for more information.

== 📚 Documentation ==

**[Complete Documentation Site](https://wp-document-revisions.github.io/wp-document-revisions)** - Your one-stop resource for everything about WP Document Revisions.

= 🎯 Quick Start Guides =

- **[Installation](https://wp-document-revisions.github.io/wp-document-revisions/installation/)** - Get up and running in minutes
- **[Features and Overview](https://wp-document-revisions.github.io/wp-document-revisions/features/)** - Discover what WP Document Revisions can do
- **[Screenshots](https://wp-document-revisions.github.io/wp-document-revisions/screenshots/)** - See the plugin in action

= 📖 User Documentation =

- **[Frequently Asked Questions](https://wp-document-revisions.github.io/wp-document-revisions/frequently-asked-questions/)** - Common questions answered
- **[Plugin Actions](https://wp-document-revisions.github.io/wp-document-revisions/actions/)** - Available WordPress actions
- **[Plugin Filters](https://wp-document-revisions.github.io/wp-document-revisions/filters/)** - Available WordPress filters
- **[Plugin Shortcodes and Widget](https://wp-document-revisions.github.io/wp-document-revisions/shortcodes/)** - Display documents on your site
- **[Useful Plugins and Tools](https://wp-document-revisions.github.io/wp-document-revisions/useful-plugins-and-tools/)** - Extend functionality
- **[Cookbook](https://wp-document-revisions.github.io/wp-document-revisions/cookbook/README/)** - Integration guides and recipes
- **[Translations](https://wp-document-revisions.github.io/wp-document-revisions/translations/)** - Multi-language support
- **[Links](https://wp-document-revisions.github.io/wp-document-revisions/links/)** - Additional resources

= 🆘 Support & Community =

- **[Where to get Support or Report an Issue](https://wp-document-revisions.github.io/wp-document-revisions/SUPPORT/)** - Get help when you need it
- **[How to Contribute](https://wp-document-revisions.github.io/wp-document-revisions/CONTRIBUTING/)** - Join our community
- **[Join the Mailing List](https://groups.google.com/forum/#!forum/wp-document-revisions)** - Stay updated


== Features ==

<iframe width="560" height="315" src="https://www.youtube.com/embed/VpsTNSiJKis" frameborder="0" allowfullscreen></iframe>

= Overview =

**Powerful Collaboration Tools** - _With great power does not have to come great complexity._ Based on a simple philosophy of putting powerful but intuitive tools in the hands of managers and content creators, WP Document Revisions leverages many of the essential WordPress features that, for more than eight years, have been tested and proven across countless industries — posts, attachments, revisions, taxonomies, authentication, and permalinks — to make collaborating on the creation and publication of documents a natural endeavor. Think of it as an [open-source and more intuitive version](http://ben.balter.com/2011/04/04/when-all-you-have-is-a-pair-of-bolt-cutters/) of the popular Microsoft collaboration suite, [Sharepoint.](http://sharepoint.microsoft.com/en-us/Pages/default.aspx)

**Document History** - At each step of the authoring process, WP Document Revisions gives you an instant snapshot of your team's progress and the document's history. It even gives you the option to revert back to a previous revision — so don't fret if you make a mistake — or receive updates on changes to the document right in your favorite feed reader.

**Access Control** - Each document is given a persistent URL (e.g., yourcompany.com/documents/2011/08/TPS-Report.doc) which can be private (securely delivered only to members of your organization), password protected (available only to those you select such as clients or contractors), or public (published and hosted for the world to see). If you catch a typo and upload a new version, that URL will continue to point to the latest version, regardless of how many changes you make.

**Enterprise Security** - Worried about storing propriety or sensitive information? WP Document Revisions was built from the first line of code with government- and enterprise-grade security in mind. Each file is masked behind an anonymous 128-bit [MD5 hash](http://en.wikipedia.org/wiki/MD5) as soon as it touches the server, and requests for files are transparently routed through WordPress's time-tested URL rewriting, authentication, and permission systems (which can even [integrate with existing enterprise active directory](http://wordpress.org/plugins/active-directory-integration/) or [LDAP servers](http://wordpress.org/extend/plugins/simple-ldap-login/)). Need more security? WP Document Revisions allows you to store documents in a folder above the `htdocs` or `public_html` [web root](http://httpd.apache.org/docs/2.0/mod/core.html#documentroot), further ensuring that only those you authorize have access to your work.

**Customization** - WP Document Revisions recognizes that no two teams are identical, and as a result, molds to your firm's needs, not the other way around. Need to track additional information associated with a document? Departments, editors, issues, sections, even arbitrary key-value pairs — whatever you can throw at it, it can handle. Development and customization costs are further minimized by its extensive plugin API, and the [WordPress Custom Taxonomy Generator](http://themergency.com/generators/wordpress-custom-taxonomy/) makes it easy for even the uninitiated to add custom taxonomies to documents. Need an audit trail to track check-ins and check-outs? User-level permissions based on the document's state or another custom taxonomy? Support for third-party encryption? Check out the [WP Document Revisions Code Cookbook](https://github.com/wp-document-revisions/wp-document-revisions-Code-Cookbook) for sample code. Looking for even more advanced control of your workflow? WP Document Revisions will detect the popular workflow plugin [Edit Flow](http://editflow.org), if installed, and will automatically pull [Edit Flow’s advanced workflow management tools](http://ben.balter.com/2011/10/24/advanced-workflow-management-tools-for-wp-document-revisions/) into WP Document Revisions. Simply put, virtually every aspect of the plugin's functionality from workflow states to user-level permissions can be fully customized to your team's unique needs.

**Future Proof** - Switching costs a concern? WP Document Revisions is built with tomorrow's uncertainty in mind. Equally at home in an in-house server room as it is in the cloud, moving individual files or entire document repositories in and out of WP Document Revisions is a breeze (history and all). And since the software is open-source, you can easily add tools to automate the process of moving to or integrating with future third-party systems.

= Features =

- Support for any file type (docs, spreadsheets, images, PDFs — anything!)
- Securely stores unlimited revisions of your business's essential files
- Provides a full file history in the form of a revision log, accessible via RSS
- Helps you track and organize documents as they move through your organization's existing workflow
- Each file gets a permanent, authenticated URL that always points to the latest version
- Each revision gets its own unique url (e.g.,TPS-Report-revision-3.doc) accessible only to those you deem
- Files are intuitively checked out and locked to prevent revisions from colliding
- Toggle documents between public, private, and password protected with a single mouse click
- Runs in-house or in the cloud
- Secure: filenames are hashed on upload and files are only accessible through WordPress's proven authentication system
- Can move document upload folder to location outside of web root to further ensure government- and enterprise-grade security
- Documents and Revisions shortcodes, Recently Revised Documents widget
- Multisite and Windows (XAMPP) support
- Multiple language support including French, Spanish and German (easily translated to your language)
- Integration with [Edit Flow](https://editflow.org), PublishPress or PublishPress Statuses.
- Opt-in [Block Editor (Gutenberg) support](https://wp-document-revisions.github.io/wp-document-revisions/block-editor/) with document sidebar panel (experimental)
- Recently Revised Documents Widget, shortcodes, and templating functions for front-end integration

= Features Available via the [Code Cookbook](https://github.com/wp-document-revisions/wp-document-revisions-Code-Cookbook) =

- **Audit Trail** - creates check in / check out audit trail for all documents
- **Taxonomy-based Permissions** - allows setting user-level permissions based on a custom taxonomy such as department
- **Third Party Encryption** - example of how to integrate at rest encryption using third-party tools
- **Rename Documents** - changes all references to "Documents" in the interface to any label of your choosing
- **State Change Notification** - how to use document api to allow users to receive notification whenever documents change workflow state
- **Bulk Import** - how to batch import a directory (or other list) of files as documents
- **Filetype Taxonomy** - Adds support to filter by filetype
- **Track Changes** - Auto-generates and appends revision summaries for changes to taxonomies, title, and visibility
- **Change Tracker** - Auto-generates and appends revision summaries for changes to taxonomies, title, and visibility
- **WPML Support** - Integration with WPML


== Useful plugins and tools ==

= Permissions management =

- [Members - Membership & User Role Editor Plugin](https://wordpress.org/plugins/members/)

  (Previously called Members)

= Taxonomy management =

- [Simple Taxonomy Refreshed](https://wordpress.org/plugins/simple-taxonomy-refreshed/)

= Email notification and distribution =

- [Email Notice for WP Document Revisions](https://wordpress.org/plugins/email-notice-wp-document-revisions/)

= Document workflow management =

- [Edit Flow](https://wordpress.org/plugins/edit-flow/)
- [PublishPress Statuses](https://wordpress.org/plugins/publishpress-statuses/)
- [PublishPress Revisions](https://wp-document-revisions.github.io/wp-document-revisions/https://wordpress.org/plugins/publishpress-revisions/) - See the [integration guide](cookbook/publishpress-revisions-integration/) for scheduling document revisions


=== Block Editor (Gutenberg) Support — Experimental ===

> **⚠️ Experimental Feature:** Block editor support and the REST API for documents are both experimental and opt-in. The classic editor remains the default, recommended, and most thoroughly tested interface. Enable the block editor only if you want to evaluate the new experience and are comfortable with potential rough edges. Please [report any issues](https://github.com/wp-document-revisions/wp-document-revisions/issues) you encounter.

WP Document Revisions includes experimental support for the WordPress block editor (Gutenberg). By default, documents use the classic editor, which provides a streamlined, purpose-built upload interface. The block editor can be enabled for evaluation when you want to try the newer WordPress editing experience for documents.

== How to Opt In ==

Add the following two filters to your theme's `functions.php` or a custom plugin:

```php
// Enable REST API for documents (required for block editor).
add_filter( 'document_show_in_rest', '__return_true' );

// Enable the experimental block editor for documents.
add_filter( 'document_use_block_editor', '__return_true' );
```

Alternatively, create a [must-use plugin](https://developer.wordpress.org/advanced-administration/plugins/mu-plugins/) at `wp-content/mu-plugins/enable-block-editor.php`:

```php
<?php
// Experimental: Enable block editor for documents.
add_filter( 'document_show_in_rest', '__return_true' );
add_filter( 'document_use_block_editor', '__return_true' );
```

To disable the block editor, simply remove these filters.

Both filters are required. `document_show_in_rest` exposes documents to the WordPress REST API (also experimental), and `document_use_block_editor` configures the plugin for block editor compatibility (enables Gutenberg for documents, allows REST write methods, adds excerpt support, and registers post meta). Enabling `document_show_in_rest` alone provides read-only REST API access without the block editor.

== Document Sidebar Panel ==

When the block editor is enabled, a **Document** panel appears in the Settings sidebar with the following features:

= File Upload =

- **Upload Document** / **Upload New Version** button opens the WordPress media library
- Select any file from the media library or upload a new one
- A success notice confirms your selection: *"Document selected. Press Update to save."*
- The file is stored as document metadata and synced to `post_content` on save

= File Information =

- **File type badge** displays the file extension (e.g., PDF, DOCX, XLSX) as a visual label
- **Filename** shown alongside the badge
- **Download link** to access the current file directly

= Revision Summary =

A textarea field for describing what changed in this version. This maps to the post excerpt and appears in the document's revision history, just like the classic editor's "Revision Summary" metabox.

= Lock Status =

When another user is editing the document, a warning banner shows their name and the upload button is disabled. This uses the WordPress core editor lock (not the plugin's custom document lock with `document_lock_check` filter).

= Save Protection =

New documents cannot be published until a file is attached. The editor's Publish/Update button is locked until you select a file.

= Error Handling =

- If a previously attached file is deleted from the media library, an error notice alerts you
- Failed media selections display an error notice

== How It Differs from the Classic Editor ==

| Feature | Classic Editor | Block Editor |
|---------|---------------|-------------|
| Upload method | ThickBox iframe with plupload | WordPress media library modal |
| File storage | Direct `post_content` write | REST API meta sync |
| Feedback | Inline HTML notices | WordPress Snackbar notices |
| Lock system | Plugin's `document_lock_check` filter | Core editor lock |
| Revision summary | Custom metabox | Sidebar textarea (post excerpt) |
| Workflow states | Taxonomy metabox | Taxonomy panel in sidebar |

== Technical Details ==

= REST API =

When block editor support is enabled, documents are exposed via the WordPress REST API at `/wp-json/wp/v2/{document_slug}/`. The plugin registers a `document_attachment_id` post meta field for REST read/write, and automatically syncs it to `post_content` (where the attachment reference is stored as `<!-- WPDR {ID} -->`).

POST, PUT, and DELETE methods are allowed when the block editor is enabled. All write methods require a valid nonce.

= Blocks =

WP Document Revisions also provides three Gutenberg blocks for displaying documents on the front end, available regardless of whether the document post type uses the block editor:

- **Documents List** (`wp-document-revisions/documents-shortcode`) — Displays a list of documents, equivalent to the `[documents]` shortcode
- **Recently Revised Documents** (`wp-document-revisions/documents-widget`) — Shows recently updated documents, equivalent to the sidebar widget
- **Document Revisions** (`wp-document-revisions/revisions-shortcode`) — Shows the revision history for a specific document, equivalent to the `[document_revisions]` shortcode

== Known Limitations ==

- **Experimental** — This feature is under active development and may have rough edges
- **Document locking** — Uses WordPress core's lock mechanism, which differs from the plugin's custom `document_lock_check` filter used in the classic editor
- **REST API exposure** — Requires the REST API to be enabled for documents, which exposes document endpoints to authenticated users with appropriate capabilities
- **Content area hidden** — The main editor canvas is hidden since documents don't use post body content; all management happens via the sidebar panels
- **Revision restore** — The Revision Log panel displays history but does not yet support restoring previous revisions (use the classic editor for that)


== Where to get help or report an issue ==

- For getting started and general documentation, please browse, and feel free to contribute to [the project documentation](https://wp-document-revisions.github.io/wp-document-revisions/).
- For support questions ("How do I", "I can't seem to", etc.) please search and if not already answered, open a thread in the [Support Forums](https://wordpress.org/support/plugin/wp-document-revisions).
- For technical issues (e.g., to submit a bug or feature request) please search and if not already filed, [open an issue on GitHub](https://github.com/wp-document-revisions/wp-document-revisions/issues).
- For implementation, and all general questions ("Is it possible to..", "Has anyone..."), please search, and if not already answered, post a topic to the [general discussion list serve](https://groups.google.com/forum/#!forum/wp-document-revisions)

== Things to check before reporting an issue ==

- Are you using the latest version of WordPress?
- Are you using the latest version of the plugin?
- Does the problem occur even when you deactivate all plugins and use the default theme?
- Have you tried deactivating and reactivating the plugin?
- Has your issue [already been reported](https://github.com/wp-document-revisions/wp-document-revisions/issues)?

== What to include in an issue ==

- What steps can another user take to recreate the issue?
- What is the expected outcome of that action?
- What is the actual outcome of that action?
- Are there any screenshots or screencasts that may be helpful to include?
- Only include one bug per issue. If you have discovered two bugs, please file two issues.


== Screenshots ==

\###1. A typical WP Document Revisions edit document screen.###

![A typical WP Document Revisions edit document screen.](https://raw.githubusercontent.com/wp-document-revisions/wp-document-revisions/master/screenshot-1.png)


== Links ==

- **[Source Code](https://github.com/wp-document-revisions/wp-document-revisions/)** (GitHub)
- **[Latest Release](https://github.com/wp-document-revisions/wp-document-revisions/releases/latest)** - Download the newest version
- **[WordPress.org Plugin Page](https://wordpress.org/plugins/wp-document-revisions/)** - Official plugin listing
- **[Development Version](https://github.com/wp-document-revisions/wp-document-revisions/tree/develop)** ([CI Status](https://github.com/wp-document-revisions/wp-document-revisions/actions/workflows/ci.yml))
- **[Code Cookbook](https://github.com/wp-document-revisions/wp-document-revisions-Code-Cookbook)** - Code examples and customizations
- **[Translations](https://crowdin.com/project/wordpress-document-revisions)** (Crowdin)
- **[Where to get Support or Report an Issue](https://wp-document-revisions.github.io/wp-document-revisions/SUPPORT/)** - Get help when you need it
- **[How to Contribute](https://wp-document-revisions.github.io/wp-document-revisions/CONTRIBUTING/)** - Join our community


== Installation ==

= 🚀 Automatic Install (Recommended) =

1. **Log into WordPress Admin** - Login to your WordPress site as an Administrator, or if you haven't already, complete the [WordPress installation](https://wordpress.org/support/article/how-to-install-wordpress/)
2. **Go to Plugins** - Navigate to **Plugins > Add New** from the left menu
3. **Search** - Search for "WP Document Revisions"
4. **Install** - Click **"Install Now"** next to WP Document Revisions
5. **Activate** - Click **"Activate"** to enable the plugin

= 📦 Manual Install =

1. **Download** - Get the latest version from [WordPress.org](https://wordpress.org/plugins/wp-document-revisions/) or [GitHub Releases](https://github.com/wp-document-revisions/wp-document-revisions/releases/latest)
2. **Upload** - Unzip the file and upload the "wp-document-revisions" folder to your `/wp-content/plugins/` directory
3. **Activate** - Log into WordPress admin, go to **Plugins**, and activate "WP Document Revisions"

= 💻 Developer Install =

For development or contributing:

```bash
git clone https://github.com/wp-document-revisions/wp-document-revisions.git
cd wp-document-revisions
composer install --no-dev
```

= ⚙️ Requirements =

- **WordPress:** 4.9 or higher
- **PHP:** 7.4 or higher
- **File Permissions:** WordPress must be able to write to the uploads directory

= 🎯 Next Steps =

After installation, you'll find a new **Documents** menu in your WordPress admin. Start by:

1. **Creating your first document** - Go to Documents > Add New
2. **Setting up workflow states** (optional) - Go to Documents > Workflow States
3. **Configuring permissions** - Review Settings > Document Revisions

Need help? Check our [FAQ](https://wp-document-revisions.github.io/wp-document-revisions/frequently-asked-questions/) or [get support](https://wp-document-revisions.github.io/wp-document-revisions/SUPPORT/).


== Translations ==

Interested in translating WP Document Revisions? You can do so [via Crowdin](https://crowdin.com/project/wordpress-document-revisions), or by submitting a pull request.

- French - [Hubert CAMPAN](http://omnimaki.com/)
- Spanish - [IBIDEM GROUP](https://www.ibidemgroup.com), [TradiArt](http://www.tradiart.com/), and [elarequi](http://www.labitacoradeltigre.com)
- Norwegian - Daniel Haugen
- German -[Konstantin Obenland](http://en.wp.obenland.it/)
- Chinese - Tim Ren
- Swedish - Daniel Kroon, [Examinare AB](http://www.examinare.biz/), Sweden.
- Czech - Hynek Šťavík
- Italian - @guterboit
- Russian - Evgeny Vlasov
- Dutch - @tijscruysen


=== Security Policy ===

To report a security vulnerability, please email [ben@balter.com](mailto:ben@balter.com).


== Changelog ==

Numbers in brackets show the issue number in https://github.com/wp-document-revisions/wp-document-revisions/issues/

= 4.0.0 =

= # Block Editor Support (Experimental) =

* Add experimental block editor (Gutenberg) support for documents, opt-in via `document_use_block_editor` and `document_show_in_rest` filters
* Document sidebar panel with file upload, file type badge, download link, and save protection
* Revision Summary textarea bound to post excerpt via `useEntityProp`
* Lock status indicator using core editor lock with user name display
* Upload success/error Snackbar notices matching WordPress patterns
* Auto-close media modal after upload, matching classic editor ThickBox behavior
* Revision Log sidebar panel fetching document history from REST API with auto-refresh on save
* Hide main editor content canvas for documents (all management via sidebar panels)
* `no_use_block_editor` now respects `document_use_block_editor` filter instead of unconditionally blocking Gutenberg
* Conditionally add `excerpt` to document CPT supports when block editor is enabled
* Pass document REST base slug to editor JS via `wp_add_inline_script`

= # Bug Fixes =

* Fix document upload on WordPress 6.9: handle JSON response from `async-upload.php` (previously expected numeric string)
* Fix duplicate plupload `FileUploaded` bindings via `_uploaderBound` guard flag
* Fix `WPDocumentRevisions` class not accessible outside IIFE scope
* Fix `hasUpload` flag not persisting across ThickBox iframe reopens (mirror to parent window instance)
* Fix `#postdivrich` CSS rule to properly hide editor content area in classic editor

= # Upload Flow Enhancements =

* Add upload error feedback with dismissible error notices
* Add null document ID guard preventing errors on unsaved posts
* Add upload progress indicator during file upload
* Add save-first notice when uploading before saving current changes (localized as full HTML template)
* Remove dead permalink regex that could never match
* Add post-upload confirmation notice with metabox highlight

= # Abilities API =

* Adopt WordPress Abilities API (WP 6.9+) with document management category
* Register 4 executable abilities: check-document-access, get-document-info, get-document-revisions, override-document-lock
* Feature-gated with `function_exists()` for backward compatibility with WP < 6.9

= # Plugin Lifecycle =

* Add `uninstall.php` for clean plugin removal (options, user meta, 13 capabilities across 5 roles)
* Add `deactivation_hook` for proper plugin lifecycle handling
* Add `wpdr_db_version` option for tracking database schema version
* Reconcile license to GPL-3.0-or-later across all files

= # PHP Modernization =

* Remove 144 instances of `array( &$this, 'method' )` pass-by-reference (PHP 8.x deprecation)
* Remove 4 constructor `&$instance` pass-by-reference parameters
* Replace 2 bare `die()` calls with `wp_die()` for proper shutdown hook execution
* Migrate `wp_localize_script()` to `wp_add_inline_script()` with `wp_json_encode()`

= # Code Quality =

* Fix 24 PHPDoc parsing errors across 7 files (double pipes, trailing periods, filter @param syntax)
* Reduce PHPStan baseline from 183 to 154 errors (zero phpDoc.parseError remaining)
* Increase PHPStan parallel workers from 1 to 4

= # REST API =

* Fix REST schema validation: use `WP_REST_Server::EDITABLE` constant, add status 400 to `WP_Error` returns
* Strip WPDR content comment from block editor REST responses
* Populate `document_attachment_id` meta from content in REST edit context
* Sync meta to content on REST document save

= # Testing =

* Add 5 Playwright E2E tests for upload flow enhancements
* Add WP 6.4 and 5.9 to PHPUnit extended CI matrix
* 370 Jest tests passing

= # Developer Improvements =

* Install 6 WordPress agent skills for Copilot (plugin dev, blocks, REST API, abilities, PHPStan, plugin directory)
* Add comprehensive block editor documentation (`docs/block-editor.md`)
* Update `docs/filters.md` with `document_use_block_editor` filter reference
* Add block editor support to features list

**Full Changelog**: https://github.com/wp-document-revisions/wp-document-revisions/compare/v3.9.0...v4.0.0

= 3.9.0 =

= # Modernization =

* Modernize Gutenberg blocks to block.json (API v3), JSX edit components, and `@wordpress/scripts` build pipeline
* Add PHP type declarations (parameter and return types) to all methods across 8 source files
* Add PHPStan static analysis at level 5 with `szepeviktor/phpstan-wordpress`
* Raise minimum PHP version to 7.4; add `Requires PHP: 7.4` to plugin headers
* Add `"engines": { "node": ">=18" }` to `package.json`
* Remove jQuery dependency from all JavaScript files
* Modernize JavaScript to ES6+ (const/let, arrow functions, template literals)
* Extract large PHP classes into traits for maintainability (4 core traits, 3 admin traits)

= # Testing & CI =

* Add E2E tests with Playwright and `@wordpress/env`
* Add Axe accessibility (WCAG 2.1 AA) E2E tests for blocks and admin pages
* Add comprehensive front-end JavaScript test suite with Jest
* Upgrade npm dependencies: Jest 30, `@wordpress/scripts` 31, `@testing-library/jest-dom` 6.9
* Multi-stage CI pipeline with caching, reduced PR matrix, and extended push-to-main matrix
* Drop PHP 7.2/7.4 and legacy PHPUnit 6 from CI; drop WP 4.9 and Node 18 testing
* Add `npm audit` to CI pipeline

= # REST API =

* Allow POST, PUT, and DELETE methods (not just PUT) when `document_use_block_editor` filter is enabled; all write methods require valid nonce

= # Developer improvements =

* Modernize devcontainer: PHP 8.3, MariaDB 10.11, WordPress 6.8, auto-install WordPress and activate plugin
* Add GitHub CLI, PHPStan, and Copilot to devcontainer/Codespaces extensions
* Upgrade Copilot setup steps: PHP 8.3, Node.js 20, block build
* Fix bugs, harden security, modernize config and code
* Optimize performance: reduce database queries and regex operations

**Full Changelog**: https://github.com/wp-document-revisions/wp-document-revisions/compare/v3.8.1...v3.9.0

= 3.8.1 =

For complete changelog, see [GitHub](https://wp-document-revisions.github.io/wp-document-revisions/changelog/)

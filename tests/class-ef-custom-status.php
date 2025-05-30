<?php
/**
 * Test class for Edit Flow Support.
 *
 * @since 3.6.1
 * @package WP_Document_Revisions
 */

/**
 * Main Edit Flow Support class definition.
 *
 * Contains only the data to support the test execution.
 */
class EF_Custom_Status {
	/**
	 * Create a sub-object.
	 *
	 * @var $custom_status object (class)
	 */
	public $custom_status = null;

	// phpcs:ignore
	const taxonomy_key = 'post_status';

	/**
	 * EF Parameter setup.
	 *
	 * @var $module object
	 */
	public $module = null;

	/**
	 * Initiates an instance of the class and adds hooks.
	 *
	 * @since 3.6.1
	 */
	public function __construct() {
		$options               = new StdClass();
		$options->post_types   = array(
			'document' => 'on',
		);
		$this->module          = new StdClass();
		$this->module->options = $options;
	}

	/**
	 * Identifies if the function is enabled.
	 *
	 * @param string $funct function to be called.
	 * @return bool
	 * @since 3.6.1
	 */
	public function module_enabled( $funct ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
		// funct is enabled.
		return true;
	}
}

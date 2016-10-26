<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$args = array(
    'post_type' => 'post',
    'posts_per_page' => -1
);

$data = Timber::get_context();
$data['posts'] = Timber::get_posts($args);
$templates = array( 'page-readingguide.twig' );

Timber::render( $templates, $data );

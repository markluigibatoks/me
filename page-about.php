<?php 
/*  Template Name: About Page
    Template Post Type: page
*/
  get_header();

  get_template_part(
    '/partials/page-banner',
    null,
    array(
      'image' => array(
        'src' => get_template_directory_uri() . "/assets/images/about-us/placeholder.svg",
        'alt' => "a place full of trees"
      ),
      'heading' => "Serving the world around us"
    )
  );

  get_template_part("/partials/about-us/section1");
  
  get_footer();
?>
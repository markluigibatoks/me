<?php

function register_testimonial_post_type() {
    register_post_type('testimonial', [
        'labels' => [
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
        ],
        'public' => true,
        'menu_icon' => 'dashicons-testimonial',
        'supports' => ['title'],
        'has_archive' => false,
        'rewrite' => ['slug' => 'my-testimonials'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_testimonial_post_type');
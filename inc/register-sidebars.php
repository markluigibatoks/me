<?php

function register_theme_sidebars() {
    register_sidebar(array(
        'name'          => __('Banner Widget Area', 'kangkonglabs'),
        'id'            => 'banner-widget-area',
        'description'   => __('Widgets here appear in the banner section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="banner-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '',
        'after_title'   => '',
    ));

    register_sidebar(array(
        'name'          => __('Main Widget Area', 'kangkonglabs'),
        'id'            => 'main-widget-area',
        'description'   => __('Widgets here appear in the Main section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="main-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="main-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Middle Widget Area', 'kangkonglabs'),
        'id'            => 'middle-widget-area',
        'description'   => __('Widgets here appear in the middle section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="middle-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="middle-title">',
        'after_title'   => '</h2>',
    ));


    register_sidebar(array(
        'name'          => __('Bottom1 Widget Area', 'kangkonglabs'),
        'id'            => 'bottom1-widget-area',
        'description'   => __('Widgets here appear in the bottom1 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="bottom1-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="bottom1-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Bottom2 Widget Area', 'kangkonglabs'),
        'id'            => 'bottom2-widget-area',
        'description'   => __('Widgets here appear in the bottom2 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="bottom2-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="bottom2-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Bottom3 Widget Area', 'kangkonglabs'),
        'id'            => 'bottom3-widget-area',
        'description'   => __('Widgets here appear in the bottom3 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="bottom3-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="bottom3-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Bottom4 Widget Area', 'kangkonglabs'),
        'id'            => 'bottom4-widget-area',
        'description'   => __('Widgets here appear in the bottom4 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="bottom4-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="bottom4-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer1 Widget Area', 'kangkonglabs'),
        'id'            => 'footer1-widget-area',
        'description'   => __('Widgets here appear in the footer1 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="footer1-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="footer1-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer2 Widget Area', 'kangkonglabs'),
        'id'            => 'footer2-widget-area',
        'description'   => __('Widgets here appear in the footer2 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="footer2-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="footer2-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer3 Widget Area', 'kangkonglabs'),
        'id'            => 'footer3-widget-area',
        'description'   => __('Widgets here appear in the footer3 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="footer3-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="footer3-title">',
        'after_title'   => '</h2>',
    ));


    register_sidebar(array(
        'name'          => __('Footer4 Widget Area', 'kangkonglabs'),
        'id'            => 'footer4-widget-area',
        'description'   => __('Widgets here appear in the footer4 section on the front page.', 'kangkonglabs'),
        'before_widget' => '<div id="%1$s" class="footer4-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="footer4-title">',
        'after_title'   => '</h2>',
    ));
}

add_action('widgets_init', 'register_theme_sidebars');
<?php
    function site_title() {
        return get_bloginfo('name');
    }
    add_shortcode('site_title', 'site_title');
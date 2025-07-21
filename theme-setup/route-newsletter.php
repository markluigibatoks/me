<?php

add_action('rest_api_init', 'newsletterRoutes');

function newsletterRoutes() {
  register_rest_route('/wp/v1/', 'newsletter', array(
    'methods' => 'POST',
    'callback' => 'createNewsletter'
  ));
}

function createNewsletter($data) {

  $email = strtolower(trim(sanitize_email($data['email'] ?? '')));

  if(!is_email($email)) {
    return new WP_Error('incorrect_email', 'Incorrect Email', ['status' => 400]);
  }

  if (empty($email)) {
    return new WP_Error('missing_fields', 'Required fields missing', ['status' => 400]);
  }

  try {
    wp_insert_post(array(
      'post_type' => 'newsletter',
      'post_status' => 'pending',
      'post_title' => $email,
      'meta_input' => array(
        'email' => $email,
      )
    ));

    wp_send_json_success([
      'message' => 'You successfully subscribed to our newsletter!',
    ]);
  } catch(e) {
    wp_send_json_error(['message' => 'Failed to subscribe to newsletter']);
  }
}
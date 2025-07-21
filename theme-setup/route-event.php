<?php

add_action('rest_api_init', 'eventRegistrationRoutes');

function eventRegistrationRoutes() {
  register_rest_route('/wp/v1/', 'event-registration', array(
    'methods' => 'POST',
    'callback' => 'createEventRegistration'
  ));
}

function createEventRegistration($data) {

  $name  = sanitize_text_field($data['full_name'] ?? '');
  $email = strtolower(trim(sanitize_email($data['email'] ?? '')));
  $event_id = intval($data['event_id'] ?? 0);

  $event_title = get_the_title($event_id);

  if (empty($name) || empty($email) || !$event_id) {
    return new WP_Error('missing_fields', 'Required fields missing', ['status' => 400]);
  }

  // Duplicate check: same email and event?
  $existing = new WP_Query([
    'post_type' => 'event_registration',
    'post_status' => 'any',
    'meta_query' => [
        ['key' => 'email', 'value' => $email, 'compare' => '='],
        ['key' => 'event', 'value' => $event_id, 'compare' => '='],
    ],
  ]);

  if ($existing->have_posts()) {
    return new WP_Error('duplicate_registration', 'You have already registered for this event.', ['status' => 409]);
  }

  try {
    wp_insert_post(array(
      'post_type' => 'event_registration',
      'post_status' => 'pending',
      'post_title' => $event_title,
      'meta_input' => array(
        'event' => $data['event_id'],
        'full_name' => $data['full_name'],
        'email' => $data['email'],
      )
    ));

    wp_send_json_success([
      'message' => 'Event Registration submitted successfully',
    ]);
  } catch(e) {
    wp_send_json_error(['message' => 'Failed to register to an event']);
  }
}
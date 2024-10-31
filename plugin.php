<?php

/**
 * Plugin Name: OneDash
 * Description: OneDash plugin integration
 * Version:     1.0.4
 * Author:      OneDash
 * Author URI:  https://onedash.com/
 * Text Domain: OneDash
 * License:     GPLv3 or later
 * OneDash
 * Copyright (C) 2019-2020 Vexpro Technologies Pte Ltd, All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.0 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.
 */

defined('ABSPATH') || exit;

if (!function_exists('onedash_init_player_shortcode')) {

    add_shortcode('onedash', 'onedash_init_player_shortcode');

    function onedash_init_player_shortcode($atts = []) {
        if (!isset($atts['url']) || !$atts['url']) {
            return;
        }

        $parsed = parse_url(html_entity_decode($atts['url']));
        $src = $parsed['scheme'] . '://' . $parsed['host'] . $parsed['path'];

        parse_str($parsed['query'], $params);

        if (!wp_script_is('onedash', 'enqueued')) {
            wp_enqueue_script('onedash', plugins_url('js/sdk-inject.js', __FILE__));
        }

        wp_add_inline_script('onedash', 'window.OneDash = window.OneDash || {}; window.OneDash.init && window.OneDash.init(' . json_encode([
                'src' => $src,
                'config' => $params['config'],
            ]) . ')');

        return '<video id="' . $params['target'] . '"></video>';
    }
}

// OneDash block

if (!function_exists('onedash_init_player_block')) {

    add_action('init', 'onedash_init_player_block');

    function onedash_init_player_block() {
        if (!function_exists('register_block_type')) {
            return;
        }

        // automatically load dependencies and version
        $asset_file = include(plugin_dir_path(__FILE__) . 'lib/js/index.asset.php');

        wp_register_script('onedash-configform', plugins_url('js/config-form.js', __FILE__), $asset_file['dependencies'], $asset_file['version']);

        wp_register_style('onedash-configform-editor', plugins_url('editor.css', __FILE__), array('wp-edit-blocks'), filemtime(plugin_dir_path(__FILE__) . 'editor.css'));

        register_block_type('onedash/configform', array(
            'editor_style' => 'onedash-configform-editor',
            'editor_script' => 'onedash-configform',
            'render_callback' => function ($atts = []) {
                if (!isset($atts['url']) || !$atts['url']) {
                    return;
                }

                $parsed = parse_url(html_entity_decode($atts['url']));
                $src = $parsed['scheme'] . '://' . $parsed['host'] . $parsed['path'];

                parse_str($parsed['query'], $params);

                if (!wp_script_is('onedash', 'enqueued')) {
                    wp_enqueue_script('onedash', plugins_url('js/sdk-inject.js', __FILE__));
                }

                wp_add_inline_script('onedash', 'window.OneDash = window.OneDash || {}; window.OneDash.init && window.OneDash.init(' . json_encode([
                        'src' => $src,
                        'config' => $params['config']
                    ]) . ')');

                ob_start();
                ?>
                <div><?php echo '<video id="' . $params['target'] . '"></video>' ?></div>
                <?php

                return ob_get_clean();
            }
        ));
    }
}

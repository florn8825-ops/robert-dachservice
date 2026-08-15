<?php
/**
 * Site header.
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="rd-skip-link" href="#main-content"><?php esc_html_e('Zum Inhalt springen', 'robert-dachservice'); ?></a>
<header class="rd-header">
    <div class="rd-container">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="rd-logo" aria-label="Robert Dachservice">
            <?php bloginfo('name'); ?>
        </a>
        <nav aria-label="Hauptnavigation">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container' => false,
                'fallback_cb' => false,
            ]);
            ?>
        </nav>
    </div>
</header>

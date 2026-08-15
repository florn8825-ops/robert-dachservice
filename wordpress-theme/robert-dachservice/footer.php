<?php
/**
 * Site footer.
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}
?>
<footer class="rd-footer">
    <div class="rd-container">
        <?php if (is_active_sidebar('footer')) : ?>
            <?php dynamic_sidebar('footer'); ?>
        <?php endif; ?>

        <nav aria-label="Footer">
            <?php
            wp_nav_menu([
                'theme_location' => 'footer-services',
                'container' => false,
                'fallback_cb' => false,
            ]);
            wp_nav_menu([
                'theme_location' => 'footer-company',
                'container' => false,
                'fallback_cb' => false,
            ]);
            wp_nav_menu([
                'theme_location' => 'footer-region',
                'container' => false,
                'fallback_cb' => false,
            ]);
            ?>
        </nav>

        <p>&copy; <?php echo esc_html((string) gmdate('Y')); ?> <?php bloginfo('name'); ?></p>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>

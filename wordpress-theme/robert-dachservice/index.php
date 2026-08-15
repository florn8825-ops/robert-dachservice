<?php
/**
 * Fallback template.
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>
<main id="main-content" class="rd-main">
    <div class="rd-container rd-section">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article <?php post_class(); ?>>
                    <h1><?php the_title(); ?></h1>
                    <?php the_content(); ?>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <h1><?php esc_html_e('Keine Inhalte gefunden.', 'robert-dachservice'); ?></h1>
        <?php endif; ?>
    </div>
</main>
<?php get_footer(); ?>

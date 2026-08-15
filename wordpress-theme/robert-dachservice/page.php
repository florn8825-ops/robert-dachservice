<?php
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }

$slug = get_post_field('post_name', get_the_ID());
$region_slugs = ['dachdecker-koeln','dachdecker-bonn'];
$service_slugs = ['dachreparatur','dachsanierung','dacheindeckung-erneuern','dachdaemmung','flachdach','spenglerarbeiten','neubau-neueindeckung','dachisolierung','flachdachsanierung','dachentwaesserung','tondachziegel','betondachsteine','schiefer','bitumenschindeln','metall-blech','aufsparrendaemmung','zwischensparrendaemmung','untersparrendaemmung','dampfbremse'];
if (in_array($slug,$region_slugs,true) || in_array($slug,$service_slugs,true)) {
    wp_enqueue_style('robert-dachservice-service-region',get_template_directory_uri().'/assets/service-region.css',[],wp_get_theme()->get('Version'));
}
if (in_array($slug,$region_slugs,true)) { require get_template_directory().'/page-region.php'; return; }
if (in_array($slug,$service_slugs,true)) { require get_template_directory().'/page-leistung.php'; return; }
get_header(); ?>
<main id="main-content" class="rd-main"><section class="rd-page-hero rd-section--sand"><div class="rd-container"><div class="rd-breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">Startseite</a><span>›</span><span><?php the_title(); ?></span></div><p class="rd-eyebrow">Robert Dachservice</p><h1><?php the_title(); ?></h1></div></section><div class="rd-container rd-section"><div class="rd-prose"><?php while(have_posts()):the_post();the_content();endwhile; ?></div></div></main><?php get_footer(); ?>

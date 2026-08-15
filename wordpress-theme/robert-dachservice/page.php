<?php
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }
$slug=get_post_field('post_name',get_the_ID());
$region_slugs=['dachdecker-koeln','dachdecker-bonn'];
$service_slugs=['dachreparatur','dachsanierung','dacheindeckung-erneuern','dachdaemmung','flachdach','spenglerarbeiten','neubau-neueindeckung','tondachziegel','betondachsteine','schiefer','bitumenschindeln','metall-blech','bitumen','epdm','pvc','aufsparrendaemmung','zwischensparrendaemmung','untersparrendaemmung','dampfbremse','dachrinnen','fallrohre','dachanschluesse','blechverwahrungen','kehlen','ortgang-first'];
$info_slugs=['dachnotdienst','dachdecker-koeln','dachdecker-bonn','ueber-uns','referenzen','impressum','datenschutz','cookie-einstellungen'];
$article_slugs=['dacheindeckung-erneuern-zeitpunkt','dacheindeckung-oder-dachsanierung','undichtes-dach','dachziegel-beschaedigt','tondachziegel-oder-betondachsteine','schiefer-dacheindeckung','flachdach-bitumen-epdm-pvc','welche-dachdaemmung','sturmschaden-am-dach','dachnotdienst-wann-noetig'];
if(in_array($slug,$region_slugs,true)||in_array($slug,$service_slugs,true)||in_array($slug,$info_slugs,true)||in_array($slug,$article_slugs,true))wp_enqueue_style('robert-dachservice-service-region',get_template_directory_uri().'/assets/service-region.css',[],wp_get_theme()->get('Version'));
if(in_array($slug,$region_slugs,true)){require get_template_directory().'/page-region.php';return;}
if(in_array($slug,$service_slugs,true)){require get_template_directory().'/page-leistung.php';return;}
if(in_array($slug,$info_slugs,true)){require get_template_directory().'/page-info.php';return;}
if(in_array($slug,$article_slugs,true)){require get_template_directory().'/page-ratgeber.php';return;}
get_header(); ?>
<main id="main-content" class="rd-main"><section class="rd-page-hero rd-section--sand"><div class="rd-container"><div class="rd-breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">Startseite</a><span>›</span><span><?php the_title(); ?></span></div><p class="rd-eyebrow">Robert Dachservice</p><h1><?php the_title(); ?></h1></div></section><div class="rd-container rd-section"><div class="rd-prose"><?php while(have_posts()):the_post();the_content();endwhile; ?></div></div></main><?php get_footer(); ?>

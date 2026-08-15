<?php
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }
function robert_dachservice_setup(): void {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
    register_nav_menus(['primary'=>__('Primary Menu','robert-dachservice'),'footer-services'=>__('Footer Services','robert-dachservice'),'footer-company'=>__('Footer Company','robert-dachservice'),'footer-region'=>__('Footer Region','robert-dachservice')]);
}
add_action('after_setup_theme','robert_dachservice_setup');
function robert_dachservice_assets(): void {
    $uri=get_template_directory_uri(); $version=wp_get_theme()->get('Version');
    wp_enqueue_style('robert-dachservice-style',$uri.'/style.css',[], $version);
    wp_enqueue_script('robert-dachservice-header',$uri.'/assets/header.js',[], $version,true);
}
add_action('wp_enqueue_scripts','robert_dachservice_assets');
function robert_dachservice_widgets(): void { register_sidebar(['name'=>__('Footer','robert-dachservice'),'id'=>'footer','description'=>__('Optional footer widget area.','robert-dachservice'),'before_widget'=>'<div class="rd-widget">','after_widget'=>'</div>','before_title'=>'<h3>','after_title'=>'</h3>']); }
add_action('widgets_init','robert_dachservice_widgets');

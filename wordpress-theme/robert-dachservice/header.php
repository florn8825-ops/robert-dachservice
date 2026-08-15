<?php
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }
$phone_primary = '+49 1573 3645077';
$phone_href = 'tel:+4915733645077';
$services_url = home_url('/leistungen/dacheindeckung-erneuern/');
$kontakt_url = home_url('/kontakt/');
$logo_url = robert_dachservice_asset_url('robert-logo.png');
$service_groups = [
    'Dach' => [['Dacheindeckung erneuern','/leistungen/dacheindeckung-erneuern/'],['Dachsanierung','/leistungen/dachsanierung/'],['Dachreparatur','/leistungen/dachreparatur/']],
    'Dämmung' => [['Dachdämmung','/leistungen/dachdaemmung/'],['Dachisolierung','/leistungen/dachisolierung/']],
    'Flachdach' => [['Flachdach','/leistungen/flachdach/'],['Flachdachsanierung','/leistungen/flachdachsanierung/']],
    'Spengler' => [['Spenglerarbeiten','/leistungen/spenglerarbeiten/'],['Dachentwässerung','/leistungen/dachentwaesserung/']],
];
$main_links = [['Dachnotdienst','/dachnotdienst/'],['Über uns','/ueber-uns/'],['Referenzen','/referenzen/'],['Ratgeber','/ratgeber/'],['Kontakt','/kontakt/']];
?><!doctype html>
<html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo('charset'); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><?php wp_head(); ?></head>
<body <?php body_class(); ?>><?php wp_body_open(); ?><a class="rd-skip-link" href="#main-content">Zum Inhalt springen</a>
<header class="rd-header">
<div class="rd-trustbar"><div class="rd-container rd-trustbar__inner"><div class="rd-trustbar__left"><span class="rd-live-dot"></span><span>Dachdeckermeisterbetrieb</span><span class="rd-separator">/</span><span>Köln &amp; Bonn</span></div><div class="rd-trustbar__right"><span>◷ 24/7 Dachnotdienst</span><span class="rd-separator"></span><a href="<?php echo esc_url($phone_href); ?>">☎ <?php echo esc_html($phone_primary); ?></a></div></div></div>
<div class="rd-header__main"><div class="rd-container rd-header__inner">
<a class="rd-logo" href="<?php echo esc_url(home_url('/')); ?>" aria-label="Robert Dachservice Startseite"><span class="rd-logo__mark"><?php if($logo_url): ?><img src="<?php echo esc_url($logo_url); ?>" alt="Robert Dachservice Logo"><?php endif; ?></span><span class="rd-logo__text"><strong>Robert</strong><small>Dachservice</small></span></a>
<nav class="rd-desktop-nav" aria-label="Hauptnavigation"><div class="rd-nav-dropdown"><a class="rd-nav-link" href="<?php echo esc_url($services_url); ?>">Leistungen <span class="rd-chevron">⌄</span></a><div class="rd-mega-menu"><div class="rd-mega-head"><div><div class="rd-eyebrow"><span></span> Unsere Leistungen</div><h2>Facharbeiten rund ums Dach</h2><p>Präzise Handwerksarbeit, hochwertige Materialien und zuverlässige Lösungen für Ihr Dach.</p></div><a class="rd-mega-all" href="<?php echo esc_url($services_url); ?>">Alle Leistungen ↗</a></div><div class="rd-mega-grid"><?php $i=1; foreach($service_groups as $heading=>$items): ?><div class="rd-mega-column"><div class="rd-mega-column__title"><span><?php echo esc_html($heading); ?></span><b>0<?php echo $i; ?></b></div><ul><?php foreach($items as $item): ?><li><a href="<?php echo esc_url(home_url($item[1])); ?>"><?php echo esc_html($item[0]); ?><span>↗</span></a></li><?php endforeach; ?></ul></div><?php $i++; endforeach; ?></div><div class="rd-mega-trust"><span>✓ Meisterqualität</span><i></i><span>◷ 24/7 Notdienst</span><i></i><span>Köln &amp; Bonn</span></div></div></div><?php foreach($main_links as $link): ?><a class="rd-nav-link" href="<?php echo esc_url(home_url($link[1])); ?>"><?php echo esc_html($link[0]); ?></a><?php endforeach; ?></nav>
<div class="rd-header-actions"><a class="rd-phone-button" href="<?php echo esc_url($phone_href); ?>">☎ Anrufen</a><a class="rd-cta-button" href="<?php echo esc_url($kontakt_url); ?>">Angebot anfordern ↗</a></div><button class="rd-mobile-toggle" type="button" aria-expanded="false" aria-controls="rd-mobile-nav" aria-label="Menü öffnen"><span></span><span></span><span></span></button>
</div>
<div id="rd-mobile-nav" class="rd-mobile-nav" hidden><nav class="rd-container" aria-label="Mobile Navigation"><div class="rd-mobile-intro"><div class="rd-eyebrow"><span></span> Robert Dachservice</div><strong>Qualität, die überdauert.</strong><small>◷ 24/7 Dachnotdienst</small></div><button class="rd-mobile-services-toggle" type="button" aria-expanded="false"><span><b>•</b> Leistungen</span><span class="rd-mobile-chevron">⌄</span></button><div class="rd-mobile-services" hidden><?php foreach($service_groups as $heading=>$items): ?><div><div class="rd-mobile-group-title"><?php echo esc_html($heading); ?></div><?php foreach($items as $item): ?><a href="<?php echo esc_url(home_url($item[1])); ?>"><?php echo esc_html($item[0]); ?><span>↗</span></a><?php endforeach; ?></div><?php endforeach; ?></div><?php foreach($main_links as $link): ?><a class="rd-mobile-link" href="<?php echo esc_url(home_url($link[1])); ?>"><?php echo esc_html($link[0]); ?><span>↗</span></a><?php endforeach; ?><div class="rd-mobile-actions"><a class="rd-cta-button" href="<?php echo esc_url($kontakt_url); ?>">Angebot anfordern ↗</a><a class="rd-phone-button" href="<?php echo esc_url($phone_href); ?>">☎ Jetzt anrufen</a></div><div class="rd-mobile-footer"><span>✓ Meisterqualität</span><span>Köln &amp; Bonn</span></div></nav></div>
</div></header>

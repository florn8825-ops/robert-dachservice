<?php
/** Template Name: Kontakt */
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }
get_header();
$state = isset($_GET['kontakt']) ? sanitize_key(wp_unslash($_GET['kontakt'])) : '';
$phone = '+49 1573 3645077';
$services = ['Dachreparatur','Dachnotdienst','Dacheindeckung erneuern','Dachsanierung','Flachdach','Dachdämmung','Spenglerarbeiten','Neubau / Neueindeckung','Sonstiges'];
?>
<main id="main-content" class="rd-main">
<section class="rd-contact-hero"><div class="rd-container"><p class="rd-eyebrow"><span></span> Kontakt</p><h1>Angebot anfordern</h1><p>Sie benötigen eine Dachreparatur, möchten Ihre Dacheindeckung erneuern oder haben ein anderes Anliegen rund ums Dach? Beschreiben Sie kurz Ihr Vorhaben.</p></div></section>
<div class="rd-container rd-contact-grid">
<section><h2>Ihre Anfrage</h2>
<?php if($state==='gesendet'): ?><div class="rd-form-success">Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.</div><?php elseif($state==='fehler'): ?><div class="rd-form-error">Ihre Anfrage konnte nicht verarbeitet werden. Bitte prüfen Sie die Angaben oder rufen Sie uns an.</div><?php endif; ?>
<form method="post" action="" enctype="multipart/form-data" class="rd-contact-form" novalidate>
<?php wp_nonce_field('rd_contact_submit','rd_contact_nonce'); ?><input type="hidden" name="rd_contact_form" value="1"><input type="text" name="website" tabindex="-1" autocomplete="off" class="rd-honeypot" aria-hidden="true">
<div class="rd-form-row"><label>Vorname<input name="vorname" required maxlength="60" autocomplete="given-name"></label><label>Nachname<input name="nachname" required maxlength="60" autocomplete="family-name"></label></div>
<div class="rd-form-row"><label>Telefon<input name="telefon" type="tel" required maxlength="40" autocomplete="tel"></label><label>E-Mail<input name="email" type="email" required maxlength="255" autocomplete="email"></label></div>
<div class="rd-form-row"><label>PLZ<input name="plz" required maxlength="10" inputmode="numeric" autocomplete="postal-code"></label><label>Ort<input name="ort" required maxlength="80" autocomplete="address-level2"></label></div>
<label>Leistung<select name="leistung" required><option value="">Bitte wählen</option><?php foreach($services as $service): ?><option value="<?php echo esc_attr($service); ?>"><?php echo esc_html($service); ?></option><?php endforeach; ?></select></label>
<label>Beschreibung<textarea name="beschreibung" rows="7" required minlength="10" maxlength="2000" placeholder="Beschreiben Sie kurz Ihr Anliegen, das Gebäude und den gewünschten Zeitraum."></textarea></label>
<label>Fotos hochladen (optional)<input name="fotos[]" type="file" multiple accept="image/jpeg,image/png,image/webp"><small>Bis zu 8 Bilder, jeweils maximal 6 MB. JPG, PNG oder WebP.</small></label>
<label class="rd-check"><input name="datenschutz" type="checkbox" required><span>Ich habe die <a href="<?php echo esc_url(home_url('/datenschutz/')); ?>">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.</span></label>
<button class="rd-submit" type="submit">Anfrage senden <span>↗</span></button><p class="rd-form-note">Für dringende Fälle erreichen Sie uns telefonisch unter <?php echo esc_html($phone); ?>.</p>
</form></section>
<aside class="rd-contact-aside"><div class="rd-contact-card"><p class="rd-eyebrow"><span></span> Direktkontakt</p><h2>Wir sprechen Ihr Vorhaben persönlich durch.</h2><p>Fotos und eine kurze Beschreibung helfen bei der ersten Einschätzung.</p><a href="tel:+4915733645077">☎ <?php echo esc_html($phone); ?></a><span>24/7 Dachnotdienst</span></div></aside>
</div></main>
<?php get_footer(); ?>

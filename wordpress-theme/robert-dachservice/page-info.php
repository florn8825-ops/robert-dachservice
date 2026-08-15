<?php
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }

$slug = get_post_field('post_name', get_the_ID());
$phone = '+49 1573 3645077';
$pages = [
'dachnotdienst'=>['eyebrow'=>'Notdienst','title'=>'24/7 Dachnotdienst in Köln & Bonn','intro'=>'Ein plötzlich entstandener Dachschaden kann schnell zu einem größeren Problem werden. Bei akuten Undichtigkeiten, Sturmschäden oder beschädigten Dachbereichen ist schnelles Handeln wichtig. Robert Dachservice ist 24/7 für akute Dachschäden erreichbar.','image'=>'Professionelles Dachdecker-Foto.jpeg','sections'=>[
['h2'=>'Wann ist ein Dachnotdienst sinnvoll?','items'=>['nach einem Sturm','bei plötzlich auftretenden Undichtigkeiten','bei beschädigten oder verschobenen Dachziegeln','bei sichtbaren Schäden an der Dachfläche','bei dringendem Wassereintritt']],
['h2'=>'Schnell Kontakt aufnehmen','p'=>'Bei einem akuten Dachschaden erreichen Sie uns rund um die Uhr telefonisch.'],
]],
'dachdecker-koeln'=>['eyebrow'=>'Region','title'=>'Dachdecker in Köln','intro'=>'Robert Dachservice ist Ihr Ansprechpartner für Dacharbeiten in Köln und Umgebung – von kleinen Reparaturen und akuten Dachschäden bis zur Erneuerung einer bestehenden Dacheindeckung.','image'=>'Professionelles Dachdecker-Foto.jpeg','sections'=>[
['h2'=>'Dacharbeiten in Köln','p'=>'Ob einzelne beschädigte Dachziegel, eine undichte Stelle, eine neue Dacheindeckung oder umfassendere Dacharbeiten: Der notwendige Leistungsumfang hängt immer vom Zustand und Aufbau des jeweiligen Daches ab.'],
['h2'=>'Dacheindeckung in Köln erneuern','p'=>'Eine neue Dacheindeckung muss nicht automatisch eine komplette Dachsanierung bedeuten. Wir prüfen, welche Arbeiten tatsächlich erforderlich sind und welche Materialien zum Gebäude passen.'],
['h2'=>'Dachreparatur in Köln','p'=>'Auch kleinere Reparaturen können angefragt werden.'],
['h2'=>'24/7 Dachnotdienst Köln','p'=>'Bei akuten Dachschäden ist Robert Dachservice rund um die Uhr telefonisch erreichbar.'],
]],
'dachdecker-bonn'=>['eyebrow'=>'Region','title'=>'Dachdecker in Bonn','intro'=>'In Bonn treffen unterschiedliche Gebäudetypen aufeinander: Altbauten mit geneigten Ziegeldächern, Nachkriegsbauten, moderne Wohnhäuser und gewerbliche Objekte mit Flachdachanteil. Entsprechend unterschiedlich fallen die notwendigen Dacharbeiten aus.','image'=>'Professionelles Dachdecker-Foto.jpeg','sections'=>[
['h2'=>'Dachreparatur in Bonn','p'=>'Verschobene Dachziegel, eine feuchte Stelle unter der Dachschräge oder ein kleiner Sturmschaden: Solche Fälle lassen sich häufig gezielt beheben. Wichtig ist, die Ursache zu klären, bevor repariert wird.'],
['h2'=>'Dacheindeckung in Bonn erneuern','p'=>'Bei älteren Bonner Wohnhäusern steht oft die Erneuerung der Dachdeckung im Vordergrund. Ob Tondachziegel, Betondachsteine, Schiefer, Bitumenschindeln oder Metall passen, hängt von Dachform und Gebäude ab.'],
['h2'=>'Dachsanierung in Bonn','p'=>'Sind mehrere Bauteile betroffen – etwa Lattung, Unterdeckung oder Dämmung – kann eine umfassendere Sanierung erforderlich sein.'],
['h2'=>'Flachdach und Dachdämmung in Bonn','p'=>'Flachdächer an Anbauten, Garagen und Gewerbeobjekten benötigen eine funktionierende Abdichtung und Entwässerung. Bei Dämmarbeiten entscheidet der vorhandene Dachaufbau darüber, welche Dämmvariante technisch sinnvoll ist.'],
['h2'=>'Spenglerarbeiten in Bonn','p'=>'Dachrinnen, Fallrohre, Kehlen und Anschlussbleche sind für die Wasserführung entscheidend.'],
['h2'=>'Dachnotdienst Bonn','p'=>'Bei akuten Dachschäden in Bonn und Umgebung ist Robert Dachservice rund um die Uhr telefonisch erreichbar.'],
]],
'ueber-uns'=>['eyebrow'=>'Über uns','title'=>'Robert Dachservice – Dachdeckermeisterbetrieb','intro'=>'Ein Dach muss nicht nur gut aussehen. Es muss zuverlässig vor Witterung schützen, technisch funktionieren und zum Gebäude passen.','image'=>'Professionelles Dachdecker-Foto.jpeg','sections'=>[
['h2'=>'Unser Anspruch','p'=>'Als Dachdeckermeisterbetrieb legen wir Wert auf eine fachgerechte Beurteilung des vorhandenen Zustands und auf Lösungen, die zum tatsächlichen Bedarf passen.'],
['h2'=>'Kleine Arbeiten sind genauso wichtig','p'=>'Nicht jeder Kunde benötigt eine komplette Dachsanierung. Auch einzelne Schäden, Undichtigkeiten oder beschädigte Dachziegel verdienen eine fachgerechte Lösung.'],
]],
'referenzen'=>['eyebrow'=>'Referenzen','title'=>'Referenzen','intro'=>'Hier entsteht eine Auswahl realisierter Dacharbeiten von Robert Dachservice.','image'=>'Professionelles Dachdecker-Foto.jpeg','sections'=>[['h2'=>'Projektdokumentation folgt','p'=>'Sobald Fotos realisierter Dacharbeiten vorliegen, werden sie an dieser Stelle veröffentlicht.']]],
'impressum'=>['title'=>'Impressum','intro'=>'Angaben gemäß § 5 DDG.','sections'=>[
['h2'=>'Anbieter','p'=>'Robert Dachservice – Dachdeckermeisterbetrieb\n[ANSCHRIFT EINFÜGEN]\nTelefon: +49 1573 3645077\nE-Mail: [E-MAIL EINFÜGEN]'],
['h2'=>'Vertreten durch','p'=>'[VERANTWORTLICHE PERSON EINFÜGEN]'],
['h2'=>'Weitere Angaben','p'=>'Umsatzsteuer-Identifikationsnummer: [UST-IDNR. EINFÜGEN]\nZuständige Handwerkskammer: [HANDWERKSKAMMER EINFÜGEN]\nBerufsbezeichnung: [BERUFSBEZEICHNUNG UND VERLEIHENDER STAAT EINFÜGEN]\nVerantwortlich für den Inhalt nach § 18 Abs. 2 MStV: [VERANTWORTLICHE PERSON EINFÜGEN]'],
['h2'=>'Streitbeilegung','p'=>'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'],
]],
'datenschutz'=>['title'=>'Datenschutzerklärung','intro'=>'Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir über die Verarbeitung von Daten auf dieser Website.','sections'=>[
['h2'=>'Verantwortliche Stelle','p'=>'Robert Dachservice – Dachdeckermeisterbetrieb\n[ANSCHRIFT EINFÜGEN]\n[E-MAIL EINFÜGEN]\n[VERANTWORTLICHE PERSON EINFÜGEN]'],
['h2'=>'Kontaktaufnahme','p'=>'Wenn Sie uns über das Anfrageformular oder telefonisch kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.'],
['h2'=>'Ihre Rechte','items'=>['Auskunft über die verarbeiteten Daten','Berichtigung unrichtiger Daten','Löschung oder Einschränkung der Verarbeitung','Datenübertragbarkeit','Widerspruch gegen die Verarbeitung','Beschwerde bei einer Aufsichtsbehörde']],
['h2'=>'Hosting und Server-Logfiles','p'=>'Beim Aufruf dieser Website werden technisch notwendige Daten verarbeitet, um die Auslieferung der Seite zu ermöglichen.\n[HOSTING-ANBIETER EINFÜGEN]'],
]],
'cookie-einstellungen'=>['title'=>'Cookie-Einstellungen','intro'=>'Diese Website verwendet technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen.','sections'=>[
['h2'=>'Eingesetzte Kategorien','items'=>['Technisch notwendige Cookies – erforderlich für den Betrieb der Website','Statistik – derzeit nicht aktiv','Marketing – derzeit nicht aktiv']],
['h2'=>'Änderungen Ihrer Auswahl','p'=>'Sollten künftig weitere Cookies eingesetzt werden, können Sie Ihre Auswahl an dieser Stelle anpassen. Zusätzlich können Sie Cookies jederzeit über die Einstellungen Ihres Browsers löschen oder blockieren.\n[COOKIE-TOOL / ANBIETER EINFÜGEN, FALLS EINGESETZT]'],
]],
];
$data=$pages[$slug]??null;
if(!$data){get_template_part('index');return;}
get_header();
$image_url='';
if(!empty($data['image'])){ $candidate=get_template_directory().'/assets/'.$data['image']; if(file_exists($candidate))$image_url=get_template_directory_uri().'/assets/'.rawurlencode($data['image']); }
?>
<main id="main-content" class="rd-main rd-info-page">
<section class="rd-page-hero rd-section--sand"><div class="rd-container"><div class="rd-breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">Startseite</a><span>›</span><span><?php echo esc_html($data['title']); ?></span></div><?php if(!empty($data['eyebrow'])):?><p class="rd-eyebrow"><?php echo esc_html($data['eyebrow']); ?></p><?php endif;?><h1><?php echo esc_html($data['title']); ?></h1><p class="rd-lead"><?php echo esc_html($data['intro']); ?></p><div class="rd-page-actions"><a class="rd-cta-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Angebot anfordern ↗</a><a class="rd-phone-button" href="tel:+4915733645077">☎ Jetzt anrufen</a></div></div></section>
<div class="rd-container rd-info-layout"><?php if($image_url):?><figure class="rd-service-image"><img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($data['title']); ?>" loading="eager"></figure><?php endif;?><div class="rd-service-content"><?php foreach($data['sections'] as $section):?><section class="rd-content-section"><h2><?php echo esc_html($section['h2']);?></h2><?php if(isset($section['p'])):?><div class="rd-text-block"><?php echo nl2br(esc_html($section['p']));?></div><?php endif;?><?php if(isset($section['items'])):?><ul class="rd-list"><?php foreach($section['items'] as $item):?><li><?php echo esc_html($item);?></li><?php endforeach;?></ul><?php endif;?></section><?php endforeach;?><div class="rd-service-cta"><strong>Fragen zu Ihrem Dach?</strong><a class="rd-cta-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Anfrage senden ↗</a></div></div></div></main>
<?php get_footer(); ?>
<?php
/**
 * Homepage template based on the existing Lovable homepage.
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

$site_url = home_url('/');
$phone = '+49 1573 3645077';
$phone_href = 'tel:+4915733645077';
$hero_image = 'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/Professionelles%20Dachdecker-Foto.jpeg';
$materials = [
    ['title' => 'Tondachziegel', 'text' => 'Natürliche Optik und vielseitige Gestaltungsmöglichkeiten für klassische und moderne Dächer.', 'url' => '/leistungen/dacheindeckung-erneuern/tondachziegel', 'image' => 'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/tondachziegel.png'],
    ['title' => 'Betondachsteine', 'text' => 'Robuste und vielseitige Dachsteine mit unterschiedlichen Formen und Oberflächen.', 'url' => '/leistungen/dacheindeckung-erneuern/betondachsteine', 'image' => 'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/Betondachstein.jpg'],
    ['title' => 'Schiefer', 'text' => 'Hochwertige, charaktervolle Dacheindeckung mit traditioneller Optik und vielfältigen Gestaltungsmöglichkeiten.', 'url' => '/leistungen/dacheindeckung-erneuern/schiefer', 'image' => 'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/schiefer.jpg'],
    ['title' => 'Bitumenschindeln', 'text' => 'Leichte und flexible Lösung für geeignete Dachformen und Einsatzbereiche.', 'url' => '/leistungen/dacheindeckung-erneuern/bitumenschindeln', 'image' => 'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/bitumenschindeln.jpg'],
    ['title' => 'Metall / Blech', 'text' => 'Moderne, langlebige und leichte Lösung für unterschiedliche Gebäude und Dachkonzepte.', 'url' => '/leistungen/dacheindeckung-erneuern/metall-blech', 'image' => 'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/metall-blech-dach.jpg'],
];
$services = [
    ['title' => 'Dachreparatur', 'text' => 'Kleine und gezielte Reparaturen bei beschädigten Dachziegeln, Undichtigkeiten, Sturmschäden und weiteren lokalen Schäden.', 'url' => '/leistungen/dachreparatur'],
    ['title' => 'Dacheindeckung erneuern', 'text' => 'Erneuerung der bestehenden Dachdeckung mit passenden Materialien – unter anderem Tondachziegel, Betondachsteine, Schiefer, Bitumenschindeln oder Metall.', 'url' => '/leistungen/dacheindeckung-erneuern'],
    ['title' => 'Dachsanierung', 'text' => 'Wenn nicht nur die Dachdeckung, sondern weitere Bauteile des Dachaufbaus betroffen sind, kann eine umfassendere Sanierung erforderlich sein.', 'url' => '/leistungen/dachsanierung'],
    ['title' => 'Flachdach', 'text' => 'Arbeiten an Flachdächern – von Abdichtung und Reparatur bis zur Erneuerung, unter anderem mit Bitumen, EPDM oder PVC.', 'url' => '/leistungen/flachdach'],
    ['title' => 'Dachdämmung', 'text' => 'Dämm- und Abdichtungslösungen für unterschiedliche Dachaufbauten – fachgerecht geplant und auf den Bestand abgestimmt.', 'url' => '/leistungen/dachdaemmung'],
    ['title' => 'Spenglerarbeiten', 'text' => 'Dachrinnen, Fallrohre, Dachanschlüsse, Kehlen und weitere Blechdetails für einen zuverlässigen Schutz vor Witterung und Wasser.', 'url' => '/leistungen/spenglerarbeiten'],
];
$why_us = [
    ['title' => 'Meisterbetrieb', 'text' => 'Fachwissen und Erfahrung aus dem Dachdeckerhandwerk.'],
    ['title' => 'Individuelle Lösung', 'text' => 'Wir betrachten den konkreten Zustand Ihres Daches statt unnötige Arbeiten vorzuschlagen.'],
    ['title' => 'Klein bis groß', 'text' => 'Von der kleinen Reparatur bis zur umfangreichen Dacherneuerung.'],
    ['title' => 'Saubere Kommunikation', 'text' => 'Klare Einschätzung und nachvollziehbarer Leistungsumfang.'],
    ['title' => 'Regional', 'text' => 'Für Köln, Bonn und die umliegende Region.'],
];
$process = [
    ['n' => '01', 'title' => 'Anfrage', 'text' => 'Sie schildern uns Ihr Anliegen telefonisch oder über das Anfrageformular.'],
    ['n' => '02', 'title' => 'Einschätzung', 'text' => 'Wir besprechen den Schaden oder Ihr Vorhaben und klären die nächsten Schritte.'],
    ['n' => '03', 'title' => 'Besichtigung', 'text' => 'Wenn erforderlich, wird der Zustand des Daches vor Ort genauer geprüft.'],
    ['n' => '04', 'title' => 'Lösung', 'text' => 'Der notwendige Leistungsumfang wird auf Basis des tatsächlichen Zustands abgestimmt.'],
    ['n' => '05', 'title' => 'Ausführung', 'text' => 'Die vereinbarten Dacharbeiten werden fachgerecht umgesetzt.'],
];
$faq = [
    ['q' => 'Muss bei einer alten Dacheindeckung das komplette Dach erneuert werden?', 'a' => 'Nein, nicht automatisch. Ob weitere Bauteile des Daches erneuert werden müssen, hängt vom tatsächlichen Zustand des Dachaufbaus ab.'],
    ['q' => 'Übernimmt Robert Dachservice auch kleine Dachreparaturen?', 'a' => 'Ja. Auch kleinere Schäden wie beschädigte Dachziegel, lokale Undichtigkeiten oder bestimmte Sturmschäden können angefragt werden.'],
    ['q' => 'Welche Materialien stehen für eine neue Dacheindeckung zur Verfügung?', 'a' => 'Je nach Dach und baulichen Voraussetzungen kommen unter anderem Tondachziegel, Betondachsteine, Schiefer, Bitumenschindeln oder Metall beziehungsweise Blech infrage.'],
    ['q' => 'Wann sollte eine Dacheindeckung erneuert werden?', 'a' => 'Das hängt vom Zustand und Alter der vorhandenen Dachdeckung sowie von wiederkehrenden Schäden und der allgemeinen Funktion des Daches ab. Eine individuelle Beurteilung ist sinnvoll.'],
    ['q' => 'Bietet Robert Dachservice einen Dachnotdienst an?', 'a' => 'Ja. Der Dachnotdienst ist 24/7 erreichbar. Bei akuten Dachschäden können Sie telefonisch Kontakt aufnehmen.'],
    ['q' => 'In welchem Gebiet ist Robert Dachservice tätig?', 'a' => 'Der Schwerpunkt liegt auf Köln, Bonn und Umgebung.'],
];

get_header();
?>
<main id="main-content" class="rd-main">
    <section class="rd-hero">
        <div class="rd-container rd-hero__grid">
            <div>
                <div class="rd-badge"><span></span>Dachdeckermeisterbetrieb · Köln, Bonn und Umgebung</div>
                <h1>Ihr Dach.<strong>Unsere Verantwortung.</strong></h1>
                <p class="rd-lead">Fachgerechte Dacharbeiten in Köln, Bonn und Umgebung – von der schnellen Reparatur bis zur kompletten Erneuerung Ihrer Dacheindeckung.</p>
                <div class="rd-actions">
                    <a class="rd-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Kostenlos Anfrage stellen</a>
                    <a class="rd-button rd-button--outline" href="<?php echo esc_url($phone_href); ?>">☎ Jetzt anrufen</a>
                </div>
                <div class="rd-hero-stats">
                    <div><b>24/7</b><span>Dachnotdienst</span></div>
                    <div><b>Köln</b><span>&amp; Bonn</span></div>
                    <div><b>Meister</b><span>Fachbetrieb</span></div>
                    <div><b>Direkt</b><span>erreichbar</span></div>
                </div>
            </div>
            <div class="rd-hero-image">
                <img src="<?php echo esc_url($hero_image); ?>" alt="Professionelles Dachdecker-Foto: Echtes Baustellenbild mit Gerüst und LKW" fetchpriority="high">
                <div class="rd-image-card"><b>Fachgerechte Dacharbeiten</b><span>Persönliche Beratung und individuelle Lösungen.</span></div>
            </div>
        </div>
    </section>

    <section class="rd-trust"><div class="rd-container rd-trust__grid">
        <div><b>✓ Meisterbetrieb</b><span>Fachkompetenz vom Profi</span></div>
        <div><b>◷ 24/7 Notdienst</b><span>Bei akuten Dachschäden</span></div>
        <div><b>⌖ Regional</b><span>Köln, Bonn &amp; Umgebung</span></div>
        <div><b>★ Persönlich</b><span>Direkter Ansprechpartner</span></div>
    </div></section>

    <section class="rd-section"><div class="rd-container rd-intro">
        <div><p class="rd-eyebrow">Dacharbeiten mit System</p><h2>Nicht jede Dachreparatur braucht ein neues Dach.</h2></div>
        <div><p class="rd-large">Ob eine einzelne Dachziegel beschädigt ist, Wasser eindringt oder die bestehende Dacheindeckung nach vielen Jahren erneuert werden soll: Nicht jeder Schaden und nicht jedes alte Dach benötigt die gleiche Lösung.</p><p>Wir betrachten den vorhandenen Zustand und besprechen mit Ihnen, welche Arbeiten tatsächlich erforderlich sind. So wird der Leistungsumfang gezielt auf Ihr Dach abgestimmt – von der kleinen Reparatur bis zur umfangreicheren Dachsanierung.</p><a class="rd-text-link" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Persönliche Einschätzung anfragen →</a></div>
    </div></section>

    <section class="rd-section rd-section--sand"><div class="rd-container"><p class="rd-eyebrow">Unsere Leistungen</p><h2>Alles rund ums Dach.<strong>Fachgerecht aus einer Hand.</strong></h2><p class="rd-large rd-max">Von der schnellen Reparatur bis zur neuen Dacheindeckung: Robert Dachservice bietet fachgerechte Dacharbeiten für private und gewerbliche Immobilien in Köln, Bonn und Umgebung.</p>
        <div class="rd-service-grid"><?php foreach ($services as $i => $service) : ?><a class="rd-card" href="<?php echo esc_url(home_url($service['url'])); ?>"><small><?php echo esc_html(str_pad((string) ($i + 1), 2, '0', STR_PAD_LEFT)); ?></small><span class="rd-icon">◆</span><h3><?php echo esc_html($service['title']); ?></h3><p><?php echo esc_html($service['text']); ?></p><b>Leistung ansehen →</b></a><?php endforeach; ?></div>
    </div></section>

    <section class="rd-section"><div class="rd-container rd-two-col"><div class="rd-feature-image"><img src="https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/Dacheindeckung.jpeg" alt="Dacheindeckung" loading="lazy"></div><div><p class="rd-eyebrow">Schwerpunkt</p><h2>Dacheindeckung erneuern –<strong>nicht automatisch das komplette Dach.</strong></h2><p>Eine alte Dacheindeckung bedeutet nicht automatisch, dass das gesamte Dach neu aufgebaut werden muss.</p><p>In vielen Fällen steht zunächst die Erneuerung der äußeren Dachdeckung im Mittelpunkt. Welche zusätzlichen Arbeiten notwendig sind, hängt vom Zustand der darunterliegenden Bauteile ab.</p><p>Deshalb betrachten wir unter anderem Dachlattung, Unterdeckung, Dämmung, Anschlüsse und – soweit erforderlich – die Holzkonstruktion.</p><a class="rd-button" href="<?php echo esc_url(home_url('/leistungen/dacheindeckung-erneuern/')); ?>">Dacheindeckung erneuern</a></div></div></section>

    <section class="rd-section rd-section--sand"><div class="rd-container"><p class="rd-eyebrow">Materialien</p><h2>Welche Dacheindeckung passt zu Ihrem Gebäude?</h2><p class="rd-large rd-max">Für die Erneuerung einer Dacheindeckung stehen verschiedene Materialien zur Verfügung. Welche Variante sinnvoll ist, hängt unter anderem von Dachform, Gebäude, Gestaltung, Unterkonstruktion und Ihren persönlichen Anforderungen ab.</p><div class="rd-material-grid"><?php foreach ($materials as $material) : ?><a class="rd-material" href="<?php echo esc_url(home_url($material['url'])); ?>"><img src="<?php echo esc_url($material['image']); ?>" alt="<?php echo esc_attr($material['title']); ?>" loading="lazy"><div><h3><?php echo esc_html($material['title']); ?></h3><p><?php echo esc_html($material['text']); ?></p><b>Entdecken →</b></div></a><?php endforeach; ?></div></div></section>

    <section class="rd-emergency"><div class="rd-container rd-two-col rd-two-col--center"><div><p class="rd-eyebrow">24/7 erreichbar</p><h2>Akuter Dachschaden?<strong>Wir sind für Sie erreichbar.</strong></h2><p>Nach einem Sturm, bei einer Undichtigkeit oder bei einem beschädigten Dachbereich zählt schnelles Handeln. Eine schnelle Sicherung kann helfen, Folgeschäden zu begrenzen.</p></div><div class="rd-phone-card"><small>Notdienst-Telefon</small><a href="<?php echo esc_url($phone_href); ?>"><?php echo esc_html($phone); ?></a><a class="rd-button" href="<?php echo esc_url($phone_href); ?>">Jetzt anrufen</a></div></div></section>

    <section class="rd-section"><div class="rd-container"><p class="rd-eyebrow">Warum Robert Dachservice?</p><h2>Fachlich. Persönlich. Regional.</h2><p class="rd-large rd-max">Wir möchten nicht einfach irgendeine Lösung verkaufen. Unser Ziel ist eine technisch sinnvolle Dacharbeit, die zu Ihrem Gebäude und Ihrem tatsächlichen Bedarf passt.</p><div class="rd-why-grid"><?php foreach ($why_us as $item) : ?><div class="rd-card"><span class="rd-icon">✓</span><h3><?php echo esc_html($item['title']); ?></h3><p><?php echo esc_html($item['text']); ?></p></div><?php endforeach; ?></div></div></section>

    <section class="rd-section rd-section--sand"><div class="rd-container"><p class="rd-eyebrow">So läuft es ab</p><h2>Von der Anfrage bis zur fertigen Dacharbeit.</h2><div class="rd-process-grid"><?php foreach ($process as $step) : ?><div class="rd-process"><b><?php echo esc_html($step['n']); ?></b><h3><?php echo esc_html($step['title']); ?></h3><p><?php echo esc_html($step['text']); ?></p></div><?php endforeach; ?></div></div></section>

    <section class="rd-section"><div class="rd-container rd-dark-card"><div><p class="rd-eyebrow">Servicegebiet</p><h2>Dachdecker für Köln, Bonn und Umgebung.</h2><p>Robert Dachservice ist für Dacharbeiten in Köln, Bonn und umliegenden Orten im Einsatz. Ob kleine Reparatur, neue Dacheindeckung, Dämmung, Spenglerarbeiten, Flachdach oder dringender Dachschaden.</p><div class="rd-actions"><a class="rd-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Angebot anfordern</a><a class="rd-button rd-button--outline" href="<?php echo esc_url(home_url('/dachdecker-koeln/')); ?>">Dachdecker Köln</a><a class="rd-button rd-button--outline" href="<?php echo esc_url(home_url('/dachdecker-bonn/')); ?>">Dachdecker Bonn</a></div></div></div></section>

    <section class="rd-section"><div class="rd-container rd-faq"><p class="rd-eyebrow">FAQ</p><h2>Häufige Fragen rund ums Dach</h2><?php foreach ($faq as $item) : ?><details><summary><?php echo esc_html($item['q']); ?><span>+</span></summary><p><?php echo esc_html($item['a']); ?></p></details><?php endforeach; ?></div></section>

    <section class="rd-section rd-section--sand"><div class="rd-container rd-final-cta"><p class="rd-eyebrow">Nächster Schritt</p><h2>Sie planen eine Dacharbeit?</h2><p>Ob kleine Reparatur, akuter Dachschaden oder die Erneuerung Ihrer Dacheindeckung: Besprechen Sie Ihr Vorhaben mit Robert Dachservice.</p><div class="rd-actions"><a class="rd-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Angebot anfordern</a><a class="rd-button rd-button--outline rd-button--dark" href="<?php echo esc_url($phone_href); ?>">Jetzt anrufen</a></div></div></section>
</main>
<?php get_footer(); ?>

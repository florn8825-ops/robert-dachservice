<?php
/**
 * Regional landing pages: Dachdecker Köln / Dachdecker Bonn.
 */
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }

$slug = get_post_field('post_name', get_the_ID());
$regions = [
    'dachdecker-koeln' => [
        'title' => 'Dachdecker in Köln',
        'description' => 'Robert Dachservice ist Ihr Ansprechpartner für Dacharbeiten in Köln und Umgebung – von kleinen Reparaturen und akuten Dachschäden bis zur Erneuerung einer bestehenden Dacheindeckung.',
        'image' => 'Professionelles Dachdecker-Foto.jpeg',
        'sections' => [
            ['h2'=>'Dacharbeiten in Köln','p'=>'Ob einzelne beschädigte Dachziegel, eine undichte Stelle, eine neue Dacheindeckung oder umfassendere Dacharbeiten: Der notwendige Leistungsumfang hängt immer vom Zustand und Aufbau des jeweiligen Daches ab.'],
            ['h2'=>'Dacheindeckung in Köln erneuern','p'=>'Eine neue Dacheindeckung muss nicht automatisch eine komplette Dachsanierung bedeuten. Entscheidend ist, welche Arbeiten tatsächlich erforderlich sind und welche Materialien zum Gebäude passen.'],
            ['h2'=>'Dachreparatur in Köln','p'=>'Auch kleinere Reparaturen können angefragt werden. Bei einem akuten Schaden sollte zunächst die Ursache geklärt und der notwendige Reparaturumfang abgestimmt werden.'],
            ['h2'=>'24/7 Dachnotdienst Köln','p'=>'Bei akuten Dachschäden ist Robert Dachservice rund um die Uhr telefonisch erreichbar.'],
        ],
    ],
    'dachdecker-bonn' => [
        'title' => 'Dachdecker in Bonn',
        'description' => 'In Bonn treffen unterschiedliche Gebäudetypen aufeinander: Altbauten mit geneigten Ziegeldächern, Nachkriegsbauten, moderne Wohnhäuser und gewerbliche Objekte mit Flachdachanteil. Entsprechend unterschiedlich fallen die notwendigen Dacharbeiten aus.',
        'image' => 'Professionelles Dachdecker-Foto.jpeg',
        'sections' => [
            ['h2'=>'Dachreparatur in Bonn','p'=>'Verschobene Dachziegel, eine feuchte Stelle unter der Dachschräge oder ein kleiner Sturmschaden: Solche Fälle lassen sich häufig gezielt beheben. Wichtig ist, die Ursache zu klären, bevor repariert wird.'],
            ['h2'=>'Dacheindeckung in Bonn erneuern','p'=>'Bei älteren Bonner Wohnhäusern steht oft die Erneuerung der Dachdeckung im Vordergrund. Ob Tondachziegel, Betondachsteine, Schiefer, Bitumenschindeln oder Metall passen, hängt von Dachform und Gebäude ab.'],
            ['h2'=>'Dachsanierung in Bonn','p'=>'Sind mehrere Bauteile betroffen – etwa Lattung, Unterdeckung oder Dämmung – kann eine umfassendere Sanierung erforderlich sein. Der Umfang wird nach einer Betrachtung des Bestands festgelegt.'],
            ['h2'=>'Flachdach und Dachdämmung in Bonn','p'=>'Flachdächer an Anbauten, Garagen und Gewerbeobjekten benötigen eine funktionierende Abdichtung und Entwässerung. Bei Dämmarbeiten entscheidet der vorhandene Dachaufbau darüber, welche Variante technisch sinnvoll ist.'],
            ['h2'=>'Spenglerarbeiten in Bonn','p'=>'Dachrinnen, Fallrohre, Kehlen und Anschlussbleche sind für die Wasserführung entscheidend. Gerade an Altbauten lohnt sich ein regelmäßiger Blick auf diese Details.'],
            ['h2'=>'Dachnotdienst Bonn','p'=>'Bei akuten Dachschäden in Bonn und Umgebung ist Robert Dachservice rund um die Uhr telefonisch erreichbar.'],
        ],
    ],
];

$data = $regions[$slug] ?? null;
if (!$data) { get_template_part('index'); return; }
$image_url = get_template_directory_uri() . '/assets/' . rawurlencode($data['image']);
get_header();
?>
<main id="main-content" class="rd-main rd-region-page">
    <section class="rd-page-hero rd-section--sand">
        <div class="rd-container">
            <div class="rd-breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">Startseite</a><span>›</span><span><?php echo esc_html($data['title']); ?></span></div>
            <p class="rd-eyebrow">Region</p>
            <h1><?php echo esc_html($data['title']); ?></h1>
            <p class="rd-lead"><?php echo esc_html($data['description']); ?></p>
            <div class="rd-page-actions"><a class="rd-cta-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Angebot anfordern ↗</a><a class="rd-phone-button" href="tel:+4915733645077">☎ Jetzt anrufen</a></div>
        </div>
    </section>
    <div class="rd-container rd-region-layout">
        <figure class="rd-service-image"><img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($data['title']); ?>" loading="eager"></figure>
        <div class="rd-service-content">
            <?php foreach ($data['sections'] as $section) : ?>
                <section class="rd-content-section"><h2><?php echo esc_html($section['h2']); ?></h2><p><?php echo esc_html($section['p']); ?></p></section>
            <?php endforeach; ?>
            <section class="rd-region-services">
                <h2>Leistungen</h2>
                <div class="rd-region-service-grid">
                    <?php
                    $links = [
                        ['Dachreparatur','/leistungen/dachreparatur'],
                        ['Dachsanierung','/leistungen/dachsanierung'],
                        ['Dacheindeckung erneuern','/leistungen/dacheindeckung-erneuern'],
                        ['Dachdämmung','/leistungen/dachdaemmung'],
                        ['Flachdach','/leistungen/flachdach'],
                        ['Spenglerarbeiten','/leistungen/spenglerarbeiten'],
                        ['Neubau / Neueindeckung','/leistungen/neubau-neueindeckung'],
                        ['Dachnotdienst','/dachnotdienst'],
                    ];
                    foreach ($links as $link) : ?>
                        <a href="<?php echo esc_url(home_url($link[1])); ?>"><?php echo esc_html($link[0]); ?><span>↗</span></a>
                    <?php endforeach; ?>
                </div>
            </section>
            <div class="rd-service-cta"><strong>Sie benötigen einen Dachdecker in <?php echo esc_html($slug === 'dachdecker-koeln' ? 'Köln' : 'Bonn'); ?>?</strong><a class="rd-cta-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Anfrage senden ↗</a></div>
        </div>
    </div>
</main>
<?php get_footer(); ?>

<?php
/**
 * Service page template for the Robert Dachservice WordPress conversion.
 * The page content is kept in this theme data map so the existing Lovable
 * service URLs can be reproduced without inventing new service claims.
 */
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }

$slug = get_post_field('post_name', get_the_ID());
$parent = (int) wp_get_post_parent_id(get_the_ID());
$parent_slug = $parent ? get_post_field('post_name', $parent) : '';

$services = [
    'dachreparatur' => [
        'title' => 'Dachreparatur in Köln, Bonn & Umgebung',
        'eyebrow' => 'Leistung',
        'intro' => 'Ein beschädigter Dachziegel, eine undichte Stelle oder ein Sturmschaden sollte möglichst früh geprüft werden. Robert Dachservice übernimmt auch kleinere Dachreparaturen und gezielte Instandsetzungen.',
        'image' => 'dachreparaturen2.jpeg',
        'sections' => [
            ['h2'=>'Nicht jeder Dachschaden erfordert eine komplette Sanierung','p'=>'Viele Dachprobleme lassen sich gezielt beheben, wenn sie rechtzeitig erkannt werden. Deshalb sollte zunächst geprüft werden, wo die Ursache des Schadens liegt und welche Reparatur tatsächlich erforderlich ist.'],
            ['h2'=>'Typische Dachreparaturen','list'=>['beschädigte Dachziegel','lose oder verschobene Dachsteine','lokale Undichtigkeiten','Sturmschäden','kleinere Schäden an Dachanschlüssen','kleinere Blechschäden','Reparaturen im Bereich der Dachentwässerung']],
            ['h2'=>'Warum kleine Schäden nicht unterschätzt werden sollten','p'=>'Durch beschädigte Bereiche kann Feuchtigkeit in den Dachaufbau eindringen. Wird ein Schaden über längere Zeit nicht behoben, können daraus umfangreichere Folgeschäden entstehen.'],
            ['h2'=>'So gehen wir vor','p'=>'Wir betrachten den vorhandenen Schaden, klären die Ursache und stimmen den notwendigen Reparaturumfang mit Ihnen ab.'],
        ],
    ],
    'dachsanierung' => [
        'title' => 'Dachsanierung in Köln & Bonn',
        'eyebrow' => 'Leistung',
        'intro' => 'Eine Dachsanierung kann erforderlich sein, wenn mehrere Bereiche des Dachaufbaus betroffen sind. Der konkrete Umfang hängt vom vorhandenen Bestand ab.',
        'image' => 'Dacheindeckung.jpeg',
        'sections' => [
            ['h2'=>'Wann ist eine Dachsanierung sinnvoll?','p'=>'Wenn nicht nur die äußere Dachdeckung, sondern beispielsweise Unterdeckung, Lattung, Dämmung oder weitere Bauteile betroffen sind, kann eine umfassendere Sanierung erforderlich sein.'],
            ['h2'=>'Bestand prüfen statt pauschal ersetzen','p'=>'Vor der Festlegung des Leistungsumfangs sollte der vorhandene Dachaufbau betrachtet werden. So lässt sich unterscheiden, welche Bauteile weiterverwendet werden können und welche Arbeiten tatsächlich notwendig sind.'],
            ['h2'=>'Mögliche Arbeiten','list'=>['Erneuerung der Dacheindeckung','Arbeiten an Dachlattung und Unterdeckung','Dachdämmung','Arbeiten an Dachanschlüssen','Erneuerung einzelner Dachdetails','abschließende Kontrolle der ausgeführten Arbeiten']],
        ],
    ],
    'dacheindeckung-erneuern' => [
        'title' => 'Dacheindeckung erneuern in Köln & Bonn',
        'eyebrow' => 'Leistung',
        'intro' => 'Wenn eine Dachdeckung in die Jahre gekommen ist, beschädigt ist oder ihren Zweck nicht mehr zuverlässig erfüllt, kann eine Erneuerung sinnvoll sein. Eine neue Dacheindeckung bedeutet nicht automatisch eine komplette Dachsanierung.',
        'image' => 'Dacheindeckung.jpeg',
        'sections' => [
            ['h2'=>'Dacheindeckung oder komplette Dachsanierung?','p'=>'Bei einer Erneuerung der Dacheindeckung steht zunächst die äußere Dachhaut im Mittelpunkt. Ob darüber hinaus Dachlattung, Unterdeckung, Dämmung, Dampfbremse oder Holzkonstruktion erneuert werden müssen, hängt vom Zustand des vorhandenen Dachaufbaus ab.'],
            ['h2'=>'Mögliche Dacheindeckungen','list'=>['Tondachziegel','Betondachsteine','Schiefer','Bitumenschindeln','Metall und Blech']],
            ['h2'=>'Wie läuft die Erneuerung ab?','list'=>['Bestandsaufnahme','Prüfung des vorhandenen Dachaufbaus','Auswahl der passenden Dacheindeckung','Abstimmung des Leistungsumfangs','Rückbau der bestehenden Dachdeckung','Prüfung des Untergrunds','erforderliche vorbereitende Arbeiten','Montage der neuen Dacheindeckung','Ausführung der Anschlüsse und Details','Kontrolle']],
        ],
    ],
    'dachdaemmung' => [
        'title' => 'Dachdämmung in Köln & Bonn',
        'eyebrow' => 'Leistung',
        'intro' => 'Bei einer Dachdämmung kommt es auf den vorhandenen Dachaufbau und die geplante Nutzung an. Die passende Lösung sollte anhand des Bestands und der baulichen Voraussetzungen ausgewählt werden.',
        'image' => 'Professionelles Dachdecker-Foto.jpeg',
        'sections' => [
            ['h2'=>'Welche Dämmarten gibt es?','list'=>['Aufsparrendämmung','Zwischensparrendämmung','Untersparrendämmung']],
            ['h2'=>'Warum der vorhandene Dachaufbau wichtig ist','p'=>'Die technische Ausführung hängt unter anderem von Dachkonstruktion, vorhandener Dämmung und weiteren Schichten des Dachaufbaus ab. Deshalb sollte die konkrete Lösung vor der Ausführung abgestimmt werden.'],
        ],
    ],
    'flachdach' => [
        'title' => 'Flachdach in Köln & Bonn',
        'eyebrow' => 'Leistung',
        'intro' => 'Flachdächer benötigen eine funktionierende Abdichtung und Entwässerung. Bei Reparatur, Sanierung oder Erneuerung kommt es auf den vorhandenen Dachaufbau und die Ursache eines Schadens an.',
        'image' => 'Professionelles Dachdecker-Foto.jpeg',
        'sections' => [
            ['h2'=>'Typische Themen beim Flachdach','list'=>['Abdichtung','Dachentwässerung','Anschlüsse und Details','lokale Reparaturen','Sanierung des vorhandenen Aufbaus']],
            ['h2'=>'Bestand und Ursache prüfen','p'=>'Bei Feuchtigkeit oder Undichtigkeiten sollte zunächst geklärt werden, wo die Ursache liegt. Der notwendige Reparatur- oder Sanierungsumfang wird anschließend anhand des vorhandenen Aufbaus festgelegt.'],
        ],
    ],
    'spenglerarbeiten' => [
        'title' => 'Spenglerarbeiten in Köln & Bonn',
        'eyebrow' => 'Leistung',
        'intro' => 'Dachrinnen, Fallrohre, Kehlen, Anschlussbleche und weitere Blechdetails sind für die sichere Wasserführung und funktionierende Dachanschlüsse wichtig.',
        'image' => 'metall blech dach.jpg',
        'sections' => [
            ['h2'=>'Typische Spenglerarbeiten','list'=>['Dachrinnen','Fallrohre','Kehlen','Anschlussbleche','Blechdetails am Dach','Dachentwässerung']],
            ['h2'=>'Warum Details wichtig sind','p'=>'Fehlerhafte oder beschädigte Anschlüsse können zu Feuchtigkeitseintritt führen. Deshalb sollten Blechdetails und die Wasserführung bei Reparatur- und Sanierungsarbeiten mit betrachtet werden.'],
        ],
    ],
    'neubau-neueindeckung' => [
        'title' => 'Neubau & Neueindeckung in Köln & Bonn',
        'eyebrow' => 'Leistung',
        'intro' => 'Bei Neubau und Neueindeckung müssen Dachform, Dachaufbau, Materialien und Anschlüsse aufeinander abgestimmt werden.',
        'image' => 'Dacheindeckung.jpeg',
        'sections' => [
            ['h2'=>'Von der Planung bis zur Dacheindeckung','p'=>'Der konkrete Leistungsumfang hängt vom Gebäude, der Dachform und dem geplanten Aufbau ab. Materialauswahl und Details werden passend zu den baulichen Voraussetzungen abgestimmt.'],
            ['h2'=>'Mögliche Materialien','list'=>['Tondachziegel','Betondachsteine','Schiefer','Bitumenschindeln','Metall und Blech']],
        ],
    ],
];

// Nested material/service pages from the existing route structure.
$nested = [
    'tondachziegel' => ['title'=>'Dacheindeckung mit Tondachziegeln in Köln & Bonn','intro'=>'Tondachziegel gehören zu den klassischen Lösungen für Steildächer und verbinden eine natürliche Optik mit vielfältigen Gestaltungsmöglichkeiten.','image'=>'tondachziegel.png','list'=>['natürliche Optik','verschiedene Formen und Farben','vielseitige Gestaltungsmöglichkeiten','geeignet für zahlreiche Steildächer']],
    'betondachsteine' => ['title'=>'Dacheindeckung mit Betondachsteinen in Köln & Bonn','intro'=>'Betondachsteine sind eine vielseitige Möglichkeit für die Erneuerung von Steildächern. Sie sind in unterschiedlichen Formen und Oberflächen erhältlich.','image'=>'Betondachstein.jpg','list'=>['robuste Ausführung','unterschiedliche Formen','verschiedene Oberflächen','vielseitige Gestaltung']],
    'schiefer' => ['title'=>'Schieferdach erneuern in Köln & Bonn','intro'=>'Schiefer verleiht Gebäuden eine charakteristische und hochwertige Optik. Die Verarbeitung erfordert Fachwissen und eine sorgfältige Ausführung.','image'=>'schiefer.jpg','list'=>['charakteristische Optik','natürliche Materialwirkung','vielseitige Gestaltungsmöglichkeiten','traditionelles Dachdeckerhandwerk']],
    'bitumenschindeln' => ['title'=>'Dacheindeckung mit Bitumenschindeln','intro'=>'Bitumenschindeln sind eine flexible und vergleichsweise leichte Lösung für geeignete Dachformen. Ob sie für ein konkretes Gebäude geeignet sind, hängt von Dachform, Aufbau und baulichen Voraussetzungen ab.','image'=>'bitumenschindeln.jpg','list'=>['geringes Eigengewicht','flexible Gestaltung','verschiedene Farben und Formen']],
    'metall-blech' => ['title'=>'Dacheindeckung mit Metall und Blech','intro'=>'Metall und Blech können bei geeigneten Dachformen und baulichen Voraussetzungen als Dachdeckung eingesetzt werden.','image'=>'metall blech dach.jpg','list'=>['moderne Optik','geringes Eigengewicht je nach System','vielfältige Gestaltungsmöglichkeiten']],
    'aufsparrendaemmung' => ['title'=>'Aufsparrendämmung in Köln & Bonn','intro'=>'Bei der Aufsparrendämmung wird die Dämmebene oberhalb der Sparren angeordnet. Die konkrete Ausführung hängt vom vorhandenen Dachaufbau ab.','image'=>'Professionelles Dachdecker-Foto.jpeg','list'=>['Dämmung oberhalb der Sparren','geeignet für bestimmte Dachaufbauten','Abstimmung mit Dachdeckung und Unterdeckung']],
    'zwischensparrendaemmung' => ['title'=>'Zwischensparrendämmung in Köln & Bonn','intro'=>'Bei der Zwischensparrendämmung wird der Raum zwischen den Sparren für die Dämmebene genutzt. Die passende Ausführung hängt vom vorhandenen Aufbau ab.','image'=>'Professionelles Dachdecker-Foto.jpeg','list'=>['Dämmebene zwischen den Sparren','geeignet für bestimmte Dachkonstruktionen','Abstimmung mit weiteren Dachschichten']],
    'untersparrendaemmung' => ['title'=>'Untersparrendämmung in Köln & Bonn','intro'=>'Bei der Untersparrendämmung wird die Dämmebene unterhalb der Sparren angeordnet. Sie kann je nach Dachaufbau als ergänzende Lösung eingesetzt werden.','image'=>'Professionelles Dachdecker-Foto.jpeg','list'=>['Dämmebene unterhalb der Sparren','mögliche Ergänzung bestehender Dämmung','Abstimmung mit dem vorhandenen Dachaufbau']],
    'dampfbremse' => ['title'=>'Dampfbremse im Dachaufbau','intro'=>'Eine Dampfbremse ist Bestandteil bestimmter Dachaufbauten. Ihre Ausführung muss zum gesamten Aufbau und zur geplanten Dämmung passen.','image'=>'Professionelles Dachdecker-Foto.jpeg','list'=>['Abstimmung mit der Dämmebene','luftdichte Ausführung','passend zum vorhandenen Dachaufbau']],
];

if (!isset($services[$slug]) && $parent_slug === 'dachdaemmung' && isset($nested[$slug])) {
    $data = $nested[$slug];
    $data['eyebrow'] = 'Dachdämmung';
    $data['sections'] = [
        ['h2'=>'Wichtig ist der vorhandene Dachaufbau','p'=>'Welche Dämmvariante technisch sinnvoll ist, hängt von der vorhandenen Konstruktion und den weiteren Schichten des Dachaufbaus ab.'],
        ['h2'=>'Mögliche Vorteile und Einsatzbereiche','list'=>$data['list']],
    ];
    $services[$slug] = $data;
} elseif (!isset($services[$slug]) && isset($nested[$slug])) {
    $data = $nested[$slug];
    $data['eyebrow'] = 'Dacheindeckung';
    $data['sections'] = [
        ['h2'=>'Wann kann diese Dacheindeckung sinnvoll sein?','p'=>'Die Eignung hängt von Dachform, Gebäude, technischem Aufbau und weiteren baulichen Voraussetzungen ab.'],
        ['h2'=>'Eigenschaften','list'=>$data['list']],
    ];
    $services[$slug] = $data;
}

$data = $services[$slug] ?? null;
if (!$data) {
    get_header();
    echo '<main id="main-content" class="rd-main"><div class="rd-container rd-section"><h1>' . esc_html(get_the_title()) . '</h1><div class="rd-prose">' . wp_kses_post(get_the_content()) . '</div></div></main>';
    get_footer();
    return;
}

$image_url = '';
if (!empty($data['image'])) {
    $candidate = get_template_directory() . '/assets/' . $data['image'];
    if (file_exists($candidate)) { $image_url = get_template_directory_uri() . '/assets/' . rawurlencode($data['image']); }
}

get_header();
?>
<main id="main-content" class="rd-main rd-service-page">
    <section class="rd-page-hero rd-section--sand">
        <div class="rd-container">
            <div class="rd-breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">Startseite</a><span>›</span><a href="<?php echo esc_url(home_url('/leistungen/')); ?>">Leistungen</a><span>›</span><span><?php echo esc_html($data['title']); ?></span></div>
            <p class="rd-eyebrow"><?php echo esc_html($data['eyebrow']); ?></p>
            <h1><?php echo esc_html($data['title']); ?></h1>
            <p class="rd-lead"><?php echo esc_html($data['intro']); ?></p>
            <div class="rd-page-actions"><a class="rd-cta-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Angebot anfordern ↗</a><a class="rd-phone-button" href="tel:+4915733645077">☎ Jetzt anrufen</a></div>
        </div>
    </section>

    <div class="rd-container rd-service-layout">
        <?php if ($image_url) : ?><figure class="rd-service-image"><img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($data['title']); ?>" loading="eager"></figure><?php endif; ?>
        <div class="rd-service-content">
            <?php foreach ($data['sections'] as $section) : ?>
                <section class="rd-content-section">
                    <?php if (!empty($section['h2'])) : ?><h2><?php echo esc_html($section['h2']); ?></h2><?php endif; ?>
                    <?php if (!empty($section['p'])) : ?><p><?php echo esc_html($section['p']); ?></p><?php endif; ?>
                    <?php if (!empty($section['list'])) : ?><ul><?php foreach ($section['list'] as $item) : ?><li><?php echo esc_html($item); ?></li><?php endforeach; ?></ul><?php endif; ?>
                </section>
            <?php endforeach; ?>
            <div class="rd-service-cta"><strong>Sie möchten Ihr Dach prüfen oder eine Arbeit anfragen?</strong><a class="rd-cta-button" href="<?php echo esc_url(home_url('/kontakt/')); ?>">Anfrage senden ↗</a></div>
        </div>
    </div>
</main>
<?php get_footer(); ?>

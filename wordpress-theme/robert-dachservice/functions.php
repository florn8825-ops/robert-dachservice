<?php
declare(strict_types=1);
if (!defined('ABSPATH')) { exit; }

function robert_dachservice_setup(): void {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
    register_nav_menus([
        'primary'=>__('Primary Menu','robert-dachservice'),
        'footer-services'=>__('Footer Services','robert-dachservice'),
        'footer-company'=>__('Footer Company','robert-dachservice'),
        'footer-region'=>__('Footer Region','robert-dachservice'),
    ]);
}
add_action('after_setup_theme','robert_dachservice_setup');

function robert_dachservice_assets(): void {
    $uri=get_template_directory_uri();
    $version=wp_get_theme()->get('Version');
    wp_enqueue_style('robert-dachservice-style',$uri.'/style.css',[], $version);
    wp_enqueue_script('robert-dachservice-header',$uri.'/assets/header.js',[], $version,true);
}
add_action('wp_enqueue_scripts','robert_dachservice_assets');

function robert_dachservice_widgets(): void {
    register_sidebar([
        'name'=>__('Footer','robert-dachservice'),
        'id'=>'footer',
        'description'=>__('Optional footer widget area.','robert-dachservice'),
        'before_widget'=>'<div class="rd-widget">',
        'after_widget'=>'</div>',
        'before_title'=>'<h3>',
        'after_title'=>'</h3>'
    ]);
}
add_action('widgets_init','robert_dachservice_widgets');

/* -------------------------------------------------------------------------
 * Private lead area
 * ---------------------------------------------------------------------- */
function robert_dachservice_register_leads(): void {
    register_post_type('rd_lead',[
        'labels'=>[
            'name'=>'Anfragen','singular_name'=>'Anfrage','menu_name'=>'Anfragen',
            'add_new'=>'Neue Anfrage','view_item'=>'Anfrage ansehen'
        ],
        'public'=>false,
        'show_ui'=>true,
        'show_in_menu'=>true,
        'menu_icon'=>'dashicons-email-alt',
        'supports'=>['title'],
        'capability_type'=>['rd_lead','rd_leads'],
        'map_meta_cap'=>true,
        'show_in_rest'=>false,
    ]);
}
add_action('init','robert_dachservice_register_leads');

function robert_dachservice_grant_lead_caps(): void {
    $admin=get_role('administrator');
    if (!$admin) return;
    foreach (['read_rd_lead','read_private_rd_leads','edit_rd_lead','edit_rd_leads','edit_others_rd_leads','publish_rd_leads','delete_rd_lead','delete_rd_leads','delete_others_rd_leads'] as $cap) {
        $admin->add_cap($cap);
    }
}
add_action('init','robert_dachservice_grant_lead_caps',20);

function robert_dachservice_lead_columns(array $columns): array {
    return ['cb'=>$columns['cb'] ?? '<input type="checkbox" />','title'=>'Name','rd_phone'=>'Telefon','rd_email'=>'E-Mail','rd_service'=>'Leistung','rd_city'=>'Ort','date'=>'Eingegangen'];
}
add_filter('manage_rd_lead_posts_columns','robert_dachservice_lead_columns');

function robert_dachservice_lead_column_data(string $column,int $post_id): void {
    $map=['rd_phone'=>'telefon','rd_email'=>'email','rd_service'=>'leistung','rd_city'=>'ort'];
    if(isset($map[$column])) echo esc_html((string)get_post_meta($post_id,$map[$column],true));
}
add_action('manage_rd_lead_posts_custom_column','robert_dachservice_lead_column_data',10,2);

function robert_dachservice_lead_meta_boxes(): void {
    add_meta_box('rd_lead_details','Anfrage Details','robert_dachservice_render_lead_meta','rd_lead','normal','high');
}
add_action('add_meta_boxes','robert_dachservice_lead_meta_boxes');

function robert_dachservice_render_lead_meta(WP_Post $post): void {
    $fields=['vorname'=>'Vorname','nachname'=>'Nachname','telefon'=>'Telefon','email'=>'E-Mail','plz'=>'PLZ','ort'=>'Ort','leistung'=>'Leistung','beschreibung'=>'Beschreibung'];
    foreach($fields as $key=>$label){
        $value=(string)get_post_meta($post->ID,$key,true);
        echo '<p><strong>'.esc_html($label).'</strong><br>';
        if($key==='beschreibung') echo '<textarea readonly style="width:100%;min-height:130px">'.esc_textarea($value).'</textarea>';
        else echo '<input readonly style="width:100%" value="'.esc_attr($value).'">';
        echo '</p>';
    }
    $ids=get_post_meta($post->ID,'photo_attachment_ids',true);
    if(is_array($ids)&&$ids){
        echo '<p><strong>Fotos</strong></p><div style="display:flex;gap:10px;flex-wrap:wrap">';
        foreach($ids as $id){
            $url=wp_get_attachment_image_url((int)$id,'medium');
            if($url) echo '<a target="_blank" rel="noopener" href="'.esc_url(wp_get_attachment_url((int)$id)).'"><img style="width:150px;height:110px;object-fit:cover" src="'.esc_url($url).'" alt=""></a>';
        }
        echo '</div>';
    }
}

function robert_dachservice_handle_contact(): void {
    if($_SERVER['REQUEST_METHOD']!=='POST'||empty($_POST['rd_contact_form'])) return;
    $nonce=isset($_POST['rd_contact_nonce'])?sanitize_text_field(wp_unslash($_POST['rd_contact_nonce'])):'';
    if(!wp_verify_nonce($nonce,'rd_contact_submit')) wp_die('Sicherheitsprüfung fehlgeschlagen.','Fehler',['response'=>403]);
    if(!empty($_POST['website'])) wp_die('Ungültige Anfrage.','Fehler',['response'=>400]);

    $required=['vorname','nachname','telefon','email','plz','ort','leistung','beschreibung'];
    $data=[];
    foreach($required as $key) $data[$key]=isset($_POST[$key])?sanitize_text_field(wp_unslash($_POST[$key])):'';
    $data['beschreibung']=isset($_POST['beschreibung'])?sanitize_textarea_field(wp_unslash($_POST['beschreibung'])):'';
    if(!$data['vorname']||!$data['nachname']||!$data['telefon']||!is_email($data['email'])||!$data['plz']||!$data['ort']||!$data['leistung']||mb_strlen($data['beschreibung'])<10||empty($_POST['datenschutz'])){
        wp_safe_redirect(add_query_arg('kontakt','fehler',wp_get_referer()?:home_url('/kontakt/'))); exit;
    }

    $post_id=wp_insert_post(['post_type'=>'rd_lead','post_status'=>'publish','post_title'=>trim($data['vorname'].' '.$data['nachname']),'meta_input'=>$data],true);
    if(is_wp_error($post_id)){wp_safe_redirect(add_query_arg('kontakt','fehler',wp_get_referer()?:home_url('/kontakt/')));exit;}

    require_once ABSPATH.'wp-admin/includes/file.php';
    require_once ABSPATH.'wp-admin/includes/media.php';
    require_once ABSPATH.'wp-admin/includes/image.php';
    $ids=[];
    if(!empty($_FILES['fotos']['name'])&&is_array($_FILES['fotos']['name'])){
        $count=min(8,count($_FILES['fotos']['name']));
        for($i=0;$i<$count;$i++){
            if(empty($_FILES['fotos']['name'][$i])||(int)$_FILES['fotos']['error'][$i]!==UPLOAD_ERR_OK) continue;
            if((int)$_FILES['fotos']['size'][$i]>6*1024*1024) continue;
            $file=[
                'name'=>sanitize_file_name($_FILES['fotos']['name'][$i]),
                'type'=>sanitize_mime_type($_FILES['fotos']['type'][$i]),
                'tmp_name'=>$_FILES['fotos']['tmp_name'][$i],
                'error'=>(int)$_FILES['fotos']['error'][$i],
                'size'=>(int)$_FILES['fotos']['size'][$i]
            ];
            $allowed=['image/jpeg','image/png','image/webp'];
            if(!in_array($file['type'],$allowed,true)) continue;
            $upload=wp_handle_upload($file,['test_form'=>false,'mimes'=>['jpg|jpeg'=>'image/jpeg','png'=>'image/png','webp'=>'image/webp']]);
            if(isset($upload['file'])){
                $attachment_id=wp_insert_attachment([
                    'post_mime_type'=>$upload['type'],
                    'post_title'=>sanitize_text_field(pathinfo($file['name'],PATHINFO_FILENAME)),
                    'post_status'=>'inherit'
                ],$upload['file'],$post_id);
                if(!is_wp_error($attachment_id)){
                    wp_update_attachment_metadata($attachment_id,wp_generate_attachment_metadata($attachment_id,$upload['file']));
                    $ids[]=(int)$attachment_id;
                }
            }
        }
    }
    if($ids) update_post_meta($post_id,'photo_attachment_ids',$ids);
    wp_safe_redirect(add_query_arg('kontakt','gesendet',home_url('/kontakt/'))); exit;
}
add_action('template_redirect','robert_dachservice_handle_contact');

/* -------------------------------------------------------------------------
 * Theme media import. Remote URLs are used only once during migration; the
 * frontend resolves everything to local WordPress Media Library URLs.
 * ---------------------------------------------------------------------- */
function robert_dachservice_theme_media(): array {
    return [
        'robert-logo.png'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/robert-logo.png',
        'Professionelles Dachdecker-Foto.jpeg'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/Professionelles%20Dachdecker-Foto.jpeg',
        'Dacheindeckung.jpeg'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/Dacheindeckung.jpeg',
        'dachreparaturen2.jpeg'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/dachreparaturen2.jpeg',
        'tondachziegel.png'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/tondachziegel.png',
        'Betondachstein.jpg'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/Betondachstein.jpg',
        'schiefer.jpg'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/schiefer.jpg',
        'bitumenschindeln.jpg'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/bitumenschindeln.jpg',
        'metall-blech-dach.jpg'=>'https://raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/metall-blech-dach.jpg',
    ];
}

function robert_dachservice_import_theme_media(): void {
    if(get_option('robert_dachservice_media_imported')==='1') return;
    require_once ABSPATH.'wp-admin/includes/media.php';
    require_once ABSPATH.'wp-admin/includes/file.php';
    require_once ABSPATH.'wp-admin/includes/image.php';

    $map=[];
    foreach(robert_dachservice_theme_media() as $filename=>$url){
        $existing=get_posts([
            'post_type'=>'attachment','post_status'=>'inherit','posts_per_page'=>1,
            'meta_key'=>'_rd_theme_asset','meta_value'=>$filename,'fields'=>'ids'
        ]);
        if($existing){$map[$filename]=(int)$existing[0];continue;}
        $id=media_sideload_image($url,0,$filename,'id');
        if(!is_wp_error($id)){
            update_post_meta((int)$id,'_rd_theme_asset',$filename);
            $map[$filename]=(int)$id;
        }
    }
    if($map) update_option('robert_dachservice_theme_asset_ids',$map,false);
    if(count($map)===count(robert_dachservice_theme_media())) update_option('robert_dachservice_media_imported','1',false);
}
add_action('after_switch_theme','robert_dachservice_import_theme_media');

function robert_dachservice_asset_url(string $filename): string {
    $map=get_option('robert_dachservice_theme_asset_ids',[]);
    if(is_array($map)&&!empty($map[$filename])){
        $url=wp_get_attachment_url((int)$map[$filename]);
        if($url) return $url;
    }
    return '';
}

/* Rewrite legacy asset references in the generated HTML to local Media Library URLs. */
function robert_dachservice_rewrite_asset_output(string $html): string {
    foreach(robert_dachservice_theme_media() as $filename=>$remote){
        $local=robert_dachservice_asset_url($filename);
        if(!$local) continue;
        $html=str_replace($remote,$local,$html);
        $encoded=rawurlencode($filename);
        $html=str_replace('raw.githubusercontent.com/florn8825-ops/robert-dachservice/wordpress-conversion/public/'.$encoded,$local,$html);
        $html=str_replace('raw.githubusercontent.com/florn8825-ops/robert-dachservice/main/public/'.$encoded,$local,$html);
        $html=str_replace(get_template_directory_uri().'/assets/'.$filename,$local,$html);
    }
    return $html;
}
function robert_dachservice_start_asset_rewrite(): void {
    if(!is_admin()) ob_start('robert_dachservice_rewrite_asset_output');
}
add_action('template_redirect','robert_dachservice_start_asset_rewrite',999);

/* -------------------------------------------------------------------------
 * Page creation / link integrity
 * ---------------------------------------------------------------------- */
function robert_dachservice_seed_page(string $title,string $slug,int $parent=0): int {
    $existing=get_page_by_path($slug,OBJECT,'page');
    if($existing instanceof WP_Post) return (int)$existing->ID;
    $id=wp_insert_post(['post_type'=>'page','post_status'=>'publish','post_title'=>$title,'post_name'=>$slug,'post_parent'=>$parent,'post_content'=>'']);
    return is_wp_error($id)?0:(int)$id;
}

function robert_dachservice_seed_pages(): void {
    $version='3';
    if(get_option('robert_dachservice_wp_seed_version')===$version) return;

    $leistungen=robert_dachservice_seed_page('Leistungen','leistungen');
    $service_pages=[
        'Dachreparatur'=>'dachreparatur',
        'Dachsanierung'=>'dachsanierung',
        'Dacheindeckung erneuern'=>'dacheindeckung-erneuern',
        'Dachdämmung'=>'dachdaemmung',
        'Flachdach'=>'flachdach',
        'Spenglerarbeiten'=>'spenglerarbeiten',
        'Neubau / Neueindeckung'=>'neubau-neueindeckung',
        'Dachisolierung'=>'dachisolierung',
        'Flachdachsanierung'=>'flachdachsanierung',
        'Dachentwässerung'=>'dachentwaesserung',
    ];
    $service_ids=[];
    foreach($service_pages as $title=>$slug) $service_ids[$slug]=robert_dachservice_seed_page($title,$slug,$leistungen);

    $deck_id=$service_ids['dacheindeckung-erneuern'];
    foreach(['Tondachziegel'=>'tondachziegel','Betondachsteine'=>'betondachsteine','Schiefer'=>'schiefer','Bitumenschindeln'=>'bitumenschindeln','Metall und Blech'=>'metall-blech'] as $title=>$slug) robert_dachservice_seed_page($title,$slug,$deck_id);
    $insulation_id=$service_ids['dachdaemmung'];
    foreach(['Aufsparrendämmung'=>'aufsparrendaemmung','Zwischensparrendämmung'=>'zwischensparrendaemmung','Untersparrendämmung'=>'untersparrendaemmung','Dampfbremse'=>'dampfbremse'] as $title=>$slug) robert_dachservice_seed_page($title,$slug,$insulation_id);

    foreach([
        'Dachdecker Köln'=>'dachdecker-koeln',
        'Dachdecker Bonn'=>'dachdecker-bonn',
        'Über uns'=>'ueber-uns',
        'Referenzen'=>'referenzen',
        'Ratgeber'=>'ratgeber',
        'Kontakt'=>'kontakt',
        'Dachnotdienst'=>'dachnotdienst',
        'Impressum'=>'impressum',
        'Datenschutz'=>'datenschutz',
        'Cookie-Einstellungen'=>'cookie-einstellungen',
    ] as $title=>$slug) robert_dachservice_seed_page($title,$slug);

    update_option('robert_dachservice_wp_seed_version',$version,false);
}
add_action('after_switch_theme','robert_dachservice_seed_pages');

import type { PageDef } from "./types";
import { mainServices, ratgeberArticles } from "./site";

const CALL = { label: "Jetzt anrufen", tel: true };
const QUOTE = { label: "Angebot anfordern", to: "/kontakt" };

export const infoPages: PageDef[] = [
  {
    path: "/dachnotdienst",
    title: "24/7 Dachnotdienst Köln & Bonn | Robert Dachservice",
    description:
      "24/7 Dachnotdienst in Köln, Bonn und Umgebung. Bei Sturmschäden, akuten Undichtigkeiten und beschädigten Dachbereichen telefonisch erreichbar.",
    eyebrow: "Notdienst",
    h1: "24/7 Dachnotdienst in Köln & Bonn",
    intro:
      "Ein plötzlich entstandener Dachschaden kann schnell zu einem größeren Problem werden. Bei akuten Undichtigkeiten, Sturmschäden oder beschädigten Dachbereichen ist schnelles Handeln wichtig. Robert Dachservice ist 24/7 für akute Dachschäden erreichbar.",
    breadcrumbs: [{ label: "Dachnotdienst" }],
    cta: CALL,
    secondaryCta: QUOTE,
    blocks: [
      { type: "placeholder", label: "Notdienst Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Wann ist ein Dachnotdienst sinnvoll?",
        items: [
          "nach einem Sturm",
          "bei plötzlich auftretenden Undichtigkeiten",
          "bei beschädigten oder verschobenen Dachziegeln",
          "bei sichtbaren Schäden an der Dachfläche",
          "bei dringendem Wassereintritt",
        ],
      },
      {
        type: "callout",
        h2: "Schnell Kontakt aufnehmen",
        paragraphs: [
          "Bei einem akuten Dachschaden erreichen Sie uns rund um die Uhr telefonisch.",
        ],
        cta: CALL,
      },
      {
        type: "cards",
        h2: "Nach dem Notfall",
        cards: [
          {
            title: "Dachreparatur",
            text: "Gezielte Instandsetzung nach einer ersten Sicherung des Schadens.",
            cta: "Dachreparatur ansehen",
            to: "/leistungen/dachreparatur",
          },
          {
            title: "Dacheindeckung erneuern",
            text: "Wenn die Dachdeckung insgesamt betroffen ist, kann eine Erneuerung sinnvoll sein.",
            cta: "Dacheindeckung ansehen",
            to: "/leistungen/dacheindeckung-erneuern",
          },
          {
            title: "Spenglerarbeiten",
            text: "Rinnen, Anschlüsse und Blechdetails nach Sturmereignissen prüfen lassen.",
            cta: "Spenglerarbeiten ansehen",
            to: "/leistungen/spenglerarbeiten",
          },
        ],
      },
    ],
  },
  {
    path: "/dachdecker-koeln",
    title: "Dachdecker Köln | Robert Dachservice",
    description:
      "Dachdecker in Köln: Dachreparatur, Dacheindeckung erneuern, Dachsanierung, Flachdach, Dämmung, Spenglerarbeiten und 24/7 Dachnotdienst.",
    eyebrow: "Region",
    h1: "Dachdecker in Köln",
    intro:
      "Robert Dachservice ist Ihr Ansprechpartner für Dacharbeiten in Köln und Umgebung – von kleinen Reparaturen und akuten Dachschäden bis zur Erneuerung einer bestehenden Dacheindeckung.",
    breadcrumbs: [{ label: "Dachdecker Köln" }],
    cta: QUOTE,
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Köln Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Dacharbeiten in Köln",
        paragraphs: [
          "Ob einzelne beschädigte Dachziegel, eine undichte Stelle, eine neue Dacheindeckung oder umfassendere Dacharbeiten: Der notwendige Leistungsumfang hängt immer vom Zustand und Aufbau des jeweiligen Daches ab.",
        ],
      },
      { type: "cards", h2: "Unsere Leistungen in Köln", cards: mainServices },
      {
        type: "text",
        h2: "Dacheindeckung in Köln erneuern",
        paragraphs: [
          "Eine neue Dacheindeckung muss nicht automatisch eine komplette Dachsanierung bedeuten. Wir prüfen, welche Arbeiten tatsächlich erforderlich sind und welche Materialien zum Gebäude passen.",
        ],
      },
      {
        type: "text",
        h2: "Dachreparatur in Köln",
        paragraphs: ["Auch kleinere Reparaturen können angefragt werden."],
      },
      {
        type: "callout",
        h2: "24/7 Dachnotdienst Köln",
        paragraphs: [
          "Bei akuten Dachschäden ist Robert Dachservice rund um die Uhr telefonisch erreichbar.",
        ],
        cta: CALL,
      },
    ],
  },
  {
    path: "/dachdecker-bonn",
    title: "Dachdecker Bonn | Robert Dachservice",
    description:
      "Dachdecker in Bonn: Dachreparatur, Dacheindeckung, Dachsanierung, Flachdach, Dachdämmung, Spenglerarbeiten und Dachnotdienst rund um die Uhr.",
    eyebrow: "Region",
    h1: "Dachdecker in Bonn",
    intro:
      "In Bonn treffen unterschiedliche Gebäudetypen aufeinander: Altbauten mit geneigten Ziegeldächern, Nachkriegsbauten, moderne Wohnhäuser und gewerbliche Objekte mit Flachdachanteil. Entsprechend unterschiedlich fallen die notwendigen Dacharbeiten aus.",
    breadcrumbs: [{ label: "Dachdecker Bonn" }],
    cta: QUOTE,
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Bonn Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Dachreparatur in Bonn",
        paragraphs: [
          "Verschobene Dachziegel, eine feuchte Stelle unter der Dachschräge oder ein kleiner Sturmschaden: Solche Fälle lassen sich häufig gezielt beheben. Wichtig ist, die Ursache zu klären, bevor repariert wird.",
        ],
      },
      {
        type: "text",
        h2: "Dacheindeckung in Bonn erneuern",
        paragraphs: [
          "Bei älteren Bonner Wohnhäusern steht oft die Erneuerung der Dachdeckung im Vordergrund, während die darunterliegende Konstruktion weiterverwendet werden kann. Ob Tondachziegel, Betondachsteine, Schiefer, Bitumenschindeln oder Metall passen, hängt von Dachform und Gebäude ab.",
        ],
      },
      {
        type: "text",
        h2: "Dachsanierung in Bonn",
        paragraphs: [
          "Sind mehrere Bauteile betroffen – etwa Lattung, Unterdeckung oder Dämmung – kann eine umfassendere Sanierung erforderlich sein. Der Umfang wird nach einer Betrachtung des Bestands festgelegt.",
        ],
      },
      {
        type: "text",
        h2: "Flachdach und Dachdämmung in Bonn",
        paragraphs: [
          "Flachdächer an Anbauten, Garagen und Gewerbeobjekten benötigen eine funktionierende Abdichtung und Entwässerung. Bei Dämmarbeiten entscheidet der vorhandene Dachaufbau darüber, welche Dämmvariante technisch sinnvoll ist.",
        ],
      },
      {
        type: "text",
        h2: "Spenglerarbeiten in Bonn",
        paragraphs: [
          "Dachrinnen, Fallrohre, Kehlen und Anschlussbleche sind für die Wasserführung entscheidend. Gerade an Altbauten lohnt sich ein regelmäßiger Blick auf diese Details.",
        ],
      },
      {
        type: "callout",
        h2: "Dachnotdienst Bonn",
        paragraphs: [
          "Bei akuten Dachschäden in Bonn und Umgebung ist Robert Dachservice rund um die Uhr telefonisch erreichbar.",
        ],
        cta: CALL,
      },
      { type: "cards", h2: "Leistungen für Bonn", cards: mainServices },
    ],
  },
  {
    path: "/ueber-uns",
    title: "Über uns – Dachdeckermeisterbetrieb | Robert Dachservice",
    description:
      "Robert Dachservice ist ein Dachdeckermeisterbetrieb für Köln, Bonn und Umgebung. Fachgerechte Beurteilung und Lösungen, die zum tatsächlichen Bedarf passen.",
    eyebrow: "Über uns",
    h1: "Robert Dachservice – Dachdeckermeisterbetrieb",
    intro:
      "Ein Dach muss nicht nur gut aussehen. Es muss zuverlässig vor Witterung schützen, technisch funktionieren und zum Gebäude passen.",
    breadcrumbs: [{ label: "Über uns" }],
    cta: QUOTE,
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Team Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        paragraphs: [
          "Als Dachdeckermeisterbetrieb legen wir Wert auf eine fachgerechte Beurteilung des vorhandenen Zustands und auf Lösungen, die zum tatsächlichen Bedarf passen.",
        ],
      },
      {
        type: "text",
        h2: "Unser Anspruch",
        paragraphs: [
          "Ob kleine Reparatur oder umfangreichere Dacharbeit: Wir möchten nachvollziehbar und lösungsorientiert arbeiten.",
        ],
      },
      {
        type: "text",
        h2: "Kleine Arbeiten sind genauso wichtig",
        paragraphs: [
          "Nicht jeder Kunde benötigt eine komplette Dachsanierung. Auch einzelne Schäden, Undichtigkeiten oder beschädigte Dachziegel verdienen eine fachgerechte Lösung.",
        ],
      },
    ],
  },
  {
    path: "/referenzen",
    title: "Referenzen | Robert Dachservice Köln & Bonn",
    description:
      "Referenzen von Robert Dachservice: Hier entsteht eine Auswahl realisierter Dacharbeiten aus Köln, Bonn und Umgebung.",
    eyebrow: "Referenzen",
    h1: "Referenzen",
    intro: "Hier entsteht eine Auswahl realisierter Dacharbeiten von Robert Dachservice.",
    breadcrumbs: [{ label: "Referenzen" }],
    cta: QUOTE,
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Referenz-Foto – wird später ersetzt", ratio: "photo" },
      { type: "placeholder", label: "Referenz-Foto – wird später ersetzt", ratio: "photo" },
      { type: "placeholder", label: "Referenz-Foto – wird später ersetzt", ratio: "photo" },
      {
        type: "text",
        h2: "Projektdokumentation folgt",
        paragraphs: [
          "Sobald Fotos realisierter Dacharbeiten vorliegen, werden sie an dieser Stelle veröffentlicht.",
        ],
      },
    ],
  },
  {
    path: "/impressum",
    title: "Impressum | Robert Dachservice",
    description: "Impressum von Robert Dachservice, Dachdeckermeisterbetrieb für Köln, Bonn und Umgebung.",
    h1: "Impressum",
    intro: "Angaben gemäß § 5 DDG.",
    breadcrumbs: [{ label: "Impressum" }],
    cta: QUOTE,
    blocks: [
      {
        type: "text",
        h2: "Anbieter",
        paragraphs: [
          "Robert Dachservice – Dachdeckermeisterbetrieb",
          "[ANSCHRIFT EINFÜGEN]",
          "Telefon: +49 1573 3645077",
          "E-Mail: [E-MAIL EINFÜGEN]",
        ],
      },
      {
        type: "text",
        h2: "Vertreten durch",
        paragraphs: ["[VERANTWORTLICHE PERSON EINFÜGEN]"],
      },
      {
        type: "text",
        h2: "Weitere Angaben",
        paragraphs: [
          "Umsatzsteuer-Identifikationsnummer: [UST-IDNR. EINFÜGEN]",
          "Zuständige Handwerkskammer: [HANDWERKSKAMMER EINFÜGEN]",
          "Berufsbezeichnung: [BERUFSBEZEICHNUNG UND VERLEIHENDER STAAT EINFÜGEN]",
          "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: [VERANTWORTLICHE PERSON EINFÜGEN]",
        ],
      },
      {
        type: "text",
        h2: "Streitbeilegung",
        paragraphs: [
          "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
    ],
  },
  {
    path: "/datenschutz",
    title: "Datenschutzerklärung | Robert Dachservice",
    description:
      "Informationen zum Datenschutz bei Robert Dachservice – Verarbeitung personenbezogener Daten auf dieser Website.",
    h1: "Datenschutzerklärung",
    intro:
      "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir über die Verarbeitung von Daten auf dieser Website.",
    breadcrumbs: [{ label: "Datenschutz" }],
    cta: QUOTE,
    blocks: [
      {
        type: "text",
        h2: "Verantwortliche Stelle",
        paragraphs: [
          "Robert Dachservice – Dachdeckermeisterbetrieb",
          "[ANSCHRIFT EINFÜGEN]",
          "[E-MAIL EINFÜGEN]",
          "[VERANTWORTLICHE PERSON EINFÜGEN]",
        ],
      },
      {
        type: "text",
        h2: "Kontaktaufnahme",
        paragraphs: [
          "Wenn Sie uns über das Anfrageformular oder telefonisch kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.",
        ],
      },
      {
        type: "list",
        h2: "Ihre Rechte",
        items: [
          "Auskunft über die verarbeiteten Daten",
          "Berichtigung unrichtiger Daten",
          "Löschung oder Einschränkung der Verarbeitung",
          "Datenübertragbarkeit",
          "Widerspruch gegen die Verarbeitung",
          "Beschwerde bei einer Aufsichtsbehörde",
        ],
      },
      {
        type: "text",
        h2: "Hosting und Server-Logfiles",
        paragraphs: [
          "Beim Aufruf dieser Website werden technisch notwendige Daten verarbeitet, um die Auslieferung der Seite zu ermöglichen.",
          "[HOSTING-ANBIETER EINFÜGEN]",
        ],
      },
    ],
  },
  {
    path: "/cookie-einstellungen",
    title: "Cookie-Einstellungen | Robert Dachservice",
    description:
      "Cookie-Einstellungen für die Website von Robert Dachservice – Informationen zu eingesetzten Cookies und Auswahlmöglichkeiten.",
    h1: "Cookie-Einstellungen",
    intro:
      "Diese Website verwendet technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen.",
    breadcrumbs: [{ label: "Cookie-Einstellungen" }],
    cta: QUOTE,
    blocks: [
      {
        type: "list",
        h2: "Eingesetzte Kategorien",
        items: [
          "Technisch notwendige Cookies – erforderlich für den Betrieb der Website",
          "Statistik – derzeit nicht aktiv",
          "Marketing – derzeit nicht aktiv",
        ],
      },
      {
        type: "text",
        h2: "Änderungen Ihrer Auswahl",
        paragraphs: [
          "Sollten künftig weitere Cookies eingesetzt werden, können Sie Ihre Auswahl an dieser Stelle anpassen. Zusätzlich können Sie Cookies jederzeit über die Einstellungen Ihres Browsers löschen oder blockieren.",
          "[COOKIE-TOOL / ANBIETER EINFÜGEN, FALLS EINGESETZT]",
        ],
      },
    ],
  },
  {
    path: "/ratgeber",
    title: "Ratgeber rund ums Dach | Robert Dachservice",
    description:
      "Ratgeber rund ums Dach: Dacheindeckung, Dachreparatur, Dachsanierung, Flachdach, Dämmung und Dachnotdienst verständlich erklärt.",
    eyebrow: "Ratgeber",
    h1: "Ratgeber rund ums Dach",
    intro:
      "Wissenswertes zu Dacheindeckung, Dachreparatur, Dachsanierung, Dämmung und weiteren Themen rund ums Dach.",
    breadcrumbs: [{ label: "Ratgeber" }],
    cta: QUOTE,
    secondaryCta: CALL,
    blocks: [
      {
        type: "cards",
        h2: "Beiträge",
        cards: ratgeberArticles.map((a) => ({
          title: a.title,
          text: "Verständlich erklärt vom Dachdeckermeisterbetrieb für Köln, Bonn und Umgebung.",
          cta: "Beitrag lesen",
          to: `/ratgeber/${a.slug}`,
        })),
      },
    ],
  },
];

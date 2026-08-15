import type { PageDef } from "./types";
import dachreparaturImage from "@/assets/dachreparaturen2.jpeg.asset.json";
import { daemmungLinks, flachdachLinks, materialLinks, spenglerLinks } from "./site";

const bc = (...items: { label: string; to?: string }[]) => [
  { label: "Leistungen", to: "/leistungen/dacheindeckung-erneuern" },
  ...items,
];

const QUOTE = { label: "Angebot anfordern", to: "/kontakt" };
const CALL = { label: "Jetzt anrufen", tel: true };

export const leistungenPages: PageDef[] = [
  {
    path: "/leistungen/dachreparatur",
    title: "Dachreparatur Köln & Bonn | Robert Dachservice",
    description:
      "Dachreparatur in Köln, Bonn und Umgebung. Kleine Schäden, undichte Stellen, beschädigte Dachziegel und Sturmschäden fachgerecht prüfen und reparieren lassen.",
    eyebrow: "Leistung",
    h1: "Dachreparatur in Köln, Bonn & Umgebung",
    intro:
      "Ein beschädigter Dachziegel, eine undichte Stelle oder ein Sturmschaden sollte möglichst früh geprüft werden. Robert Dachservice übernimmt auch kleinere Dachreparaturen und gezielte Instandsetzungen.",
    breadcrumbs: bc({ label: "Dachreparatur" }),
    heroImage: dachreparaturImage.url,
    cta: { label: "Dachreparatur anfragen", to: "/kontakt" },
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Dachreparatur Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Nicht jeder Dachschaden erfordert eine komplette Sanierung",
        paragraphs: [
          "Viele Dachprobleme lassen sich gezielt beheben, wenn sie rechtzeitig erkannt werden. Deshalb prüfen wir zunächst, wo die Ursache des Schadens liegt und welche Reparatur tatsächlich erforderlich ist.",
        ],
      },
      {
        type: "list",
        h2: "Typische Dachreparaturen",
        items: [
          "beschädigte Dachziegel",
          "lose oder verschobene Dachsteine",
          "lokale Undichtigkeiten",
          "Sturmschäden",
          "kleinere Schäden an Dachanschlüssen",
          "kleinere Blechschäden",
          "Reparaturen im Bereich der Dachentwässerung",
        ],
      },
      {
        type: "text",
        h2: "Warum kleine Schäden nicht unterschätzt werden sollten",
        paragraphs: [
          "Durch beschädigte Bereiche kann Feuchtigkeit in den Dachaufbau eindringen. Wird ein Schaden über längere Zeit nicht behoben, können daraus umfangreichere Folgeschäden entstehen.",
        ],
      },
      {
        type: "text",
        h2: "So gehen wir vor",
        paragraphs: [
          "Wir betrachten den vorhandenen Schaden, klären die Ursache und stimmen den notwendigen Reparaturumfang mit Ihnen ab.",
        ],
      },
      {
        type: "cards",
        h2: "Passende Themen",
        cards: [
          {
            title: "Dachnotdienst 24/7",
            text: "Bei akuten Dachschäden ist Robert Dachservice rund um die Uhr telefonisch erreichbar.",
            cta: "Dachnotdienst ansehen",
            to: "/dachnotdienst",
          },
          {
            title: "Dacheindeckung erneuern",
            text: "Wenn sich Schäden häufen, kann die Erneuerung der Dachdeckung sinnvoll sein.",
            cta: "Dacheindeckung ansehen",
            to: "/leistungen/dacheindeckung-erneuern",
          },
          {
            title: "Dachsanierung",
            text: "Wenn mehrere Bauteile betroffen sind, kann eine umfassendere Sanierung erforderlich sein.",
            cta: "Dachsanierung ansehen",
            to: "/leistungen/dachsanierung",
          },
        ],
      },
    ],
  },
  {
    path: "/leistungen/dacheindeckung-erneuern",
    title: "Dacheindeckung erneuern Köln & Bonn | Robert Dachservice",
    description:
      "Dacheindeckung erneuern in Köln, Bonn und Umgebung. Tondachziegel, Betondachsteine, Schiefer, Bitumenschindeln sowie Metall und Blech.",
    eyebrow: "Leistung",
    h1: "Dacheindeckung erneuern in Köln & Bonn",
    intro:
      "Wenn eine Dachdeckung in die Jahre gekommen ist, beschädigt ist oder ihren Zweck nicht mehr zuverlässig erfüllt, kann eine Erneuerung sinnvoll sein. Dabei gilt: Eine neue Dacheindeckung bedeutet nicht automatisch eine komplette Dachsanierung.",
    breadcrumbs: bc({ label: "Dacheindeckung erneuern" }),
    cta: { label: "Angebot für Dacheindeckung anfordern", to: "/kontakt" },
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Dacheindeckung Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Dacheindeckung oder komplette Dachsanierung?",
        paragraphs: [
          "Bei einer Erneuerung der Dacheindeckung steht zunächst die äußere Dachhaut im Mittelpunkt. Ob darüber hinaus Dachlattung, Unterdeckung, Dämmung, Dampfbremse oder Holzkonstruktion erneuert werden müssen, hängt vom Zustand des vorhandenen Dachaufbaus ab.",
          "Deshalb sollte der tatsächliche Bestand vor der Festlegung des Leistungsumfangs betrachtet werden.",
        ],
      },
      { type: "cards", h2: "Mögliche Dacheindeckungen", cards: materialLinks },
      {
        type: "steps",
        h2: "Wie läuft die Erneuerung einer Dacheindeckung ab?",
        steps: [
          "Bestandsaufnahme",
          "Prüfung des vorhandenen Dachaufbaus",
          "Auswahl der passenden Dacheindeckung",
          "Abstimmung des Leistungsumfangs",
          "Rückbau der bestehenden Dachdeckung",
          "Prüfung des Untergrunds",
          "erforderliche vorbereitende Arbeiten",
          "Montage der neuen Dacheindeckung",
          "Ausführung der Anschlüsse und Details",
          "Kontrolle",
        ],
      },
      {
        type: "text",
        h2: "Welche Dacheindeckung ist die richtige?",
        paragraphs: [
          "Die passende Lösung hängt unter anderem von Dachform, Gebäude, Gestaltung, technischen Voraussetzungen und persönlichen Anforderungen ab.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dacheindeckung-erneuern/tondachziegel",
    title: "Tondachziegel Köln & Bonn | Robert Dachservice",
    description:
      "Dacheindeckung mit Tondachziegeln in Köln und Bonn: natürliche Optik, viele Formen und Farben. Erneuerung der Dachdeckung durch den Dachdeckermeisterbetrieb.",
    eyebrow: "Dacheindeckung",
    h1: "Dacheindeckung mit Tondachziegeln in Köln & Bonn",
    intro:
      "Tondachziegel gehören zu den klassischen Lösungen für Steildächer und verbinden eine natürliche Optik mit vielfältigen Gestaltungsmöglichkeiten.",
    breadcrumbs: bc(
      { label: "Dacheindeckung erneuern", to: "/leistungen/dacheindeckung-erneuern" },
      { label: "Tondachziegel" },
    ),
    cta: { label: "Angebot für Tondachziegel anfordern", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "Dachziegel Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        paragraphs: [
          "Wenn die bestehende Dacheindeckung beschädigt, stark gealtert oder nicht mehr zuverlässig ist, kann eine Erneuerung der Dachdeckung die passende Lösung sein.",
          "Dabei muss nicht automatisch das komplette Dach neu aufgebaut werden.",
        ],
      },
      {
        type: "text",
        h2: "Wann lohnt sich eine Erneuerung mit Tondachziegeln?",
        paragraphs: [
          "Beschädigte oder stark verwitterte Dachziegel können die Wetterbeständigkeit eines Daches beeinträchtigen. Auch wiederkehrende Reparaturen oder eine deutlich gealterte Dachdeckung können Anlass für eine Erneuerung sein.",
        ],
      },
      {
        type: "list",
        h2: "Vorteile von Tondachziegeln",
        items: [
          "natürliche Optik",
          "verschiedene Formen und Farben",
          "vielseitige Gestaltungsmöglichkeiten",
          "geeignet für zahlreiche Steildächer",
          "hochwertiges Erscheinungsbild",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dacheindeckung-erneuern/betondachsteine",
    title: "Betondachsteine Köln & Bonn | Robert Dachservice",
    description:
      "Dacheindeckung mit Betondachsteinen in Köln und Bonn. Robuste Dachsteine in unterschiedlichen Formen und Oberflächen für die Erneuerung von Steildächern.",
    eyebrow: "Dacheindeckung",
    h1: "Dacheindeckung mit Betondachsteinen in Köln & Bonn",
    intro:
      "Betondachsteine sind eine vielseitige Möglichkeit für die Erneuerung von Steildächern. Sie sind in unterschiedlichen Formen und Oberflächen erhältlich und ermöglichen eine moderne oder klassische Gestaltung.",
    breadcrumbs: bc(
      { label: "Dacheindeckung erneuern", to: "/leistungen/dacheindeckung-erneuern" },
      { label: "Betondachsteine" },
    ),
    cta: { label: "Angebot für Betondachsteine anfordern", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "Betondachsteine Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Wann können Betondachsteine sinnvoll sein?",
        paragraphs: [
          "Bei einer geplanten Erneuerung der Dacheindeckung können Betondachsteine je nach Dach und baulichen Voraussetzungen eine interessante Lösung darstellen.",
        ],
      },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "robuste Ausführung",
          "unterschiedliche Formen",
          "verschiedene Oberflächen",
          "vielseitige Gestaltung",
          "für zahlreiche Steildächer geeignet",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dacheindeckung-erneuern/schiefer",
    title: "Schieferdach erneuern Köln & Bonn | Robert Dachservice",
    description:
      "Schiefer als Dacheindeckung in Köln und Bonn. Charaktervolle Optik und traditionelles Dachdeckerhandwerk – Erneuerung fachgerecht ausgeführt.",
    eyebrow: "Dacheindeckung",
    h1: "Schieferdach erneuern in Köln & Bonn",
    intro:
      "Schiefer verleiht Gebäuden eine charakteristische und hochwertige Optik. Die Verarbeitung erfordert Fachwissen und eine sorgfältige Ausführung.",
    breadcrumbs: bc(
      { label: "Dacheindeckung erneuern", to: "/leistungen/dacheindeckung-erneuern" },
      { label: "Schiefer" },
    ),
    cta: { label: "Schieferdach anfragen", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "Schiefer Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Schiefer als Dacheindeckung",
        paragraphs: [
          "Schiefer bietet vielfältige Gestaltungsmöglichkeiten und wird sowohl bei traditionellen als auch bei anspruchsvollen architektonischen Gebäuden eingesetzt.",
        ],
      },
      {
        type: "list",
        h2: "Vorteile von Schiefer",
        items: [
          "charakteristische Optik",
          "natürliche Materialwirkung",
          "vielseitige Gestaltungsmöglichkeiten",
          "hochwertige Erscheinung",
          "traditionelles Dachdeckerhandwerk",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dacheindeckung-erneuern/bitumenschindeln",
    title: "Bitumenschindeln Köln & Bonn | Robert Dachservice",
    description:
      "Dacheindeckung mit Bitumenschindeln: leichte und flexible Lösung für geeignete Dachformen. Beratung und Ausführung in Köln, Bonn und Umgebung.",
    eyebrow: "Dacheindeckung",
    h1: "Dacheindeckung mit Bitumenschindeln",
    intro:
      "Bitumenschindeln sind eine flexible und vergleichsweise leichte Lösung für geeignete Dachformen. Ob sie für ein konkretes Gebäude geeignet sind, hängt von Dachform, Aufbau und baulichen Voraussetzungen ab.",
    breadcrumbs: bc(
      { label: "Dacheindeckung erneuern", to: "/leistungen/dacheindeckung-erneuern" },
      { label: "Bitumenschindeln" },
    ),
    cta: { label: "Bitumenschindeln anfragen", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "Bitumenschindeln Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "geringes Eigengewicht",
          "flexible Gestaltung",
          "verschiedene Farben und Formen",
          "für geeignete Dachkonstruktionen vielseitig einsetzbar",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dacheindeckung-erneuern/metall-blech",
    title: "Metalldach & Blechdach Köln & Bonn | Robert Dachservice",
    description:
      "Metalldach und Blechdach in Köln und Bonn: modernes Erscheinungsbild, geringes Gewicht je nach System und vielseitige Gestaltung.",
    eyebrow: "Dacheindeckung",
    h1: "Metalldach und Blechdach in Köln & Bonn",
    intro:
      "Metalldächer und Blechdächer bieten eine moderne Optik und können je nach Gebäude eine leichte und langlebige Lösung darstellen.",
    breadcrumbs: bc(
      { label: "Dacheindeckung erneuern", to: "/leistungen/dacheindeckung-erneuern" },
      { label: "Metall / Blech" },
    ),
    cta: { label: "Metalldach anfragen", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "Metalldach Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Mögliche Vorteile",
        items: [
          "modernes Erscheinungsbild",
          "geringes Gewicht je nach System",
          "vielseitige Gestaltung",
          "geeignet für unterschiedliche Dachkonzepte",
        ],
      },
      {
        type: "text",
        h2: "Für welche Gebäude kann Metall sinnvoll sein?",
        paragraphs: [
          "Die passende Ausführung hängt von Dachform, Gebäude, Unterkonstruktion und gewünschter Optik ab.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dachsanierung",
    title: "Dachsanierung Köln & Bonn | Robert Dachservice",
    description:
      "Dachsanierung in Köln und Bonn. Wenn mehrere Bauteile des Dachaufbaus betroffen sind, stimmen wir den notwendigen Umfang auf den Bestand ab.",
    eyebrow: "Leistung",
    h1: "Dachsanierung in Köln & Bonn",
    intro:
      "Wenn nicht nur die äußere Dacheindeckung, sondern mehrere Bereiche des Dachaufbaus betroffen sind, kann eine umfassendere Dachsanierung erforderlich sein.",
    breadcrumbs: bc({ label: "Dachsanierung" }),
    cta: { label: "Dachsanierung anfragen", to: "/kontakt" },
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Dachsanierung Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Dachsanierung oder Dacheindeckung erneuern?",
        paragraphs: [
          "Nicht jedes alte Dach benötigt automatisch eine komplette Sanierung. Entscheidend ist der Zustand der einzelnen Bauteile.",
        ],
      },
      {
        type: "list",
        h2: "Mögliche Bereiche",
        items: [
          "Dacheindeckung",
          "Dachlattung",
          "Unterdeckung",
          "Dämmung",
          "Dampfbremse",
          "Dachanschlüsse",
          "Spenglerarbeiten",
          "Holzkonstruktion, soweit erforderlich",
        ],
      },
      {
        type: "text",
        h2: "Individuell statt pauschal",
        paragraphs: [
          "Wir betrachten den vorhandenen Bestand und stimmen den notwendigen Umfang auf das konkrete Gebäude ab.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/flachdach",
    title: "Flachdach Köln & Bonn | Robert Dachservice",
    description:
      "Flachdach in Köln und Bonn: Abdichtung, Reparatur und Erneuerung mit Bitumen, EPDM oder PVC – inklusive Anschlüsse und Dachentwässerung.",
    eyebrow: "Leistung",
    h1: "Flachdach in Köln & Bonn",
    intro:
      "Flachdächer benötigen eine zuverlässige Abdichtung und eine fachgerechte Ausführung der Anschlüsse und Entwässerung. Robert Dachservice übernimmt Arbeiten rund um Reparatur, Abdichtung und Erneuerung geeigneter Flachdachsysteme.",
    breadcrumbs: bc({ label: "Flachdach" }),
    cta: { label: "Flachdach anfragen", to: "/kontakt" },
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Flachdach Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Leistungen",
        items: [
          "Reparaturen",
          "Abdichtung",
          "Erneuerung",
          "Dachentwässerung",
          "Anschlüsse",
          "Wartung und Kontrolle",
        ],
      },
      { type: "cards", h2: "Flachdachsysteme", cards: flachdachLinks },
    ],
  },
  {
    path: "/leistungen/flachdach/bitumen",
    title: "Flachdach Bitumen Köln & Bonn | Robert Dachservice",
    description:
      "Bitumenbahnen für Flachdächer in Köln und Bonn: Reparatur, Ergänzung oder Erneuerung der Abdichtung – fachgerecht ausgeführt.",
    eyebrow: "Flachdach",
    h1: "Flachdachabdichtung mit Bitumen",
    intro:
      "Bitumenbahnen sind eine etablierte Lösung für die Abdichtung von Flachdächern. Je nach Aufbau und Zustand des vorhandenen Daches können Reparatur, Ergänzung oder Erneuerung sinnvoll sein.",
    breadcrumbs: bc({ label: "Flachdach", to: "/leistungen/flachdach" }, { label: "Bitumen" }),
    cta: { label: "Bitumen-Flachdach anfragen", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "Bitumen Flachdach Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "bewährtes und weit verbreitetes System",
          "mehrlagige Aufbauten möglich",
          "reparaturfreundlich bei lokalen Schäden",
          "geeignet für viele bestehende Flachdächer",
        ],
      },
      {
        type: "list",
        h2: "Einsatzbereiche",
        items: [
          "Wohngebäude mit Flachdachanteil",
          "Garagen und Anbauten",
          "Gewerbeobjekte",
          "Sanierung bestehender Bitumendächer",
        ],
      },
      {
        type: "text",
        h2: "Worauf es bei der Erneuerung ankommt",
        paragraphs: [
          "Vor einer Erneuerung sollten Untergrund, vorhandene Lagen, Durchdringungen, Anschlüsse und die Entwässerung betrachtet werden. Erst daraus ergibt sich, ob eine Ergänzung ausreicht oder ein vollständiger Neuaufbau sinnvoll ist.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/flachdach/epdm",
    title: "Flachdach EPDM Köln & Bonn | Robert Dachservice",
    description:
      "EPDM-Abdichtung für Flachdächer in Köln und Bonn. Flexible Dachbahnen für geeignete Flachdachaufbauten – Beratung und Ausführung.",
    eyebrow: "Flachdach",
    h1: "Flachdachabdichtung mit EPDM",
    intro:
      "EPDM ist eine flexible Abdichtungslösung für geeignete Flachdächer. Die konkrete Eignung hängt vom vorhandenen Aufbau und den technischen Anforderungen ab.",
    breadcrumbs: bc({ label: "Flachdach", to: "/leistungen/flachdach" }, { label: "EPDM" }),
    cta: { label: "EPDM-Flachdach anfragen", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "EPDM Flachdach Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "hohe Elastizität",
          "großflächige Verlegung möglich",
          "wenige Nahtstellen je nach Zuschnitt",
          "beständig gegen Witterungseinflüsse",
        ],
      },
      {
        type: "list",
        h2: "Einsatzbereiche",
        items: [
          "Flachdächer im Wohnbereich",
          "Anbauten und Carports",
          "Dachflächen mit einfachen Geometrien",
          "Erneuerung vorhandener Abdichtungen",
        ],
      },
      {
        type: "text",
        h2: "Worauf es bei der Erneuerung ankommt",
        paragraphs: [
          "Wichtig sind ein geeigneter Untergrund, sauber ausgeführte Anschlüsse an aufgehende Bauteile sowie eine funktionierende Entwässerung. Auch Durchdringungen wie Lüftungen müssen fachgerecht eingebunden werden.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/flachdach/pvc",
    title: "Flachdach PVC Köln & Bonn | Robert Dachservice",
    description:
      "PVC-Dachbahnen für Flachdächer in Köln und Bonn. Kunststoffabdichtung für geeignete Flachdachkonstruktionen – fachgerecht geplant und ausgeführt.",
    eyebrow: "Flachdach",
    h1: "Flachdachabdichtung mit PVC-Dachbahnen",
    intro:
      "PVC-Dachbahnen können für geeignete Flachdachkonstruktionen eingesetzt werden. Entscheidend sind Dachaufbau, Untergrund, Anschlüsse und die konkreten Anforderungen des Gebäudes.",
    breadcrumbs: bc({ label: "Flachdach", to: "/leistungen/flachdach" }, { label: "PVC" }),
    cta: { label: "PVC-Flachdach anfragen", to: "/kontakt" },
    blocks: [
      { type: "placeholder", label: "PVC Flachdach Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "geringes Gewicht",
          "verschweißbare Nähte",
          "verschiedene Verlegevarianten",
          "geeignet für größere Dachflächen",
        ],
      },
      {
        type: "list",
        h2: "Einsatzbereiche",
        items: [
          "Gewerbe- und Industriedächer",
          "Wohngebäude mit Flachdach",
          "Dachflächen mit Aufbauten",
          "Sanierung bestehender Kunststoffabdichtungen",
        ],
      },
      {
        type: "text",
        h2: "Worauf es bei der Erneuerung ankommt",
        paragraphs: [
          "Materialverträglichkeit mit dem Untergrund, Befestigung, Randabschlüsse und Entwässerung sollten vorab geklärt werden. Eine Bestandsaufnahme zeigt, welcher Aufbau technisch sinnvoll ist.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dachdaemmung",
    title: "Dachdämmung Köln & Bonn | Robert Dachservice",
    description:
      "Dachdämmung in Köln und Bonn: Aufsparren-, Zwischensparren- und Untersparrendämmung sowie Dampfbremse – abgestimmt auf den vorhandenen Dachaufbau.",
    eyebrow: "Leistung",
    h1: "Dachdämmung in Köln & Bonn",
    intro:
      "Eine fachgerecht geplante Dachdämmung kann dazu beitragen, Wärmeverluste zu reduzieren und das Raumklima zu verbessern. Welche Dämmkonstruktion sinnvoll ist, hängt vom vorhandenen Dachaufbau und vom Gebäude ab.",
    breadcrumbs: bc({ label: "Dachdämmung" }),
    cta: { label: "Dachdämmung anfragen", to: "/kontakt" },
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Dachdämmung Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "text",
        h2: "Dämmung passend zum Dachaufbau",
        paragraphs: [
          "Nicht jede Dämmvariante eignet sich für jedes Dach. Deshalb sollte vor der Ausführung geprüft werden, wie der bestehende Aufbau aussieht und welche bauphysikalischen Anforderungen berücksichtigt werden müssen.",
        ],
      },
      { type: "cards", h2: "Mögliche Dämmvarianten", cards: daemmungLinks },
      {
        type: "list",
        h2: "Mögliche Dämmstoffe",
        items: [
          "Mineralwolle",
          "Steinwolle",
          "weitere geeignete Dämmsysteme je nach Aufbau",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dachdaemmung/aufsparrendaemmung",
    title: "Aufsparrendämmung Köln & Bonn | Robert Dachservice",
    description:
      "Aufsparrendämmung in Köln und Bonn: Dämmebene oberhalb der Sparren, häufig in Verbindung mit einer neuen Dacheindeckung.",
    eyebrow: "Dachdämmung",
    h1: "Aufsparrendämmung",
    intro:
      "Bei einer Aufsparrendämmung liegt die Dämmebene oberhalb der Sparren. Diese Variante wird häufig dann betrachtet, wenn die Dacheindeckung ohnehin erneuert wird.",
    breadcrumbs: bc(
      { label: "Dachdämmung", to: "/leistungen/dachdaemmung" },
      { label: "Aufsparrendämmung" },
    ),
    cta: { label: "Aufsparrendämmung anfragen", to: "/kontakt" },
    blocks: [
      {
        type: "text",
        h2: "Was ist eine Aufsparrendämmung?",
        paragraphs: [
          "Die Dämmung wird als durchgehende Ebene über der Sparrenkonstruktion angeordnet. Die Sparren bleiben dabei innen sichtbar, sofern dies gewünscht ist.",
        ],
      },
      {
        type: "text",
        h2: "Wo wird sie eingesetzt?",
        paragraphs: [
          "Typischerweise bei der Erneuerung der Dacheindeckung, bei Dachsanierungen von außen sowie im Neubau.",
        ],
      },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "durchgehende Dämmebene",
          "Innenausbau bleibt weitgehend unberührt",
          "Sparren können sichtbar bleiben",
          "gute Kombination mit einer neuen Dacheindeckung",
        ],
      },
      {
        type: "list",
        h2: "Wichtige Planungsaspekte",
        items: [
          "Aufbauhöhe und Dachrandanschlüsse",
          "Anschlüsse an Kamin, Gauben und Nachbarbebauung",
          "luftdichte Ebene und Dampfbremse",
          "Zustand der Holzkonstruktion",
        ],
      },
      {
        type: "text",
        h2: "Zusammenhang mit dem vorhandenen Dachaufbau",
        paragraphs: [
          "Ob eine Aufsparrendämmung sinnvoll ist, hängt vom Zustand der Konstruktion, der geplanten Dacheindeckung und den baulichen Randbedingungen ab.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dachdaemmung/zwischensparrendaemmung",
    title: "Zwischensparrendämmung Köln & Bonn | Robert Dachservice",
    description:
      "Zwischensparrendämmung in Köln und Bonn: Dämmung zwischen den Sparren, häufig beim Dachausbau oder bei Sanierung von innen.",
    eyebrow: "Dachdämmung",
    h1: "Zwischensparrendämmung",
    intro:
      "Bei der Zwischensparrendämmung wird der Raum zwischen den Sparren mit Dämmstoff ausgefüllt. Sie wird häufig bei Arbeiten von innen umgesetzt.",
    breadcrumbs: bc(
      { label: "Dachdämmung", to: "/leistungen/dachdaemmung" },
      { label: "Zwischensparrendämmung" },
    ),
    cta: { label: "Zwischensparrendämmung anfragen", to: "/kontakt" },
    blocks: [
      {
        type: "text",
        h2: "Was ist eine Zwischensparrendämmung?",
        paragraphs: [
          "Der Dämmstoff wird zwischen den vorhandenen Sparren eingebracht. Die mögliche Dämmstärke richtet sich daher nach der Sparrenhöhe.",
        ],
      },
      {
        type: "text",
        h2: "Wo wird sie eingesetzt?",
        paragraphs: [
          "Beim Ausbau von Dachgeschossen, bei Modernisierungen von innen und in Kombination mit einer ergänzenden Untersparrendämmung.",
        ],
      },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "Ausführung von innen möglich",
          "Dacheindeckung muss nicht zwingend erneuert werden",
          "gut kombinierbar mit weiteren Dämmebenen",
          "verschiedene Dämmstoffe einsetzbar",
        ],
      },
      {
        type: "list",
        h2: "Wichtige Planungsaspekte",
        items: [
          "vorhandene Sparrenhöhe",
          "vorhandene Unterdeckung",
          "luftdichte Ebene und Dampfbremse",
          "Anschlüsse an Fenster, Gauben und Wände",
        ],
      },
      {
        type: "text",
        h2: "Zusammenhang mit dem vorhandenen Dachaufbau",
        paragraphs: [
          "Vor der Ausführung sollte geprüft werden, ob die vorhandene Konstruktion trocken und intakt ist und wie die Feuchtigkeitsführung im Aufbau gelöst wird.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dachdaemmung/untersparrendaemmung",
    title: "Untersparrendämmung Köln & Bonn | Robert Dachservice",
    description:
      "Untersparrendämmung in Köln und Bonn: ergänzende Dämmebene unterhalb der Sparren als sinnvolle Kombination mit anderen Dämmvarianten.",
    eyebrow: "Dachdämmung",
    h1: "Untersparrendämmung",
    intro:
      "Die Untersparrendämmung ist eine zusätzliche Dämmebene unterhalb der Sparren und wird meist ergänzend eingesetzt.",
    breadcrumbs: bc(
      { label: "Dachdämmung", to: "/leistungen/dachdaemmung" },
      { label: "Untersparrendämmung" },
    ),
    cta: { label: "Untersparrendämmung anfragen", to: "/kontakt" },
    blocks: [
      {
        type: "text",
        h2: "Was ist eine Untersparrendämmung?",
        paragraphs: [
          "Unterhalb der Sparren wird eine weitere Dämmschicht angeordnet, meist in Verbindung mit einer Unterkonstruktion und der Innenbekleidung.",
        ],
      },
      {
        type: "text",
        h2: "Wo wird sie eingesetzt?",
        paragraphs: [
          "Wenn die Sparrenhöhe für die gewünschte Dämmstärke nicht ausreicht oder eine vorhandene Zwischensparrendämmung ergänzt werden soll.",
        ],
      },
      {
        type: "list",
        h2: "Vorteile",
        items: [
          "ergänzt bestehende Dämmebenen",
          "kann Wärmebrücken im Sparrenbereich reduzieren",
          "Ausführung von innen",
          "Platz für Installationsebene möglich",
        ],
      },
      {
        type: "list",
        h2: "Wichtige Planungsaspekte",
        items: [
          "verbleibende Raumhöhe",
          "Lage der luftdichten Ebene",
          "Anschlussdetails an Wände und Fenster",
          "Abstimmung mit der vorhandenen Dämmung",
        ],
      },
      {
        type: "text",
        h2: "Zusammenhang mit dem vorhandenen Dachaufbau",
        paragraphs: [
          "Die Untersparrendämmung sollte immer im Zusammenspiel mit dem übrigen Aufbau betrachtet werden, damit der Feuchteschutz gewährleistet bleibt.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/dachdaemmung/dampfbremse",
    title: "Dampfbremse & Luftdichtheit | Robert Dachservice",
    description:
      "Dampfbremse und luftdichte Ebene im Dachaufbau – fachgerechte Ausführung von Anschlüssen und Überlappungen in Köln, Bonn und Umgebung.",
    eyebrow: "Dachdämmung",
    h1: "Dampfbremse und luftdichte Ebene",
    intro:
      "Die Dampfbremse ist ein zentraler Bestandteil eines gedämmten Dachaufbaus. Sie beeinflusst, wie Feuchtigkeit im Aufbau reguliert wird.",
    breadcrumbs: bc(
      { label: "Dachdämmung", to: "/leistungen/dachdaemmung" },
      { label: "Dampfbremse" },
    ),
    cta: { label: "Beratung zur Dampfbremse anfragen", to: "/kontakt" },
    blocks: [
      {
        type: "text",
        h2: "Was ist eine Dampfbremse?",
        paragraphs: [
          "Eine Dampfbremse ist eine Bahn auf der Rauminnenseite der Dämmung, die den Feuchtigkeitstransport aus dem Innenraum in den Dachaufbau begrenzt und zugleich die luftdichte Ebene bildet.",
        ],
      },
      {
        type: "text",
        h2: "Wo wird sie eingesetzt?",
        paragraphs: [
          "In gedämmten Steildächern, bei Dachausbauten und bei Sanierungen von innen.",
        ],
      },
      {
        type: "list",
        h2: "Vorteile einer fachgerechten Ausführung",
        items: [
          "kontrollierte Feuchtigkeitsführung im Aufbau",
          "weniger unkontrollierte Luftströmungen",
          "Schutz der Dämmebene",
          "saubere Anschlüsse an Bauteile",
        ],
      },
      {
        type: "list",
        h2: "Wichtige Planungsaspekte",
        items: [
          "Wahl der geeigneten Bahn",
          "Überlappungen und Verklebungen",
          "Durchdringungen für Installationen",
          "Anschlüsse an Wände, Fenster und Gauben",
        ],
      },
      {
        type: "text",
        h2: "Zusammenhang mit dem vorhandenen Dachaufbau",
        paragraphs: [
          "Die passende Lösung hängt vom gesamten Aufbau ab – von der Unterdeckung über die Dämmung bis zur Innenbekleidung.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/spenglerarbeiten",
    title: "Spenglerarbeiten Köln & Bonn | Robert Dachservice",
    description:
      "Spenglerarbeiten in Köln und Bonn: Dachrinnen, Fallrohre, Dachanschlüsse, Blechverwahrungen, Kehlen sowie Ortgang und First.",
    eyebrow: "Leistung",
    h1: "Spenglerarbeiten für Dach und Gebäudehülle",
    intro:
      "Spenglerarbeiten sind ein wichtiger Bestandteil eines funktionierenden Daches. Dachrinnen, Fallrohre, Anschlüsse und Blechdetails sorgen dafür, dass Wasser kontrolliert abgeführt wird und empfindliche Bereiche des Gebäudes geschützt bleiben.",
    breadcrumbs: bc({ label: "Spenglerarbeiten" }),
    cta: { label: "Spenglerarbeiten anfragen", to: "/kontakt" },
    secondaryCta: CALL,
    blocks: [
      { type: "placeholder", label: "Spenglerarbeiten Foto – wird später ersetzt", ratio: "wide" },
      { type: "cards", h2: "Unsere Spenglerarbeiten", cards: spenglerLinks },
      {
        type: "text",
        h2: "Warum saubere Blechdetails wichtig sind",
        paragraphs: [
          "Gerade an Übergängen, Anschlüssen und Entwässerungsbereichen können kleine Mängel zu Feuchtigkeitsschäden führen.",
        ],
      },
    ],
  },
  {
    path: "/leistungen/neubau-neueindeckung",
    title: "Neubau & Neueindeckung Köln & Bonn | Robert Dachservice",
    description:
      "Dacharbeiten bei Neubau und Neueindeckung in Köln und Bonn: Dachkonstruktion, Dämmung, Dacheindeckung, Anschlüsse und Entwässerung aus einer Hand abgestimmt.",
    eyebrow: "Leistung",
    h1: "Dacharbeiten bei Neubau und Neueindeckung",
    intro:
      "Bei einem Neubau oder einer umfassenden Neueindeckung müssen Dachaufbau, Dämmung, Dacheindeckung, Anschlüsse und Entwässerung aufeinander abgestimmt werden.",
    breadcrumbs: bc({ label: "Neubau / Neueindeckung" }),
    cta: { label: "Neubau anfragen", to: "/kontakt" },
    secondaryCta: QUOTE,
    blocks: [
      { type: "placeholder", label: "Neubau Foto – wird später ersetzt", ratio: "wide" },
      {
        type: "list",
        h2: "Mögliche Leistungen",
        items: [
          "Dachkonstruktion",
          "Dachdämmung",
          "Dacheindeckung",
          "Dachanschlüsse",
          "Spenglerarbeiten",
          "Entwässerung",
        ],
      },
      {
        type: "text",
        h2: "Abstimmung im Projektverlauf",
        paragraphs: [
          "Welche Arbeiten konkret übernommen werden, wird im Vorfeld gemeinsam festgelegt. So lassen sich Schnittstellen zu anderen Gewerken frühzeitig klären.",
        ],
      },
    ],
  },
];

const spenglerDetails: Record<
  string,
  { h1: string; intro: string; probleme: string[]; leistungen: string[]; warum: string; title: string; description: string }
> = {
  dachrinnen: {
    title: "Dachrinnen Köln & Bonn | Robert Dachservice",
    description:
      "Dachrinnen in Köln und Bonn: Montage, Reparatur und Erneuerung für eine zuverlässige Dachentwässerung.",
    h1: "Dachrinnen – Montage, Reparatur und Erneuerung",
    intro:
      "Die Dachrinne nimmt das Niederschlagswasser der Dachfläche auf und führt es kontrolliert ab. Undichte oder falsch geneigte Rinnen können zu Feuchtigkeitsschäden an Fassade und Sockel führen.",
    probleme: [
      "undichte Nähte und Stöße",
      "durchgerostete oder beschädigte Rinnen",
      "Verstopfungen durch Laub",
      "unzureichendes Gefälle",
      "lose Rinnenhalter",
    ],
    leistungen: [
      "Erneuerung kompletter Rinnenstränge",
      "Reparatur einzelner Abschnitte",
      "Anpassung von Gefälle und Halterungen",
      "Reinigung und Kontrolle",
    ],
    warum:
      "Eine funktionierende Dachrinne schützt Fassade, Sockel und Kellerbereiche vor unkontrolliert ablaufendem Wasser. Sauber ausgeführte Stöße und Halterungen sind dafür entscheidend.",
  },
  fallrohre: {
    title: "Fallrohre Köln & Bonn | Robert Dachservice",
    description:
      "Fallrohre in Köln und Bonn: Montage, Reparatur und Erneuerung für die sichere Ableitung von Regenwasser.",
    h1: "Fallrohre für eine sichere Wasserableitung",
    intro:
      "Fallrohre leiten das gesammelte Regenwasser von der Dachrinne bis zur Entwässerung. Schäden oder Verstopfungen können schnell zu Wasseraustritt an der Fassade führen.",
    probleme: [
      "verstopfte Rohre",
      "undichte Verbindungen",
      "beschädigte Bögen",
      "lose Schellen",
      "unpassender Anschluss an die Grundleitung",
    ],
    leistungen: [
      "Neumontage von Fallrohren",
      "Austausch beschädigter Abschnitte",
      "Anpassung von Übergängen und Bögen",
      "Kontrolle der Ableitung",
    ],
    warum:
      "Bei defekten Fallrohren läuft Wasser dauerhaft an der Fassade herunter. Das kann zu Durchfeuchtung und Folgeschäden führen.",
  },
  dachanschluesse: {
    title: "Dachanschlüsse Köln & Bonn | Robert Dachservice",
    description:
      "Dachanschlüsse in Köln und Bonn: Übergänge an Wänden, Kaminen und Aufbauten fachgerecht ausführen und abdichten.",
    h1: "Dachanschlüsse fachgerecht ausführen",
    intro:
      "Anschlüsse an Wände, Kamine, Gauben und Dachaufbauten gehören zu den empfindlichsten Bereichen eines Daches. Hier entscheidet die Ausführung über die Dichtigkeit.",
    probleme: [
      "gelöste oder gerissene Anschlüsse",
      "fehlende Verwahrungen",
      "Feuchtigkeitsspuren im Innenbereich",
      "beschädigte Abdichtungen am Kamin",
      "unsaubere Übergänge an Wandflächen",
    ],
    leistungen: [
      "Erneuerung von Wand- und Kaminanschlüssen",
      "Einbau von Anschlussblechen",
      "Abdichtung von Durchdringungen",
      "Kontrolle bestehender Anschlüsse",
    ],
    warum:
      "An Anschlüssen trifft die Dachfläche auf andere Bauteile. Kleine Mängel führen hier besonders schnell zu eindringender Feuchtigkeit.",
  },
  blechverwahrungen: {
    title: "Blechverwahrungen Köln & Bonn | Robert Dachservice",
    description:
      "Blechverwahrungen in Köln und Bonn: Schutz empfindlicher Dach- und Fassadenbereiche durch fachgerechte Blechdetails.",
    h1: "Blechverwahrungen am Dach",
    intro:
      "Blechverwahrungen schützen Bauteilkanten und Übergänge vor Witterung und leiten Wasser gezielt ab.",
    probleme: [
      "verformte oder lose Bleche",
      "undichte Falze",
      "korrodierte Abschlüsse",
      "fehlende Verwahrungen an Mauerkronen",
      "unsachgemäße frühere Reparaturen",
    ],
    leistungen: [
      "Herstellung passgenauer Verwahrungen",
      "Erneuerung beschädigter Bleche",
      "Ausführung von Falzen und Kantungen",
      "Abstimmung auf die Dacheindeckung",
    ],
    warum:
      "Verwahrungen sind oft klein, aber technisch entscheidend. Fehlerhafte Details können Feuchtigkeit direkt in die Konstruktion leiten.",
  },
  kehlen: {
    title: "Kehlen am Dach | Robert Dachservice Köln & Bonn",
    description:
      "Kehlen am Dach in Köln und Bonn: fachgerechte Ausführung stark beanspruchter Bereiche der Dachentwässerung.",
    h1: "Kehlen – stark beanspruchte Dachbereiche",
    intro:
      "In Kehlen treffen zwei Dachflächen aufeinander. Dort fließen große Wassermengen zusammen, weshalb die Ausführung besonders sorgfältig erfolgen muss.",
    probleme: [
      "undichte Kehlbleche",
      "Ablagerungen und Verstopfungen",
      "zu geringe Kehlbreite",
      "Korrosion",
      "Rückstau bei Starkregen",
    ],
    leistungen: [
      "Erneuerung von Kehlblechen",
      "Anpassung der Kehlausbildung",
      "Reparatur beschädigter Bereiche",
      "Kontrolle und Reinigung",
    ],
    warum:
      "Kehlen führen deutlich mehr Wasser ab als die übrige Dachfläche. Fehler wirken sich hier besonders schnell aus.",
  },
  "ortgang-first": {
    title: "Ortgang & First Köln & Bonn | Robert Dachservice",
    description:
      "Ortgang und First in Köln und Bonn: Randabschlüsse und Firstbereiche als sichtbare und technische Dachdetails fachgerecht ausführen.",
    h1: "Ortgang und First",
    intro:
      "Ortgang und First prägen das Erscheinungsbild eines Daches und übernehmen gleichzeitig wichtige technische Aufgaben an Rand und Kante.",
    probleme: [
      "lose Firstziegel",
      "beschädigte Ortgangbleche",
      "eingedrungene Feuchtigkeit am Dachrand",
      "verschlissene Firstbänder",
      "Sturmschäden am Randbereich",
    ],
    leistungen: [
      "Neuverlegung von Firstbereichen",
      "Erneuerung von Ortgangausbildungen",
      "Blech- und Ziegeldetails",
      "Kontrolle nach Sturmereignissen",
    ],
    warum:
      "Rand- und Firstbereiche sind Wind und Wetter besonders ausgesetzt. Eine saubere Ausführung erhöht die Sicherheit der gesamten Dachfläche.",
  },
};

for (const link of spenglerLinks) {
  const slug = link.to.split("/").pop()!;
  const d = spenglerDetails[slug]!;
  leistungenPages.push({
    path: link.to,
    title: d.title,
    description: d.description,
    eyebrow: "Spenglerarbeiten",
    h1: d.h1,
    intro: d.intro,
    breadcrumbs: bc(
      { label: "Spenglerarbeiten", to: "/leistungen/spenglerarbeiten" },
      { label: link.title },
    ),
    cta: { label: "Spenglerarbeiten anfragen", to: "/kontakt" },
    blocks: [
      { type: "list", h2: "Typische Probleme", items: d.probleme },
      { type: "list", h2: "Unsere Leistungen", items: d.leistungen },
      {
        type: "text",
        h2: "Warum fachgerechte Ausführung wichtig ist",
        paragraphs: [d.warum],
      },
    ],
  });
}

import type { PageDef } from "./types";

const QUOTE = { label: "Angebot anfordern", to: "/kontakt" };
const CALL = { label: "Jetzt anrufen", tel: true };

type Article = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { h2: string; paragraphs?: string[]; items?: string[] }[];
  cta: { label: string; to: string };
};

const articles: Article[] = [
  {
    slug: "dacheindeckung-erneuern-zeitpunkt",
    title: "Wann muss eine Dacheindeckung erneuert werden? | Ratgeber",
    description:
      "Woran erkennt man, dass eine Dacheindeckung erneuert werden sollte? Anhaltspunkte, typische Anzeichen und was den Umfang bestimmt.",
    h1: "Wann muss eine Dacheindeckung erneuert werden?",
    intro:
      "Eine pauschale Altersgrenze gibt es nicht. Ob eine Dachdeckung erneuert werden sollte, hängt vom Zustand der Dachfläche, von wiederkehrenden Schäden und von der Funktion des gesamten Aufbaus ab.",
    sections: [
      {
        h2: "Typische Anzeichen",
        items: [
          "wiederkehrende Undichtigkeiten",
          "viele beschädigte oder verwitterte Ziegel",
          "häufige Reparaturen an derselben Stelle",
          "sichtbare Feuchtigkeitsspuren im Dachraum",
          "lose Ziegel nach Sturmereignissen",
        ],
      },
      {
        h2: "Was den Umfang bestimmt",
        paragraphs: [
          "Der notwendige Umfang ergibt sich aus dem Zustand der Bauteile unter der Dachdeckung: Lattung, Unterdeckung, Dämmung, Dampfbremse und Holzkonstruktion. Sind diese intakt, kann die Erneuerung der äußeren Dachhaut im Mittelpunkt stehen.",
        ],
      },
      {
        h2: "Praktisches Vorgehen",
        paragraphs: [
          "Sinnvoll ist eine Betrachtung des Bestands, bevor Entscheidungen über Material und Leistungsumfang getroffen werden.",
        ],
      },
    ],
    cta: { label: "Dacheindeckung anfragen", to: "/leistungen/dacheindeckung-erneuern" },
  },
  {
    slug: "dacheindeckung-oder-dachsanierung",
    title: "Dacheindeckung erneuern oder Dach sanieren? | Ratgeber",
    description:
      "Der Unterschied zwischen der Erneuerung der Dacheindeckung und einer kompletten Dachsanierung – und wovon die Entscheidung abhängt.",
    h1: "Dacheindeckung erneuern oder Dach sanieren – wo liegt der Unterschied?",
    intro:
      "Beide Begriffe werden oft gleichgesetzt, beschreiben aber unterschiedliche Umfänge.",
    sections: [
      {
        h2: "Dacheindeckung erneuern",
        paragraphs: [
          "Hier steht die äußere Dachhaut im Mittelpunkt: Die vorhandene Deckung wird zurückgebaut, der Untergrund geprüft und eine neue Dacheindeckung montiert.",
        ],
      },
      {
        h2: "Dachsanierung",
        paragraphs: [
          "Eine Sanierung umfasst zusätzlich weitere Bauteile des Dachaufbaus – zum Beispiel Lattung, Unterdeckung, Dämmung, Dampfbremse oder Teile der Holzkonstruktion.",
        ],
      },
      {
        h2: "Wovon die Entscheidung abhängt",
        items: [
          "Zustand der Unterkonstruktion",
          "Feuchtigkeit im Aufbau",
          "geplante Nutzung des Dachraums",
          "energetische Ziele",
          "vorhandene Anschlüsse und Details",
        ],
      },
    ],
    cta: { label: "Dachsanierung ansehen", to: "/leistungen/dachsanierung" },
  },
  {
    slug: "undichtes-dach",
    title: "Was tun bei einem undichten Dach? | Ratgeber",
    description:
      "Undichtes Dach: erste Schritte, worauf zu achten ist und wann der Dachnotdienst sinnvoll ist.",
    h1: "Was tun bei einem undichten Dach?",
    intro:
      "Dringt Wasser ein, sollte zunächst der Schaden begrenzt und anschließend die Ursache geklärt werden.",
    sections: [
      {
        h2: "Erste Schritte",
        items: [
          "Wasser auffangen und empfindliche Gegenstände schützen",
          "betroffene Bereiche fotografieren",
          "Strominstallationen im betroffenen Bereich beachten",
          "keine riskanten Arbeiten auf dem Dach durchführen",
        ],
      },
      {
        h2: "Ursachen sind nicht immer offensichtlich",
        paragraphs: [
          "Wasser kann an einer Stelle eintreten und an einer anderen sichtbar werden. Häufige Ursachen sind beschädigte Ziegel, defekte Anschlüsse, undichte Kehlen oder Probleme an Durchdringungen.",
        ],
      },
      {
        h2: "Wann der Notdienst sinnvoll ist",
        paragraphs: [
          "Bei laufendem Wassereintritt oder nach einem Sturmschaden ist eine kurzfristige Sicherung sinnvoll, um Folgeschäden zu begrenzen.",
        ],
      },
    ],
    cta: { label: "Dachnotdienst ansehen", to: "/dachnotdienst" },
  },
  {
    slug: "dachziegel-beschaedigt",
    title: "Dachziegel beschädigt – wann reicht eine Reparatur? | Ratgeber",
    description:
      "Beschädigte Dachziegel: wann eine gezielte Reparatur ausreicht und wann über eine Erneuerung nachgedacht werden sollte.",
    h1: "Dachziegel beschädigt – wann reicht eine Reparatur?",
    intro:
      "Einzelne beschädigte Ziegel lassen sich häufig gezielt austauschen. Entscheidend ist, ob es sich um einen lokalen Schaden handelt.",
    sections: [
      {
        h2: "Wann eine Reparatur meist genügt",
        items: [
          "einzelne gebrochene oder verschobene Ziegel",
          "lokaler Sturmschaden",
          "punktuelle Undichtigkeit ohne größere Feuchtigkeitsspuren",
        ],
      },
      {
        h2: "Wann mehr zu prüfen ist",
        items: [
          "viele beschädigte Ziegel über die Fläche verteilt",
          "durchfeuchtete Dämmung",
          "beschädigte Unterdeckung",
          "wiederkehrende Schäden an denselben Bereichen",
        ],
      },
      {
        h2: "Verfügbarkeit passender Ziegel",
        paragraphs: [
          "Bei älteren Dächern ist zu prüfen, ob passende Ersatzziegel verfügbar sind. Das kann die Entscheidung zwischen Reparatur und Erneuerung beeinflussen.",
        ],
      },
    ],
    cta: { label: "Dachreparatur anfragen", to: "/leistungen/dachreparatur" },
  },
  {
    slug: "tondachziegel-oder-betondachsteine",
    title: "Tondachziegel oder Betondachsteine? | Ratgeber",
    description:
      "Tondachziegel und Betondachsteine im Vergleich: Optik, Eigenschaften und worauf bei der Auswahl geachtet werden sollte.",
    h1: "Tondachziegel oder Betondachsteine?",
    intro:
      "Beide Materialien werden häufig für Steildächer eingesetzt. Die Wahl hängt von Optik, Konstruktion und persönlichen Anforderungen ab.",
    sections: [
      {
        h2: "Tondachziegel",
        paragraphs: [
          "Gebrannter Ton bietet eine natürliche Optik und viele Form- und Farbvarianten, von der klassischen Hohlpfanne bis zum flachen Modell.",
        ],
      },
      {
        h2: "Betondachsteine",
        paragraphs: [
          "Betondachsteine sind robust und in verschiedenen Oberflächen erhältlich. Sie ermöglichen ebenfalls klassische und moderne Gestaltungen.",
        ],
      },
      {
        h2: "Worauf bei der Auswahl geachtet wird",
        items: [
          "Dachneigung und Dachform",
          "Gewicht und Unterkonstruktion",
          "gewünschte Optik und Farbgebung",
          "Umgebungsbebauung und Vorgaben",
        ],
      },
    ],
    cta: { label: "Materialien vergleichen", to: "/leistungen/dacheindeckung-erneuern" },
  },
  {
    slug: "schiefer-dacheindeckung",
    title: "Schiefer als Dacheindeckung – worauf kommt es an? | Ratgeber",
    description:
      "Schieferdeckung: Deckarten, Verarbeitung und worauf bei Planung und Ausführung geachtet werden sollte.",
    h1: "Schiefer als Dacheindeckung – worauf kommt es an?",
    intro:
      "Schiefer ist ein Naturprodukt und wird traditionell im Dachdeckerhandwerk verarbeitet. Die Ausführung erfordert Erfahrung.",
    sections: [
      {
        h2: "Deckarten und Gestaltung",
        paragraphs: [
          "Je nach Deckart entstehen sehr unterschiedliche Erscheinungsbilder – von ruhigen, gleichmäßigen Flächen bis zu lebendigen Strukturen.",
        ],
      },
      {
        h2: "Planungsaspekte",
        items: [
          "Unterkonstruktion und Tragfähigkeit",
          "Dachneigung",
          "Ausbildung von Kehlen, Graten und Anschlüssen",
          "Detaillösungen an Gauben und Kaminen",
        ],
      },
      {
        h2: "Ausführung",
        paragraphs: [
          "Die handwerkliche Ausführung bestimmt bei Schiefer besonders stark das Ergebnis – sowohl optisch als auch technisch.",
        ],
      },
    ],
    cta: { label: "Schiefer ansehen", to: "/leistungen/dacheindeckung-erneuern/schiefer" },
  },
  {
    slug: "flachdach-bitumen-epdm-pvc",
    title: "Flachdach: Bitumen, EPDM oder PVC? | Ratgeber",
    description:
      "Flachdachabdichtung im Überblick: Bitumen, EPDM und PVC – Eigenschaften und Auswahlkriterien.",
    h1: "Flachdach: Bitumen, EPDM oder PVC?",
    intro:
      "Für die Abdichtung von Flachdächern kommen unterschiedliche Systeme infrage. Welche Lösung passt, hängt vom Bestand und den Anforderungen ab.",
    sections: [
      {
        h2: "Die Systeme im Überblick",
        items: [
          "Bitumen: bewährt, mehrlagig ausführbar, reparaturfreundlich",
          "EPDM: elastisch, großflächig verlegbar",
          "PVC: leicht, mit verschweißten Nähten",
        ],
      },
      {
        h2: "Auswahlkriterien",
        items: [
          "vorhandener Untergrund und Bestandsaufbau",
          "Dachgeometrie und Durchdringungen",
          "Nutzung der Dachfläche",
          "Entwässerungssituation",
        ],
      },
      {
        h2: "Bestand zuerst betrachten",
        paragraphs: [
          "Vor der Materialentscheidung sollte geklärt werden, ob eine Reparatur, eine Ergänzung oder ein vollständiger Neuaufbau sinnvoll ist.",
        ],
      },
    ],
    cta: { label: "Flachdach ansehen", to: "/leistungen/flachdach" },
  },
  {
    slug: "welche-dachdaemmung",
    title: "Welche Dachdämmung ist sinnvoll? | Ratgeber",
    description:
      "Aufsparren-, Zwischensparren- oder Untersparrendämmung: welche Variante wann in Betracht kommt und was zu beachten ist.",
    h1: "Welche Dachdämmung ist sinnvoll?",
    intro:
      "Die passende Dämmvariante ergibt sich aus dem vorhandenen Dachaufbau, der geplanten Nutzung und dem Zeitpunkt der Maßnahme.",
    sections: [
      {
        h2: "Die Varianten",
        items: [
          "Aufsparrendämmung: von außen, meist mit neuer Dacheindeckung",
          "Zwischensparrendämmung: von innen, begrenzt durch die Sparrenhöhe",
          "Untersparrendämmung: ergänzende Ebene von innen",
        ],
      },
      {
        h2: "Bauphysik beachten",
        paragraphs: [
          "Neben der Dämmstärke sind die luftdichte Ebene, die Dampfbremse und die Anschlussdetails entscheidend für einen funktionierenden Aufbau.",
        ],
      },
      {
        h2: "Keine pauschalen Versprechen",
        paragraphs: [
          "Wie stark sich eine Dämmmaßnahme auswirkt, hängt vom konkreten Gebäude ab. Eine individuelle Betrachtung ist deshalb sinnvoll.",
        ],
      },
    ],
    cta: { label: "Dachdämmung ansehen", to: "/leistungen/dachdaemmung" },
  },
  {
    slug: "sturmschaden-am-dach",
    title: "Was tun nach einem Sturmschaden am Dach? | Ratgeber",
    description:
      "Sturmschaden am Dach: sinnvolle erste Schritte, Dokumentation und wann eine schnelle Sicherung wichtig ist.",
    h1: "Was tun nach einem Sturmschaden am Dach?",
    intro:
      "Nach einem Sturm sollte das Dach möglichst zeitnah betrachtet werden – auch wenn zunächst kein Wasser eindringt.",
    sections: [
      {
        h2: "Sinnvolle erste Schritte",
        items: [
          "Bereich um das Gebäude sichern",
          "Schäden vom Boden aus fotografieren",
          "keine eigenen Arbeiten auf dem Dach",
          "Schaden dokumentieren und melden",
        ],
      },
      {
        h2: "Worauf zu achten ist",
        items: [
          "verschobene oder fehlende Ziegel",
          "beschädigte Ortgang- und Firstbereiche",
          "gelöste Bleche und Rinnen",
          "Feuchtigkeitsspuren im Dachraum",
        ],
      },
      {
        h2: "Schnelle Sicherung",
        paragraphs: [
          "Eine kurzfristige Sicherung kann helfen, Folgeschäden durch Regen zu begrenzen, bevor die endgültige Reparatur erfolgt.",
        ],
      },
    ],
    cta: { label: "Dachnotdienst ansehen", to: "/dachnotdienst" },
  },
  {
    slug: "dachnotdienst-wann-noetig",
    title: "Wann ist ein Dachnotdienst erforderlich? | Ratgeber",
    description:
      "Dachnotdienst: In welchen Situationen schnelles Handeln sinnvoll ist und was bis zum Eintreffen getan werden kann.",
    h1: "Wann ist ein Dachnotdienst erforderlich?",
    intro:
      "Nicht jeder Dachschaden ist ein Notfall. Bei akutem Wassereintritt oder Gefahr für Personen ist schnelles Handeln jedoch wichtig.",
    sections: [
      {
        h2: "Typische Notfallsituationen",
        items: [
          "laufender Wassereintritt",
          "abgedeckte Dachbereiche nach Sturm",
          "lose Bauteile mit Absturzgefahr",
          "großflächige Schäden an der Dachfläche",
        ],
      },
      {
        h2: "Was bis dahin hilft",
        items: [
          "Wasser auffangen",
          "gefährdete Bereiche absperren",
          "Schäden dokumentieren",
          "auf eigene Dacharbeiten verzichten",
        ],
      },
      {
        h2: "Danach folgt die dauerhafte Lösung",
        paragraphs: [
          "Nach der Sicherung wird geklärt, welche Reparatur oder welche weitergehende Maßnahme tatsächlich erforderlich ist.",
        ],
      },
    ],
    cta: { label: "Dachnotdienst ansehen", to: "/dachnotdienst" },
  },
];

export const ratgeberPages: PageDef[] = articles.map((a) => ({
  path: `/ratgeber/${a.slug}`,
  title: a.title,
  description: a.description,
  eyebrow: "Ratgeber",
  h1: a.h1,
  intro: a.intro,
  breadcrumbs: [{ label: "Ratgeber", to: "/ratgeber" }, { label: a.h1 }],
  cta: a.cta,
  secondaryCta: CALL,
  blocks: [
    ...a.sections.map((s) =>
      s.items
        ? ({ type: "list", h2: s.h2, items: s.items } as const)
        : ({ type: "text", h2: s.h2, paragraphs: s.paragraphs ?? [] } as const),
    ),
    {
      type: "callout",
      h2: "Fragen zu Ihrem Dach?",
      paragraphs: [
        "Beschreiben Sie Ihr Anliegen – wir melden uns und klären die nächsten Schritte.",
      ],
      cta: QUOTE,
    },
  ],
}));

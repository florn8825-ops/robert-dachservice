import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { business, mainServices, materialLinks } from "@/content/site";
import { CallLink, CtaLink } from "@/components/site/CtaLink";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

const TITLE = "Dachdecker Köln & Bonn | Robert Dachservice";
const DESCRIPTION =
  "Robert Dachservice – Dachdeckermeisterbetrieb für Köln, Bonn und Umgebung. Dachreparaturen, Dacheindeckung, Dachsanierung, Flachdach, Dämmung und 24/7 Dachnotdienst.";

const faq = [
  {
    q: "Muss bei einer alten Dacheindeckung das komplette Dach erneuert werden?",
    a: "Nein, nicht automatisch. Ob weitere Bauteile des Daches erneuert werden müssen, hängt vom tatsächlichen Zustand des Dachaufbaus ab. Bei einer Erneuerung der Dacheindeckung kann zunächst die äußere Dachdeckung im Mittelpunkt stehen.",
  },
  {
    q: "Übernimmt Robert Dachservice auch kleine Dachreparaturen?",
    a: "Ja. Auch kleinere Schäden wie beschädigte Dachziegel, lokale Undichtigkeiten oder bestimmte Sturmschäden können angefragt werden.",
  },
  {
    q: "Welche Materialien stehen für eine neue Dacheindeckung zur Verfügung?",
    a: "Je nach Dach und baulichen Voraussetzungen kommen unter anderem Tondachziegel, Betondachsteine, Schiefer, Bitumenschindeln oder Metall beziehungsweise Blech infrage.",
  },
  {
    q: "Wann sollte eine Dacheindeckung erneuert werden?",
    a: "Das hängt vom Zustand und Alter der vorhandenen Dachdeckung sowie von wiederkehrenden Schäden und der allgemeinen Funktion des Daches ab. Eine individuelle Beurteilung ist sinnvoll.",
  },
  {
    q: "Bietet Robert Dachservice einen Dachnotdienst an?",
    a: "Ja. Der Dachnotdienst ist 24/7 erreichbar. Bei akuten Dachschäden können Sie telefonisch Kontakt aufnehmen.",
  },
  {
    q: "In welchem Gebiet ist Robert Dachservice tätig?",
    a: "Der Schwerpunkt liegt auf Köln, Bonn und Umgebung.",
  },
];

const whyUs = [
  {
    title: "Dachdeckermeisterbetrieb",
    text: "Fachwissen und Erfahrung aus dem Dachdeckerhandwerk.",
  },
  {
    title: "Individuelle Beurteilung",
    text: "Nicht jedes Dach benötigt die gleiche Maßnahme. Wir betrachten den konkreten Zustand.",
  },
  {
    title: "Kleine und große Arbeiten",
    text: "Von der kleinen Reparatur bis zur Erneuerung einer kompletten Dacheindeckung.",
  },
  {
    title: "Klare Kommunikation",
    text: "Sie erhalten eine nachvollziehbare Einschätzung des notwendigen Leistungsumfangs.",
  },
  { title: "Regional für Sie da", text: "Köln, Bonn und Umgebung." },
];

const process = [
  {
    title: "Anfrage",
    text: "Beschreiben Sie uns Ihr Anliegen telefonisch oder über das Anfrageformular. Fotos können Sie später bei Bedarf mitsenden.",
  },
  {
    title: "Einschätzung",
    text: "Wir besprechen den Schaden oder Ihr Vorhaben und klären die nächsten Schritte.",
  },
  {
    title: "Besichtigung / Prüfung",
    text: "Wenn erforderlich, wird der Zustand des Daches vor Ort genauer betrachtet.",
  },
  {
    title: "Lösung",
    text: "Auf Basis des tatsächlichen Zustands wird der notwendige Leistungsumfang abgestimmt.",
  },
  { title: "Ausführung", text: "Die vereinbarten Dacharbeiten werden fachgerecht umgesetzt." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-navy/10 bg-navy text-navy-foreground">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow text-copper">Dachdeckermeisterbetrieb · {business.area}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Dachdecker in Köln, Bonn &amp; Umgebung
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
              Fachgerechte Dacharbeiten vom Dachdeckermeisterbetrieb – von kleinen Reparaturen und
              akuten Dachschäden bis zur Erneuerung Ihrer Dacheindeckung.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/kontakt">Angebot anfordern</CtaLink>
              <CallLink variant="onDark">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Jetzt anrufen
              </CallLink>
            </div>
            <p className="mt-8 border-t border-navy-foreground/15 pt-6 text-sm text-navy-foreground/60">
              Kleine Reparaturen · Dacheindeckung · Dachsanierung · 24/7 Dachnotdienst
            </p>
          </div>
          <ImagePlaceholder
            label="Hero Foto – wird später ersetzt"
            ratio="photo"
            className="border-navy-foreground/20 bg-navy-soft/40"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Dacharbeiten, die zu Ihrem Bedarf passen
          </h2>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Ob eine einzelne Dachziegel beschädigt ist, Wasser eindringt oder die bestehende
              Dacheindeckung nach vielen Jahren erneuert werden soll: Nicht jeder Schaden und nicht
              jedes alte Dach benötigt die gleiche Lösung.
            </p>
            <p>
              Wir prüfen den vorhandenen Zustand und besprechen mit Ihnen, welche Arbeiten
              tatsächlich erforderlich sind. So kann der Leistungsumfang gezielt auf Ihr Dach
              abgestimmt werden – von der kleinen Reparatur bis zur umfangreicheren Dachsanierung.
            </p>
            <div className="pt-2">
              <CtaLink to="/kontakt">Angebot anfordern</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-navy/10 bg-sand/40 py-16 lg:py-24">
        <div className="container-site">
          <p className="eyebrow">Leistungen</p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Unsere Leistungen rund ums Dach
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Von der schnellen Reparatur bis zur neuen Dacheindeckung: Robert Dachservice bietet
            fachgerechte Dacharbeiten für private und gewerbliche Immobilien in Köln, Bonn und
            Umgebung.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service) => (
              <Link
                key={service.to}
                to={service.to as never}
                className="group flex flex-col bg-background p-8 transition-colors hover:bg-card"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-deep">
                  {service.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dacheindeckung */}
      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder label="Dacheindeckung Foto – wird später ersetzt" ratio="photo" />
          <div>
            <p className="eyebrow">Schwerpunkt</p>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              Dacheindeckung erneuern – nicht automatisch das komplette Dach
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Eine alte Dacheindeckung bedeutet nicht automatisch, dass das gesamte Dach neu
                aufgebaut werden muss.
              </p>
              <p>
                In vielen Fällen steht zunächst die Erneuerung der äußeren Dachdeckung im
                Mittelpunkt. Welche zusätzlichen Arbeiten notwendig sind, hängt vom Zustand der
                darunterliegenden Bauteile ab.
              </p>
              <p>
                Deshalb betrachten wir unter anderem Dachlattung, Unterdeckung, Dämmung, Anschlüsse
                und – soweit erforderlich – die Holzkonstruktion.
              </p>
              <p>
                So entsteht eine Lösung, die technisch sinnvoll und auf den tatsächlichen Bedarf
                abgestimmt ist.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink to="/leistungen/dacheindeckung-erneuern">Dacheindeckung erneuern</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="border-y border-navy/10 bg-card py-16 lg:py-24">
        <div className="container-site">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Welche Dacheindeckung passt zu Ihrem Gebäude?
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Für die Erneuerung einer Dacheindeckung stehen verschiedene Materialien zur Verfügung.
            Welche Variante sinnvoll ist, hängt unter anderem von Dachform, Gebäude, Gestaltung,
            Unterkonstruktion und Ihren persönlichen Anforderungen ab.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materialLinks.map((m) => (
              <Link
                key={m.to}
                to={m.to as never}
                className="group flex flex-col border border-navy/12 p-7 transition-colors hover:border-copper"
              >
                <ImagePlaceholder
                  label={`${m.title} Foto – später`}
                  ratio="square"
                  className="mb-6 aspect-[3/2]"
                />
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-navy">
                  {m.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-deep">
                  {m.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Small repairs */}
      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Auch kleine Dachreparaturen sind wichtig
          </h2>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Ein beschädigter Dachziegel, eine undichte Stelle oder ein kleiner Sturmschaden sollte
              nicht unnötig lange unbeachtet bleiben.
            </p>
            <p>
              Kleine Schäden können sich durch eindringende Feuchtigkeit mit der Zeit zu größeren
              Problemen entwickeln.
            </p>
            <p>
              Deshalb übernehmen wir auch gezielte Reparaturarbeiten und kümmern uns um kleinere
              Dachschäden.
            </p>
            <div className="pt-2">
              <CtaLink to="/leistungen/dachreparatur">Dachreparatur anfragen</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-navy py-16 text-navy-foreground lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-copper">Dachnotdienst</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
              24/7 Dachnotdienst bei akuten Dachschäden
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-navy-foreground/75">
              <p>
                Bei einem plötzlich entstandenen Dachschaden zählt schnelles Handeln. Nach einem
                Sturm, bei einer Undichtigkeit oder bei einem beschädigten Dachbereich kann eine
                schnelle Sicherung helfen, Folgeschäden zu begrenzen.
              </p>
              <p>Der Dachnotdienst von Robert Dachservice ist 24/7 erreichbar.</p>
            </div>
          </div>
          <div className="border border-navy-foreground/20 p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-navy-foreground/60">
              Notdienst-Telefon
            </p>
            <a
              href={business.phonePrimaryHref}
              className="mt-3 block font-[family-name:var(--font-display)] text-2xl font-extrabold hover:text-copper sm:text-3xl"
            >
              {business.phonePrimary}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallLink variant="primary">Jetzt anrufen</CallLink>
              <Link
                to={"/dachnotdienst" as never}
                className="inline-flex items-center gap-2 border border-navy-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-navy-foreground hover:text-navy"
              >
                Dachnotdienst ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-site py-16 lg:py-24">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Warum Robert Dachservice?
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div key={item.title} className="rule-copper">
              <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-navy/10 bg-sand/40 py-16 lg:py-24">
        <div className="container-site">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Von der Anfrage bis zur fertigen Dacharbeit
          </h2>
          <ol className="mt-10 grid gap-px overflow-hidden border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <li key={step.title} className="bg-background p-7">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-base font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service area */}
      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Dachdecker für Köln, Bonn und Umgebung
          </h2>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Robert Dachservice ist für Dacharbeiten in Köln, Bonn und umliegenden Orten im
              Einsatz.
            </p>
            <p>
              Ob kleine Reparatur, neue Dacheindeckung, Dämmung, Spenglerarbeiten, Flachdach oder
              dringender Dachschaden: Kontaktieren Sie uns und besprechen Sie Ihr Vorhaben.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <CtaLink to="/kontakt">Angebot anfordern</CtaLink>
              <CtaLink to="/dachdecker-koeln" variant="ghost">
                Dachdecker Köln
              </CtaLink>
              <CtaLink to="/dachdecker-bonn" variant="ghost">
                Dachdecker Bonn
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy/10 py-16 lg:py-24">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Häufige Fragen rund ums Dach
          </h2>
          <dl className="mt-10 divide-y divide-navy/12 border-y border-navy/12">
            {faq.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-[family-name:var(--font-display)] text-base font-bold text-navy">
                  {item.q}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="container-site">
          <h2 className="max-w-2xl text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Sie planen eine Dacharbeit?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-navy/70">
            Ob kleine Reparatur, akuter Dachschaden oder die Erneuerung Ihrer Dacheindeckung:
            Besprechen Sie Ihr Vorhaben mit Robert Dachservice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink to="/kontakt">Angebot anfordern</CtaLink>
            <CallLink>Jetzt anrufen</CallLink>
          </div>
        </div>
      </section>
    </>
  );
}

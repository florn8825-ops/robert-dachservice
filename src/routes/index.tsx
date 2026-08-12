import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { business, mainServices, materialLinks } from "@/content/site";
import { CallLink, CtaLink } from "@/components/site/CtaLink";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

const TITLE = "Dachdecker Köln & Bonn | Robert Dachservice";

const DESCRIPTION =
  "Robert Dachservice – Dachdeckermeisterbetrieb für Köln, Bonn und Umgebung. Dachreparaturen, Dacheindeckung, Dachsanierung, Flachdach, Dämmung und 24/7 Dachnotdienst.";

const SITE_URL = "https://robert-dachservice.vercel.app";

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
  {
    title: "Regional für Sie da",
    text: "Köln, Bonn und Umgebung.",
  },
];

const process = [
  {
    title: "Anfrage",
    text: "Beschreiben Sie uns Ihr Anliegen telefonisch oder über das Anfrageformular.",
  },
  {
    title: "Einschätzung",
    text: "Wir besprechen den Schaden oder Ihr Vorhaben und klären die nächsten Schritte.",
  },
  {
    title: "Besichtigung",
    text: "Wenn erforderlich, wird der Zustand des Daches vor Ort genauer betrachtet.",
  },
  {
    title: "Lösung",
    text: "Der notwendige Leistungsumfang wird auf Basis des tatsächlichen Zustands abgestimmt.",
  },
  {
    title: "Ausführung",
    text: "Die vereinbarten Dacharbeiten werden fachgerecht umgesetzt.",
  },
];

const benefits = [
  "Dachreparaturen",
  "Dacheindeckung",
  "Dachsanierung",
  "Flachdacharbeiten",
  "Dachdämmung",
  "24/7 Dachnotdienst",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: TITLE,
      },
      {
        name: "description",
        content: DESCRIPTION,
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: DESCRIPTION,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        property: "og:site_name",
        content: "Robert Dachservice",
      },
      {
        property: "og:locale",
        content: "de_DE",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: TITLE,
      },
      {
        name: "twitter:description",
        content: DESCRIPTION,
      },
    ],

    links: [
      {
        rel: "canonical",
        href: SITE_URL,
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#business`,
              name: "Robert Dachservice",
              url: SITE_URL,
              telephone: business.phonePrimary,
              description: DESCRIPTION,
              areaServed: [
                {
                  "@type": "City",
                  name: "Köln",
                },
                {
                  "@type": "City",
                  name: "Bonn",
                },
              ],
              serviceType: [
                "Dachreparatur",
                "Dacheindeckung",
                "Dachsanierung",
                "Flachdach",
                "Dämmung",
                "Dachnotdienst",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Robert Dachservice",
              description: DESCRIPTION,
              publisher: {
                "@id": `${SITE_URL}/#business`,
              },
              inLanguage: "de-DE",
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-copper/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container-site relative py-8 lg:py-12">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-copper" />
              Dachdeckermeisterbetrieb
            </span>

            <span className="h-1 w-1 rounded-full bg-copper" />

            <span>Köln · Bonn · Umgebung</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-navy-foreground/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy-foreground/75 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-copper" />
                Fachgerechte Dacharbeiten
              </div>

              <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Ihr Dach.
                <span className="block text-copper">Unsere Aufgabe.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/70 sm:text-xl">
                Dachreparaturen, Dacheindeckung und Dachsanierung –
                zuverlässig umgesetzt für Immobilien in Köln, Bonn und
                Umgebung.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <CtaLink to="/kontakt">
                  Angebot anfordern
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>

                <CallLink variant="onDark">
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </CallLink>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 border-t border-navy-foreground/10 pt-7 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-extrabold text-navy-foreground">
                    24/7
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-navy-foreground/50">
                    Dachnotdienst
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold text-navy-foreground">
                    Köln
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-navy-foreground/50">
                    & Bonn
                  </p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <p className="text-2xl font-extrabold text-navy-foreground">
                    Meister
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-navy-foreground/50">
                    Fachbetrieb
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 border border-copper/20" />

              <div className="relative overflow-hidden bg-background p-2 shadow-2xl">
                <ImagePlaceholder
                  label="Hero Foto – wird später ersetzt"
                  ratio="photo"
                  tone="dark"
                  className="min-h-[420px]"
                />

                <div className="absolute bottom-7 left-7 right-7 border border-white/10 bg-navy/90 p-5 text-navy-foreground backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-copper text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Fachgerechte Lösungen statt Standardpakete
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-navy-foreground/60">
                        Wir betrachten den tatsächlichen Zustand Ihres Daches
                        und stimmen die Arbeiten darauf ab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-navy/10 bg-background">
        <div className="container-site grid divide-y divide-navy/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:px-8">
            <ShieldCheck className="h-6 w-6 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-bold text-navy">
                Meisterbetrieb
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Fachwissen & Erfahrung
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:px-8">
            <Clock3 className="h-6 w-6 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-bold text-navy">
                24/7 erreichbar
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Für akute Dachschäden
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:px-8">
            <MapPin className="h-6 w-6 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-bold text-navy">
                Regional
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Köln, Bonn & Umgebung
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:px-8">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-bold text-navy">
                Persönliche Beratung
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Individuell abgestimmt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-copper">
              Robert Dachservice
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Dacharbeiten,
              <span className="block text-copper-deep">
                die zum Gebäude passen.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ob kleine Reparatur, akute Undichtigkeit oder die Erneuerung
              einer alten Dacheindeckung: Nicht jedes Dach benötigt dieselbe
              Lösung.
            </p>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              Wir betrachten den vorhandenen Zustand und besprechen mit Ihnen,
              welche Arbeiten tatsächlich erforderlich sind. So bleibt der
              Leistungsumfang nachvollziehbar und auf Ihr Dach abgestimmt.
            </p>

            <div className="mt-7">
              <CtaLink to="/kontakt">
                Projekt besprechen
                <ArrowUpRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden border-y border-navy/10 bg-sand/50 py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-copper">
                Leistungen
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                Alles rund ums Dach.
                <span className="block text-copper-deep">
                  Aus einer Hand.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-relaxed text-muted-foreground">
              Von der gezielten Reparatur bis zur umfangreicheren
              Dachsanierung – professionell und individuell abgestimmt.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <Link
                key={service.to}
                to={service.to as never}
                className="group relative flex min-h-[260px] flex-col overflow-hidden border border-navy/10 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-20 w-20 bg-copper/5 transition-all duration-300 group-hover:h-28 group-hover:w-28" />

                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-copper">
                    0{index + 1}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-navy/10 transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="relative mt-auto">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                    {service.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS / DACHEINDECKUNG */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-copper/50" />

            <ImagePlaceholder
              label="Dacheindeckung Foto – wird später ersetzt"
              ratio="photo"
              className="min-h-[430px]"
            />

            <div className="absolute -bottom-6 -right-4 max-w-[260px] border border-navy/10 bg-navy p-6 text-navy-foreground shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
                Wichtig
              </p>

              <p className="mt-3 text-sm font-semibold leading-relaxed">
                Eine neue Dacheindeckung bedeutet nicht automatisch einen
                komplett neuen Dachaufbau.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-copper">
              Schwerpunkt
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Dacheindeckung erneuern –
              <span className="block text-copper-deep">
                sinnvoll statt pauschal.
              </span>
            </h2>

            <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Eine alte Dacheindeckung bedeutet nicht automatisch, dass das
                gesamte Dach neu aufgebaut werden muss.
              </p>

              <p>
                In vielen Fällen steht zunächst die Erneuerung der äußeren
                Dachdeckung im Mittelpunkt. Welche zusätzlichen Arbeiten
                notwendig sind, hängt vom Zustand der darunterliegenden
                Bauteile ab.
              </p>

              <p>
                Deshalb betrachten wir unter anderem Dachlattung,
                Unterdeckung, Dämmung, Anschlüsse und – soweit erforderlich –
                die Holzkonstruktion.
              </p>
            </div>

            <div className="mt-8">
              <CtaLink to="/leistungen/dacheindeckung-erneuern">
                Dacheindeckung erneuern
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="border-y border-navy/10 bg-card py-20 lg:py-28">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow text-copper">
              Materialien
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Die passende Dacheindeckung
              <span className="block text-copper-deep">
                für Ihr Gebäude.
              </span>
            </h2>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              Welche Variante sinnvoll ist, hängt unter anderem von Dachform,
              Gebäude, Gestaltung, Unterkonstruktion und Ihren persönlichen
              Anforderungen ab.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materialLinks.map((material) => (
              <Link
                key={material.to}
                to={material.to as never}
                className="group overflow-hidden border border-navy/10 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:shadow-xl"
              >
                <div className="overflow-hidden p-2">
                  <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                    <ImagePlaceholder
                      label={`${material.title} Foto – später`}
                      ratio="square"
                      className="aspect-[3/2]"
                    />
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-navy">
                      {material.title}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-copper transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {material.text}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                    {material.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REPAIRS */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-copper">
              Reparatur
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Kleine Schäden.
              <span className="block text-copper-deep">
                Große Wirkung vermeiden.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ein beschädigter Dachziegel, eine undichte Stelle oder ein
              kleiner Sturmschaden sollte nicht unnötig lange unbeachtet
              bleiben.
            </p>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              Eindringende Feuchtigkeit kann aus einem zunächst kleinen Schaden
              mit der Zeit ein deutlich größeres Problem machen. Deshalb
              übernehmen wir auch gezielte Reparaturarbeiten.
            </p>

            <div className="mt-8">
              <CtaLink to="/leistungen/dachreparatur">
                Dachreparatur anfragen
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-24">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-copper/5" />

        <div className="container-site relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-copper/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-copper">
                <Clock3 className="h-4 w-4" />
                24/7 Dachnotdienst
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Akuter Dachschaden?
                <span className="block text-copper">
                  Handeln statt warten.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/65">
                Nach einem Sturm, bei einer Undichtigkeit oder einem
                beschädigten Dachbereich kann schnelles Handeln helfen,
                Folgeschäden zu begrenzen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CallLink variant="primary">
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </CallLink>

                <Link
                  to={"/dachnotdienst" as never}
                  className="inline-flex items-center gap-2 border border-navy-foreground/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-copper hover:bg-copper"
                >
                  Dachnotdienst ansehen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="border border-navy-foreground/15 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-foreground/45">
                Notdienst-Telefon
              </p>

              <a
                href={business.phonePrimaryHref}
                className="mt-3 block text-3xl font-extrabold tracking-tight transition-colors hover:text-copper sm:text-4xl"
              >
                {business.phonePrimary}
              </a>

              <div className="mt-7 border-t border-navy-foreground/10 pt-6">
                <p className="text-sm leading-relaxed text-navy-foreground/55">
                  Bei akuten Dachschäden können Sie direkt telefonisch Kontakt
                  aufnehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-copper">
              Warum wir
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Klar. Fachlich.
              <span className="block text-copper-deep">
                Regional.
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Gute Dacharbeiten beginnen mit einer ehrlichen Einschätzung des
              tatsächlichen Bedarfs.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {whyUs.map((item, index) => (
              <div
                key={item.title}
                className="border-t border-navy/10 pt-5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.15em] text-copper">
                    0{index + 1}
                  </span>

                  <CheckCircle2 className="h-4 w-4 text-copper" />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-navy">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-navy/10 bg-sand/50 py-16">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="eyebrow text-copper">
                Leistungsübersicht
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
                Dacharbeiten, die wir für Sie übernehmen.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 border border-navy/10 bg-background px-5 py-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-copper text-white">
                    <Check className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-semibold text-navy">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-site py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-copper">
            Ablauf
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Von der Anfrage
            <span className="block text-copper-deep">
              bis zur fertigen Dacharbeit.
            </span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {process.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-navy/10 bg-card p-7 transition-all hover:-translate-y-1 hover:border-copper hover:shadow-lg"
            >
              <span className="text-3xl font-extrabold text-copper/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-base font-bold text-navy">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* SERVICE AREA */}
      <section className="border-y border-navy/10 bg-card py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-copper">
                Einsatzgebiet
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                Dachdecker für
                <span className="block text-copper-deep">
                  Köln, Bonn & Umgebung.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Robert Dachservice ist für Dacharbeiten in Köln, Bonn und
                umliegenden Orten im Einsatz.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink to="/kontakt">
                  Angebot anfordern
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>

                <CtaLink
                  to="/dachdecker-koeln"
                  variant="ghost"
                >
                  Dachdecker Köln
                </CtaLink>

                <CtaLink
                  to="/dachdecker-bonn"
                  variant="ghost"
                >
                  Dachdecker Bonn
                </CtaLink>
              </div>
            </div>

            <div className="relative overflow-hidden bg-navy p-8 text-navy-foreground sm:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-copper/10 blur-2xl" />

              <div className="relative">
                <MapPin className="h-8 w-8 text-copper" />

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-navy-foreground/45">
                  Regionaler Schwerpunkt
                </p>

                <p className="mt-3 text-3xl font-extrabold">
                  Köln
                </p>

                <p className="text-3xl font-extrabold text-copper">
                  Bonn
                </p>

                <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/55">
                  Dachreparatur, Dacheindeckung, Dämmung, Flachdach,
                  Spenglerarbeiten und Dachnotdienst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="eyebrow text-copper">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Häufige Fragen rund ums Dach
            </h2>
          </div>

          <dl className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
            {faq.map((item, index) => (
              <div
                key={item.q}
                className="group py-7"
              >
                <dt className="flex gap-5">
                  <span className="mt-1 text-xs font-bold text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-[family-name:var(--font-display)] text-base font-bold text-navy sm:text-lg">
                    {item.q}
                  </span>
                </dt>

                <dd className="mt-3 pl-9 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-copper py-20 text-white lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="container-site relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">
                Ihr nächster Schritt
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Sie planen eine Dacharbeit?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                Ob kleine Reparatur, akuter Dachschaden oder die Erneuerung
                Ihrer Dacheindeckung: Besprechen Sie Ihr Vorhaben mit Robert
                Dachservice.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CtaLink to="/kontakt">
                Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </CtaLink>

              <CallLink>
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </CallLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

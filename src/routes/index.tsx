import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { business, mainServices, materialLinks } from "@/content/site";
import { CallLink, CtaLink } from "@/components/site/CtaLink";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import heroImage from "@/assets/professionelles-dachdecker-foto.jpeg.asset.json";
import dacheindeckungImage from "@/assets/Dacheindeckung.jpeg.asset.json";
import tondachziegelImage from "@/assets/tondachziegel.png.asset.json";

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
    icon: ShieldCheck,
    title: "Meisterbetrieb",
    text: "Fachwissen und Erfahrung aus dem Dachdeckerhandwerk.",
  },
  {
    icon: CheckCircle2,
    title: "Individuelle Lösung",
    text: "Wir betrachten den konkreten Zustand Ihres Daches statt unnötige Arbeiten vorzuschlagen.",
  },
  {
    icon: Hammer,
    title: "Klein bis groß",
    text: "Von der kleinen Reparatur bis zur umfangreichen Dacherneuerung.",
  },
  {
    icon: Sparkles,
    title: "Saubere Kommunikation",
    text: "Klare Einschätzung und nachvollziehbarer Leistungsumfang.",
  },
  {
    icon: MapPin,
    title: "Regional",
    text: "Für Köln, Bonn und die umliegende Region.",
  },
];

const process = [
  {
    number: "01",
    title: "Anfrage",
    text: "Sie schildern uns Ihr Anliegen telefonisch oder über das Anfrageformular.",
  },
  {
    number: "02",
    title: "Einschätzung",
    text: "Wir besprechen den Schaden oder Ihr Vorhaben und klären die nächsten Schritte.",
  },
  {
    number: "03",
    title: "Besichtigung",
    text: "Wenn erforderlich, wird der Zustand des Daches vor Ort genauer geprüft.",
  },
  {
    number: "04",
    title: "Lösung",
    text: "Der notwendige Leistungsumfang wird auf Basis des tatsächlichen Zustands abgestimmt.",
  },
  {
    number: "05",
    title: "Ausführung",
    text: "Die vereinbarten Dacharbeiten werden fachgerecht umgesetzt.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Robert Dachservice" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
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
                { "@type": "City", name: "Köln" },
                { "@type": "City", name: "Bonn" },
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
              publisher: { "@id": `${SITE_URL}/#business` },
              inLanguage: "de-DE",
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
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
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(201,116,61,0.18),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(255,255,255,0.06),transparent_30%)]" />

        <div className="container-site relative grid min-h-[720px] gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              <span className="h-2 w-2 rounded-full bg-copper" />
              Dachdeckermeisterbetrieb · {business.area}
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Ihr Dach.
              <span className="block text-copper">Unsere Verantwortung.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/75 sm:text-xl">
              Fachgerechte Dacharbeiten in Köln, Bonn und Umgebung – von der
              schnellen Reparatur bis zur kompletten Erneuerung Ihrer
              Dacheindeckung.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/kontakt">Kostenlos Anfrage stellen</CtaLink>

              <CallLink variant="onDark">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Jetzt anrufen
              </CallLink>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4">
              <div>
                <div className="text-2xl font-extrabold">24/7</div>
                <div className="mt-1 text-xs text-white/55">
                  Dachnotdienst
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold">Köln</div>
                <div className="mt-1 text-xs text-white/55">
                  & Bonn
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold">Meister</div>
                <div className="mt-1 text-xs text-white/55">
                  Fachbetrieb
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold">Direkt</div>
                <div className="mt-1 text-xs text-white/55">
                  erreichbar
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-copper/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1rem]">
              <img
                src={heroImage.url}
                alt="Professionelles Dachdecker-Foto: Echtes Baustellenbild mit Gerüst und LKW"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/10 bg-navy/90 p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-bold">Fachgerechte Dacharbeiten</p>
                    <p className="mt-1 text-sm text-white/60">
                      Persönliche Beratung und individuelle Lösungen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/60 to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="relative z-10 -mt-8">
        <div className="container-site">
          <div className="grid overflow-hidden rounded-2xl border border-navy/10 bg-background shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4 border-b border-navy/10 p-6 sm:border-r lg:border-b-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-navy">Meisterbetrieb</p>
                <p className="text-sm text-muted-foreground">
                  Fachkompetenz vom Profi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-navy/10 p-6 lg:border-b-0 lg:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-navy">24/7 Notdienst</p>
                <p className="text-sm text-muted-foreground">
                  Bei akuten Dachschäden
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-navy/10 p-6 sm:border-b-0 sm:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-navy">Regional</p>
                <p className="text-sm text-muted-foreground">
                  Köln, Bonn & Umgebung
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-navy">Persönlich</p>
                <p className="text-sm text-muted-foreground">
                  Direkter Ansprechpartner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-copper">Dacharbeiten mit System</p>

            <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Nicht jede Dachreparatur braucht ein neues Dach.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ob eine einzelne Dachziegel beschädigt ist, Wasser eindringt
              oder die bestehende Dacheindeckung nach vielen Jahren erneuert
              werden soll: Nicht jeder Schaden und nicht jedes alte Dach
              benötigt die gleiche Lösung.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Wir betrachten den vorhandenen Zustand und besprechen mit Ihnen,
              welche Arbeiten tatsächlich erforderlich sind. So wird der
              Leistungsumfang gezielt auf Ihr Dach abgestimmt – von der kleinen
              Reparatur bis zur umfangreicheren Dachsanierung.
            </p>

            <div className="mt-8">
              <CtaLink to="/kontakt">
                Persönliche Einschätzung anfragen
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden border-y border-navy/10 bg-sand/40 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />

        <div className="container-site relative">
          <div className="max-w-3xl">
            <p className="eyebrow text-copper">Unsere Leistungen</p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Alles rund ums Dach.
              <span className="block text-copper">
                Fachgerecht aus einer Hand.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Von der schnellen Reparatur bis zur neuen Dacheindeckung:
              Robert Dachservice bietet fachgerechte Dacharbeiten für private
              und gewerbliche Immobilien in Köln, Bonn und Umgebung.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <Link
                key={service.to}
                to={service.to as never}
                className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-navy/10 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-xl"
              >
                <span className="absolute right-5 top-5 text-5xl font-black text-navy/[0.045]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <Hammer className="h-5 w-5" />
                </div>

                <h3 className="mt-7 font-[family-name:var(--font-display)] text-xl font-bold text-navy">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                  {service.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DACHEINDECKUNG FEATURE */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-copper/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-card p-3 shadow-xl">
              <img
                src={dacheindeckungImage.url}
                alt="Neue Dacheindeckung: Fachgerecht verlegte Dachziegel in Anthrazit"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-navy/10 bg-background p-5 shadow-xl sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Schwerpunkt
              </p>
              <p className="mt-1 font-bold text-navy">
                Dacheindeckung erneuern
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-copper">Schwerpunkt</p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Dacheindeckung erneuern –
              <span className="block text-copper">
                nicht automatisch das komplette Dach.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-muted-foreground">
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

              <p>
                So entsteht eine Lösung, die technisch sinnvoll und auf den
                tatsächlichen Bedarf abgestimmt ist.
              </p>
            </div>

            <div className="mt-8">
              <CtaLink to="/leistungen/dacheindeckung-erneuern">
                Dacheindeckung erneuern
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="border-y border-navy/10 bg-card py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow text-copper">Materialien</p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                Welche Dacheindeckung passt zu Ihrem Gebäude?
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Für die Erneuerung einer Dacheindeckung stehen verschiedene
                Materialien zur Verfügung. Welche Variante sinnvoll ist, hängt
                unter anderem von Dachform, Gebäude, Gestaltung,
                Unterkonstruktion und Ihren persönlichen Anforderungen ab.
              </p>
            </div>

            <div className="hidden shrink-0 rounded-full border border-copper/30 bg-copper/5 px-5 py-3 text-sm font-semibold text-copper-deep lg:block">
              Individuell beraten lassen
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materialLinks.map((material) => {
              const materialImageSrc: Record<string, string> = {
                Tondachziegel: tondachziegelImage.url,
                Betondachsteine: "/Betondachstein.jpg",
                Bitumenschindeln: "/bitumenschindeln.jpg",
                "Metall / Blech": "/metall blech dach.jpg",
              };

              const imageSrc = materialImageSrc[material.title];

              return (
                <Link
                  key={material.to}
                  to={material.to as never}
                  className="group overflow-hidden rounded-2xl border border-navy/10 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={`${material.title} Foto`}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={`${material.title} Foto`}
                        ratio="square"
                        className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>

                  <div className="p-7">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-navy">
                      {material.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {material.text}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                      {material.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REPAIRS */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-copper">Dachreparatur</p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Kleine Schäden können große Folgen haben.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ein beschädigter Dachziegel, eine undichte Stelle oder ein
              kleiner Sturmschaden sollte nicht unnötig lange unbeachtet
              bleiben.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Eindringende Feuchtigkeit kann sich mit der Zeit zu größeren
              Problemen entwickeln. Deshalb übernehmen wir auch gezielte
              Reparaturarbeiten und kümmern uns um kleinere Dachschäden.
            </p>

            <div className="mt-8">
              <CtaLink to="/leistungen/dachreparatur">
                Dachreparatur anfragen
              </CtaLink>
            </div>
          </div>

          <div className="rounded-2xl bg-navy p-8 text-navy-foreground shadow-xl sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-copper text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              Typische Dachschäden
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Beschädigte oder verrutschte Dachziegel",
                "Undichte Dachbereiche",
                "Sturm- und Wetterschäden",
                "Undichte Anschlüsse",
                "Kleinere Reparaturarbeiten",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/75"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Schnell handeln
              </p>
              <p className="mt-2 text-sm text-white/65">
                Bei akuten Schäden steht unser Dachnotdienst rund um die Uhr
                zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(201,116,61,0.2),transparent_32%)]" />

        <div className="container-site relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-copper">
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper" />
              24/7 erreichbar
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Akuter Dachschaden?
              <span className="block text-copper">
                Wir sind für Sie erreichbar.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              Nach einem Sturm, bei einer Undichtigkeit oder bei einem
              beschädigten Dachbereich zählt schnelles Handeln. Eine schnelle
              Sicherung kann helfen, Folgeschäden zu begrenzen.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Notdienst-Telefon
            </p>

            <a
              href={business.phonePrimaryHref}
              className="mt-3 block font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight transition-colors hover:text-copper sm:text-4xl"
            >
              {business.phonePrimary}
            </a>

            <div className="mt-7 flex flex-wrap gap-3">
              <CallLink variant="primary">
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </CallLink>

              <Link
                to={"/dachnotdienst" as never}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-navy"
              >
                Dachnotdienst
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-site py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-copper">Warum Robert Dachservice?</p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Fachlich. Persönlich. Regional.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Wir möchten nicht einfach irgendeine Lösung verkaufen. Unser Ziel
            ist eine technisch sinnvolle Dacharbeit, die zu Ihrem Gebäude und
            Ihrem tatsächlichen Bedarf passt.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-navy/10 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-copper/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold text-navy">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-navy/10 bg-sand/40 py-20 lg:py-28">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow text-copper">So läuft es ab</p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Von der Anfrage bis zur fertigen Dacharbeit.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-navy/10 bg-background p-7 shadow-sm"
              >
                {index < process.length - 1 && (
                  <div className="absolute right-[-18px] top-12 z-10 hidden h-px w-9 bg-copper/40 lg:block" />
                )}

                <span className="font-[family-name:var(--font-display)] text-4xl font-black text-copper/30">
                  {step.number}
                </span>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-navy">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="container-site py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-navy-foreground shadow-2xl sm:p-12 lg:p-16">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-copper/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-copper">Servicegebiet</p>

              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Dachdecker für Köln, Bonn und Umgebung.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
                Robert Dachservice ist für Dacharbeiten in Köln, Bonn und
                umliegenden Orten im Einsatz. Ob kleine Reparatur, neue
                Dacheindeckung, Dämmung, Spenglerarbeiten, Flachdach oder
                dringender Dachschaden.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink to="/kontakt">Angebot anfordern</CtaLink>

                <CtaLink to="/dachdecker-koeln" variant="ghost">
                  Dachdecker Köln
                </CtaLink>

                <CtaLink to="/dachdecker-bonn" variant="ghost">
                  Dachdecker Bonn
                </CtaLink>
              </div>
            </div>

            <div className="hidden lg:block">
              <MapPin className="h-28 w-28 text-copper/20" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy/10 py-20 lg:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-center text-copper">FAQ</p>

            <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Häufige Fragen rund ums Dach
            </h2>

            <div className="mt-12 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-background shadow-sm">
              {faq.map((item) => (
                <details key={item.q} className="group p-6 sm:p-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-[family-name:var(--font-display)] text-base font-bold text-navy">
                    <span>{item.q}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/10 text-copper transition-transform group-open:rotate-45">
                      <span className="text-xl font-normal">+</span>
                    </span>
                  </summary>

                  <p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-sand py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />

        <div className="container-site relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-copper text-white shadow-lg">
              <Sparkles className="h-6 w-6" />
            </div>

            <p className="mt-7 eyebrow text-copper">Nächster Schritt</p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-6xl">
              Sie planen eine Dacharbeit?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy/65">
              Ob kleine Reparatur, akuter Dachschaden oder die Erneuerung Ihrer
              Dacheindeckung: Besprechen Sie Ihr Vorhaben mit Robert
              Dachservice.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CtaLink to="/kontakt">Angebot anfordern</CtaLink>
              <CallLink>Jetzt anrufen</CallLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

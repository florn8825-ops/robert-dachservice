import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { business, mainServices } from "@/content/site";

const siteLinks = [
  { label: "Dachnotdienst", to: "/dachnotdienst" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Ratgeber", to: "/ratgeber" },
  { label: "Kontakt", to: "/kontakt" },
];

const regionLinks = [
  { label: "Dachdecker Köln", to: "/dachdecker-koeln" },
  { label: "Dachdecker Bonn", to: "/dachdecker-bonn" },
  { label: "Neubau / Neueindeckung", to: "/leistungen/neubau-neueindeckung" },
];

const legalLinks = [
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutz", to: "/datenschutz" },
  { label: "Cookie-Einstellungen", to: "/cookie-einstellungen" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      {/* CTA Banner */}
      <div className="border-b border-navy-foreground/10">
        <div className="container-site py-12 lg:py-16">
          <div className="relative overflow-hidden border border-copper/30 bg-navy-foreground/[0.035] px-6 py-8 sm:px-8 lg:px-10">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-copper/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-copper/10"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-copper" />
                  <p className="eyebrow text-copper">Robert Dachservice</p>
                </div>

                <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                  Sie haben ein Problem mit Ihrem Dach?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/65 sm:text-base">
                  Ob Reparatur, Dacheindeckung, Sanierung oder akuter Schaden:
                  Besprechen Sie Ihr Vorhaben direkt mit uns.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-copper px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-copper-deep hover:shadow-lg"
                >
                  Angebot anfordern
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href={business.phonePrimaryHref}
                  className="inline-flex items-center justify-center gap-2 border border-navy-foreground/20 px-6 py-3.5 text-sm font-bold text-navy-foreground transition-colors hover:border-copper hover:text-copper"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-site py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand / Contact */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="Robert Dachservice Startseite"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center border border-copper transition-colors group-hover:bg-copper"
              >
                <span className="block h-0 w-0 border-x-[11px] border-b-[12px] border-x-transparent border-b-copper group-hover:border-b-white" />
              </span>

              <span className="leading-tight">
                <span className="block font-[family-name:var(--font-display)] text-lg font-extrabold uppercase tracking-[0.12em]">
                  Robert
                </span>
                <span className="block text-[0.62rem] uppercase tracking-[0.32em] text-navy-foreground/50">
                  Dachservice
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-foreground/60">
              Dachdeckermeisterbetrieb für Köln, Bonn und Umgebung.
              Fachgerechte Dacharbeiten von der Reparatur bis zur
              Neueindeckung.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={business.phonePrimaryHref}
                className="group flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-navy-foreground/15 text-copper transition-colors group-hover:border-copper">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-navy-foreground/40">
                    Telefon
                  </span>
                  <span className="block font-[family-name:var(--font-display)] text-base font-bold group-hover:text-copper">
                    {business.phonePrimary}
                  </span>
                </span>
              </a>

              <a
                href={business.phoneSecondaryHref}
                className="ml-12 block text-sm text-navy-foreground/55 hover:text-copper"
              >
                {business.phoneSecondary}
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-copper" />
              <p className="eyebrow text-copper">Leistungen</p>
            </div>

            <ul className="mt-5 space-y-3">
              {mainServices.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to as never}
                    className="group inline-flex items-center gap-2 text-sm text-navy-foreground/65 transition-colors hover:text-copper"
                  >
                    <span className="h-1 w-1 bg-copper/60 transition-all group-hover:w-2" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-copper" />
              <p className="eyebrow text-copper">Unternehmen</p>
            </div>

            <ul className="mt-5 space-y-3">
              {siteLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to as never}
                    className="group inline-flex items-center gap-2 text-sm text-navy-foreground/65 transition-colors hover:text-copper"
                  >
                    <span className="h-1 w-1 bg-copper/60 transition-all group-hover:w-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Region */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-copper" />
              <p className="eyebrow text-copper">Region</p>
            </div>

            <ul className="mt-5 space-y-3">
              {regionLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to as never}
                    className="group inline-flex items-center gap-2 text-sm text-navy-foreground/65 transition-colors hover:text-copper"
                  >
                    <span className="h-1 w-1 bg-copper/60 transition-all group-hover:w-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-14 grid gap-px border border-navy-foreground/10 bg-navy-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 bg-navy px-5 py-4">
            <ShieldCheck
              className="h-5 w-5 shrink-0 text-copper"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold">
                Dachdeckermeisterbetrieb
              </p>
              <p className="mt-0.5 text-xs text-navy-foreground/45">
                Fachgerechte Dacharbeiten
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-navy px-5 py-4">
            <CheckCircle2
              className="h-5 w-5 shrink-0 text-copper"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold">
                Köln · Bonn · Umgebung
              </p>
              <p className="mt-0.5 text-xs text-navy-foreground/45">
                Regional für Sie da
              </p>
            </div>
          </div>

          <a
            href={business.phonePrimaryHref}
            className="group flex items-center gap-3 bg-navy px-5 py-4 transition-colors hover:bg-navy/80 sm:col-span-2 lg:col-span-1"
            aria-label={`24/7 Dachnotdienst anrufen unter ${business.phonePrimary}`}
          >
            <Phone
              className="h-5 w-5 shrink-0 text-copper"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold">
                24/7 Dachnotdienst
              </p>
              <p className="mt-0.5 text-xs text-navy-foreground/45">
                Bei akuten Dachschäden
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-foreground/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-navy-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name} ·{" "}
            {business.legalLine}
          </p>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to as never}
                  className="transition-colors hover:text-copper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

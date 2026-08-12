import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { business, navServices } from "@/content/site";
import { CtaLink } from "./CtaLink";

const mainNav = [
  { label: "Dachnotdienst", to: "/dachnotdienst" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Ratgeber", to: "/ratgeber" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServices(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-background/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      {/* TOP BAR */}
      <div className="hidden bg-navy lg:block">
        <div className="container-site flex h-9 items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] font-medium tracking-wide text-navy-foreground/65">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper" />
            Dachdeckermeisterbetrieb für {business.area}
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <span className="font-semibold uppercase tracking-[0.14em] text-copper">
              24/7 Dachnotdienst
            </span>

            <a
              href={business.phonePrimaryHref}
              className="font-semibold text-navy-foreground transition-colors hover:text-copper"
            >
              {business.phonePrimary}
            </a>

            <a
              href={business.phoneSecondaryHref}
              className="text-navy-foreground/55 transition-colors hover:text-copper"
            >
              {business.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="container-site flex h-[76px] items-center justify-between gap-6 lg:h-[86px]">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMobile}
          aria-label="Robert Dachservice Startseite"
          className="group flex shrink-0 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden border border-copper bg-copper/5 transition-all duration-300 group-hover:bg-copper group-hover:shadow-[0_0_0_5px_rgba(201,112,58,0.10)]"
          >
            <span className="block h-0 w-0 border-x-[11px] border-b-[11px] border-x-transparent border-b-copper transition-colors duration-300 group-hover:border-b-background" />
          </span>

          <span className="leading-none">
            <span className="block font-[family-name:var(--font-display)] text-[17px] font-extrabold uppercase tracking-[0.12em] text-navy">
              Robert
            </span>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.34em] text-muted-foreground">
              Dachservice
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Hauptnavigation"
          className="hidden h-full items-center lg:flex"
        >
          {/* SERVICES DROPDOWN */}
          <div className="group relative h-full">
            <Link
              to={"/leistungen/dacheindeckung-erneuern" as never}
              className="relative flex h-full items-center gap-1.5 px-4 text-[13px] font-semibold text-navy transition-colors hover:text-copper-deep"
            >
              Leistungen
              <ChevronDown
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                aria-hidden="true"
              />

              <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
            </Link>

            {/* DROPDOWN */}
            <div className="pointer-events-none invisible absolute left-1/2 top-full w-[920px] max-w-[90vw] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="mt-3 overflow-hidden border border-navy/10 bg-background shadow-[0_25px_70px_rgba(15,23,42,0.16)]">
                <div className="grid grid-cols-4 gap-0">
                  {navServices.map((group, index) => (
                    <div
                      key={group.heading}
                      className={`p-7 ${
                        index !== navServices.length - 1
                          ? "border-r border-navy/10"
                          : ""
                      }`}
                    >
                      <div className="mb-5 flex items-center gap-2">
                        <span className="h-px w-5 bg-copper" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-deep">
                          {group.heading}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to as never}
                              className="group/item flex items-center justify-between gap-2 text-[13px] font-medium text-navy/75 transition-colors hover:text-navy"
                            >
                              <span>{item.label}</span>

                              <ArrowUpRight
                                className="h-3.5 w-3.5 shrink-0 text-copper opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-navy/10 bg-sand/30 px-7 py-4">
                  <span className="text-xs text-muted-foreground">
                    Fachgerechte Dacharbeiten in Köln, Bonn und Umgebung
                  </span>

                  <Link
                    to={"/leistungen/dacheindeckung-erneuern" as never}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-copper-deep transition-colors hover:text-navy"
                  >
                    Alle Leistungen
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN LINKS */}
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to as never}
              className="group relative flex h-full items-center px-3.5 text-[13px] font-semibold text-navy transition-colors hover:text-copper-deep"
              activeProps={{
                className:
                  "group relative flex h-full items-center px-3.5 text-[13px] font-bold text-copper-deep",
              }}
            >
              {item.label}

              <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <a
            href={business.phonePrimaryHref}
            className="group inline-flex h-11 items-center gap-2 border border-navy/15 bg-background px-4 text-[12px] font-bold text-navy transition-all duration-200 hover:border-navy hover:bg-navy hover:text-navy-foreground"
          >
            <Phone
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            />
            <span>Anrufen</span>
          </a>

          <CtaLink
            to="/kontakt"
            className="h-11 px-5 text-[12px] font-bold uppercase tracking-[0.04em]"
          >
            Angebot anfordern
          </CtaLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          className="relative inline-flex h-11 w-11 items-center justify-center border border-navy/15 bg-background text-navy transition-all hover:border-navy lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="border-t border-navy/10 bg-background shadow-[0_20px_40px_rgba(15,23,42,0.10)] lg:hidden"
        >
          <nav
            aria-label="Mobile Navigation"
            className="container-site pb-6 pt-2"
          >
            {/* MOBILE SERVICES */}
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-navy/10 py-4 text-left text-base font-bold text-navy"
              onClick={() => setMobileServices((value) => !value)}
              aria-expanded={mobileServices}
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                Leistungen
              </span>

              <ChevronDown
                className={`h-4 w-4 text-copper transition-transform duration-200 ${
                  mobileServices ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {mobileServices && (
              <div className="border-b border-navy/10 bg-sand/25 px-4 py-5">
                {navServices.map((group) => (
                  <div key={group.heading} className="mb-5 last:mb-0">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-px w-4 bg-copper" />

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-copper-deep">
                        {group.heading}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to as never}
                            onClick={closeMobile}
                            className="flex items-center justify-between py-1 text-sm font-medium text-navy/75 transition-colors hover:text-navy"
                          >
                            {item.label}

                            <ArrowUpRight
                              className="h-3.5 w-3.5 text-copper"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* MOBILE MAIN LINKS */}
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to as never}
                onClick={closeMobile}
                className="group flex items-center justify-between border-b border-navy/10 py-4 text-base font-bold text-navy transition-colors hover:text-copper-deep"
              >
                {item.label}

                <ArrowUpRight
                  className="h-4 w-4 text-copper opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}

            {/* MOBILE CTA */}
            <div className="mt-5 grid gap-2.5">
              <CtaLink
                to="/kontakt"
                className="w-full justify-center py-3.5 text-sm font-bold"
              >
                Angebot anfordern
              </CtaLink>

              <a
                href={business.phonePrimaryHref}
                className="inline-flex w-full items-center justify-center gap-2 border border-navy/15 bg-navy px-6 py-3.5 text-sm font-bold text-navy-foreground transition-colors hover:bg-navy/90"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {business.phonePrimary}
              </a>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span>Köln · Bonn</span>
              <span className="text-copper">24/7 Notdienst</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

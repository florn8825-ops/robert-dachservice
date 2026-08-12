import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  ChevronDown,
  ArrowUpRight,
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

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServices(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="hidden bg-navy lg:block">
        <div className="container-site flex h-9 items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-navy-foreground/65">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper" />
            Dachdeckermeisterbetrieb
            <span className="text-navy-foreground/25">•</span>
            <span>{business.area}</span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <span className="font-medium text-navy-foreground/60">
              24/7 Dachnotdienst
            </span>

            <a
              href={business.phonePrimaryHref}
              className="inline-flex items-center gap-2 font-semibold text-navy-foreground transition-colors hover:text-copper"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
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
      <div className="border-b border-navy/10 bg-background/95 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-[82px]">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Robert Dachservice Startseite"
          >
            <span
              aria-hidden="true"
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden border border-copper bg-navy transition-transform duration-300 group-hover:scale-105"
            >
              <span className="absolute inset-x-0 bottom-0 h-1 bg-copper" />

              <span className="relative block h-0 w-0 border-x-[11px] border-b-[12px] border-x-transparent border-b-copper" />
            </span>

            <span className="leading-none">
              <span className="block font-[family-name:var(--font-display)] text-[17px] font-extrabold uppercase tracking-[0.12em] text-navy">
                Robert
              </span>

              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                Dachservice
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center lg:flex"
          >
            {/* LEISTUNGEN DROPDOWN */}
            <div className="group relative">
              <Link
                to={"/leistungen/dacheindeckung-erneuern" as never}
                className="relative flex items-center gap-1.5 px-4 py-7 text-[13px] font-semibold text-navy transition-colors hover:text-copper-deep"
              >
                Leistungen

                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                />

                <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-copper transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              {/* DROPDOWN */}
              <div className="invisible absolute left-1/2 top-full w-[68rem] max-w-[94vw] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="mt-3 overflow-hidden border border-navy/10 bg-background shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                  {/* DROPDOWN HEADER */}
                  <div className="flex items-center justify-between border-b border-navy/10 bg-sand/40 px-8 py-5">
                    <div>
                      <p className="eyebrow text-copper">
                        Unsere Leistungen
                      </p>

                      <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold text-navy">
                        Facharbeiten rund ums Dach
                      </p>
                    </div>

                    <Link
                      to="/leistungen/dacheindeckung-erneuern"
                      className="group/all inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:text-copper-deep"
                    >
                      Alle Leistungen
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover/all:-translate-y-0.5 group-hover/all:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  {/* DROPDOWN CONTENT */}
                  <div className="grid grid-cols-4 gap-0">
                    {navServices.map((group, index) => (
                      <div
                        key={group.heading}
                        className={`p-7 ${
                          index !== 0 ? "border-l border-navy/10" : ""
                        }`}
                      >
                        <p className="eyebrow mb-4 text-copper">
                          {group.heading}
                        </p>

                        <ul className="space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to as never}
                                className="group/item flex items-center justify-between gap-3 text-sm font-medium text-navy/75 transition-colors hover:text-copper-deep"
                              >
                                <span>{item.label}</span>

                                <ArrowUpRight
                                  className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                                  aria-hidden="true"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN LINKS */}
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to as never}
                className="group relative px-3.5 py-7 text-[13px] font-semibold text-navy transition-colors hover:text-copper-deep"
                activeProps={{
                  className:
                    "group relative px-3.5 py-7 text-[13px] font-bold text-copper-deep",
                }}
              >
                {item.label}

                <span className="absolute inset-x-3.5 bottom-0 h-0.5 origin-left scale-x-0 bg-copper transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href={business.phonePrimaryHref}
              className="group inline-flex items-center gap-2 border border-navy/20 bg-background px-4 py-2.5 text-[13px] font-bold text-navy transition-all duration-200 hover:border-navy hover:bg-navy hover:text-navy-foreground"
            >
              <Phone
                className="h-4 w-4 transition-transform group-hover:scale-110"
                aria-hidden="true"
              />
              Jetzt anrufen
            </a>

            <CtaLink
              to="/kontakt"
              className="group px-5 py-2.5 shadow-sm"
            >
              Angebot anfordern
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </CtaLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            className="inline-flex h-11 w-11 items-center justify-center border border-navy/15 bg-background text-navy transition-colors hover:border-navy hover:bg-navy hover:text-navy-foreground lg:hidden"
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
            className="border-t border-navy/10 bg-background lg:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="container-site py-3"
            >
              {/* MOBILE LEISTUNGEN */}
              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-navy/10 py-4 text-left text-base font-bold text-navy"
                onClick={() => setMobileServices((value) => !value)}
                aria-expanded={mobileServices}
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-copper" />
                  Leistungen
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServices ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileServices && (
                <div className="border-b border-navy/10 bg-sand/30 px-2 py-5">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {navServices.map((group) => (
                      <div key={group.heading}>
                        <p className="eyebrow mb-2 text-copper">
                          {group.heading}
                        </p>

                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to as never}
                                onClick={closeMobileMenu}
                                className="flex items-center justify-between py-1.5 text-sm font-medium text-navy/75 transition-colors hover:text-copper-deep"
                              >
                                {item.label}

                                <ArrowUpRight
                                  className="h-3.5 w-3.5"
                                  aria-hidden="true"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MOBILE MAIN LINKS */}
              {mainNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to as never}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between border-b border-navy/10 py-4 text-base font-bold text-navy transition-colors hover:text-copper-deep"
                >
                  {item.label}

                  <ArrowUpRight
                    className="h-4 w-4 opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              ))}

              {/* MOBILE CTA */}
              <div className="grid gap-2.5 py-5 sm:grid-cols-2">
                <CtaLink
                  to="/kontakt"
                  onClick={closeMobileMenu}
                  className="w-full justify-center"
                >
                  Angebot anfordern
                </CtaLink>

                <a
                  href={business.phonePrimaryHref}
                  className="inline-flex w-full items-center justify-center gap-2 border border-navy/20 bg-background px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Jetzt anrufen
                </a>
              </div>

              {/* MOBILE TRUST LINE */}
              <div className="border-t border-navy/10 py-4">
                <div className="flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                    24/7 Dachnotdienst
                  </span>

                  <span>{business.area}</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

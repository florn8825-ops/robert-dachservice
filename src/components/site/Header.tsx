import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, ChevronDown } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-background/95 backdrop-blur">
      <div className="hidden bg-navy text-navy-foreground lg:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide text-navy-foreground/75">
            Dachdeckermeisterbetrieb für {business.area}
          </p>
          <div className="flex items-center gap-5">
            <span className="text-navy-foreground/75">24/7 Dachnotdienst</span>
            <a href={business.phonePrimaryHref} className="font-semibold hover:text-copper">
              {business.phonePrimary}
            </a>
            <a
              href={business.phoneSecondaryHref}
              className="text-navy-foreground/75 hover:text-copper"
            >
              {business.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="Robert Dachservice Startseite">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center border border-copper text-copper"
          >
            <span className="block h-0 w-0 border-x-[10px] border-b-[10px] border-x-transparent border-b-copper" />
          </span>
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-base font-extrabold uppercase tracking-[0.12em] text-navy">
              Robert
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Dachservice
            </span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <Link
              to={"/leistungen/dacheindeckung-erneuern" as never}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-copper-deep"
            >
              Leistungen
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[62rem] max-w-[92vw] -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="mt-2 grid grid-cols-4 gap-8 border border-navy/10 bg-card p-8 shadow-xl">
                {navServices.map((group) => (
                  <div key={group.heading}>
                    <p className="eyebrow mb-3">{group.heading}</p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to as never}
                            className="text-sm text-navy/80 hover:text-copper-deep"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to as never}
              className="px-3 py-2 text-sm font-medium text-navy hover:text-copper-deep"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-copper-deep" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={business.phonePrimaryHref}
            className="inline-flex items-center gap-2 border border-navy/25 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Jetzt anrufen
          </a>
          <CtaLink to="/kontakt" className="px-5 py-2.5">
            Angebot anfordern
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          className="inline-flex h-11 w-11 items-center justify-center border border-navy/20 text-navy lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-navy/10 bg-background lg:hidden">
          <nav aria-label="Mobile Navigation" className="container-site py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-navy/10 py-3 text-left text-base font-semibold text-navy"
              onClick={() => setMobileServices((v) => !v)}
              aria-expanded={mobileServices}
            >
              Leistungen
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {mobileServices && (
              <div className="space-y-4 border-b border-navy/10 py-4">
                {navServices.map((group) => (
                  <div key={group.heading}>
                    <p className="eyebrow mb-2">{group.heading}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to as never}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-sm text-navy/80"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to as never}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-navy/10 py-3 text-base font-semibold text-navy"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <CtaLink to="/kontakt" className="w-full">
                Angebot anfordern
              </CtaLink>
              <a
                href={business.phonePrimaryHref}
                className="inline-flex w-full items-center justify-center gap-2 border border-navy/25 px-6 py-3 text-sm font-semibold text-navy"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {business.phonePrimary}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

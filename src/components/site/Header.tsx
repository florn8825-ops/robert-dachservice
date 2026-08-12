import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  ChevronDown,
  ArrowUpRight,
  X,
  ShieldCheck,
  Clock3,
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServices(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* =====================================================
          DESKTOP TRUST BAR
      ====================================================== */}
      <div className="hidden bg-navy lg:block">
        <div className="container-site flex h-9 items-center justify-between">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-foreground/60">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-full w-full animate-ping rounded-full bg-copper/50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-copper" />
            </span>

            <span>Dachdeckermeisterbetrieb</span>

            <span className="text-white/15">/</span>

            <span>{business.area}</span>
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <span className="flex items-center gap-1.5 font-semibold text-navy-foreground/55">
              <Clock3 className="h-3.5 w-3.5 text-copper" />
              24/7 Dachnotdienst
            </span>

            <span className="h-3 w-px bg-white/10" />

            <a
              href={business.phonePrimaryHref}
              className="group flex items-center gap-2 font-bold text-navy-foreground transition-colors hover:text-copper"
            >
              <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
              {business.phonePrimary}
            </a>

            <a
              href={business.phoneSecondaryHref}
              className="text-navy-foreground/45 transition-colors hover:text-copper"
            >
              {business.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
      ====================================================== */}
      <div
        className={[
          "border-b transition-all duration-500",
          scrolled
            ? "border-navy/10 bg-background/90 shadow-[0_12px_40px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
            : "border-navy/8 bg-background/96 backdrop-blur-xl",
        ].join(" ")}
      >
        <div
          className={[
            "container-site flex items-center justify-between gap-6 transition-all duration-500",
            scrolled
              ? "h-[66px] lg:h-[72px]"
              : "h-[74px] lg:h-[84px]",
          ].join(" ")}
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group relative flex shrink-0 items-center gap-3"
            aria-label="Robert Dachservice Startseite"
          >
            {/* logo mark */}
            <span
              aria-hidden="true"
              className={[
                "relative flex items-center justify-center overflow-hidden border bg-navy transition-all duration-500",
                scrolled ? "h-10 w-10" : "h-11 w-11",
                "border-copper/70 shadow-[0_8px_24px_rgba(180,95,35,0.14)]",
                "group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_30px_rgba(180,95,35,0.24)]",
              ].join(" ")}
            >
              {/* architectural lines */}
              <span className="absolute left-2 top-2 h-px w-5 bg-white/20" />
              <span className="absolute bottom-2 right-2 h-px w-5 bg-white/20" />

              {/* roof */}
              <span className="absolute left-1/2 top-[10px] h-[1.5px] w-6 -translate-x-1/2 rotate-[25deg] bg-copper" />
              <span className="absolute left-1/2 top-[10px] h-[1.5px] w-6 -translate-x-1/2 -rotate-[25deg] bg-copper" />

              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-copper" />

              <span className="relative mt-1 font-[family-name:var(--font-display)] text-[10px] font-black tracking-[0.08em] text-white">
                RD
              </span>
            </span>

            {/* wordmark */}
            <span className="leading-none">
              <span
                className={[
                  "block font-[family-name:var(--font-display)] font-extrabold uppercase tracking-[0.10em] text-navy transition-all duration-300",
                  scrolled ? "text-[15px]" : "text-[17px]",
                ].join(" ")}
              >
                Robert
              </span>

              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.34em] text-muted-foreground">
                Dachservice
              </span>
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center lg:flex"
          >
            {/* LEISTUNGEN */}
            <div className="group relative">
              <Link
                to={"/leistungen/dacheindeckung-erneuern" as never}
                className={[
                  "relative flex items-center gap-1.5 font-bold text-navy transition-all duration-300 hover:text-copper-deep",
                  scrolled
                    ? "px-3.5 py-6 text-[12px]"
                    : "px-4 py-7 text-[13px]",
                ].join(" ")}
              >
                Leistungen

                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                  aria-hidden="true"
                />

                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              {/* dropdown */}
              <div className="pointer-events-none invisible absolute left-1/2 top-full w-[72rem] max-w-[94vw] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="mt-3 overflow-hidden rounded-2xl border border-navy/10 bg-background shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
                  {/* dropdown top */}
                  <div className="relative overflow-hidden border-b border-navy/10 bg-navy px-8 py-7 text-white">
                    <div className="absolute right-0 top-0 h-52 w-52 translate-x-1/4 -translate-y-1/2 rounded-full bg-copper/15 blur-3xl" />

                    <div className="relative flex items-center justify-between gap-8">
                      <div>
                        <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-copper">
                          <span className="h-px w-7 bg-copper" />
                          Unsere Leistungen
                        </div>

                        <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                          Facharbeiten rund ums Dach
                        </p>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                          Präzise Handwerksarbeit, hochwertige Materialien und
                          zuverlässige Lösungen für Ihr Dach.
                        </p>
                      </div>

                      <Link
                        to="/leistungen/dacheindeckung-erneuern"
                        className="group/all hidden shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-copper hover:bg-copper lg:inline-flex"
                      >
                        Alle Leistungen
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/all:-translate-y-0.5 group-hover/all:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* dropdown content */}
                  <div className="grid grid-cols-4">
                    {navServices.map((group, index) => (
                      <div
                        key={group.heading}
                        className={[
                          "relative p-7 transition-colors hover:bg-sand/35",
                          index !== 0 ? "border-l border-navy/10" : "",
                        ].join(" ")}
                      >
                        <div className="mb-5 flex items-center justify-between">
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-copper-deep">
                            {group.heading}
                          </p>

                          <span className="text-[10px] font-bold text-navy/20">
                            0{index + 1}
                          </span>
                        </div>

                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to as never}
                                className="group/item flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-[13px] font-semibold text-navy/70 transition-all hover:bg-sand/70 hover:pl-3 hover:text-copper-deep"
                              >
                                <span>{item.label}</span>

                                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:opacity-100" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* bottom trust strip */}
                  <div className="flex items-center gap-6 border-t border-navy/10 bg-sand/25 px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-copper" />
                      Meisterqualität
                    </span>

                    <span className="h-3 w-px bg-navy/10" />

                    <span className="flex items-center gap-2">
                      <Clock3 className="h-3.5 w-3.5 text-copper" />
                      24/7 Notdienst
                    </span>

                    <span className="h-3 w-px bg-navy/10" />

                    <span>{business.area}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN LINKS */}
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to as never}
                className={[
                  "group relative font-bold text-navy transition-colors hover:text-copper-deep",
                  scrolled
                    ? "px-3 py-6 text-[12px]"
                    : "px-3.5 py-7 text-[13px]",
                ].join(" ")}
                activeProps={{
                  className: [
                    "group relative font-extrabold text-copper-deep",
                    scrolled
                      ? "px-3 py-6 text-[12px]"
                      : "px-3.5 py-7 text-[13px]",
                  ].join(" "),
                }}
              >
                {item.label}

                <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={business.phonePrimaryHref}
              className="group inline-flex items-center gap-2 rounded-full border border-navy/15 bg-background px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.04em] text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
              Anrufen
            </a>

            <CtaLink
              to="/kontakt"
              className="group rounded-full px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.04em] shadow-[0_10px_25px_rgba(180,95,35,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(180,95,35,0.28)]"
            >
              Angebot anfordern
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </CtaLink>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            className={[
              "relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden",
              mobileOpen
                ? "border-copper bg-copper text-white"
                : "border-navy/15 bg-background text-navy hover:border-navy hover:bg-navy hover:text-white",
            ].join(" ")}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* ===================================================
            MOBILE NAVIGATION
        ==================================================== */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="border-t border-navy/10 bg-background lg:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="container-site max-h-[calc(100vh-74px)] overflow-y-auto py-4"
            >
              {/* mobile intro */}
              <div className="mb-3 rounded-2xl bg-navy p-5 text-white">
                <div className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-copper">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  Robert Dachservice
                </div>

                <p className="font-[family-name:var(--font-display)] text-xl font-bold">
                  Qualität, die überdauert.
                </p>

                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                  <Clock3 className="h-3.5 w-3.5 text-copper" />
                  24/7 Dachnotdienst
                </div>
              </div>

              {/* mobile services */}
              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-navy/10 py-4 text-left text-base font-extrabold text-navy"
                onClick={() => setMobileServices((value) => !value)}
                aria-expanded={mobileServices}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-copper/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  </span>
                  Leistungen
                </span>

                <ChevronDown
                  className={[
                    "h-4 w-4 transition-transform duration-300",
                    mobileServices ? "rotate-180 text-copper" : "",
                  ].join(" ")}
                />
              </button>

              {mobileServices && (
                <div className="border-b border-navy/10 bg-sand/30 px-1 py-5">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {navServices.map((group, index) => (
                      <div key={group.heading}>
                        <div className="mb-2 flex items-center justify-between px-2">
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-copper-deep">
                            {group.heading}
                          </p>

                          <span className="text-[9px] font-bold text-navy/20">
                            0{index + 1}
                          </span>
                        </div>

                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to as never}
                                onClick={closeMobileMenu}
                                className="group flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-semibold text-navy/70 transition-colors hover:bg-white hover:text-copper-deep"
                              >
                                {item.label}

                                <ArrowUpRight className="h-3.5 w-3.5 opacity-30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* mobile main links */}
              {mainNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to as never}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between border-b border-navy/10 py-4 text-base font-extrabold text-navy transition-colors hover:text-copper-deep"
                >
                  {item.label}

                  <ArrowUpRight className="h-4 w-4 text-navy/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
                </Link>
              ))}

              {/* mobile CTA */}
              <div className="grid gap-2.5 py-5 sm:grid-cols-2">
                <CtaLink
                  to="/kontakt"
                  onClick={closeMobileMenu}
                  className="w-full justify-center rounded-full py-3.5 text-xs font-extrabold uppercase tracking-[0.05em]"
                >
                  Angebot anfordern
                  <ArrowUpRight className="h-4 w-4" />
                </CtaLink>

                <a
                  href={business.phonePrimaryHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy/15 bg-background px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.05em] text-navy transition-all hover:bg-navy hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </a>
              </div>

              {/* mobile footer */}
              <div className="flex items-center justify-between gap-4 border-t border-navy/10 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-copper" />
                  Meisterqualität
                </span>

                <span>{business.area}</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

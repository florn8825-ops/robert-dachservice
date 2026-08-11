import { Link } from "@tanstack/react-router";
import { business, mainServices } from "@/content/site";

const siteLinks = [
  { label: "Dachnotdienst", to: "/dachnotdienst" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Ratgeber", to: "/ratgeber" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Angebot anfordern", to: "/kontakt" },
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
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-extrabold uppercase tracking-[0.12em]">
            {business.name}
          </p>
          <p className="mt-1 text-sm text-navy-foreground/70">{business.legalLine}</p>
          <p className="mt-4 text-sm text-navy-foreground/70">{business.area}</p>
          <a
            href={business.phonePrimaryHref}
            className="mt-4 block font-[family-name:var(--font-display)] text-lg font-bold hover:text-copper"
          >
            {business.phonePrimary}
          </a>
          <a
            href={business.phoneSecondaryHref}
            className="mt-1 block text-sm text-navy-foreground/70 hover:text-copper"
          >
            {business.phoneSecondary}
          </a>
        </div>

        <div>
          <p className="eyebrow text-copper">Leistungen</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainServices.map((s) => (
              <li key={s.to}>
                <Link to={s.to as never} className="text-navy-foreground/75 hover:text-copper">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-copper">Unternehmen</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteLinks.map((s) => (
              <li key={s.label}>
                <Link to={s.to as never} className="text-navy-foreground/75 hover:text-copper">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-copper">Region</p>
          <ul className="mt-4 space-y-2 text-sm">
            {regionLinks.map((s) => (
              <li key={s.to}>
                <Link to={s.to as never} className="text-navy-foreground/75 hover:text-copper">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name} · {business.legalLine}
          </p>
          <ul className="flex flex-wrap gap-4">
            {legalLinks.map((s) => (
              <li key={s.to}>
                <Link to={s.to as never} className="hover:text-copper">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

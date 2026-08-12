import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";
import type { Block, CtaRef, PageDef } from "@/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { CallLink, CtaLink } from "./CtaLink";
import { business } from "@/content/site";
import { PromoPopup } from "./PromoPopup";

export function CtaButtons({
  cta,
  secondary,
}: {
  cta: CtaRef;
  secondary?: CtaRef | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {cta.tel ? (
        <CallLink variant="primary">{cta.label}</CallLink>
      ) : (
        <CtaLink to={cta.to ?? "/kontakt"}>{cta.label}</CtaLink>
      )}

      {secondary &&
        (secondary.tel ? (
          <CallLink>{secondary.label}</CallLink>
        ) : (
          <CtaLink to={secondary.to ?? "/kontakt"} variant="ghost">
            {secondary.label}
          </CtaLink>
        ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-copper">
      <span className="h-px w-8 bg-copper" aria-hidden="true" />
      {children}
    </p>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <section className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              {block.h2 && (
                <>
                  <SectionLabel>Überblick</SectionLabel>
                  <h2 className="max-w-md text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                    {block.h2}
                  </h2>
                </>
              )}
            </div>

            <div className="space-y-5 text-[1rem] leading-8 text-muted-foreground">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      );

    case "list":
      return (
        <section className="mx-auto max-w-5xl">
          {block.h2 && (
            <div className="max-w-3xl">
              <SectionLabel>Leistungsumfang</SectionLabel>
              <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                {block.h2}
              </h2>
            </div>
          )}

          {block.intro && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="group flex items-start gap-4 border border-navy/10 bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-copper/50 hover:shadow-lg"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-copper text-background">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>

                <span className="pt-0.5 text-sm font-medium leading-6 text-navy/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section className="mx-auto max-w-6xl">
          {block.h2 && (
            <div className="max-w-3xl">
              <SectionLabel>So läuft es ab</SectionLabel>
              <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                {block.h2}
              </h2>
            </div>
          )}

          {block.intro && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {block.steps.map((step, i) => (
              <li
                key={step}
                className="relative overflow-hidden border border-navy/10 bg-card p-7"
              >
                <span className="absolute right-4 top-1 font-[family-name:var(--font-display)] text-7xl font-extrabold leading-none text-navy/[0.045]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="inline-flex h-9 w-9 items-center justify-center bg-navy font-[family-name:var(--font-display)] text-sm font-bold text-navy-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-6 text-sm font-medium leading-7 text-navy/80">
                    {step}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "cards":
      return (
        <section className="mx-auto max-w-6xl">
          {block.h2 && (
            <div className="max-w-3xl">
              <SectionLabel>Weitere Leistungen</SectionLabel>
              <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                {block.h2}
              </h2>
            </div>
          )}

          {block.intro && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {block.cards.map((card, index) => (
              <Link
                key={card.to}
                to={card.to as never}
                className="group relative flex min-h-[250px] flex-col overflow-hidden border border-navy/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-xl"
              >
                <span className="absolute right-5 top-4 font-[family-name:var(--font-display)] text-6xl font-extrabold text-navy/[0.04]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-full flex-col">
                  <span className="mb-6 h-1 w-10 bg-copper transition-all duration-300 group-hover:w-16" />

                  <h3 className="max-w-[85%] font-[family-name:var(--font-display)] text-xl font-extrabold leading-tight text-navy">
                    {card.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                    {card.text}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                    {card.cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      );

    case "placeholder":
      return (
        <section className="mx-auto max-w-6xl">
          <div className="overflow-hidden">
            <ImagePlaceholder
              label={block.label}
              ratio={block.ratio ?? "photo"}
            />
          </div>
        </section>
      );

    case "faq":
      return (
        <section className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <SectionLabel>FAQ</SectionLabel>

            <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
              {block.h2}
            </h2>
          </div>

          <dl className="mt-10 border-y border-navy/10">
            {block.items.map((item, index) => (
              <div
                key={item.q}
                className="grid gap-4 border-b border-navy/10 py-7 last:border-b-0 md:grid-cols-[70px_1fr]"
              >
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <dt className="text-base font-bold leading-6 text-navy sm:text-lg">
                    {item.q}
                  </dt>

                  <dd className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                    {item.a}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </section>
      );

    case "callout":
      return (
        <section className="relative mx-auto max-w-6xl overflow-hidden bg-navy px-7 py-12 text-navy-foreground sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-copper/20" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-copper/10" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>
                <span className="text-copper">Wichtig</span>
              </SectionLabel>

              <h2 className="max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                {block.h2}
              </h2>

              <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-navy-foreground/70">
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>

            {block.cta && (
              <div className="lg:pb-1">
                {block.cta.tel ? (
                  <CallLink variant="primary">{block.cta.label}</CallLink>
                ) : (
                  <CtaLink to={block.cta.to ?? "/kontakt"}>
                    {block.cta.label}
                  </CtaLink>
                )}
              </div>
            )}
          </div>
        </section>
      );
  }
}

function TrustStrip() {
  return (
    <div className="border-y border-navy/10 bg-card">
      <div className="container-site grid divide-y divide-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="flex items-center gap-4 px-0 py-5 sm:px-6">
          <ShieldCheck className="h-5 w-5 text-copper" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold text-navy">Meisterbetrieb</p>
            <p className="text-xs text-muted-foreground">Fachgerechte Dacharbeiten</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-0 py-5 sm:px-6">
          <Phone className="h-5 w-5 text-copper" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold text-navy">Direkter Kontakt</p>
            <p className="text-xs text-muted-foreground">{business.phonePrimary}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-0 py-5 sm:px-6">
          <span className="flex h-5 w-5 items-center justify-center text-copper">
            <span className="h-2 w-2 rounded-full bg-copper" />
          </span>
          <div>
            <p className="text-sm font-bold text-navy">Regional</p>
            <p className="text-xs text-muted-foreground">Köln · Bonn · Umgebung</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageShell({
  page,
  children,
}: {
  page: PageDef;
  children?: React.ReactNode;
}) {
  return (
    <>
      {/* Premium Page Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div
          className="absolute inset-0 opacity-[0.035]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-copper/10" />
        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-copper/10" />

        <div className="container-site relative py-10 lg:py-16">
          <Breadcrumbs items={page.breadcrumbs} />

          <div className="mt-10 max-w-5xl">
            {page.eyebrow && (
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-copper">
                <span className="h-px w-10 bg-copper" aria-hidden="true" />
                {page.eyebrow}
              </p>
            )}

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-navy-foreground/70 sm:text-lg">
              {page.intro}
            </p>

            <div className="mt-9">
              <CtaButtons
                cta={page.cta}
                secondary={page.secondaryCta}
              />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Main content */}
      <main className="container-site py-16 lg:py-24">
        <div className="space-y-20 lg:space-y-28">
          {page.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}

          {children}

          {/* Final CTA */}
          <section className="relative overflow-hidden bg-sand px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-copper/[0.035]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <SectionLabel>Nächster Schritt</SectionLabel>

                <h2 className="max-w-3xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                  Ihr Anliegen rund ums Dach besprechen
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-navy/65 sm:text-base">
                  Beschreiben Sie kurz Ihr Vorhaben – telefonisch unter{" "}
                  <a
                    href={business.phonePrimaryHref}
                    className="font-bold text-navy underline decoration-copper underline-offset-4"
                  >
                    {business.phonePrimary}
                  </a>{" "}
                  oder direkt über unser Anfrageformular.
                </p>
              </div>

              <div className="shrink-0">
                <CtaButtons
                  cta={{
                    label: "Angebot anfordern",
                    to: "/kontakt",
                  }}
                  secondary={{
                    label: "Jetzt anrufen",
                    tel: true,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <PromoPopup />
    </>
  );
}

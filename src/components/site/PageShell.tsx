import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { Block, CtaRef, PageDef } from "@/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { CallLink, CtaLink } from "./CtaLink";
import { business } from "@/content/site";

export function CtaButtons({
  cta,
  secondary,
}: {
  cta: CtaRef;
  secondary?: CtaRef | undefined;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
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

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-copper" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-copper-deep">
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}

      {intro && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

function BlockView({ block, index }: { block: Block; index: number }) {
  switch (block.type) {
    case "text":
      return (
        <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-navy/10 bg-background px-6 py-10 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.35)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-copper/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="text-7xl font-black leading-none text-navy/[0.06]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {block.h2 && (
                <h2 className="mt-[-2.2rem] max-w-md text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                  {block.h2}
                </h2>
              )}
            </div>

            <div className="space-y-5 border-l-2 border-copper/30 pl-6 text-[1rem] leading-8 text-muted-foreground sm:pl-8">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      );

    case "list":
      return (
        <section className="mx-auto max-w-6xl">
          <SectionHeading title={block.h2} intro={block.intro} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((item, i) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-copper/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-navy-foreground">
                    <Check className="h-4 w-4" />
                  </span>

                  <span className="pt-1 text-sm font-medium leading-6 text-navy/85">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case "steps":
      return (
        <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-navy-foreground shadow-[0_30px_80px_-45px_rgba(15,23,42,0.7)] sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative">
            <SectionHeading
              title={block.h2}
              intro={block.intro}
            />

            <div className="mt-10 grid gap-3 lg:grid-cols-4">
              {block.steps.map((step, i) => (
                <div
                  key={step}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-black text-copper">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <ChevronRight className="mt-2 h-5 w-5 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-copper" />
                  </div>

                  <p className="mt-8 text-sm leading-7 text-white/75">
                    {step}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-copper transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "cards":
      return (
        <section className="mx-auto max-w-6xl">
          <SectionHeading title={block.h2} intro={block.intro} />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {block.cards.map((card, i) => (
              <Link
                key={card.to}
                to={card.to as never}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[1.5rem] border border-navy/10 bg-background p-7 shadow-[0_15px_50px_-40px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-copper/50 hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.65)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-copper/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-copper">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-extrabold leading-tight text-navy">
                    {card.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                    {card.text}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                    {card.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
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
          <div className="relative overflow-hidden rounded-[2rem]">
            <ImagePlaceholder
              label={block.label}
              ratio={block.ratio ?? "photo"}
              className="min-h-[300px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
          </div>
        </section>
      );

    case "faq":
      return (
        <section className="mx-auto max-w-5xl">
          <SectionHeading title={block.h2} />

          <div className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-background shadow-[0_20px_60px_-45px_rgba(15,23,42,0.4)]">
            {block.items.map((item, i) => (
              <details
                key={item.q}
                className="group border-b border-navy/10 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-6 font-[family-name:var(--font-display)] text-base font-bold text-navy transition-colors hover:bg-sand/30 sm:px-8"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-navy-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1">{item.q}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/15 transition-transform duration-300 group-open:rotate-45">
                    <span className="relative block h-3 w-3">
                      <span className="absolute left-0 top-1.5 h-px w-3 bg-navy" />
                      <span className="absolute left-1.5 top-0 h-3 w-px bg-navy" />
                    </span>
                  </span>
                </summary>

                <div className="px-6 pb-7 pl-[4.5rem] pr-8 text-sm leading-7 text-muted-foreground sm:pr-12">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      );

    case "callout":
      return (
        <section className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-12 text-navy-foreground shadow-[0_30px_90px_-50px_rgba(15,23,42,0.8)] sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-copper/20 blur-3xl" />
            <div className="absolute bottom-[-8rem] left-[-5rem] h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-copper" />
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-copper">
                    Robert Dachservice
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                  {block.h2}
                </h2>

                <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-white/70 sm:text-base">
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>

              {block.cta && (
                <div className="lg:shrink-0">
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
          </div>
        </section>
      );
  }
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
      {/* PREMIUM HERO */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(197,137,67,0.18),transparent_30%),radial-gradient(circle_at_10%_100%,rgba(255,255,255,0.05),transparent_30%)]" />

        <div className="absolute right-[8%] top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border border-white/5 lg:block" />
        <div className="absolute right-[14%] top-1/2 hidden h-[20rem] w-[20rem] -translate-y-1/2 rounded-full border border-copper/10 lg:block" />

        <div className="relative container-site py-10 sm:py-14 lg:py-20">
          <Breadcrumbs items={page.breadcrumbs} />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              {page.eyebrow && (
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-copper" />
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-copper">
                    {page.eyebrow}
                  </span>
                </div>
              )}

              <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                {page.h1}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                {page.intro}
              </p>

              <div className="mt-9">
                <CtaButtons
                  cta={page.cta}
                  secondary={page.secondaryCta}
                />
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative ml-auto max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm">
                <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-copper text-navy shadow-lg">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/45">
                  Robert Dachservice
                </p>

                <div className="mt-6 grid gap-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="h-2 w-2 rounded-full bg-copper" />
                    <span className="text-sm text-white/75">
                      Dachdeckermeisterbetrieb
                    </span>
                  </div>

                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="h-2 w-2 rounded-full bg-copper" />
                    <span className="text-sm text-white/75">
                      Köln · Bonn · Umgebung
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-copper" />
                    <span className="text-sm text-white/75">
                      24/7 Dachnotdienst
                    </span>
                  </div>
                </div>

                <a
                  href={business.phonePrimaryHref}
                  className="mt-7 flex items-center gap-3 text-sm font-bold text-white transition-colors hover:text-copper"
                >
                  <Phone className="h-4 w-4 text-copper" />
                  {business.phonePrimary}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/40">
            <span>Dachreparatur</span>
            <span>Dacheindeckung</span>
            <span>Dachsanierung</span>
            <span>Notdienst</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="relative overflow-hidden bg-background">
        <div className="absolute left-[-12rem] top-[20rem] h-96 w-96 rounded-full bg-copper/[0.035] blur-3xl" />
        <div className="absolute right-[-12rem] top-[65rem] h-96 w-96 rounded-full bg-navy/[0.035] blur-3xl" />

        <div className="relative container-site space-y-20 py-16 sm:space-y-24 sm:py-20 lg:space-y-28 lg:py-28">
          {page.blocks.map((block, i) => (
            <BlockView key={i} block={block} index={i} />
          ))}

          {children}

          {/* FINAL CTA */}
          <section className="relative overflow-hidden rounded-[2rem] bg-sand px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-copper" />
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-copper-deep">
                    Nächster Schritt
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
                  Ihr Anliegen rund ums Dach besprechen
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-navy/65">
                  Beschreiben Sie kurz Ihr Vorhaben – telefonisch unter{" "}
                  <strong className="text-navy">
                    {business.phonePrimary}
                  </strong>{" "}
                  oder über das Anfrageformular.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink to="/kontakt">Angebot anfordern</CtaLink>
                <CallLink>
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </CallLink>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

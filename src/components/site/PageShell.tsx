import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import type { Block, CtaRef, PageDef } from "@/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { CallLink, CtaLink } from "./CtaLink";
import { business } from "@/content/site";
import { PromoPopup } from "./PromoPopup";

function RoofVisual() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-navy shadow-2xl shadow-navy/20">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-copper/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      {/* roof illustration */}
      <div className="absolute inset-x-8 bottom-16 h-[230px]">
        <div className="absolute left-1/2 top-0 h-[150px] w-[310px] -translate-x-1/2 rotate-[-25deg] border-b-[18px] border-copper bg-gradient-to-br from-white/15 to-transparent shadow-2xl" />

        <div className="absolute left-1/2 top-[104px] h-[110px] w-[310px] -translate-x-1/2 bg-charcoal/80 shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-2 bg-copper" />

          <div className="grid h-full grid-cols-4 gap-4 p-8 opacity-70">
            <span className="border border-white/15" />
            <span className="border border-white/15" />
            <span className="border border-white/15" />
            <span className="border border-white/15" />
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-3 w-[370px] -translate-x-1/2 rounded-full bg-copper shadow-[0_0_30px_rgba(200,117,61,.45)]" />
      </div>

      {/* top label */}
      <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-copper shadow-[0_0_10px_rgba(200,117,61,.9)]" />
        ROBERT DACHSERVICE
      </div>

      {/* bottom info */}
      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Köln · Bonn · Umgebung
          </p>
          <p className="mt-2 max-w-[240px] font-[family-name:var(--font-display)] text-xl font-bold leading-tight text-white">
            Dacharbeiten mit Anspruch.
          </p>
        </div>

        <div className="hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:block">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
            Erreichbarkeit
          </p>
          <p className="mt-1 text-sm font-bold text-white">24 / 7</p>
        </div>
      </div>
    </div>
  );
}

function SectionNumber({ number }: { number: string }) {
  return (
    <span className="font-[family-name:var(--font-display)] text-xs font-bold tracking-[0.2em] text-copper">
      {number}
    </span>
  );
}

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
        <CallLink variant="primary">
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {cta.label}
          </span>
        </CallLink>
      ) : (
        <CtaLink to={cta.to ?? "/kontakt"}>
          <span className="flex items-center gap-2">
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </span>
        </CtaLink>
      )}

      {secondary &&
        (secondary.tel ? (
          <CallLink>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {secondary.label}
            </span>
          </CallLink>
        ) : (
          <CtaLink to={secondary.to ?? "/kontakt"} variant="ghost">
            {secondary.label}
          </CtaLink>
        ))}
    </div>
  );
}

function PremiumList({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item}
          className="group flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-lg"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
            <Check className="h-4 w-4" />
          </span>

          <div className="flex-1">
            <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-copper/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium leading-relaxed text-navy/85">
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CardsBlock({
  block,
}: {
  block: Extract<Block, { type: "cards" }>;
}) {
  return (
    <section className="relative">
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <SectionNumber number="03 / LEISTUNGEN" />
          {block.h2 && (
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              {block.h2}
            </h2>
          )}
        </div>

        {block.intro && (
          <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:text-right">
            {block.intro}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {block.cards.map((card, index) => (
          <Link
            key={card.to}
            to={card.to as never}
            className="group relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-copper/40 hover:shadow-2xl hover:shadow-navy/10"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-copper/5 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  {index === 0 ? (
                    <Hammer className="h-5 w-5" />
                  ) : index === 1 ? (
                    <ShieldCheck className="h-5 w-5" />
                  ) : (
                    <Wrench className="h-5 w-5" />
                  )}
                </span>

                <ArrowUpRight className="h-5 w-5 text-navy/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-copper" />
              </div>

              <div className="mt-auto pt-12">
                <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-copper">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-navy">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {card.text}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                  {card.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function StepsBlock({
  block,
}: {
  block: Extract<Block, { type: "steps" }>;
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-navy p-7 text-white shadow-2xl shadow-navy/15 sm:p-10 lg:p-14">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />

      <div className="relative">
        <SectionNumber number="04 / ABLAUF" />

        {block.h2 && (
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">
            {block.h2}
          </h2>
        )}

        {block.intro && (
          <p className="mt-5 max-w-2xl leading-7 text-white/60">
            {block.intro}
          </p>
        )}

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {block.steps.map((step, index) => (
            <div
              key={step}
              className="group relative bg-navy p-7 transition-colors hover:bg-white/[0.06]"
            >
              <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-copper/50 transition-colors group-hover:text-copper">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-8 text-sm font-medium leading-6 text-white/80">
                {step}
              </p>

              <div className="absolute bottom-0 left-7 right-7 h-px bg-copper/0 transition-colors group-hover:bg-copper/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TextBlock({
  block,
  index,
}: {
  block: Extract<Block, { type: "text" }>;
  index: number;
}) {
  return (
    <section className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-14">
      <div>
        <SectionNumber number={`${String(index).padStart(2, "0")} / THEMA`} />
      </div>

      <div className="max-w-4xl">
        {block.h2 && (
          <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            {block.h2}
          </h2>
        )}

        <div className="mt-6 space-y-5">
          {block.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="max-w-3xl text-base leading-8 text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListBlock({
  block,
}: {
  block: Extract<Block, { type: "list" }>;
}) {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(240px,0.7fr)_1.3fr] lg:gap-16">
      <div>
        <SectionNumber number="LEISTUNG" />

        {block.h2 && (
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            {block.h2}
          </h2>
        )}

        {block.intro && (
          <p className="mt-5 leading-7 text-muted-foreground">
            {block.intro}
          </p>
        )}
      </div>

      <PremiumList items={block.items} />
    </section>
  );
}

function FaqBlock({
  block,
}: {
  block: Extract<Block, { type: "faq" }>;
}) {
  return (
    <section className="mx-auto max-w-4xl">
      <SectionNumber number="FAQ / HÄUFIGE FRAGEN" />

      <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
        {block.h2}
      </h2>

      <div className="mt-8 space-y-3">
        {block.items.map((item, index) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all open:border-copper/30 open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-[family-name:var(--font-display)] font-bold text-navy">
              <span className="flex gap-4">
                <span className="text-xs font-bold text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.q}
              </span>

              <ChevronDown className="h-5 w-5 shrink-0 text-copper transition-transform group-open:rotate-180" />
            </summary>

            <p className="mt-5 max-w-3xl border-t border-navy/10 pt-5 text-sm leading-7 text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CalloutBlock({
  block,
}: {
  block: Extract<Block, { type: "callout" }>;
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-copper p-8 text-white shadow-2xl shadow-copper/20 sm:p-12 lg:p-16">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-3xl">
        <Sparkles className="h-7 w-7 text-white/70" />

        <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
          {block.h2}
        </h2>

        <div className="mt-5 space-y-4 text-base leading-7 text-white/75">
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>

        {block.cta && (
          <div className="mt-8">
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

function BlockView({
  block,
  index,
}: {
  block: Block;
  index: number;
}) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} index={index + 1} />;

    case "list":
      return <ListBlock block={block} />;

    case "steps":
      return <StepsBlock block={block} />;

    case "cards":
      return <CardsBlock block={block} />;

    case "faq":
      return <FaqBlock block={block} />;

    case "callout":
      return <CalloutBlock block={block} />;

    case "placeholder":
      /*
       * Nu mai afișăm "Dachreparatur Foto – wird später ersetzt".
       * Placeholder-ul vechi făcea pagina să arate ca un template neterminat.
       */
      return (
        <section className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-sand/35 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="p-4 sm:p-6">
              <SectionNumber number="ROBERT DACHSERVICE" />

              <h2 className="mt-3 max-w-md text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                Fachgerechte Arbeit beginnt mit einer sauberen Bestandsaufnahme.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
                Wir betrachten Dach, Anschlüsse und relevante Details und stimmen
                den notwendigen Leistungsumfang individuell auf das Gebäude ab.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-copper" />
                  Fachgerecht
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm">
                  <MapPin className="h-4 w-4 text-copper" />
                  Köln & Bonn
                </span>
              </div>
            </div>

            <RoofVisual />
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
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-sand">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(200,117,61,.12),transparent_30%)]" />

        <div className="container-site relative py-8 lg:py-14">
          <Breadcrumbs items={page.breadcrumbs} />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {page.eyebrow && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-copper-deep backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                    {page.eyebrow}
                  </span>
                )}

                <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  <Clock3 className="h-3.5 w-3.5 text-copper" />
                  24 / 7 erreichbar
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-navy sm:text-5xl lg:text-[4.6rem]">
                {page.h1}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {page.intro}
              </p>

              <div className="mt-9">
                <CtaButtons
                  cta={page.cta}
                  secondary={page.secondaryCta}
                />
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-navy/10 pt-6 text-xs font-semibold text-navy/60">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-copper" />
                  Persönliche Beratung
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-copper" />
                  Köln & Bonn
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-copper" />
                  Transparente Abstimmung
                </span>
              </div>
            </div>

            {page.heroImage ? (
              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20">
                <img
                  src={page.heroImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : (
              <RoofVisual />
            )}
        </div>
      </section>

      {/* =========================================================
          QUICK TRUST BAR
      ========================================================== */}
      <section className="border-b border-navy/10 bg-white">
        <div className="container-site">
          <div className="grid divide-y divide-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-center gap-4 py-6 sm:px-7 sm:first:pl-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-copper/10 text-copper">
                <ShieldCheck className="h-5 w-5" />
              </span>

              <div>
                <p className="text-sm font-bold text-navy">
                  Fachgerechte Ausführung
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Auf den konkreten Bestand abgestimmt
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 sm:px-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-copper/10 text-copper">
                <MapPin className="h-5 w-5" />
              </span>

              <div>
                <p className="text-sm font-bold text-navy">
                  Köln & Bonn
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Regionale Betreuung
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 sm:px-7 sm:last:pr-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-copper/10 text-copper">
                <Clock3 className="h-5 w-5" />
              </span>

              <div>
                <p className="text-sm font-bold text-navy">
                  24 / 7 erreichbar
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Auch bei akuten Dachschäden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <main className="bg-background">
        <div className="container-site py-16 sm:py-20 lg:py-28">
          <div className="space-y-20 lg:space-y-28">
            {page.blocks.map((block, index) => (
              <BlockView
                key={`${block.type}-${index}`}
                block={block}
                index={index}
              />
            ))}

            {children}

            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="relative overflow-hidden rounded-[2rem] bg-navy p-8 shadow-2xl shadow-navy/20 sm:p-12 lg:p-16">
              <div className="absolute inset-0">
                <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-copper/20 blur-3xl" />
                <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
              </div>

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    <Sparkles className="h-3.5 w-3.5 text-copper" />
                    Robert Dachservice
                  </span>

                  <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Ihr Anliegen rund ums Dach besprechen.
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
                    Beschreiben Sie kurz Ihr Vorhaben – telefonisch unter{" "}
                    <span className="font-semibold text-white">
                      {business.phonePrimary}
                    </span>{" "}
                    oder über das Anfrageformular.
                  </p>

                  <div className="mt-8">
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

                <div className="hidden lg:block">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Phone className="h-8 w-8 text-copper" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <PromoPopup />
    </>
  );
}

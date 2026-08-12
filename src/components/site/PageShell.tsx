import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";

import type { Block, CtaRef, PageDef } from "@/content/types";
import { business } from "@/content/site";

import { Breadcrumbs } from "./Breadcrumbs";
import { CallLink, CtaLink } from "./CtaLink";
import { ImagePlaceholder } from "./ImagePlaceholder";

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

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <section className="mx-auto max-w-4xl">
          {block.h2 && (
            <div className="mb-7 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-8 w-1 shrink-0 bg-copper"
              />
              <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
                {block.h2}
              </h2>
            </div>
          )}

          <div className="space-y-5 text-[0.98rem] leading-8 text-muted-foreground">
            {block.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>
      );

    case "list":
      return (
        <section className="mx-auto max-w-5xl">
          {block.h2 && (
            <div className="mb-7 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-8 w-1 shrink-0 bg-copper"
              />
              <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
                {block.h2}
              </h2>
            </div>
          )}

          {block.intro && (
            <p className="max-w-3xl text-[0.98rem] leading-8 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="group flex gap-4 border border-navy/10 bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-copper/50 hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-copper/10 text-copper-deep"
                >
                  <Check className="h-4 w-4" />
                </span>

                <span className="text-sm leading-6 text-navy/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section className="mx-auto max-w-5xl">
          {block.h2 && (
            <div className="mb-7 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-8 w-1 shrink-0 bg-copper"
              />
              <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
                {block.h2}
              </h2>
            </div>
          )}

          {block.intro && (
            <p className="max-w-3xl text-[0.98rem] leading-8 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <ol className="relative mt-10 grid gap-4 sm:grid-cols-2">
            {block.steps.map((step, i) => (
              <li
                key={step}
                className="group relative overflow-hidden border border-navy/10 bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-copper/50 hover:shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rotate-45 bg-copper/5 transition-transform duration-300 group-hover:scale-125"
                />

                <div className="relative">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-none text-copper/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-sm leading-7 text-navy/85">
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
            <div className="mb-7 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-8 w-1 shrink-0 bg-copper"
              />
              <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
                {block.h2}
              </h2>
            </div>
          )}

          {block.intro && (
            <p className="max-w-3xl text-[0.98rem] leading-8 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {block.cards.map((card) => (
              <Link
                key={card.to}
                to={card.to as never}
                className="group relative flex min-h-[250px] flex-col overflow-hidden border border-navy/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/60 hover:shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-copper/5 transition-transform duration-300 group-hover:scale-150"
                />

                <div className="relative flex h-full flex-col">
                  <span className="mb-8 inline-flex h-10 w-10 items-center justify-center border border-copper/40 text-copper">
                    <ArrowRight className="h-4 w-4" />
                  </span>

                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-navy">
                    {card.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {card.text}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-copper-deep">
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
        <section className="mx-auto max-w-5xl">
          <div className="overflow-hidden border border-navy/10 bg-card p-2 shadow-sm">
            <ImagePlaceholder
              label={block.label}
              ratio={block.ratio ?? "photo"}
            />
          </div>
        </section>
      );

    case "faq":
      return (
        <section className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-start gap-4">
            <span
              aria-hidden="true"
              className="mt-2 h-8 w-1 shrink-0 bg-copper"
            />

            <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
              {block.h2}
            </h2>
          </div>

          <dl className="divide-y divide-navy/10 border-y border-navy/10">
            {block.items.map((item) => (
              <div
                key={item.q}
                className="group py-7 transition-colors hover:bg-sand/30 sm:px-5"
              >
                <dt className="flex items-start gap-4 font-[family-name:var(--font-display)] text-base font-bold leading-6 text-navy">
                  <ChevronRight
                    className="mt-0.5 h-5 w-5 shrink-0 text-copper transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                  {item.q}
                </dt>

                <dd className="mt-3 pl-9 text-sm leading-7 text-muted-foreground">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );

    case "callout":
      return (
        <section className="relative mx-auto max-w-5xl overflow-hidden bg-navy px-8 py-12 text-navy-foreground shadow-xl sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-48 w-48 translate-x-20 -translate-y-20 rounded-full border-[30px] border-copper/10"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-24 w-24 -translate-x-10 translate-y-10 rotate-45 border border-copper/20"
          />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-copper" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                Robert Dachservice
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl">
              {block.h2}
            </h2>

            <div className="mt-5 max-w-2xl space-y-4 leading-7 text-navy-foreground/75">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
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
}

export function PageShell({
  page,
  children,
}: {
  page: PageDef;
  children?: ReactNode;
}) {
  return (
    <>
      {/* Premium page hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute right-[-8rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full border border-copper/20"
        />

        <div
          aria-hidden="true"
          className="absolute right-[-3rem] top-[-5rem] h-[18rem] w-[18rem] rounded-full border border-copper/10"
        />

        <div className="container-site relative py-12 lg:py-20">
          <Breadcrumbs items={page.breadcrumbs} />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              {page.eyebrow && (
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-copper" />
                  <p className="eyebrow text-copper">{page.eyebrow}</p>
                </div>
              )}

              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                {page.h1}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-navy-foreground/70 sm:text-lg">
                {page.intro}
              </p>

              <div className="mt-9">
                <CtaButtons
                  cta={page.cta}
                  secondary={page.secondaryCta}
                />
              </div>
            </div>

            {/* Decorative information panel */}
            <div className="relative hidden lg:block">
              <div className="relative ml-auto max-w-sm border border-navy-foreground/15 bg-navy-foreground/[0.04] p-7 backdrop-blur-sm">
                <div
                  aria-hidden="true"
                  className="absolute -right-px -top-px h-16 w-16 border-r border-t border-copper"
                />

                <div className="flex items-center gap-4 border-b border-navy-foreground/10 pb-6">
                  <span className="flex h-12 w-12 items-center justify-center bg-copper text-navy">
                    <ShieldCheck className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      Robert Dachservice
                    </p>
                    <p className="mt-1 text-xs text-navy-foreground/55">
                      Dachdeckermeisterbetrieb
                    </p>
                  </div>
                </div>

                <div className="space-y-5 pt-6">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    <div>
                      <p className="text-sm font-semibold">
                        24/7 Dachnotdienst
                      </p>
                      <p className="mt-1 text-xs leading-5 text-navy-foreground/55">
                        Für akute Dachschäden erreichbar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    <div>
                      <p className="text-sm font-semibold">
                        Direkt erreichbar
                      </p>
                      <a
                        href={business.phonePrimaryHref}
                        className="mt-1 block text-xs text-navy-foreground/55 transition-colors hover:text-copper"
                      >
                        {business.phonePrimary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-7 border-t border-navy-foreground/10 pt-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-navy-foreground/45">
                    Einsatzgebiet
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    {business.area}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-copper/60 to-transparent"
        />
      </section>

      {/* Page content */}
      <div className="container-site space-y-20 py-16 lg:space-y-28 lg:py-24">
        {page.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}

        {children}

        {/* Final CTA */}
        <section className="relative mx-auto max-w-6xl overflow-hidden bg-sand px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full border-[24px] border-copper/10"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-copper" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-deep">
                  Nächster Schritt
                </span>
              </div>

              <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-navy sm:text-3xl">
                Ihr Anliegen rund ums Dach besprechen
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-navy/65">
                Beschreiben Sie kurz Ihr Vorhaben – telefonisch unter{" "}
                <strong className="font-semibold text-navy">
                  {business.phonePrimary}
                </strong>{" "}
                oder über das Anfrageformular.
              </p>
            </div>

            <div className="shrink-0">
              <CtaButtons
                cta={{ label: "Angebot anfordern", to: "/kontakt" }}
                secondary={{ label: "Jetzt anrufen", tel: true }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

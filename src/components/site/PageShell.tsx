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
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {cta.tel ? (
        <CallLink variant="primary">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {cta.label}
        </CallLink>
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
        <section className="relative mx-auto max-w-4xl">
          <div className="absolute -left-5 top-1 hidden h-12 w-1 bg-copper lg:block" />

          {block.h2 && (
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              {block.h2}
            </h2>
          )}

          <div className="mt-7 space-y-5 text-[1rem] leading-8 text-muted-foreground">
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
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              {block.h2}
            </h2>
          )}

          {block.intro && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="group flex gap-4 border border-navy/10 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-lg"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                  <Check className="h-4 w-4" aria-hidden="true" />
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
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              {block.h2}
            </h2>
          )}

          {block.intro && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {block.intro}
            </p>
          )}

          <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {block.steps.map((step, i) => (
              <li
                key={step}
                className="group relative overflow-hidden border border-navy/10 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-xl"
              >
                <span className="absolute right-4 top-2 font-[family-name:var(--font-display)] text-6xl font-extrabold text-navy/[0.045]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-copper text-sm font-bold text-white">
                    {i + 1}
                  </span>

                  <p className="mt-6 text-sm font-medium leading-7 text-navy/80">
                    {step}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-copper transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ol>
        </section>
      );

    case "cards":
      return (
        <section className="mx-auto max-w-6xl">
          {block.h2 && (
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              {block.h2}
            </h2>
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
                className="group relative flex min-h-[250px] flex-col overflow-hidden border border-navy/10 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-copper/40 hover:shadow-2xl"
              >
                <span className="absolute -right-5 -top-8 font-[family-name:var(--font-display)] text-8xl font-extrabold text-navy/[0.035]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-10 w-10 items-center justify-center bg-copper/10 text-copper">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="relative mt-7 font-[family-name:var(--font-display)] text-xl font-extrabold text-navy">
                  {card.title}
                </h3>

                <p className="relative mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {card.text}
                </p>

                <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-copper-deep">
                  {card.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                    aria-hidden="true"
                  />
                </span>

                <span className="absolute bottom-0 left-0 h-1 w-0 bg-copper transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </section>
      );

    case "placeholder":
      return (
        <section className="mx-auto max-w-6xl">
          <div className="overflow-hidden border border-navy/10 bg-card p-2 shadow-xl">
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
          <div className="mb-10">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              {block.h2}
            </h2>
          </div>

          <dl className="overflow-hidden border border-navy/10 bg-card shadow-lg">
            {block.items.map((item, index) => (
              <div
                key={item.q}
                className="group border-b border-navy/10 p-6 last:border-b-0 sm:p-8"
              >
                <dt className="flex gap-4 text-base font-bold leading-6 text-navy sm:text-lg">
                  <span className="font-[family-name:var(--font-display)] text-sm font-extrabold text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.q}
                </dt>

                <dd className="mt-4 pl-9 text-sm leading-7 text-muted-foreground">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );

    case "callout":
      return (
        <section className="relative mx-auto max-w-6xl overflow-hidden bg-navy px-7 py-10 text-navy-foreground shadow-2xl sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-copper/20" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/5" />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-copper" />
              <span className="eyebrow text-copper">Robert Dachservice</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              {block.h2}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-navy-foreground/70">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            {block.cta && (
              <div className="mt-9">
                {block.cta.tel ? (
                  <CallLink variant="primary">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {block.cta.label}
                  </CallLink>
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
  children?: React.ReactNode;
}) {
  return (
    <>
      {/* Premium page hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(200,117,61,0.16),transparent_30%)]" />
        <div className="absolute right-0 top-0 h-full w-px bg-copper/20" />

        <div className="container-site relative py-12 lg:py-20">
          <Breadcrumbs items={page.breadcrumbs} />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              {page.eyebrow && (
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-copper" />
                  <p className="eyebrow text-copper">{page.eyebrow}</p>
                </div>
              )}

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {page.h1}
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-7 text-navy-foreground/70 sm:text-lg sm:leading-8">
                {page.intro}
              </p>

              <div className="mt-9">
                <CtaButtons
                  cta={page.cta}
                  secondary={page.secondaryCta}
                />
              </div>
            </div>

            <div className="hidden border-l border-navy-foreground/15 pl-8 lg:block">
              <ShieldCheck className="h-8 w-8 text-copper" aria-hidden="true" />
              <p className="mt-3 max-w-[150px] text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-navy-foreground/60">
                Dachdeckermeisterbetrieb
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-32 bg-copper" />
      </section>

      {/* Content */}
      <main className="relative overflow-hidden bg-background">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-copper/[0.025] blur-3xl" />

        <div className="container-site relative space-y-20 py-16 lg:space-y-28 lg:py-24">
          {page.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}

          {children}

          {/* Final conversion section */}
          <section className="relative mx-auto max-w-6xl overflow-hidden bg-sand px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-copper/[0.05]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-copper" />
                  <span className="eyebrow">Kontakt</span>
                </div>

                <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                  Ihr Anliegen rund ums Dach besprechen
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-navy/65">
                  Beschreiben Sie kurz Ihr Vorhaben – telefonisch unter{" "}
                  <strong className="text-navy">
                    {business.phonePrimary}
                  </strong>{" "}
                  oder über das Anfrageformular.
                </p>
              </div>

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
          </section>
        </div>
      </main>

      <PromoPopup />
    </>
  );
}

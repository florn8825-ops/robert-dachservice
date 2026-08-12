import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Block, CtaRef, PageDef } from "@/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { CallLink, CtaLink } from "./CtaLink";
import { business } from "@/content/site";
import { PromoPopup } from "./PromoPopup";

export function CtaButtons({ cta, secondary }: { cta: CtaRef; secondary?: CtaRef | undefined }) {
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
        <section className="mx-auto max-w-3xl">
          {block.h2 && <h2 className="text-2xl font-bold text-navy sm:text-3xl">{block.h2}</h2>}
          <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-muted-foreground">
            {block.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>
      );
    case "list":
      return (
        <section className="mx-auto max-w-3xl">
          {block.h2 && <h2 className="text-2xl font-bold text-navy sm:text-3xl">{block.h2}</h2>}
          {block.intro && <p className="mt-4 leading-relaxed text-muted-foreground">{block.intro}</p>}
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-navy/85">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-copper" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      );
    case "steps":
      return (
        <section className="mx-auto max-w-4xl">
          {block.h2 && <h2 className="text-2xl font-bold text-navy sm:text-3xl">{block.h2}</h2>}
          {block.intro && <p className="mt-4 leading-relaxed text-muted-foreground">{block.intro}</p>}
          <ol className="mt-8 grid gap-px overflow-hidden border border-navy/12 bg-navy/12 sm:grid-cols-2">
            {block.steps.map((step, i) => (
              <li key={step} className="flex gap-4 bg-background p-6">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-navy/85">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      );
    case "cards":
      return (
        <section className="mx-auto max-w-6xl">
          {block.h2 && <h2 className="text-2xl font-bold text-navy sm:text-3xl">{block.h2}</h2>}
          {block.intro && (
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{block.intro}</p>
          )}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {block.cards.map((card) => (
              <Link
                key={card.to}
                to={card.to as never}
                className="group flex flex-col border border-navy/12 bg-card p-7 transition-colors hover:border-copper"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-navy">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-deep">
                  {card.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>
      );
    case "placeholder":
      return (
        <section className="mx-auto max-w-5xl">
          <ImagePlaceholder label={block.label} ratio={block.ratio ?? "photo"} />
        </section>
      );
    case "faq":
      return (
        <section className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{block.h2}</h2>
          <dl className="mt-8 divide-y divide-navy/12 border-y border-navy/12">
            {block.items.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-[family-name:var(--font-display)] text-base font-bold text-navy">
                  {item.q}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      );
    case "callout":
      return (
        <section className="mx-auto max-w-5xl bg-navy px-8 py-12 text-navy-foreground sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">{block.h2}</h2>
          <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-navy-foreground/75">
            {block.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          {block.cta && (
            <div className="mt-8">
              {block.cta.tel ? (
                <CallLink variant="primary">{block.cta.label}</CallLink>
              ) : (
                <CtaLink to={block.cta.to ?? "/kontakt"}>{block.cta.label}</CtaLink>
              )}
            </div>
          )}
        </section>
      );
  }
}

export function PageShell({ page, children }: { page: PageDef; children?: React.ReactNode }) {
  return (
    <>
      <div className="border-b border-navy/10 bg-sand/45">
        <div className="container-site py-10 lg:py-16">
          <Breadcrumbs items={page.breadcrumbs} />
          {page.eyebrow && <p className="eyebrow mt-8">{page.eyebrow}</p>}
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl lg:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {page.intro}
          </p>
          <div className="mt-8">
            <CtaButtons cta={page.cta} secondary={page.secondaryCta} />
          </div>
        </div>
      </div>

      <div className="container-site space-y-16 py-16 lg:space-y-20 lg:py-20">
        {page.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
        {children}

        <section className="mx-auto max-w-5xl border-t border-navy/12 pt-12">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Ihr Anliegen rund ums Dach besprechen
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Beschreiben Sie kurz Ihr Vorhaben – telefonisch unter {business.phonePrimary} oder über
            das Anfrageformular.
          </p>
          <div className="mt-8">
            <CtaButtons
              cta={{ label: "Angebot anfordern", to: "/kontakt" }}
              secondary={{ label: "Jetzt anrufen", tel: true }}
            />
          </div>
        </section>

        <PromoPopup />
      </div>
    </>
  );
}

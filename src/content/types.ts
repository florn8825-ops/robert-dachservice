export type CardLink = {
  title: string;
  text: string;
  cta: string;
  to: string;
};

export type Block =
  | { type: "text"; h2?: string; paragraphs: string[] }
  | { type: "list"; h2?: string; intro?: string; items: string[] }
  | { type: "cards"; h2?: string; intro?: string; cards: CardLink[] }
  | { type: "steps"; h2?: string; intro?: string; steps: string[] }
  | { type: "placeholder"; label: string; ratio?: "wide" | "photo" | "square" }
  | { type: "faq"; h2: string; items: { q: string; a: string }[] }
  | { type: "callout"; h2: string; paragraphs: string[]; cta?: CtaRef };

export type CtaRef = { label: string; to?: string; tel?: boolean };

export type PageDef = {
  path: string;
  title: string;
  description: string;
  eyebrow?: string;
  h1: string;
  intro: string;
  breadcrumbs: { label: string; to?: string }[];
  blocks: Block[];
  cta: CtaRef;
  secondaryCta?: CtaRef;
};

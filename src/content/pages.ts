import type { PageDef } from "./types";
import { leistungenPages } from "./pages-leistungen";
import { infoPages } from "./pages-info";
import { ratgeberPages } from "./pages-ratgeber";

export const allPages: PageDef[] = [...leistungenPages, ...infoPages, ...ratgeberPages];

export const pages: Record<string, PageDef> = Object.fromEntries(
  allPages.map((p) => [p.path, p]),
);

export function getPage(path: string): PageDef {
  const page = pages[path];
  if (!page) throw new Error(`Unknown page: ${path}`);
  return page;
}

export function pageHead(path: string) {
  const page = getPage(path);
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: page.path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: page.path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "/" },
            ...page.breadcrumbs.map((b, i) => ({
              "@type": "ListItem",
              position: i + 2,
              name: b.label,
              ...(b.to ? { item: b.to } : { item: page.path }),
            })),
          ],
        }),
      },
    ],
  };
}

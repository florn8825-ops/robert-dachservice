import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getPage, pageHead } from "@/content/pages";

const PATH = "/ueber-uns";

export const Route = createFileRoute("/ueber-uns")({
  head: () => pageHead(PATH),
  component: PageRoute,
});

function PageRoute() {
  return <PageShell page={getPage(PATH)} />;
}

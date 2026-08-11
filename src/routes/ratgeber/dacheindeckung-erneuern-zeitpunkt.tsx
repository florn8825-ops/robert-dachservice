import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getPage, pageHead } from "@/content/pages";

const PATH = "/ratgeber/dacheindeckung-erneuern-zeitpunkt";

export const Route = createFileRoute("/ratgeber/dacheindeckung-erneuern-zeitpunkt")({
  head: () => pageHead(PATH),
  component: PageRoute,
});

function PageRoute() {
  return <PageShell page={getPage(PATH)} />;
}

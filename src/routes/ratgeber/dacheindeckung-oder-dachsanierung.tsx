import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getPage, pageHead } from "@/content/pages";

const PATH = "/ratgeber/dacheindeckung-oder-dachsanierung";

export const Route = createFileRoute("/ratgeber/dacheindeckung-oder-dachsanierung")({
  head: () => pageHead(PATH),
  component: PageRoute,
});

function PageRoute() {
  return <PageShell page={getPage(PATH)} />;
}

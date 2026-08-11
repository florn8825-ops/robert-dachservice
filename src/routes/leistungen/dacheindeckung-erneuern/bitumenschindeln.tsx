import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getPage, pageHead } from "@/content/pages";

const PATH = "/leistungen/dacheindeckung-erneuern/bitumenschindeln";

export const Route = createFileRoute("/leistungen/dacheindeckung-erneuern/bitumenschindeln")({
  head: () => pageHead(PATH),
  component: PageRoute,
});

function PageRoute() {
  return <PageShell page={getPage(PATH)} />;
}

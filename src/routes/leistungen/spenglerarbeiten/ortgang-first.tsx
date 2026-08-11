import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getPage, pageHead } from "@/content/pages";

const PATH = "/leistungen/spenglerarbeiten/ortgang-first";

export const Route = createFileRoute("/leistungen/spenglerarbeiten/ortgang-first")({
  head: () => pageHead(PATH),
  component: PageRoute,
});

function PageRoute() {
  return <PageShell page={getPage(PATH)} />;
}

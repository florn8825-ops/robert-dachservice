import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getPage, pageHead } from "@/content/pages";

const PATH = "/leistungen/dachdaemmung";

export const Route = createFileRoute("/leistungen/dachdaemmung")({
  head: () => pageHead(PATH),
  component: PageRoute,
});

function PageRoute() {
  return <PageShell page={getPage(PATH)} />;
}

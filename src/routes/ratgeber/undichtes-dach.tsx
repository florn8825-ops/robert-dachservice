import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getPage, pageHead } from "@/content/pages";

const PATH = "/ratgeber/undichtes-dach";

export const Route = createFileRoute("/ratgeber/undichtes-dach")({
  head: () => pageHead(PATH),
  component: PageRoute,
});

function PageRoute() {
  return <PageShell page={getPage(PATH)} />;
}

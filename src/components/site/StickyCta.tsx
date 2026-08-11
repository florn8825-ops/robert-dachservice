import { Link } from "@tanstack/react-router";
import { Phone, FileText } from "lucide-react";
import { business } from "@/content/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy/15 bg-background/95 backdrop-blur lg:hidden">
      <a
        href={business.phonePrimaryHref}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-navy"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Jetzt anrufen
      </a>
      <Link
        to={"/kontakt" as never}
        className="flex items-center justify-center gap-2 bg-copper py-4 text-sm font-semibold text-copper-foreground"
      >
        <FileText className="h-4 w-4" aria-hidden="true" />
        Angebot anfordern
      </Link>
    </div>
  );
}

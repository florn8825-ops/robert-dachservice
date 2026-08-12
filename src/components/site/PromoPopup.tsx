import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CtaLink } from "./CtaLink";

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const headline = "Diesen Monat haben wir folgende Sonderaktion:";

  useEffect(() => {
    let opened = false;

    const showPopup = () => {
      if (opened) return;

      opened = true;
      setOpen(true);
      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollable <= 0) return;

      const scrollPercent = window.scrollY / scrollable;

      if (scrollPercent >= 0.4) {
        showPopup();
      }
    };

    const timer = window.setTimeout(showPopup, 3000);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(headline.slice(0, index));

      if (index >= headline.length) {
        window.clearInterval(timer);
      }
    }, 35);

    return () => window.clearInterval(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div className="relative w-full max-w-[540px] overflow-hidden border border-white/20 bg-background shadow-2xl">
        <div className="h-2 bg-copper" />

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Popup schließen"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-navy-foreground transition hover:bg-copper focus:outline-none focus:ring-2 focus:ring-copper"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="px-7 py-9 sm:px-10 sm:py-11">
          <p className="eyebrow pr-12">Sonderaktion</p>

          <h2
            id="promo-title"
            className="mt-3 max-w-[430px] font-[family-name:var(--font-display)] text-2xl font-extrabold leading-tight text-navy sm:text-3xl"
          >
            {typedText}
            <span
              className="ml-1 inline-block h-7 w-px translate-y-1 bg-copper motion-safe:animate-pulse"
              aria-hidden="true"
            />
          </h2>

          <ul className="mt-7 space-y-4">
            <li className="flex gap-3 text-base leading-relaxed text-navy/85">
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-copper" />
              <span>
                Eine <strong>kostenlose Dachinspektion</strong>
              </span>
            </li>

            <li className="flex gap-3 text-base leading-relaxed text-navy/85">
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-copper" />
              <span>
                <strong>Kostenloser Materialtransport</strong>
              </span>
            </li>

            <li className="flex gap-3 text-base leading-relaxed text-navy/85">
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-copper" />
              <span>
                <strong>15 % Rabatt auf die Arbeitskosten</strong>
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <CtaLink to="/kontakt">
              Sonderangebot sichern
            </CtaLink>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Nur für kurze Zeit verfügbar.
          </p>
        </div>
      </div>
    </div>
  );
}

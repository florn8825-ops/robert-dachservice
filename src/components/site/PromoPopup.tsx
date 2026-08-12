import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  const headline = "Diesen Monat haben wir folgende Sonderaktion:";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div className="relative w-full max-w-[540px] overflow-hidden border border-gray-200 bg-white shadow-2xl">

        <div className="h-2 bg-[#c46b2b]" />

        <a
  href="/kontakt"
  onClick={() => setOpen(false)}
  className="inline-flex items-center justify-center bg-[#c46b2b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a95520] hover:shadow-lg"
>
  Sonderangebot sichern
</a>

        <div className="px-7 py-9 sm:px-10 sm:py-11">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c46b2b]">
            Sonderaktion
          </p>

          <h2
            id="promo-title"
            className="mt-3 max-w-[430px] pr-10 text-2xl font-extrabold leading-tight text-[#142235] sm:text-3xl"
          >
            {headline}
          </h2>

          <ul className="mt-7 space-y-4">

            <li className="flex gap-3 text-base text-[#142235]">
              <span className="mt-2 h-2 w-2 rotate-45 bg-[#c46b2b]" />
              <span>
                Eine <strong>kostenlose Dachinspektion</strong>
              </span>
            </li>

            <li className="flex gap-3 text-base text-[#142235]">
              <span className="mt-2 h-2 w-2 rotate-45 bg-[#c46b2b]" />
              <span>
                <strong>Kostenloser Materialtransport</strong>
              </span>
            </li>

            <li className="flex gap-3 text-base text-[#142235]">
              <span className="mt-2 h-2 w-2 rotate-45 bg-[#c46b2b]" />
              <span>
                <strong>15 % Rabatt auf die Arbeitskosten</strong>
              </span>
            </li>

          </ul>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-[#c46b2b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a95520] hover:shadow-lg"
            >
              Sonderangebot sichern
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Nur für kurze Zeit verfügbar.
          </p>

        </div>
      </div>
    </div>
  );
}

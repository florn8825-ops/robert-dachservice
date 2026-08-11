import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { business } from "@/content/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { supabaseClient } from "@/lib/supabaseClient";

const TITLE = "Angebot anfordern – Kontakt | Robert Dachservice";
const DESCRIPTION =
  "Angebot anfordern bei Robert Dachservice: Dachreparatur, Dacheindeckung erneuern, Dachsanierung, Flachdach, Dämmung, Spenglerarbeiten und Dachnotdienst in Köln und Bonn.";

const services = [
  "Dachreparatur",
  "Dachnotdienst",
  "Dacheindeckung erneuern",
  "Dachsanierung",
  "Flachdach",
  "Dachdämmung",
  "Spenglerarbeiten",
  "Neubau / Neueindeckung",
  "Sonstiges",
];

const schema = z.object({
  vorname: z.string().trim().min(1, "Bitte Vornamen angeben").max(60),
  nachname: z.string().trim().min(1, "Bitte Nachnamen angeben").max(60),
  telefon: z.string().trim().min(5, "Bitte Telefonnummer angeben").max(40),
  email: z.string().trim().email("Bitte gültige E-Mail-Adresse angeben").max(255),
  plz: z.string().trim().min(4, "Bitte PLZ angeben").max(10),
  ort: z.string().trim().min(2, "Bitte Ort angeben").max(80),
  leistung: z.string().trim().min(1, "Bitte Leistung wählen"),
  beschreibung: z.string().trim().min(10, "Bitte kurz das Vorhaben beschreiben").max(2000),
  datenschutz: z.literal(true, { message: "Bitte der Datenschutzerklärung zustimmen" }),
});

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

const fieldClass =
  "mt-2 w-full border border-navy/20 bg-card px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-copper";
const labelClass = "block text-sm font-semibold text-navy";

function KontaktPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  async function filesToBase64(fileList: FileList | null) {
    if (!fileList) return [] as Array<{ name: string; type: string; data: string; size: number }>;
    const arr: Array<{ name: string; type: string; data: string; size: number }> = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const data = await new Promise<string>((res, rej) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          // result like data:<mime>;base64,XXXX
          const base64 = result.split(",")[1] || "";
          res(base64);
        };
        reader.onerror = (e) => rej(e);
        reader.readAsDataURL(file);
      });
      arr.push({ name: file.name, type: file.type, data, size: file.size });
    }
    return arr;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);
    const form = event.currentTarget;
    const fd = new FormData(form);

    const dataObj = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse({ ...dataObj, datenschutz: dataObj["datenschutz"] === "on" });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const fileInput = form.querySelector<HTMLInputElement>("#fotos");
      const files = fileInput?.files || null;
      const filesPayload = await filesToBase64(files);

      // Limit files and sizes client-side as well
      if (filesPayload.length > 8) {
        setServerError("Maximal 8 Fotos erlaubt.");
        setLoading(false);
        return;
      }
      for (const f of filesPayload) {
        if (f.size > 6 * 1024 * 1024) {
          setServerError("Ein Foto darf maximal 6 MB groß sein.");
          setLoading(false);
          return;
        }
      }

      const payload = {
        vorname: String(fd.get("vorname") || ""),
        nachname: String(fd.get("nachname") || ""),
        telefon: String(fd.get("telefon") || ""),
        email: String(fd.get("email") || ""),
        plz: String(fd.get("plz") || ""),
        ort: String(fd.get("ort") || ""),
        leistung: String(fd.get("leistung") || ""),
        beschreibung: String(fd.get("beschreibung") || ""),
        datenschutz: fd.get("datenschutz") === "on",
        photos: filesPayload,
      };

      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: "Beim Senden ist ein Fehler aufgetreten." }));
        setServerError(err.message || "Beim Senden ist ein Fehler aufgetreten.");
        setLoading(false);
        setSubmitted(false);
        return;
      }

      // success
      setSubmitted(true);
      form.reset();
    } catch (e) {
      console.error(e);
      setServerError("Beim Senden ist ein Fehler aufgetreten.");
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="border-b border-navy/10 bg-sand/45">
        <div className="container-site py-10 lg:py-16">
          <Breadcrumbs items={[{ label: "Kontakt" }]} />
          <p className="eyebrow mt-8">Kontakt</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl lg:text-5xl">
            Angebot anfordern
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Sie benötigen eine Dachreparatur, möchten Ihre Dacheindeckung erneuern oder haben ein
            anderes Anliegen rund ums Dach? Beschreiben Sie kurz Ihr Vorhaben.
          </p>
        </div>
      </div>

      <div className="container-site grid gap-14 py-16 lg:grid-cols-[1.4fr_0.6fr] lg:py-20">
        <section>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Ihre Anfrage</h2>
          <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="vorname">
                  Vorname
                </label>
                <input id="vorname" name="vorname" className={fieldClass} autoComplete="given-name" />
                <FieldError message={errors["vorname"]} />
              </div>
              <div>
                <label className={labelClass} htmlFor="nachname">
                  Nachname
                </label>
                <input
                  id="nachname"
                  name="nachname"
                  className={fieldClass}
                  autoComplete="family-name"
                />
                <FieldError message={errors["nachname"]} />
              </div>
              <div>
                <label className={labelClass} htmlFor="telefon">
                  Telefon
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  className={fieldClass}
                  autoComplete="tel"
                />
                <FieldError message={errors["telefon"]} />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={fieldClass}
                  autoComplete="email"
                />
                <FieldError message={errors["email"]} />
              </div>
              <div>
                <label className={labelClass} htmlFor="plz">
                  PLZ
                </label>
                <input
                  id="plz"
                  name="plz"
                  className={fieldClass}
                  autoComplete="postal-code"
                  inputMode="numeric"
                />
                <FieldError message={errors["plz"]} />
              </div>
              <div>
                <label className={labelClass} htmlFor="ort">
                  Ort
                </label>
                <input
                  id="ort"
                  name="ort"
                  className={fieldClass}
                  autoComplete="address-level2"
                />
                <FieldError message={errors["ort"]} />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="leistung">
                Leistung
              </label>
              <select id="leistung" name="leistung" className={fieldClass} defaultValue="">
                <option value="">Bitte wählen</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <FieldError message={errors["leistung"]} />
            </div>

            <div>
              <label className={labelClass} htmlFor="beschreibung">
                Beschreibung
              </label>
              <textarea
                id="beschreibung"
                name="beschreibung"
                rows={6}
                className={fieldClass}
                placeholder="Beschreiben Sie kurz Ihr Anliegen, das Gebäude und den gewünschten Zeitraum."
              />
              <FieldError message={errors["beschreibung"]} />
            </div>

            <div>
              <label className={labelClass} htmlFor="fotos">
                Fotos hochladen (optional)
              </label>
              <input
                id="fotos"
                name="fotos"
                type="file"
                multiple
                accept="image/*"
                className="mt-2 w-full border border-dashed border-navy/25 bg-card px-4 py-3 text-sm text-muted-foreground file:mr-4 file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-medium"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Eigene Fotos des Daches helfen bei der ersten Einschätzung.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="datenschutz"
                name="datenschutz"
                type="checkbox"
                className="mt-1 h-4 w-4 border border-navy/30 accent-[var(--copper)]"
              />
              <label htmlFor="datenschutz" className="text-sm text-muted-foreground">
                Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben
                zur Bearbeitung der Anfrage zu.
              </label>
            </div>
            <FieldError message={errors["datenschutz"]} />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center bg-copper px-8 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-copper-foreground transition-colors hover:bg-copper/90 disabled:opacity-60"
            >
              {loading ? "Sende..." : "Anfrage senden"}
            </button>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Hinweis: Das Formular ist derzeit ohne E-Mail-Versand eingerichtet. Für eine
              verbindliche Anfrage erreichen Sie uns telefonisch unter {business.phonePrimary}.
            </p>

            <div aria-live="polite">
              {submitted && (
                <p className="border border-copper bg-sand/60 px-5 py-4 text-sm text-navy">
                  Ihre Angaben sind vollständig. Bitte rufen Sie uns für eine verbindliche Anfrage
                  unter {business.phonePrimary} an – der E-Mail-Versand des Formulars ist noch nicht
                  eingerichtet.
                </p>
              )}
              {serverError && (
                <p className="border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm text-destructive mt-4">
                  {serverError}
                </p>
              )}
            </div>
          </form>
        </section>

        <aside className="space-y-8">
          <div className="border border-navy/12 bg-card p-7">
            <p className="eyebrow">Direkt erreichbar</p>
            <a
              href={business.phonePrimaryHref}
              className="mt-4 block font-[family-name:var(--font-display)] text-xl font-extrabold text-navy hover:text-copper-deep"
            >
              {business.phonePrimary}
            </a>
            <a
              href={business.phoneSecondaryHref}
              className="mt-2 block text-sm text-muted-foreground hover:text-copper-deep"
            >
              {business.phoneSecondary}
            </a>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              24/7 Dachnotdienst bei akuten Dachschäden in {business.area}.
            </p>
          </div>
          <div className="border border-navy/12 p-7">
            <p className="eyebrow">Einsatzgebiet</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{business.area}</p>
          </div>
        </aside>
      </div>
    </>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-2 text-xs font-medium text-destructive">{message}</p>;
}

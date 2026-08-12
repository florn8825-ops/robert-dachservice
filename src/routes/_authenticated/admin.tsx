import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { LogOut, Mail, MapPin, Phone, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { listLeads } from "@/lib/leads.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Anfragen-Verwaltung | Robert Dachservice" },
      { name: "description", content: "Interne Übersicht aller eingegangenen Kontaktanfragen." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Anfragen-Verwaltung | Robert Dachservice" },
      { property: "og:description", content: "Interne Übersicht aller eingegangenen Kontaktanfragen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

function formatDate(value: string) {
  return new Date(value).toLocaleString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchLeads = useServerFn(listLeads);

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["leads"],
    queryFn: () => fetchLeads(),
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const leads = data?.leads ?? [];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-navy/10 bg-card">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 py-6">
          <div>
            <p className="text-xl font-extrabold text-navy">
              Robert <span className="text-copper">Dachservice</span>
            </p>
            <p className="text-sm text-muted-foreground">Administrator · Anfragen</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => refetch()}
              className="inline-flex items-center gap-2 border border-navy/20 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-sand/60"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
              Aktualisieren
            </button>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 bg-navy px-4 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
            >
              <LogOut className="h-4 w-4" />
              Abmelden
            </button>
          </div>
        </div>
      </header>

      <main className="container-site py-12">
        {isLoading ? (
          <p className="text-muted-foreground">Anfragen werden geladen…</p>
        ) : error ? (
          <p className="text-copper-deep">Die Anfragen konnten nicht geladen werden.</p>
        ) : data && !data.isAdmin ? (
          <div className="border border-navy/15 bg-sand/40 p-8">
            <h1 className="text-2xl font-extrabold text-navy">Kein Zugriff</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Ihr Konto besitzt keine Administrator-Rolle. Bitte lassen Sie Ihr Konto freischalten.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold text-navy">
              Eingegangene Anfragen ({leads.length})
            </h1>

            {leads.length === 0 ? (
              <p className="mt-6 text-muted-foreground">Noch keine Anfragen eingegangen.</p>
            ) : (
              <div className="mt-8 overflow-x-auto border border-navy/10 bg-card">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-navy/10 bg-sand/40 text-[11px] uppercase tracking-[0.12em] text-navy/60">
                      <th className="px-5 py-4 font-semibold">Datum</th>
                      <th className="px-5 py-4 font-semibold">Name</th>
                      <th className="px-5 py-4 font-semibold">Kontakt</th>
                      <th className="px-5 py-4 font-semibold">Ort</th>
                      <th className="px-5 py-4 font-semibold">Leistung</th>
                      <th className="px-5 py-4 font-semibold">Beschreibung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-b border-navy/10 align-top last:border-0">
                        <td className="whitespace-nowrap px-5 py-5 text-muted-foreground">
                          {formatDate(lead.created_at)}
                        </td>
                        <td className="px-5 py-5 font-bold text-navy">
                          {lead.vorname} {lead.nachname}
                        </td>
                        <td className="px-5 py-5">
                          <a
                            href={`tel:${lead.telefon}`}
                            className="flex items-center gap-2 text-navy hover:text-copper-deep"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            {lead.telefon}
                          </a>
                          <a
                            href={`mailto:${lead.email}`}
                            className="mt-1 flex items-center gap-2 text-navy hover:text-copper-deep"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            {lead.email}
                          </a>
                        </td>
                        <td className="px-5 py-5">
                          <span className="flex items-center gap-2 text-navy">
                            <MapPin className="h-3.5 w-3.5" />
                            {lead.plz} {lead.ort}
                          </span>
                        </td>
                        <td className="px-5 py-5">
                          <span className="inline-block bg-sand/70 px-3 py-1 text-xs font-semibold text-navy">
                            {lead.leistung}
                          </span>
                        </td>
                        <td className="max-w-md px-5 py-5 text-muted-foreground">
                          {lead.beschreibung}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

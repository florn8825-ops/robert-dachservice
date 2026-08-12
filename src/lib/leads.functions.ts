import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const leadSchema = z.object({
  vorname: z.string().trim().min(1).max(60),
  nachname: z.string().trim().min(1).max(60),
  telefon: z.string().trim().min(5).max(40),
  email: z.string().trim().email().max(255),
  plz: z.string().trim().min(4).max(10),
  ort: z.string().trim().min(2).max(80),
  leistung: z.string().trim().min(1).max(80),
  beschreibung: z.string().trim().min(10).max(2000),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      ...data,
      quelle: "website",
      status: "neu",
    });
    if (error) {
      console.error("lead insert failed", error.message);
      throw new Error("Anfrage konnte nicht gespeichert werden.");
    }
    return { ok: true as const };
  });

export const listLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) return { isAdmin: false as const, leads: [] };

    const { data, error } = await context.supabase
      .from("leads")
      .select("id, created_at, vorname, nachname, telefon, email, plz, ort, leistung, beschreibung, quelle, status")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("lead list failed", error.message);
      throw new Error("Anfragen konnten nicht geladen werden.");
    }
    return { isAdmin: true as const, leads: data ?? [] };
  });

import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

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
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabasePublic = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabasePublic.from("leads").insert({
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
    const { data: roleRow } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId)
      .eq("role", "admin")
      .maybeSingle();
    if (!roleRow) return { isAdmin: false as const, leads: [] };


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

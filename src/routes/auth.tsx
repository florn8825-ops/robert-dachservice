import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Login | Robert Dachservice" },
      { name: "description", content: "Interner Login für die Anfragen-Verwaltung von Robert Dachservice." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin Login | Robert Dachservice" },
      { property: "og:description", content: "Interner Login für die Anfragen-Verwaltung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

const fieldClass =
  "mt-2 w-full border border-navy/20 bg-card px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-copper";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) {
        setMessage("Login fehlgeschlagen: " + error.message);
        return;
      }
      navigate({ to: "/admin" });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin + "/admin" },
    });
    setLoading(false);
    if (error) {
      setMessage("Registrierung fehlgeschlagen: " + error.message);
      return;
    }
    if (!data.session) {
      setMessage("Bitte bestätigen Sie Ihre E-Mail-Adresse über den zugesandten Link.");
      return;
    }
    navigate({ to: "/admin" });
  }

  return (
    <div className="container-site max-w-md py-20">
      <h1 className="text-3xl font-extrabold text-navy">
        {mode === "login" ? "Admin Login" : "Admin Konto erstellen"}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Interner Bereich für die Verwaltung eingegangener Anfragen.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-navy" htmlFor="email">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            required
            className={fieldClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy" htmlFor="password">
            Passwort
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            className={fieldClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />
        </div>

        {message ? <p className="text-sm text-copper-deep">{message}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-copper px-6 py-3 text-sm font-semibold text-copper-foreground transition-colors hover:bg-copper-deep disabled:opacity-60"
        >
          {loading ? "Bitte warten…" : mode === "login" ? "Anmelden" : "Konto erstellen"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => {
          setMode(mode === "login" ? "signup" : "login");
          setMessage(null);
        }}
        className="mt-6 text-sm font-semibold text-navy underline"
      >
        {mode === "login" ? "Noch kein Konto? Registrieren" : "Bereits ein Konto? Anmelden"}
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase-browser";

export default function PortalLoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/portal/dashboard`,
      },
    });
    setStatus(error ? "error" : "sent");
  }

  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <p className="mb-2 text-xs tracking-wide text-neutral-500">
        REGISTRY PORTAL
      </p>
      <h1 className="mb-4 text-2xl font-medium text-neutral-900">
        Zugang zu Ihrer Registrierung
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-neutral-600">
        Geben Sie die E-Mail-Adresse ein, mit der Ihre Series LLC registriert
        wurde. Sie erhalten einen sicheren Anmeldelink per E-Mail. Kein
        Passwort erforderlich.
      </p>

      {status === "sent" ? (
        <div className="rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
          Wir haben Ihnen einen Anmeldelink an <strong>{email}</strong>{" "}
          gesendet. Bitte prüfen Sie Ihr Postfach (auch den Spam-Ordner).
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-50"
          >
            {status === "sending" ? "Wird gesendet…" : "Anmeldelink senden"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-600">
              Der Link konnte nicht gesendet werden. Bitte versuchen Sie es
              erneut.
            </p>
          )}
        </form>
      )}
    </main>
  );
}

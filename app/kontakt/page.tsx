"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const loadedAt = useRef(Date.now());
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const elapsed = (Date.now() - loadedAt.current) / 1000;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        company: form.get("company_name"),
        message: form.get("message"),
        elapsed,
        honeypot: form.get("website"),
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <p className="mb-2 text-xs tracking-wide text-neutral-500">KONTAKT</p>
      <h1 className="mb-4 text-2xl font-medium text-neutral-900">
        Fragen zu Ihrer Registrierung
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-neutral-600">
        Für Fragen zu Ihrem Eintrag im Register wenden Sie sich an unser Team.
      </p>

      {status === "sent" ? (
        <p className="rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm">
          Vielen Dank, Ihre Nachricht wurde übermittelt.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />
          <input
            name="company_name"
            placeholder="Unternehmen (optional)"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          />
          <input
            name="name"
            required
            placeholder="Ihr Name"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="E-Mail-Adresse"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Ihre Nachricht"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-600">
              Senden fehlgeschlagen. Bitte später erneut versuchen.
            </p>
          )}
        </form>
      )}
    </main>
  );
}

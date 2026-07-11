"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase-browser";

type Company = {
  id: string;
  company_name: string;
  member_name: string | null;
  member_address: string | null;
  member_city: string | null;
  member_postal_code: string | null;
  member_country: string | null;
  manager_name: string | null;
  status: string | null;
  confirmation_status: string | null;
  next_confirmation_due: string | null;
  last_confirmed_at: string | null;
  certificate_url: string | null;
  oa_url: string | null;
  formed_at: string | null;
};

export default function DashboardClient({
  email,
  companies,
}: {
  email: string;
  companies: Company[];
}) {
  const supabase = createClient();
  const [edited, setEdited] = useState<Record<string, Partial<Company>>>({});
  const [saving, setSaving] = useState<string | null>(null);

  async function saveCompany(id: string) {
    const changes = edited[id];
    if (!changes) return;
    setSaving(id);
    await supabase.from("series_llc").update(changes).eq("id", id);
    setSaving(null);
  }

  async function confirmCompany(id: string) {
    setSaving(id);
    await supabase
      .from("series_llc")
      .update({
        last_confirmed_at: new Date().toISOString(),
        next_confirmation_due: new Date(
          Date.now() + 365 * 24 * 60 * 60 * 1000
        ).toISOString(),
        confirmation_status: "active",
      })
      .eq("id", id);
    setSaving(null);
    window.location.reload();
  }

  function field(id: string, key: keyof Company, value: string) {
    setEdited((prev) => ({ ...prev, [id]: { ...prev[id], [key]: value } }));
  }

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-xs tracking-wide text-neutral-500">
            REGISTRY PORTAL
          </p>
          <h1 className="text-2xl font-medium text-neutral-900">
            Ihre Registrierungen
          </h1>
          <p className="mt-1 text-sm text-neutral-500">{email}</p>
        </div>
        <button
          onClick={signOut}
          className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-50"
        >
          Abmelden
        </button>
      </div>

      {companies.length === 0 && (
        <p className="text-sm text-neutral-500">
          Für diese E-Mail-Adresse ist keine Registrierung hinterlegt.
        </p>
      )}

      <div className="space-y-6">
        {companies.map((c) => {
          const overdue =
            c.next_confirmation_due &&
            new Date(c.next_confirmation_due) < new Date();
          return (
            <div
              key={c.id}
              className="rounded-lg border border-neutral-200 p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <h2 className="text-lg font-medium text-neutral-900">
                  {c.company_name}
                </h2>
                <span
                  className={
                    "rounded-full px-2.5 py-0.5 text-xs font-medium " +
                    (overdue
                      ? "bg-red-50 text-red-700"
                      : "bg-green-50 text-green-700")
                  }
                >
                  {overdue ? "Bestätigung überfällig" : "Aktiv"}
                </span>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <label className="mb-1 block text-xs text-neutral-500">
                    Name des Mitglieds
                  </label>
                  <input
                    defaultValue={c.member_name ?? ""}
                    onChange={(e) => field(c.id, "member_name", e.target.value)}
                    className="w-full rounded border border-neutral-300 px-2 py-1.5"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-neutral-500">
                    Adresse
                  </label>
                  <input
                    defaultValue={c.member_address ?? ""}
                    onChange={(e) =>
                      field(c.id, "member_address", e.target.value)
                    }
                    className="w-full rounded border border-neutral-300 px-2 py-1.5"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-neutral-500">
                    Stadt / PLZ
                  </label>
                  <input
                    defaultValue={c.member_city ?? ""}
                    onChange={(e) => field(c.id, "member_city", e.target.value)}
                    className="w-full rounded border border-neutral-300 px-2 py-1.5"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-neutral-500">
                    Land
                  </label>
                  <input
                    defaultValue={c.member_country ?? ""}
                    onChange={(e) =>
                      field(c.id, "member_country", e.target.value)
                    }
                    className="w-full rounded border border-neutral-300 px-2 py-1.5"
                  />
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-3 text-sm">
                {c.certificate_url && (
                  <a
                    href={c.certificate_url}
                    target="_blank"
                    className="rounded border border-neutral-300 px-3 py-1.5 text-neutral-700 hover:bg-neutral-50"
                  >
                    Zertifikat herunterladen
                  </a>
                )}
                {c.oa_url && (
                  <a
                    href={c.oa_url}
                    target="_blank"
                    className="rounded border border-neutral-300 px-3 py-1.5 text-neutral-700 hover:bg-neutral-50"
                  >
                    Operating Agreement herunterladen
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                <button
                  onClick={() => saveCompany(c.id)}
                  disabled={saving === c.id}
                  className="rounded-md bg-neutral-900 px-3 py-1.5 text-sm text-white hover:bg-neutral-800 disabled:opacity-50"
                >
                  Änderungen speichern
                </button>
                <button
                  onClick={() => confirmCompany(c.id)}
                  disabled={saving === c.id}
                  className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
                >
                  Jährliche Bestätigung jetzt durchführen
                </button>
                <span className="ml-auto text-xs text-neutral-400">
                  Fällig:{" "}
                  {c.next_confirmation_due
                    ? new Date(c.next_confirmation_due).toLocaleDateString(
                        "de-DE"
                      )
                    : "–"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

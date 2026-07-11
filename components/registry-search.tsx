"use client";

import { useState } from "react";

type Result = { company_name: string; formed_at: string; status: string };

export default function RegistrySearch() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState(false);

  async function search(e: React.FormEvent) {
    e.preventDefault();
    if (q.trim().length < 2) return;
    setLoading(true);
    const res = await fetch(`/api/registry-search?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setResults(data.results ?? []);
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-lg">
      <form onSubmit={search} className="flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Company name or registration number"
          className="flex-1 rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
        />
        <button
          type="submit"
          className="whitespace-nowrap rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          {loading ? "Suche…" : "Search"}
        </button>
      </form>

      {results && (
        <div className="mt-4 rounded-md border border-neutral-200 text-left">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-neutral-500">
              Keine Einträge gefunden.
            </p>
          ) : (
            <ul className="divide-y divide-neutral-100">
              {results.map((r) => (
                <li
                  key={r.company_name}
                  className="flex items-center justify-between px-4 py-3 text-sm"
                >
                  <span className="font-medium text-neutral-900">
                    {r.company_name}
                  </span>
                  <span className="text-xs text-neutral-500">
                    seit {new Date(r.formed_at).toLocaleDateString("de-DE")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

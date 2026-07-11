"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("chi_cookie_consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("chi_cookie_consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("chi-cookie-consent"));
  }

  function decline() {
    localStorage.setItem("chi_cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white px-6 py-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-xs leading-relaxed text-neutral-600">
          Wir verwenden ausschließlich datenschutzfreundliche Analyse
          (Matomo, ohne Cookies für Dritte) zur Verbesserung dieser Seite.{" "}
          <a href="/datenschutz" className="underline">
            Mehr erfahren
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={decline}
            className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs text-neutral-600"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

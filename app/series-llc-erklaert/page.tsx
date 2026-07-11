export const metadata = {
  title: "Series LLC erklärt – Struktur, Vorteile, Register | Companies House Info",
  description:
    "Was ist eine Series LLC? Aufbau, rechtliche Trennung der Series, Haftung und wie eine Series LLC im US-Register geführt wird.",
};

export default function SeriesLlcPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-sm leading-relaxed text-neutral-700">
      <p className="mb-2 text-xs tracking-wide text-neutral-500">RATGEBER</p>
      <h1 className="mb-6 text-2xl font-medium text-neutral-900">
        Series LLC erklärt
      </h1>

      <p className="mb-4">
        Eine Series LLC ist eine spezielle Form der US-amerikanischen Limited
        Liability Company (LLC), die in mehreren US-Bundesstaaten – etwa
        Delaware, Texas oder Utah – zur Verfügung steht. Innerhalb einer
        einzigen Muttergesellschaft lassen sich beliebig viele rechtlich
        getrennte Untereinheiten, sogenannte „Series", gründen.
      </p>

      <h2 className="mb-2 mt-8 text-base font-medium text-neutral-900">
        Warum eine Series LLC statt mehrerer einzelner LLCs?
      </h2>
      <p className="mb-4">
        Jede Series haftet grundsätzlich nur für ihre eigenen Verbindlichkeiten
        und ist von den anderen Series und der Muttergesellschaft rechtlich
        abgeschirmt. Für Unternehmer, die mehrere Marken, Projekte oder
        Vermögenswerte trennen möchten, ist das deutlich kostengünstiger als
        die Gründung mehrerer separater amerikanischer GmbHs (LLCs).
      </p>

      <h2 className="mb-2 mt-8 text-base font-medium text-neutral-900">
        Registrierung und laufende Pflichten
      </h2>
      <p className="mb-4">
        Nach der Gründung wird jede Series LLC mit ihren Stammdaten – Name,
        Sitz, Mitglieder – in einem Register geführt. Änderungen an Adresse
        oder Ansprechpartner sowie eine jährliche Bestätigung der Daten halten
        den Eintrag aktiv. Bleibt diese Bestätigung aus, kann die Gesellschaft
        nach Ablauf einer Frist als aufgelöst markiert werden – ähnlich wie
        beim britischen Companies House.
      </p>

      <p className="mt-8">
        Sie möchten eine Series LLC, klassische US LLC oder amerikanische
        GmbH gründen?{" "}
        <a href="https://einfach-llc.de" className="underline">
          Jetzt auf einfach-llc.de starten
        </a>
        .
      </p>
    </main>
  );
}

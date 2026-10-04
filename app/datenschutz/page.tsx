export const metadata = { title: "Datenschutz | Companies House Info" };

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-sm leading-relaxed text-neutral-700">
      <h1 className="mb-6 text-2xl font-medium text-neutral-900">
        Datenschutzerklärung
      </h1>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Verantwortlicher
      </h2>
      <p className="mb-6">
        PAN21.COM Corporate Consultants Ltd, 61 Bridge Street, Kington,
        Herefordshire HR5 3DJ, United Kingdom. Kontakt:{" "}
        <a href="mailto:registry@pan21.com" className="underline">
          registry@pan21.com
        </a>
      </p>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Registrierte Daten
      </h2>
      <p className="mb-6">
        Für jede eingetragene Series LLC speichern wir Name, Anschrift und
        E-Mail-Adresse des Mitglieds sowie ggf. eines Managers, das
        Gründungsdatum und den Status der jährlichen Bestätigung. Diese Daten
        stammen aus der ursprünglichen Registrierung auf einfach-llc.de und
        werden ausschließlich zur Führung des Registers und zur Kommunikation
        mit dem Kunden verwendet.
      </p>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Anmeldung per Magic Link
      </h2>
      <p className="mb-6">
        Der Zugang zum Kundenportal erfolgt ohne Passwort über einen
        Einmal-Link, der an die registrierte E-Mail-Adresse gesendet wird
        (Supabase Auth). Es werden keine Passwörter gespeichert.
      </p>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Kontaktformular
      </h2>
      <p>
        Nachrichten über das Kontaktformular werden über den Dienst Resend an
        registry@pan21.com weitergeleitet und zur Bearbeitung Ihrer Anfrage
        gespeichert.
      </p>
    </main>
  );
}

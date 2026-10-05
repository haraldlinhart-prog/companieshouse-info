export const metadata = {
  title: "Impressum | Companies House Info",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-sm leading-relaxed text-neutral-700">
      <h1 className="mb-6 text-2xl font-medium text-neutral-900">Impressum</h1>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Angaben gemäß § 5 DDG
      </h2>
      <p className="mb-4">
        PAN21.com International LLC
        <br />
        7533 South Center View CT, STE R
        <br />
        West Jordan, UT 84084
        <br />
        USA
      </p>
      <p className="mb-6">
        Vertreten durch: Harald Linhart
        <br />
        Registrierung: Utah Division of Corporations, Registernummer
        14723637-0163
      </p>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Kontakt
      </h2>
      <p className="mb-6">
        Telefon:{" "}
        <a href="tel:+493056844500" className="underline">
          +49 30 5684450-0
        </a>
        <br />
        E-Mail:{" "}
        <a href="mailto:dsgvo@pan21.com" className="underline">
          dsgvo@pan21.com
        </a>
      </p>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
      </h2>
      <p className="mb-6">Harald Linhart, Anschrift wie oben</p>

      <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
        Verbraucherstreitbeilegung
      </h2>
      <p className="mb-6">
        Wir sind nicht bereit und nicht verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2 className="mb-2 mt-8 text-base font-medium text-neutral-900">
        Hinweis zur Funktion dieser Seite
      </h2>
      <p>
        companieshouse.info ist ein unabhängig geführtes, privates Register für
        US Series LLC Gesellschaften, die über das PAN21-Netzwerk (u. a.
        einfach-llc.de) registriert wurden. Die Seite ist keine
        US-Bundesbehörde und steht in keiner Verbindung zu den staatlichen
        Handelsregistern (Secretary of State) der US-Bundesstaaten oder zum
        britischen Companies House.
      </p>
    </main>
  );
}

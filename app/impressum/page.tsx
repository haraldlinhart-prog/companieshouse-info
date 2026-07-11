export const metadata = { title: "Impressum | Companies House Info" };

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-sm leading-relaxed text-neutral-700">
      <h1 className="mb-6 text-2xl font-medium text-neutral-900">Impressum</h1>

      <p className="mb-4">
        Diese Website wird betrieben von (operated by):
      </p>
      <p className="mb-6">
        PAN21.COM Corporate Consultants Ltd
        <br />
        61 Bridge Street
        <br />
        Kington, Herefordshire HR5 3DJ
        <br />
        United Kingdom
        <br />
        Company No. 16117708
      </p>

      <p className="mb-6">
        Kontakt: <a href="mailto:registry@pan21.com" className="underline">registry@pan21.com</a>
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

export const metadata = {
  title: "Datenschutz | Companies House Info",
  alternates: { canonical: "/datenschutz" },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 mt-6 text-base font-medium text-neutral-900">
      {children}
    </h2>
  );
}

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-sm leading-relaxed text-neutral-700">
      <h1 className="mb-6 text-2xl font-medium text-neutral-900">
        Datenschutzerklärung
      </h1>

      <H2>1. Verantwortlicher</H2>
      <p className="mb-6">
        Verantwortlich für die Datenverarbeitung auf dieser Website ist die
        PAN21.com International LLC, 7533 South Center View CT, STE R, West
        Jordan, UT 84084, USA, vertreten durch Harald Linhart. E-Mail:{" "}
        <a href="mailto:dsgvo@pan21.com" className="underline">
          dsgvo@pan21.com
        </a>
        , Telefon: +49 30 5684450-0.
      </p>

      <H2>2. Hosting</H2>
      <p className="mb-6">
        Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
        91723, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel
        technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit,
        aufgerufene Seite, Referrer und Browserinformationen
        (Server-Logfiles), um die Website auszuliefern und vor Missbrauch zu
        schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an einem sicheren und stabilen Betrieb). Mit Vercel besteht
        ein Vertrag zur Auftragsverarbeitung; Datenübermittlungen in die USA
        erfolgen auf Grundlage der EU-Standardvertragsklauseln.
      </p>

      <H2>3. Cookies</H2>
      <p className="mb-6">
        Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken. Für
        die Anmeldung im Kundenportal werden technisch notwendige Cookies
        gesetzt (Art. 6 Abs. 1 lit. b DSGVO).
      </p>

      <H2>4. Registrierte Daten</H2>
      <p className="mb-6">
        Für jede eingetragene Series LLC speichern wir Name, Anschrift und
        E-Mail-Adresse des Mitglieds sowie ggf. eines Managers, das
        Gründungsdatum und den Status der jährlichen Bestätigung. Diese Daten
        stammen aus der ursprünglichen Registrierung auf einfach-llc.de und
        werden ausschließlich zur Führung des Registers und zur Kommunikation
        mit dem Kunden verwendet.
      </p>

      <H2>5. Anmeldung per Magic Link</H2>
      <p className="mb-6">
        Der Zugang zum Kundenportal erfolgt ohne Passwort über einen
        Einmal-Link, der an die registrierte E-Mail-Adresse gesendet wird
        (Supabase Auth). Es werden keine Passwörter gespeichert.
      </p>

      <H2>6. Besucherzählung mit PAN21counter</H2>
      <p className="mb-6">
        Zur Zählung der Seitenaufrufe nutzen wir den eigenen Besucherzähler
        PAN21counter (pan21counter.de). Er setzt keine Cookies und erstellt
        keine Nutzerprofile. Aus der IP-Adresse wird beim Aufruf ein gekürzter,
        täglich wechselnder Hashwert gebildet, um Mehrfachzählungen am selben
        Tag zu vermeiden; die IP-Adresse selbst wird nicht gespeichert.
        Einzelne Aufrufe werden nach drei Tagen gelöscht, danach bleiben nur
        zusammengefasste Tageszahlen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO (berechtigtes Interesse an einer einfachen Reichweitenmessung).
      </p>

      <H2>7. Werbebanner</H2>
      <p className="mb-6">
        Werbebanner werden über unseren eigenen Adserver ads.pan21.com
        ausgeliefert. Dabei wird die IP-Adresse technisch bedingt verarbeitet,
        um das Banner auszuliefern; es werden keine Nutzerprofile erstellt.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <H2>8. Kontaktformular und E-Mail</H2>
      <p className="mb-6">
        Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben,
        verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse, Nachricht),
        um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
        b DSGVO, soweit Ihre Anfrage auf einen Vertrag zielt, sonst Art. 6 Abs.
        1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie nicht mehr
        benötigt werden und keine gesetzlichen Aufbewahrungspflichten bestehen.
        Der E-Mail-Versand erfolgt über Resend (Resend Inc., USA) auf Grundlage
        eines Auftragsverarbeitungsvertrags und der EU-Standardvertragsklauseln.
      </p>

      <H2>9. Newsletter</H2>
      <p className="mb-6">
        Für den Newsletter nutzen wir beehiiv (Beehiiv Inc., USA). Wenn Sie sich
        anmelden, werden Ihre E-Mail-Adresse und Anmeldedaten bei beehiiv
        gespeichert. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit.
        a DSGVO), die Sie jederzeit über den Abmeldelink widerrufen können.
      </p>

      <H2>10. KI-Chat / Sprachanruf</H2>
      <p className="mb-6">
        Der KI-Chat bzw. Sprachanruf wird erst geladen, wenn Sie ihn aktiv
        starten. Dann werden Ihre Eingaben bzw. Ihre Stimme an den Anbieter
        übermittelt, um das Gespräch zu führen. Rechtsgrundlage ist Art. 6 Abs.
        1 lit. b bzw. f DSGVO.
      </p>

      <H2>11. Schriftarten</H2>
      <p className="mb-6">
        Die Schriftarten dieser Website werden lokal von unserem Server
        geladen. Es findet keine Verbindung zu Servern von Google oder anderen
        Schriftanbietern statt.
      </p>

      <H2>12. Eingebettete Inhalte</H2>
      <p className="mb-6">
        Diese Website bindet Verzeichnis-Banner aus dem PAN21-Netzwerk ein.
        Beim Laden wird technisch bedingt Ihre IP-Adresse an den jeweiligen
        Server übertragen.
      </p>

      <H2>13. Ihre Rechte</H2>
      <p className="mb-6">
        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art.
        16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
        Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf
        Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Erteilte
        Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft
        widerrufen. Außerdem haben Sie das Recht, sich bei einer
        Datenschutz-Aufsichtsbehörde zu beschweren. Wenden Sie sich für Ihre
        Anliegen an{" "}
        <a href="mailto:dsgvo@pan21.com" className="underline">
          dsgvo@pan21.com
        </a>
        .
      </p>

      <p>Stand: Oktober 2026</p>
    </main>
  );
}

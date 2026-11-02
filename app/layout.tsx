import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import RegistrySeal from "@/components/registry-seal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Companies House Info | US Series LLC Registry",
  description:
    "Unabhängiges öffentliches Register für US Series LLC Gesellschaften. Registrierung einsehen, Zertifikat und Operating Agreement herunterladen, jährliche Bestätigung durchführen.",
  metadataBase: new URL("https://www.companieshouse.info"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      style={{ colorScheme: "light" }}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <header className="border-b border-neutral-100 px-6 py-3.5">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-800">
                <RegistrySeal size={28} />
              </span>
              <span>
                <p className="text-sm font-medium leading-tight">
                  Companies House Info
                </p>
                <p className="text-[11px] leading-tight text-neutral-400">
                  Independent US series registry
                </p>
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm text-neutral-600">
              <Link href="/">Registry search</Link>
              <Link href="/series-llc-erklaert">Series LLC</Link>
              <a href="https://einfach-llc.de">Neu gründen</a>
              <Link href="/portal" className="font-medium text-neutral-900">
                Portal login
              </Link>
            </nav>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-neutral-100 px-6 py-6">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Operated by PAN21.com International LLC, 7533 South Center View CT,
              STE R, West Jordan, UT 84084, USA
            </p>
            <div className="flex gap-4">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/kontakt">Kontakt</Link>
            </div>
          </div>
          {/* Verzeichnis-Banner: Swiss Quality, German Quality, FFA-Links */}
          <div style={{ display:"flex", justifyContent:"center", gap:"12px", flexWrap:"wrap", margin:"1rem 0 0" }}>
            <a href="https://www.swiss-quality.de/ref/8e80f0181a5eae971e" target="_blank" rel="noopener"><img src="https://www.swiss-quality.de/banner.svg" width="120" height="60" alt="Swiss Quality" /></a>
            <a href="https://www.german-quality.net/ref/a3e1fa3a0d7ba75e77" target="_blank" rel="noopener"><img src="https://www.german-quality.net/banner.svg" width="120" height="60" alt="German Quality" /></a>
            <a href="https://www.ffa-links.de/ref/c780d7ad2c6241e7c2" target="_blank" rel="noopener"><img src="https://www.ffa-links.de/banner.svg" width="120" height="60" alt="FFA-Links" /></a>
          </div>
          {/* Tool-Badges: site-ok.de, kaputte-links.de, pagespeed-plus.de */}
          <div style={{ display:"flex", justifyContent:"center", gap:"12px", flexWrap:"wrap", margin:"1rem 0 0" }}>
            <a href="https://www.site-ok.de/status.html?key=9czgiaj69e" target="_blank" rel="noopener"><img src="https://www.site-ok.de/api/badge?key=9czgiaj69e" alt="Site-Status" width="320" height="80" /></a>
            <a href="https://www.kaputte-links.de/status.html?key=9pqd1bch2e" target="_blank" rel="noopener"><img src="https://www.kaputte-links.de/api/badge?key=9pqd1bch2e" alt="Link-Status" width="320" height="80" /></a>
            <a href="https://www.pagespeed-plus.de/status.html?key=bb0rpn258z" target="_blank" rel="noopener"><img src="https://www.pagespeed-plus.de/api/badge?key=bb0rpn258z" alt="PageSpeed Score" /></a>
          </div>
        </footer>
      </body>
    </html>
  );
}

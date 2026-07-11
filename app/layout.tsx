import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import Matomo from "@/components/matomo";
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
  metadataBase: new URL("https://companieshouse.info"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
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
              Impressum: operated by PAN21.COM Corporate Consultants Ltd, 61
              Bridge Street, Kington, Herefordshire HR5 3DJ, UK (Company No.
              16117708)
            </p>
            <div className="flex gap-4">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/kontakt">Kontakt</Link>
            </div>
          </div>
        </footer>

        <CookieBanner />
        <Matomo />
      </body>
    </html>
  );
}

import RegistrySearch from "@/components/registry-search";
import RegistrySeal from "@/components/registry-seal";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-300 text-neutral-800">
            <RegistrySeal size={48} />
          </span>
        </div>
        <p className="mb-3 text-xs tracking-wide text-neutral-500">
          PUBLIC RECORD OF US SERIES LLC ENTITIES
        </p>
        <h1 className="mb-4 text-3xl font-medium text-neutral-900">
          Search and maintain your series LLC record
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-neutral-600">
          Verify a company, view its certificate of formation, or sign in to
          update your registered details and confirm annual compliance —
          similar to Companies House in the UK, for US series LLC entities.
        </p>

        <RegistrySearch />

        <div className="mt-6 text-sm text-neutral-500">
          Bereits registriert?{" "}
          <Link href="/portal" className="text-neutral-900 underline">
            Zum Portal
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-3xl grid-cols-1 gap-4 px-6 pb-20 sm:grid-cols-3">
        <FeatureCard
          title="Certificate of formation"
          text="Download your official record as PDF."
        />
        <FeatureCard
          title="Operating agreement"
          text="View and download your governing document."
        />
        <FeatureCard
          title="Annual confirmation"
          text="Confirm your details once a year to stay active."
        />
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-xl font-medium text-neutral-900">
            Was ist eine Series LLC?
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-neutral-600">
            Eine Series LLC ist eine besondere Form der amerikanischen LLC
            (Limited Liability Company), bei der innerhalb einer Muttergesellschaft
            mehrere rechtlich getrennte „Series" (Untergesellschaften) gebildet
            werden können — vergleichbar mit mehreren GmbHs unter einem Dach,
            jedoch mit einer einzigen Gründung und geteilter Verwaltung.
            US LLCs, auch als „amerikanische GmbH" bezeichnet, bieten
            Unternehmern weltweit eine schlanke, kosteneffiziente Möglichkeit,
            international geschäftsfähig zu werden.
          </p>
          <p className="text-sm leading-relaxed text-neutral-600">
            Mehr zur Gründung einer US LLC oder Series LLC:{" "}
            <a
              href="https://einfach-llc.de"
              className="text-neutral-900 underline"
            >
              einfach-llc.de
            </a>
          </p>
        </div>
      </section>
    {/* <!-- REVIVE:START --> */}
<div dangerouslySetInnerHTML={{__html: "<div style=\"display:flex;justify-content:center;margin:16px 0;\">\n<ins data-revive-zoneid=\"6\" data-revive-id=\"0b01ba1194fdc0e89c6321458dbc5814\"></ins>\n<script async src=\"//ads.pan21.com/www/delivery/asyncjs.php\"></script>\n</div>"}} />
{/* <!-- REVIVE:END --> */}
</main>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 p-5">
      <h3 className="mb-1 text-sm font-medium text-neutral-900">{title}</h3>
      <p className="text-xs leading-relaxed text-neutral-500">{text}</p>
    </div>
  );
}

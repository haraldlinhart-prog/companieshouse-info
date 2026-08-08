import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.companieshouse.info";
  const paths = [
    "",
    "/portal",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/series-llc-erklaert",
    "/us-llc-gruenden",
    "/amerikanische-gmbh",
  ];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}

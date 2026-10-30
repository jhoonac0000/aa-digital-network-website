import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Web, Video, SEO & Automation | AA Digital Network",
  description: "All AA Digital Network services: website development, ad videos, guest posting, ADA audits, automation, video editing, white-label SEO and AI virtual try-on.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services` },
  openGraph: { title: "Our Services — Web, Video, SEO & Automation | AA Digital Network", description: "All AA Digital Network services: website development, ad videos, guest posting, ADA audits, lead generation, automation, video editing, white-label SEO, plus grant research, email deliverability, Urdu AI data and research support.", url: `https://aa-digital-network-website.pages.dev/services`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import Link from "next/link";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="wrap page">
      <h1>Our services</h1>
      <p className="lead">
        Thirteen service lines, one standard: real work, plain pricing, and no fake promises.
        Pick a service to see exactly what you get, how it works, and what it costs.
      </p>
      <div className="grid">
        {SERVICES.map((s) => (
          <div className="card" key={s.slug}>
            <h3>
              <Link href={`/services/${s.slug}`}>{s.name}</Link>
              {s.isNew && <span className="badge-new">New</span>}
            </h3>
            <p>{s.short}</p>
            <p className="small">
              <strong>{s.priceLabel}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

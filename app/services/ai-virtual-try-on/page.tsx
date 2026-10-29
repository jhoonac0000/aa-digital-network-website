import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Virtual Try-On for Fashion Brands & Clothing Stores | AA Digital Network",
  description: "Done-for-you AI virtual try-on setup for fashion brands, abaya and modest wear labels, and suit stores. See real sample results, get your first try-on free on WhatsApp.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/ai-virtual-try-on` },
  openGraph: { title: "AI Virtual Try-On | AA Digital Network", description: "Done-for-you AI virtual try-on setup for fashion brands and clothing stores. Real sample results on the page — first try-on free.", url: `https://aa-digital-network.vercel.app/services/ai-virtual-try-on`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/ai-virtual-try-on-navy-suit-result.jpg`] },
};

import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import TryOnDemo from "@/components/TryOnDemo";
import TryYourOwn from "@/components/TryYourOwn";
import { getService } from "@/data/services";
import { SITE_URL, WA_DISPLAY } from "@/lib/site";

const service = getService("ai-virtual-try-on")!;

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: { "@type": "Organization", name: "AA Digital Network", url: SITE_URL },
    description: service.short,
    areaServed: ["US", "GB", "CA", "AU"],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${service.slug}` },
    ],
  };
  const waMessage = "Hi AA Digital Network, I am interested in AI Virtual Try-On. Please share details.";

  return (
    <article className="wrap page">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <p className="crumbs">
        <Link href="/services">Services</Link> / {service.name}
      </p>
      <h1>{service.name}</h1>
      <p className="lead">{service.short}</p>
      <p className="above-fold-cta">
        <WhatsAppCta message={waMessage} />
      </p>

      <section>
        <h2>The problem</h2>
        {service.problem.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section>
        <h2>Who this is for</h2>
        <ul className="check-list">
          {service.audiences.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>See it work — sample results</h2>
        <p>
          Three sample sets, each in three steps: the customer photo, the outfit, and the try-on
          result. Use the buttons to switch between the men&apos;s suits and the women&apos;s abaya.
        </p>
        <TryOnDemo />
      </section>

      <section>
        <h2>Try your own</h2>
        <p>
          Pick your photo and an outfit below to preview them side by side, then send both to us
          on WhatsApp. Pehla try-on FREE hai (1 dafa) — quality check ke liye: our team prepares
          your one free try-on, marked as a sample, and sends it back on WhatsApp.
        </p>
        <TryYourOwn />
      </section>

      <section>
        <h2>Free demo vs Full setup</h2>
        <p>
          The free demo is a taste — it shows you our quality. The Full Setup is the actual
          product: try-on working on your store, for your customers.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Free demo</h3>
            <ul className="check-list">
              <li>Watch the ready sample demos on this page</li>
              <li>1 free personal try-on, prepared by our team and sent on WhatsApp</li>
              <li>
                The free try-on carries a small &ldquo;Sample — AA Digital Network&rdquo; note —
                for checking quality only
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Full setup — for brands &amp; stores (paid)</h3>
            <ul className="check-list">
              <li>
                Your catalogue set up for try-on: pilot of 10–20 products, $299–$499 one-time
              </li>
              <li>Integrated on YOUR store / website, for YOUR customers</li>
              <li>Every product checked by a person — coverage, sleeves, hem and embroidery QA</li>
              <li>Clean outputs — no sample mark</li>
              <li>New products added under the care plan ($99–$199/month), with support</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>What you get</h2>
        <ul className="check-list">
          {service.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>

      <section className="proof-box">
        <h2>Why trust this</h2>
        <p>{service.proof}</p>
      </section>

      <section>
        <h2>How it works — 3 steps</h2>
        <ol className="steps">
          {service.process.map((s, i) => (
            <li key={s.title}>
              <strong>
                Step {i + 1}: {s.title}
              </strong>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="price-box">
        <h2>Price</h2>
        <p className="price">{service.priceLabel}</p>
        <p>{service.priceNote}</p>
        <p>
          Care plan (optional): <strong>$99–$199/month</strong> — new products added and checked
          every month.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        {service.faqs.map((f) => (
          <details key={f.q} className="faq">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <section>
        <h2>Related services</h2>
        <ul>
          {service.related.map((slug) => {
            const r = getService(slug);
            return r ? (
              <li key={slug}>
                <Link href={`/services/${r.slug}`}>{r.name}</Link>
              </li>
            ) : null;
          })}
        </ul>
      </section>

      <section className="cta-band">
        <h2>Ready to talk?</h2>
        <p>Message us on WhatsApp — your first try-on sample is free, not a sales pitch.</p>
        <WhatsAppCta message={waMessage} />
        <p className="small">WhatsApp {WA_DISPLAY} · We aim to reply within 24 hours.</p>
      </section>
    </article>
  );
}

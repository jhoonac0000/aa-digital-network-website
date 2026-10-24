import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import type { Service } from "@/data/services";
import { ARTICLES, articlesForService } from "@/data/articles";
import { getService } from "@/data/services";
import { SITE_URL, WA_DISPLAY } from "@/lib/site";

export default function ServicePage({ service }: { service: Service }) {
  const guides = articlesForService(service.slug);
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
  const waMessage = `Hi AA Digital Network, I am interested in ${service.name}. Please share details.`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${service.slug}` },
    ],
  };
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

      {guides.length > 0 && (
        <section>
          <h2>Guides on this service</h2>
          <ul>
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/blog/${g.slug}`}>{g.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

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
        <p>Message us on WhatsApp — first reply is free advice, not a sales pitch.</p>
        <WhatsAppCta message={waMessage} />
        <p className="small">WhatsApp {WA_DISPLAY} · We aim to reply within 24 hours.</p>
      </section>
    </article>
  );
}

export function allArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

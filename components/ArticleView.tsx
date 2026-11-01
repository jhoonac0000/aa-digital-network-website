import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import type { Article } from "@/data/articles";
import { getService } from "@/data/services";
import { SITE_URL } from "@/lib/site";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderRich(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return (
        <Link key={i} href={m[2]}>
          {m[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ArticleView({ article }: { article: Article }) {
  const service = getService(article.service);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/blog/${article.slug}` },
    ],
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${SITE_URL}${article.image}`,
    author: { "@type": "Organization", name: "AA Digital Network", url: SITE_URL },
    url: `${SITE_URL}/blog/${article.slug}`,
  };
  const faqJsonLd = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;
  return (
    <article className="wrap page article">
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <p className="crumbs">
        <Link href="/blog">Blog</Link>
        {service && (
          <>
            {" / "}
            <Link href={`/services/${service.slug}`}>{service.name}</Link>
          </>
        )}
      </p>
      <h1>{article.title}</h1>
      <p className="lead">{article.excerpt}</p>
      <figure className="article-hero">
        <img
          src={article.image}
          alt={article.imageAlt}
          width={2048}
          height={1152}
        />
        <figcaption>{article.imageCaption}</figcaption>
      </figure>
      <nav className="toc" aria-label="Table of contents">
        <p>In this article</p>
        <ul>
          {article.sections.map((s) => (
            <li key={s.heading}>
              <a href={`#${slugify(s.heading)}`}>{s.heading}</a>
            </li>
          ))}
          {article.faqs && article.faqs.length > 0 && (
            <li>
              <a href="#faqs">Frequently asked questions</a>
            </li>
          )}
        </ul>
      </nav>
      {article.sections.map((s) => (
        <div key={s.heading}>
          <section id={slugify(s.heading)}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{renderRich(p)}</p>
            ))}
            {s.bullets && s.bullets.length > 0 && (
              <ul>
                {s.bullets.map((b, i) => (
                  <li key={i}>{renderRich(b)}</li>
                ))}
              </ul>
            )}
          </section>
          {(article.extraImages || [])
            .filter((img) => img.after === s.heading)
            .map((img) => (
              <figure className="article-hero" key={img.src}>
                <img src={img.src} alt={img.alt} width={2048} height={1152} loading="lazy" />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
        </div>
      ))}
      {article.faqs && article.faqs.length > 0 && (
        <section id="faqs">
          <h2>Frequently asked questions</h2>
          {article.faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      )}
      {article.related && article.related.length > 0 && (
        <section>
          <h2>Related topics you might like</h2>
          <ul>
            {article.related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {service && (
        <section className="service-box">
          <h2>Related service: {service.name}</h2>
          <p>{service.short}</p>
          <p>
            <Link href={`/services/${service.slug}`}>See {service.name} →</Link>
          </p>
        </section>
      )}
      <section className="cta-band">
        <h2>Want help with this?</h2>
        <p>Message us on WhatsApp and tell us where you are stuck — first reply is free advice.</p>
        <WhatsAppCta
          message={`Hi AA Digital Network, I read your article "${article.title}" and would like help.`}
        />
      </section>
    </article>
  );
}

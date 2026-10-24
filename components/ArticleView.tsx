import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import type { Article } from "@/data/articles";
import { getService } from "@/data/services";
import { SITE_URL } from "@/lib/site";

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
    author: { "@type": "Organization", name: "AA Digital Network", url: SITE_URL },
    url: `${SITE_URL}/blog/${article.slug}`,
  };
  return (
    <article className="wrap page article">
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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
      {article.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
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

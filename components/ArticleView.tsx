import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import type { Article } from "@/data/articles";
import { getService } from "@/data/services";
import { SITE_URL } from "@/lib/site";

export default function ArticleView({ article }: { article: Article }) {
  const service = getService(article.service);
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

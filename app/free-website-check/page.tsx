import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website SEO & GEO Check — AA Digital Network",
  description: "Free instant website check — title, meta description, headings, image alt text, Open Graph and structured data scored out of 100, with a plain-English fix list.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/free-website-check` },
  openGraph: { title: "Free Website SEO & GEO Check — AA Digital Network", description: "Free instant website check — title, meta description, headings, image alt text, Open Graph and structured data scored out of 100, with a plain-English fix list.", url: `https://aa-digital-network-website.pages.dev/free-website-check`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SeoChecker from "@/components/SeoChecker";
import WhatsAppCta from "@/components/WhatsAppCta";

const FAQS = [
  {
    q: "What does this checker actually look at?",
    a: "It reads the public code of the one page you give it and runs 12 checks: HTTPS, title tag, meta description, H1 and H2 headings, image alt text, Open Graph tags, canonical tag, structured data, content length, internal links and the mobile viewport tag. Each check is marked Pass, Warning or Fail with a plain-English explanation.",
  },
  {
    q: "What is the GEO part of the check?",
    a: "GEO — generative engine optimisation — is about being understood and cited by AI search tools such as ChatGPT, Gemini and Perplexity, not just ranked by Google. Clear headings, enough real content and structured data (JSON-LD) are what those tools read first, so this check weighs them heavily.",
  },
  {
    q: "Does a high score guarantee better rankings?",
    a: "No — and anyone who promises that is not being honest with you. Rankings also depend on your other pages, your speed, your backlinks, your Google Business Profile and your competition. This score tells you whether the on-page basics of one page are in order; fixing them removes obstacles, it does not buy positions.",
  },
  {
    q: "Is it really free? Do you store my website address?",
    a: "Yes, it is free, with no sign-up. The check runs in your browser on this page and we do not store your address or your results. If you message us afterwards, you choose what to share.",
  },
  {
    q: "The tool could not read my page. What now?",
    a: "Some sites block automated readers or the free relay services this tool uses. Message us on WhatsApp and we will run the same check for you by hand — still free.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FreeWebsiteCheckPage() {
  return (
    <div className="wrap page">
      <JsonLd data={faqJsonLd} />
      <h1>Free website SEO &amp; GEO check</h1>
      <p className="lead">
        Paste your website address and get an instant score out of 100 — plus a plain-English list
        of what is helping your page and what is holding it back, for both Google search and AI
        search tools. Free, no sign-up, and nothing is stored.
      </p>

      <SeoChecker />

      <h2>What a full check adds</h2>
      <p>
        This free tool reads one page. A full audit also covers your page speed, every important
        page on the site, your backlinks, and how your business appears on Google Maps and in AI
        answers. If your score raises questions, send it to us — the first reply is free advice,
        not a sales pitch.
      </p>
      <p>
        <WhatsAppCta message="Hi AA Digital Network, I would like a full website audit." label="Ask about a full audit on WhatsApp" />
      </p>

      <h2>Common questions</h2>
      {FAQS.map((f) => (
        <details className="faq" key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}

      <h2>Related services</h2>
      <p>
        <Link href="/services/white-label-seo">White-Label SEO →</Link>
        {" · "}
        <Link href="/services/website-development">Website Development →</Link>
        {" · "}
        <Link href="/tools">More free tools →</Link>
      </p>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books & Digital Products — AA Digital Network",
  description: "AA Digital Network books and digital products: an Islamic kids book and a Ramadan Planner 2027, currently in production. Samples and honest previews, no fake listings.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/books` },
  openGraph: { title: "Books & Digital Products — AA Digital Network", description: "AA Digital Network books and digital products: an Islamic kids book and a Ramadan Planner 2027, currently in production. Samples and honest previews, no fake listings.", url: `https://aa-digital-network.vercel.app/books`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import WhatsAppCta from "@/components/WhatsAppCta";

export default function BooksPage() {
  return (
    <div className="wrap page">
      <h1>Books &amp; digital products</h1>
      <p className="lead">
        Our first products are in production. Nothing here is for sale yet — what you see
        below is an honest preview, and you can ask to be notified on WhatsApp when each
        product is ready.
      </p>
      <div className="grid">
        <div className="card">
          <h3>Ramadan Planner 2027</h3>
          <p>
            A printable planner for Ramadan: daily tracking, goals, and reflection pages.
            Planned price: $9.95. Planned release: December 2026 – January 2027.
          </p>
          <p className="small">
            <strong>Status:</strong> In production — sample pages will appear here as they are ready.
          </p>
        </div>
        <div className="card">
          <h3>First Islamic Kids Book</h3>
          <p>
            A fully original illustrated storybook for children — never repackaged website
            articles. English launch edition, with a Roman-Urdu edition planned.
            Planned price: $12.95. Planned release: January 2027.
          </p>
          <p className="small">
            <strong>Status:</strong> In production — the first story spread will appear here as a free sample.
          </p>
        </div>
      </div>
      <div className="cta-band">
        <h2>Get notified when a product launches</h2>
        <p>Message us on WhatsApp and tell us which product you want to hear about.</p>
        <WhatsAppCta message="Hi AA Digital Network, please notify me when your books/products launch." />
      </div>
    </div>
  );
}

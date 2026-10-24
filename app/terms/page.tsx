import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | AA Digital Network",
  description: "Terms for AA Digital Network services: quotes, payment, ownership, and honest limits on what we promise.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/terms` },
  openGraph: { title: "Terms | AA Digital Network", description: "Terms for AA Digital Network services: quotes, payment, ownership, and honest limits on what we promise.", url: `https://aa-digital-network.vercel.app/terms`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

export default function TermsPage() {
  return (
    <div className="wrap page">
      <h1>Terms</h1>
      <h2>Quotes and payment</h2>
      <p>
        Prices shown as starting points (&ldquo;from&rdquo;) are starting points only; the
        exact price for your project is confirmed on WhatsApp before work begins. Payment
        terms are agreed per project.
      </p>
      <h2>Ownership</h2>
      <p>
        Websites, videos and reports we build for you are yours once paid for. Your
        business data, drafts and topics are never shared or reused.
      </p>
      <h2>Honest limits</h2>
      <p>
        We do not guarantee search rankings, grant awards, journal acceptance, or inbox
        placement. Accessibility work improves your site toward WCAG 2.2 AA; it does not
        make any site lawsuit-proof.
      </p>
      <h2>Content</h2>
      <p>
        All content on this site is original to AA Digital Network. You may share links
        to our pages; please do not copy our articles or service pages without permission.
      </p>
    </div>
  );
}

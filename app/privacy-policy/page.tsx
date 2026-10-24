import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AA Digital Network",
  description: "Privacy policy for AA Digital Network: this static site collects no personal data and sets no tracking cookies.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/privacy-policy` },
  openGraph: { title: "Privacy Policy | AA Digital Network", description: "Privacy policy for AA Digital Network: this static site collects no personal data and sets no tracking cookies.", url: `https://aa-digital-network.vercel.app/privacy-policy`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

export default function PrivacyPage() {
  return (
    <div className="wrap page">
      <h1>Privacy Policy</h1>
      <p>
        AA Digital Network operates this website as a static site. We do not collect,
        store, or sell personal data through this site, and we set no tracking cookies.
      </p>
      <h2>Contact via WhatsApp</h2>
      <p>
        If you message us on WhatsApp, the information you share there is governed by
        WhatsApp's own privacy policy. We use it only to answer your inquiry and discuss
        your project.
      </p>
      <h2>Contact form</h2>
      <p>
        The contact form on this site does not submit to a server. It opens WhatsApp with
        your message pre-filled, and nothing is sent until you choose to send it.
      </p>
      <h2>External links</h2>
      <p>
        This site links to external sites (for example, our showcase site and demo sites).
        Their privacy practices are their own.
      </p>
      <h2>Changes</h2>
      <p>If this policy changes, the updated version will be posted here.</p>
    </div>
  );
}

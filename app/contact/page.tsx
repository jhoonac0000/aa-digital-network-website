import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — WhatsApp AA Digital Network",
  description: "Contact AA Digital Network on WhatsApp for a free quote. We aim to reply within 24 hours.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/contact` },
  openGraph: { title: "Contact Us — WhatsApp AA Digital Network", description: "Contact AA Digital Network on WhatsApp for a free quote. We aim to reply within 24 hours.", url: `https://aa-digital-network-website.pages.dev/contact`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ContactForm from "@/components/ContactForm";
import WhatsAppCta from "@/components/WhatsAppCta";
import { WA_DISPLAY } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="wrap page">
      <h1>Contact us</h1>
      <p className="lead">
        The fastest way to reach us is WhatsApp. Tell us what you need — first reply is
        free advice, not a sales pitch. We aim to reply within 24 hours.
      </p>
      <p>
        <WhatsAppCta message="Hi AA Digital Network, I would like to discuss a project." label={`WhatsApp ${WA_DISPLAY}`} />
      </p>
      <h2>Or send an inquiry</h2>
      <p className="small">
        Fill in the form and it will open WhatsApp with your message ready to send.
      </p>
      <ContactForm />
    </div>
  );
}

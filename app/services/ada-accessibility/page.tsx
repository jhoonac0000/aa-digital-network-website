import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Accessibility Audits | AA Digital Network",
  description: "Website accessibility audits and fixes to WCAG 2.2 AA — clearer for every visitor, stronger for your business. Message us on WhatsApp for a free quote.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/ada-accessibility` },
  openGraph: { title: "ADA Accessibility Audits | AA Digital Network", description: "Website accessibility audits and fixes to WCAG 2.2 AA — clearer for every visitor, stronger for your business. Message us on WhatsApp for a free quote.", url: `https://aa-digital-network-website.pages.dev/services/ada-accessibility`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("ada-accessibility")!;

export default function Page() {
  return <ServicePage service={service} />;
}

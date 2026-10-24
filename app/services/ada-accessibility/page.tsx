import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Accessibility Audits | AA Digital Network",
  description: "Website accessibility audits and fixes to WCAG 2.2 AA — clearer for every visitor, stronger for your business. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/ada-accessibility` },
  openGraph: { title: "ADA Accessibility Audits | AA Digital Network", description: "Website accessibility audits and fixes to WCAG 2.2 AA — clearer for every visitor, stronger for your business. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/ada-accessibility`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("ada-accessibility")!;

export default function Page() {
  return <ServicePage service={service} />;
}

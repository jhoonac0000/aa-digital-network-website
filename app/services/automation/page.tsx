import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation | AA Digital Network",
  description: "Practical AI and workflow automation that answers leads fast, books appointments and removes repetitive work. Message us on WhatsApp for a free quote.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/automation` },
  openGraph: { title: "AI Automation | AA Digital Network", description: "Practical AI and workflow automation that answers leads fast, books appointments and removes repetitive work. Message us on WhatsApp for a free quote.", url: `https://aa-digital-network-website.pages.dev/services/automation`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("automation")!;

export default function Page() {
  return <ServicePage service={service} />;
}

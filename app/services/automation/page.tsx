import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation | AA Digital Network",
  description: "Practical AI and workflow automation that answers leads fast, books appointments and removes repetitive work. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/automation` },
  openGraph: { title: "AI Automation | AA Digital Network", description: "Practical AI and workflow automation that answers leads fast, books appointments and removes repetitive work. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/automation`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("automation")!;

export default function Page() {
  return <ServicePage service={service} />;
}

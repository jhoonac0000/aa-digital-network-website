import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "n8n Automation | AA Digital Network",
  description: "Practical n8n workflows that save small teams hours every week — posting, email, sheets and more. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/automation` },
  openGraph: { title: "n8n Automation | AA Digital Network", description: "Practical n8n workflows that save small teams hours every week — posting, email, sheets and more. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/automation`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("automation")!;

export default function Page() {
  return <ServicePage service={service} />;
}

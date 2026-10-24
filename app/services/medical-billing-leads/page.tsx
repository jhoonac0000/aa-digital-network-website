import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Billing Lead Generation | AA Digital Network",
  description: "Researched leads for US medical billing services — practices that actually need billing help. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/medical-billing-leads` },
  openGraph: { title: "Medical Billing Lead Generation | AA Digital Network", description: "Researched leads for US medical billing services — practices that actually need billing help. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/medical-billing-leads`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("medical-billing-leads")!;

export default function Page() {
  return <ServicePage service={service} />;
}

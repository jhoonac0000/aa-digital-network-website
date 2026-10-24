import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Deliverability Audit | AA Digital Network",
  description: "Find out exactly why your emails land in spam — and get a prioritised fix list to reach the inbox again. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/email-deliverability-audit` },
  openGraph: { title: "Email Deliverability Audit | AA Digital Network", description: "Find out exactly why your emails land in spam — and get a prioritised fix list to reach the inbox again. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/email-deliverability-audit`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("email-deliverability-audit")!;

export default function Page() {
  return <ServicePage service={service} />;
}

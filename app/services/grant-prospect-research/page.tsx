import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Prospect Research | AA Digital Network",
  description: "A researched shortlist of grants your organisation can actually win — matched to your mission, budget and eligibility. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/grant-prospect-research` },
  openGraph: { title: "Grant Prospect Research | AA Digital Network", description: "A researched shortlist of grants your organisation can actually win — matched to your mission, budget and eligibility. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/grant-prospect-research`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("grant-prospect-research")!;

export default function Page() {
  return <ServicePage service={service} />;
}

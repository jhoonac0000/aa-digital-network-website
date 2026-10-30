import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Prospect Research | AA Digital Network",
  description: "A researched shortlist of grants your organisation can actually win — matched to your mission, budget and eligibility. Message us on WhatsApp for a free quote.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/grant-prospect-research` },
  openGraph: { title: "Grant Prospect Research | AA Digital Network", description: "A researched shortlist of grants your organisation can actually win — matched to your mission, budget and eligibility. Message us on WhatsApp for a free quote.", url: `https://aa-digital-network-website.pages.dev/services/grant-prospect-research`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("grant-prospect-research")!;

export default function Page() {
  return <ServicePage service={service} />;
}

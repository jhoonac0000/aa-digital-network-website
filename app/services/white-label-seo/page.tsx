import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White-Label SEO | AA Digital Network",
  description: "SEO done under your agency's brand — reports, content and links your clients see as yours. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/white-label-seo` },
  openGraph: { title: "White-Label SEO | AA Digital Network", description: "SEO done under your agency's brand — reports, content and links your clients see as yours. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/white-label-seo`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("white-label-seo")!;

export default function Page() {
  return <ServicePage service={service} />;
}

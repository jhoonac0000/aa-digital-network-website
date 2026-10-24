import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development | AA Digital Network",
  description: "Fast, SEO-ready websites for small businesses — built to bring enquiries, not just look good. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/website-development` },
  openGraph: { title: "Website Development | AA Digital Network", description: "Fast, SEO-ready websites for small businesses — built to bring enquiries, not just look good. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/website-development`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("website-development")!;

export default function Page() {
  return <ServicePage service={service} />;
}

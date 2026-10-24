import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Ad Videos | AA Digital Network",
  description: "Short social media ad videos in Urdu and English that stop the scroll and explain your offer fast. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/ad-videos` },
  openGraph: { title: "Digital Ad Videos | AA Digital Network", description: "Short social media ad videos in Urdu and English that stop the scroll and explain your offer fast. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/ad-videos`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("ad-videos")!;

export default function Page() {
  return <ServicePage service={service} />;
}

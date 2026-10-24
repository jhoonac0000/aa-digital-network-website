import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short-Form Video Editing | AA Digital Network",
  description: "Reels and Shorts edited to hold attention — clean cuts, captions, hooks and pacing that fit each platform. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/video-editing` },
  openGraph: { title: "Short-Form Video Editing | AA Digital Network", description: "Reels and Shorts edited to hold attention — clean cuts, captions, hooks and pacing that fit each platform. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/video-editing`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("video-editing")!;

export default function Page() {
  return <ServicePage service={service} />;
}

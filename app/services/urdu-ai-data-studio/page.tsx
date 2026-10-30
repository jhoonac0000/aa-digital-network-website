import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urdu AI Data Studio | AA Digital Network",
  description: "Clean, quality-checked Urdu text and audio data for AI teams — built by people who actually read Urdu. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/urdu-ai-data-studio` },
  openGraph: { title: "Urdu AI Data Studio | AA Digital Network", description: "Clean, quality-checked Urdu text and audio data for AI teams — built by people who actually read Urdu. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network-website.pages.dev/services/urdu-ai-data-studio`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("urdu-ai-data-studio")!;

export default function Page() {
  return <ServicePage service={service} />;
}

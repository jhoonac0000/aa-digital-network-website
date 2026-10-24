import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Support Services | AA Digital Network",
  description: "Honest, practical help for researchers — finding the gap, shaping the paper, and getting it submission-ready. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/research-support-services` },
  openGraph: { title: "Research Support Services | AA Digital Network", description: "Honest, practical help for researchers — finding the gap, shaping the paper, and getting it submission-ready. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/research-support-services`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("research-support-services")!;

export default function Page() {
  return <ServicePage service={service} />;
}

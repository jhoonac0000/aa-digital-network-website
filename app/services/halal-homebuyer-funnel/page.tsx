import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Homebuyer Funnel | AA Digital Network",
  description: "Buyer funnel for Muslim realtors and halal-financing loan officers — local SEO, riba-free financing explainers and a pre-approval WhatsApp funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-homebuyer-funnel` },
  openGraph: { title: "Halal Homebuyer Funnel | AA Digital Network", description: "Buyer funnel for Muslim realtors and halal-financing loan officers — local SEO, riba-free financing explainers and a pre-approval WhatsApp funnel.", url: `https://aa-digital-network-website.pages.dev/services/halal-homebuyer-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-homebuyer-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Auto Buyer Funnel | AA Digital Network",
  description: "Buyer funnel for Muslim-owned car dealerships — SEO, halal-financing explainer pages, inventory + WhatsApp inquiries and walkarounds that turn searches into buyers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-auto-buyer-funnel` },
  openGraph: { title: "Halal Auto Buyer Funnel | AA Digital Network", description: "Buyer funnel for Muslim-owned car dealerships — SEO, halal-financing explainer pages, inventory + WhatsApp inquiries and walkarounds that turn searches into buyers.", url: `https://aa-digital-network-website.pages.dev/services/halal-auto-buyer-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-auto-buyer-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

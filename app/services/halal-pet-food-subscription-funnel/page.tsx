import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Pet Food Subscription Funnel | AA Digital Network",
  description: "Subscription funnel for halal pet food brands — SEO, trial-box pages, a feeding-plan quiz and Subscribe & Save that turn searches into monthly subscribers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-pet-food-subscription-funnel` },
  openGraph: { title: "Halal Pet Food Subscription Funnel | AA Digital Network", description: "Subscription funnel for halal pet food brands — SEO, trial-box pages, a feeding-plan quiz and Subscribe & Save that turn searches into monthly subscribers.", url: `https://aa-digital-network-website.pages.dev/services/halal-pet-food-subscription-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-pet-food-subscription-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

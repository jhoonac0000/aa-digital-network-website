import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Baby Food Subscription Funnel | AA Digital Network",
  description: "Subscription funnel for halal baby food brands — SEO, age-stage pages, a trial-box offer and Subscribe & Save that turn searches into monthly subscribers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-baby-food-subscription-funnel` },
  openGraph: { title: "Halal Baby Food Subscription Funnel | AA Digital Network", description: "Subscription funnel for halal baby food brands — SEO, age-stage pages, a trial-box offer and Subscribe & Save that turn searches into monthly subscribers.", url: `https://aa-digital-network-website.pages.dev/services/halal-baby-food-subscription-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-baby-food-subscription-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Meal-Prep Subscription Funnel | AA Digital Network",
  description: "Subscription funnel for small halal meal-prep and meal-kit brands — local SEO, Google Business Profile, trial-box pages and 12 food Shorts a month.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-meal-prep-funnel` },
  openGraph: { title: "Halal Meal-Prep Subscription Funnel | AA Digital Network", description: "Subscription funnel for small halal meal-prep and meal-kit brands — local SEO, Google Business Profile, trial-box pages and 12 food Shorts a month.", url: `https://aa-digital-network-website.pages.dev/services/halal-meal-prep-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-meal-prep-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

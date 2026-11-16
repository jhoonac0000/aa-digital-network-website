import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Aware Home Cleaning Booking Funnel | AA Digital Network",
  description: "Booking funnel for Muslim-owned cleaning companies — local SEO, Google Business Profile and faith-aware pages that turn searches into recurring cleans.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/faith-aware-home-cleaning-funnel` },
  openGraph: { title: "Faith-Aware Home Cleaning Booking Funnel | AA Digital Network", description: "Booking funnel for Muslim-owned cleaning companies — local SEO, Google Business Profile and faith-aware pages that turn searches into recurring cleans.", url: `https://aa-digital-network-website.pages.dev/services/faith-aware-home-cleaning-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("faith-aware-home-cleaning-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

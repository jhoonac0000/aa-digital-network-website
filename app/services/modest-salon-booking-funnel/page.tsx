import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modest Salon Booking Funnel | AA Digital Network",
  description: "Booking funnel for women-only and hijab-friendly salons — local SEO, Google Business Profile and privacy-first landing pages.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/modest-salon-booking-funnel` },
  openGraph: { title: "Modest Salon Booking Funnel | AA Digital Network", description: "Booking funnel for women-only and hijab-friendly salons — local SEO, Google Business Profile and privacy-first landing pages.", url: `https://aa-digital-network-website.pages.dev/services/modest-salon-booking-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("modest-salon-booking-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

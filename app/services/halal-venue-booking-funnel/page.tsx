import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Venue Booking Funnel | AA Digital Network",
  description: "Booking funnel for Muslim-friendly banquet halls and wedding venues — local SEO, Google Business Profile, faith-aware pages, tour and date-hold funnel and venue tour videos.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-venue-booking-funnel` },
  openGraph: { title: "Halal Venue Booking Funnel | AA Digital Network", description: "Booking funnel for Muslim-friendly banquet halls and wedding venues — local SEO, Google Business Profile, faith-aware pages, tour and date-hold funnel and venue tour videos.", url: `https://aa-digital-network-website.pages.dev/services/halal-venue-booking-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-venue-booking-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

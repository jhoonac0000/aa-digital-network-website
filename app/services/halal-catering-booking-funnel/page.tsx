import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Catering Booking Funnel | AA Digital Network",
  description: "Booking funnel for halal catering companies — local SEO, Google Business Profile, menu and per-person pricing pages, quote-request funnel and appetite-building videos.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-catering-booking-funnel` },
  openGraph: { title: "Halal Catering Booking Funnel | AA Digital Network", description: "Booking funnel for halal catering companies — local SEO, Google Business Profile, menu and per-person pricing pages, quote-request funnel and appetite-building videos.", url: `https://aa-digital-network-website.pages.dev/services/halal-catering-booking-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-catering-booking-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

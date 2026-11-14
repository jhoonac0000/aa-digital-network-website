import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Direct-Booking Funnel | AA Digital Network",
  description: "Direct-booking funnel for independent Muslim-friendly hotels and resorts — local SEO, Google Business Profile, faith-aware landing pages and direct-booking pages linked to your own booking engine.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-direct-booking-funnel` },
  openGraph: { title: "Halal Direct-Booking Funnel | AA Digital Network", description: "Direct-booking funnel for independent Muslim-friendly hotels and resorts — local SEO, Google Business Profile, faith-aware landing pages and direct-booking pages linked to your own booking engine.", url: `https://aa-digital-network-website.pages.dev/services/halal-direct-booking-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-direct-booking-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

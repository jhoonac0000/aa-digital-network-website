import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Aware Photography Booking Funnel | AA Digital Network",
  description: "Booking funnel for Muslim wedding photographers — local SEO, privacy-first pages and a fast-reply inquiry flow that turn searches into bookings.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/faith-aware-photography-booking-funnel` },
  openGraph: { title: "Faith-Aware Photography Booking Funnel | AA Digital Network", description: "Booking funnel for Muslim wedding photographers — local SEO, privacy-first pages and a fast-reply inquiry flow that turn searches into bookings.", url: `https://aa-digital-network-website.pages.dev/services/faith-aware-photography-booking-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("faith-aware-photography-booking-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

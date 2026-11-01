import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Wedding Booking Funnel | AA Digital Network",
  description: "Done-for-you booking funnel for Muslim wedding planners — local search, faith-aware pages and consultation bookings for nikah and walima events. Free audit.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-wedding-booking` },
  openGraph: { title: "Halal Wedding Booking Funnel | AA Digital Network", description: "Done-for-you booking funnel for Muslim wedding planners — local search, faith-aware pages and consultation bookings for nikah and walima events. Free audit.", url: `https://aa-digital-network-website.pages.dev/services/halal-wedding-booking`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-wedding-booking")!;

export default function Page() {
  return <ServicePage service={service} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umrah Booking Funnel | AA Digital Network",
  description: "Booking funnel for small and mid-size Umrah travel agencies — local SEO, Google Business Profile, a landing page for every package and a WhatsApp inquiry funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/umrah-booking-funnel` },
  openGraph: { title: "Umrah Booking Funnel | AA Digital Network", description: "Booking funnel for small and mid-size Umrah travel agencies — local SEO, Google Business Profile, a landing page for every package and a WhatsApp inquiry funnel.", url: `https://aa-digital-network-website.pages.dev/services/umrah-booking-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("umrah-booking-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

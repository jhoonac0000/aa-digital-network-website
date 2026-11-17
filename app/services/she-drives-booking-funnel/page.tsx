import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "She Drives Booking Funnel | AA Digital Network",
  description: "Booking funnel for women-only driving schools — local SEO, Google Business Profile and privacy-first pages that turn searches into booked lessons.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/she-drives-booking-funnel` },
  openGraph: { title: "She Drives Booking Funnel | AA Digital Network", description: "Booking funnel for women-only driving schools — local SEO, Google Business Profile and privacy-first pages that turn searches into booked lessons.", url: `https://aa-digital-network-website.pages.dev/services/she-drives-booking-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("she-drives-booking-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

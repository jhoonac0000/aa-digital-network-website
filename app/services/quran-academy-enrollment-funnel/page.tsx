import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Quran Academy Enrollment Funnel | AA Digital Network",
  description: "Enrollment funnel for online Quran academies — search, Google Business Profile, trial-class booking, WhatsApp parent funnel and trust-building teacher videos.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/quran-academy-enrollment-funnel` },
  openGraph: { title: "Online Quran Academy Enrollment Funnel | AA Digital Network", description: "Enrollment funnel for online Quran academies — search, Google Business Profile, trial-class booking, WhatsApp parent funnel and trust-building teacher videos.", url: `https://aa-digital-network-website.pages.dev/services/quran-academy-enrollment-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("quran-academy-enrollment-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

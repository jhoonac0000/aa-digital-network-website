import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Aware Fertility Consultation Funnel | AA Digital Network",
  description: "Consultation funnel for Muslim-friendly fertility clinics — local SEO, Google Business Profile, faith-aware pages and a fast-reply booking funnel that turns searches into booked consultations.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/faith-aware-fertility-funnel` },
  openGraph: { title: "Faith-Aware Fertility Consultation Funnel | AA Digital Network", description: "Consultation funnel for Muslim-friendly fertility clinics — local SEO, Google Business Profile, faith-aware pages and a fast-reply booking funnel that turns searches into booked consultations.", url: `https://aa-digital-network-website.pages.dev/services/faith-aware-fertility-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("faith-aware-fertility-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Done-for-You Clinic Shorts | AA Digital Network",
  description: "Twelve ready Shorts and Reels a month for small dental, therapy and family clinics — patient education, clinic tours and FAQ answers, filmed and edited for you. $300–$500/month.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/clinic-shorts-retainer` },
  openGraph: { title: "Done-for-You Clinic Shorts | AA Digital Network", description: "Twelve ready Shorts and Reels a month for small dental, therapy and family clinics — patient education, clinic tours and FAQ answers, filmed and edited for you. $300–$500/month.", url: `https://aa-digital-network-website.pages.dev/services/clinic-shorts-retainer`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("clinic-shorts-retainer")!;

export default function Page() {
  return <ServicePage service={service} />;
}

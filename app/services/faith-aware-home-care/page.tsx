import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Aware Home-Care Funnel | AA Digital Network",
  description: "Family inquiry funnel for Muslim home-care agencies — local SEO, Google Business Profile, faith-aware landing pages and a callback funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/faith-aware-home-care` },
  openGraph: { title: "Faith-Aware Home-Care Funnel | AA Digital Network", description: "Family inquiry funnel for Muslim home-care agencies — local SEO, Google Business Profile, faith-aware landing pages and a callback funnel.", url: `https://aa-digital-network-website.pages.dev/services/faith-aware-home-care`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("faith-aware-home-care")!;

export default function Page() {
  return <ServicePage service={service} />;
}

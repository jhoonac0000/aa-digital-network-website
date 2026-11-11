import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dignified Matchmaker Funnel | AA Digital Network",
  description: "Inquiry funnel for boutique Muslim matchmakers — local SEO, Google Business Profile and a confidential consultation-booking funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/dignified-matchmaker-funnel` },
  openGraph: { title: "Dignified Matchmaker Funnel | AA Digital Network", description: "Inquiry funnel for boutique Muslim matchmakers — local SEO, Google Business Profile and a confidential consultation-booking funnel.", url: `https://aa-digital-network-website.pages.dev/services/dignified-matchmaker-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("dignified-matchmaker-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

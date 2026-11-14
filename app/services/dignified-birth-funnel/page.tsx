import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dignified Birth Client Funnel | AA Digital Network",
  description: "Client funnel for Muslim doulas and faith-aware birth support — local SEO, Google Business Profile, privacy-first pages and free-consultation booking.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/dignified-birth-funnel` },
  openGraph: { title: "Dignified Birth Client Funnel | AA Digital Network", description: "Client funnel for Muslim doulas and faith-aware birth support — local SEO, Google Business Profile, privacy-first pages and free-consultation booking.", url: `https://aa-digital-network-website.pages.dev/services/dignified-birth-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("dignified-birth-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

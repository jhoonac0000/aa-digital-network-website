import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Tax & Bookkeeping Funnel | AA Digital Network",
  description: "Client funnel for Muslim CPAs and Sharia-aware accounting firms — local SEO, Google Business Profile and tax-season landing pages.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-tax-bookkeeping-funnel` },
  openGraph: { title: "Halal Tax & Bookkeeping Funnel | AA Digital Network", description: "Client funnel for Muslim CPAs and Sharia-aware accounting firms — local SEO, Google Business Profile and tax-season landing pages.", url: `https://aa-digital-network-website.pages.dev/services/halal-tax-bookkeeping-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-tax-bookkeeping-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

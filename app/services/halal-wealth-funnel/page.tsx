import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Wealth Client Funnel | AA Digital Network",
  description: "Client funnel for independent Muslim financial advisors — local SEO, Google Business Profile, faith-aware landing pages and a consultation-booking funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-wealth-funnel` },
  openGraph: { title: "Halal Wealth Client Funnel | AA Digital Network", description: "Client funnel for independent Muslim financial advisors — local SEO, Google Business Profile, faith-aware landing pages and a consultation-booking funnel.", url: `https://aa-digital-network-website.pages.dev/services/halal-wealth-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-wealth-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modest Member Funnel | AA Digital Network",
  description: "Member funnel for women-only and Muslim-friendly fitness studios — local SEO, Google Business Profile and privacy-first landing pages.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/modest-member-funnel` },
  openGraph: { title: "Modest Member Funnel | AA Digital Network", description: "Member funnel for women-only and Muslim-friendly fitness studios — local SEO, Google Business Profile and privacy-first landing pages.", url: `https://aa-digital-network-website.pages.dev/services/modest-member-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("modest-member-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

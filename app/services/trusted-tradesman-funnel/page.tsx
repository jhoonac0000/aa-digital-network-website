import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted Tradesman Funnel | AA Digital Network",
  description: "Local booking funnel for Muslim-owned plumbers, HVAC, electricians and handymen — local SEO, Google Business Profile, faith-aware pages and a missed-call rescue funnel that turns emergency searches into booked jobs.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/trusted-tradesman-funnel` },
  openGraph: { title: "Trusted Tradesman Funnel | AA Digital Network", description: "Local booking funnel for Muslim-owned plumbers, HVAC, electricians and handymen — local SEO, Google Business Profile, faith-aware pages and a missed-call rescue funnel that turns emergency searches into booked jobs.", url: `https://aa-digital-network-website.pages.dev/services/trusted-tradesman-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("trusted-tradesman-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

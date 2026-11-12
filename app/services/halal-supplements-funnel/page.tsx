import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Supplements Subscription Funnel | AA Digital Network",
  description: "Subscription funnel for small halal supplement and vitamin brands — local SEO, Google Business Profile, certification-story pages and a Subscribe & Save trial funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-supplements-funnel` },
  openGraph: { title: "Halal Supplements Subscription Funnel | AA Digital Network", description: "Subscription funnel for small halal supplement and vitamin brands — local SEO, Google Business Profile, certification-story pages and a Subscribe & Save trial funnel.", url: `https://aa-digital-network-website.pages.dev/services/halal-supplements-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-supplements-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

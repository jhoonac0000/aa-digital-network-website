import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Meat Box Subscription Funnel | AA Digital Network",
  description: "Subscription funnel for halal meat delivery brands — SEO, build-your-own-box pages, a trial-box offer and Subscribe & Save that turn searches into monthly subscribers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-meat-box-subscription-funnel` },
  openGraph: { title: "Halal Meat Box Subscription Funnel | AA Digital Network", description: "Subscription funnel for halal meat delivery brands — SEO, build-your-own-box pages, a trial-box offer and Subscribe & Save that turn searches into monthly subscribers.", url: `https://aa-digital-network-website.pages.dev/services/halal-meat-box-subscription-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-meat-box-subscription-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

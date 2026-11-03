import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Beauty Sales Funnel | AA Digital Network",
  description: "Done-for-you sales funnel for small halal skincare and beauty brands — search, product pages, monthly short videos and repeat-purchase reminders. Free audit.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-beauty-sales-funnel` },
  openGraph: { title: "Halal Beauty Sales Funnel | AA Digital Network", description: "Done-for-you sales funnel for small halal skincare and beauty brands — search, product pages, monthly short videos and repeat-purchase reminders. Free audit.", url: `https://aa-digital-network-website.pages.dev/services/halal-beauty-sales-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-beauty-sales-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

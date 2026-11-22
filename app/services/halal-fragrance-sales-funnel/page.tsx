import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Fragrance Sales Funnel | AA Digital Network",
  description: "Sales funnel for halal perfume and attar brands — SEO, discovery-set and gift pages, abandoned-cart flows and Ramadan campaigns that turn searches into orders.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-fragrance-sales-funnel` },
  openGraph: { title: "Halal Fragrance Sales Funnel | AA Digital Network", description: "Sales funnel for halal perfume and attar brands — SEO, discovery-set and gift pages, abandoned-cart flows and Ramadan campaigns that turn searches into orders.", url: `https://aa-digital-network-website.pages.dev/services/halal-fragrance-sales-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-fragrance-sales-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

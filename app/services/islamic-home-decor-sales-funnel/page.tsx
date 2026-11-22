import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Home Decor Sales Funnel | AA Digital Network",
  description: "Sales funnel for Islamic home decor brands — SEO, gift-guide and bundle pages, abandoned-cart flows and Ramadan campaigns that turn searches into orders.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/islamic-home-decor-sales-funnel` },
  openGraph: { title: "Islamic Home Decor Sales Funnel | AA Digital Network", description: "Sales funnel for Islamic home decor brands — SEO, gift-guide and bundle pages, abandoned-cart flows and Ramadan campaigns that turn searches into orders.", url: `https://aa-digital-network-website.pages.dev/services/islamic-home-decor-sales-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("islamic-home-decor-sales-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

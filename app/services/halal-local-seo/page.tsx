import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Local SEO | AA Digital Network",
  description: "Done-for-you Google Business Profile management, local SEO and review replies for halal restaurants, butcheries and grocery stores. $249–$399/month.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/halal-local-seo` },
  openGraph: { title: "Halal Local SEO | AA Digital Network", description: "Done-for-you Google Business Profile management, local SEO and review replies for halal restaurants, butcheries and grocery stores. $249–$399/month.", url: `https://aa-digital-network-website.pages.dev/services/halal-local-seo`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("halal-local-seo")!;

export default function Page() {
  return <ServicePage service={service} />;
}

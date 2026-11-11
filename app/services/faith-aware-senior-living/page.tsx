import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Aware Senior Living Funnel | AA Digital Network",
  description: "Faith-aware inquiry funnel for Muslim-friendly senior living communities — local SEO, Google Business Profile and a tour-booking funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/faith-aware-senior-living` },
  openGraph: { title: "Faith-Aware Senior Living Funnel | AA Digital Network", description: "Faith-aware inquiry funnel for Muslim-friendly senior living communities — local SEO, Google Business Profile and a tour-booking funnel.", url: `https://aa-digital-network-website.pages.dev/services/faith-aware-senior-living`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("faith-aware-senior-living")!;

export default function Page() {
  return <ServicePage service={service} />;
}

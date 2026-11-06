import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Janaza Visibility Retainer | AA Digital Network",
  description: "Local visibility for Muslim funeral homes, Islamic cemeteries and masjid janaza committees — Google Business Profile, local SEO and a 24/7 WhatsApp emergency funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/janaza-visibility` },
  openGraph: { title: "Janaza Visibility Retainer | AA Digital Network", description: "Local visibility for Muslim funeral homes, Islamic cemeteries and masjid janaza committees — Google Business Profile, local SEO and a 24/7 WhatsApp emergency funnel.", url: `https://aa-digital-network-website.pages.dev/services/janaza-visibility`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("janaza-visibility")!;

export default function Page() {
  return <ServicePage service={service} />;
}

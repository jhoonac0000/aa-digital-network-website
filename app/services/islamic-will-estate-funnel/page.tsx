import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Will & Estate Lead Funnel | AA Digital Network",
  description: "Lead funnel for estate attorneys and Islamic-will services — local SEO, a Faraid-calculator lead magnet and dignified videos that turn searches into consultations.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/islamic-will-estate-funnel` },
  openGraph: { title: "Islamic Will & Estate Lead Funnel | AA Digital Network", description: "Lead funnel for estate attorneys and Islamic-will services — local SEO, a Faraid-calculator lead magnet and dignified videos that turn searches into consultations.", url: `https://aa-digital-network-website.pages.dev/services/islamic-will-estate-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("islamic-will-estate-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

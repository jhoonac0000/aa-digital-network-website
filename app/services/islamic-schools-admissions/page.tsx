import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Schools Admissions Funnel | AA Digital Network",
  description: "Enrollment landing pages, virtual tour videos and a WhatsApp inquiry funnel for private Islamic schools — so open seats become enrolled families.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/islamic-schools-admissions` },
  openGraph: { title: "Islamic Schools Admissions Funnel | AA Digital Network", description: "Enrollment landing pages, virtual tour videos and a WhatsApp inquiry funnel for private Islamic schools — so open seats become enrolled families.", url: `https://aa-digital-network-website.pages.dev/services/islamic-schools-admissions`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("islamic-schools-admissions")!;

export default function Page() {
  return <ServicePage service={service} />;
}

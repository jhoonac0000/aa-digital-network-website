import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith-Sensitive Therapist Funnel | AA Digital Network",
  description: "Client funnel for Muslim therapists — local SEO, Google Business Profile, faith-sensitive landing pages and a private consultation-booking funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/muslim-therapist-funnel` },
  openGraph: { title: "Faith-Sensitive Therapist Funnel | AA Digital Network", description: "Client funnel for Muslim therapists — local SEO, Google Business Profile, faith-sensitive landing pages and a private consultation-booking funnel.", url: `https://aa-digital-network-website.pages.dev/services/muslim-therapist-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("muslim-therapist-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

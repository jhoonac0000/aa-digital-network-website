import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camp Enrollment Funnel | AA Digital Network",
  description: "Enrollment funnel for Islamic summer camps — local SEO, faith-aware landing pages, registration and waitlist booking that turn searches into filled seats.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/camp-enrollment-funnel` },
  openGraph: { title: "Camp Enrollment Funnel | AA Digital Network", description: "Enrollment funnel for Islamic summer camps — local SEO, faith-aware landing pages, registration and waitlist booking that turn searches into filled seats.", url: `https://aa-digital-network-website.pages.dev/services/camp-enrollment-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("camp-enrollment-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

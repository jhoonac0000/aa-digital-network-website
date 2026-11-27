import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutoring Enrollment Funnel | AA Digital Network",
  description: "Enrollment funnel for Muslim tutoring centers and SAT/ACT academies — local SEO, trial-lesson and diagnostic-test booking that turn searches into students.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/tutoring-enrollment-funnel` },
  openGraph: { title: "Tutoring Enrollment Funnel | AA Digital Network", description: "Enrollment funnel for Muslim tutoring centers and SAT/ACT academies — local SEO, trial-lesson and diagnostic-test booking that turn searches into students.", url: `https://aa-digital-network-website.pages.dev/services/tutoring-enrollment-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("tutoring-enrollment-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

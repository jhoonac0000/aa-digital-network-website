import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homeschool Enrollment Funnel | AA Digital Network",
  description: "Enrollment funnel for Muslim homeschool curriculum providers — SEO, trial-class booking and sample-lesson videos that turn parent searches into enrolled families.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/homeschool-enrollment-funnel` },
  openGraph: { title: "Homeschool Enrollment Funnel | AA Digital Network", description: "Enrollment funnel for Muslim homeschool curriculum providers — SEO, trial-class booking and sample-lesson videos that turn parent searches into enrolled families.", url: `https://aa-digital-network-website.pages.dev/services/homeschool-enrollment-funnel`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("homeschool-enrollment-funnel")!;

export default function Page() {
  return <ServicePage service={service} />;
}

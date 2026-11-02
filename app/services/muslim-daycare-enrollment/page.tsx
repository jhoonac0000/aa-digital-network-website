import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muslim Daycare Enrollment Funnel | AA Digital Network",
  description: "Done-for-you enrollment funnel for Muslim daycares and Islamic preschools — local search, faith-aware pages and tour bookings. Visibility audit on WhatsApp.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/muslim-daycare-enrollment` },
  openGraph: { title: "Muslim Daycare Enrollment Funnel | AA Digital Network", description: "Done-for-you enrollment funnel for Muslim daycares and Islamic preschools — local search, faith-aware pages and tour bookings. Visibility audit on WhatsApp.", url: `https://aa-digital-network-website.pages.dev/services/muslim-daycare-enrollment`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("muslim-daycare-enrollment")!;

export default function Page() {
  return <ServicePage service={service} />;
}

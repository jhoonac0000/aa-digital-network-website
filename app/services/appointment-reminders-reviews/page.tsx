import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointment Reminders & Review Requests | AA Digital Network",
  description: "Automatic appointment reminders that cut no-shows, plus a polite Google review request after every visit. Set up once, running on its own. Free audit.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/appointment-reminders-reviews` },
  openGraph: { title: "Appointment Reminders & Review Requests | AA Digital Network", description: "Automatic appointment reminders that cut no-shows, plus a polite Google review request after every visit. Set up once, running on its own. Free audit.", url: `https://aa-digital-network-website.pages.dev/services/appointment-reminders-reviews`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("appointment-reminders-reviews")!;

export default function Page() {
  return <ServicePage service={service} />;
}

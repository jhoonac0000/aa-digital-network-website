import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Lead Response & Follow-Up Automation | AA Digital Network",
  description: "AI automation that replies to new enquiries in about a minute, alerts you instantly and follows up until the customer answers. Free audit on WhatsApp.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/instant-lead-response` },
  openGraph: { title: "Instant Lead Response & Follow-Up Automation | AA Digital Network", description: "AI automation that replies to new enquiries in about a minute, alerts you instantly and follows up until the customer answers. Free audit on WhatsApp.", url: `https://aa-digital-network-website.pages.dev/services/instant-lead-response`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("instant-lead-response")!;

export default function Page() {
  return <ServicePage service={service} />;
}

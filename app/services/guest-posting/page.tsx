import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Posting & Backlinks | AA Digital Network",
  description: "Real guest posts on real sites — original articles that earn backlinks and referral traffic. Message us on WhatsApp for a free quote — no obligation.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/services/guest-posting` },
  openGraph: { title: "Guest Posting & Backlinks | AA Digital Network", description: "Real guest posts on real sites — original articles that earn backlinks and referral traffic. Message us on WhatsApp for a free quote — no obligation.", url: `https://aa-digital-network.vercel.app/services/guest-posting`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("guest-posting")!;

export default function Page() {
  return <ServicePage service={service} />;
}

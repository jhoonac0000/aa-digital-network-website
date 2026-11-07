import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GBP Fix + Review System | AA Digital Network",
  description: "Your Google Business Profile fixed once — categories, hours, photos, Q&A and posts — plus a QR review system for real reviews. $149–$299 after a free scorecard.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/gbp-fix-review-system` },
  openGraph: { title: "GBP Fix + Review System | AA Digital Network", description: "Your Google Business Profile fixed once — categories, hours, photos, Q&A and posts — plus a QR review system for real reviews. $149–$299 after a free scorecard.", url: `https://aa-digital-network-website.pages.dev/services/gbp-fix-review-system`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("gbp-fix-review-system")!;

export default function Page() {
  return <ServicePage service={service} />;
}

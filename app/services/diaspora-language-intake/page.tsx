import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diaspora-Language Intake Funnel | AA Digital Network",
  description: "Arabic, Urdu and Bengali landing pages and WhatsApp intake for US and UK immigration lawyers — turning diaspora searches into qualified case enquiries.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/services/diaspora-language-intake` },
  openGraph: { title: "Diaspora-Language Intake Funnel | AA Digital Network", description: "Arabic, Urdu and Bengali landing pages and WhatsApp intake for US and UK immigration lawyers — turning diaspora searches into qualified case enquiries.", url: `https://aa-digital-network-website.pages.dev/services/diaspora-language-intake`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("diaspora-language-intake")!;

export default function Page() {
  return <ServicePage service={service} />;
}

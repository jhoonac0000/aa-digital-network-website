import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12 Email Deliverability Checks | AA Digital Network",
  description: "A practical pre-send deliverability checklist: authentication, list hygiene, warm-up, content and the five-minute test — run it before every campaign.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/email-deliverability-checklist-before-your-next-campaign` },
  openGraph: { title: "12 Email Deliverability Checks | AA Digital Network", description: "A practical pre-send deliverability checklist: authentication, list hygiene, warm-up, content and the five-minute test — run it before every campaign.", url: `https://aa-digital-network-website.pages.dev/blog/email-deliverability-checklist-before-your-next-campaign`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/email-deliverability-checklist-before-your-next-campaign.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("email-deliverability-checklist-before-your-next-campaign")!;

export default function Page() {
  return <ArticleView article={article} />;
}

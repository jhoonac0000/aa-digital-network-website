import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Deliverability Checklist: 12 Checks Before Your Next Campaign | AA Digital Network",
  description: "A practical pre-send checklist: authentication, list hygiene, content and volume — run it before every campaign, not after it fails.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/blog/email-deliverability-checklist-before-your-next-campaign` },
  openGraph: { title: "Email Deliverability Checklist: 12 Checks Before Your Next Campaign | AA Digital Network", description: "A practical pre-send checklist: authentication, list hygiene, content and volume — run it before every campaign, not after it fails.", url: `https://aa-digital-network.vercel.app/blog/email-deliverability-checklist-before-your-next-campaign`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("email-deliverability-checklist-before-your-next-campaign")!;

export default function Page() {
  return <ArticleView article={article} />;
}

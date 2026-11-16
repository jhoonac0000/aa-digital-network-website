import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Families Find a Tradesman They Can Trust | AA Digital Network",
  description: "Two in three emergency calls go unanswered — yet most Muslim-owned contractors are invisible on Google. Here is the funnel that puts you first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-families-find-a-tradesman-they-trust` },
  openGraph: { title: "How Muslim Families Find a Tradesman They Can Trust | AA Digital Network", description: "Two in three emergency calls go unanswered — yet most Muslim-owned contractors are invisible on Google. Here is the funnel that puts you first.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-families-find-a-tradesman-they-trust`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-families-find-a-tradesman-they-trust.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-families-find-a-tradesman-they-trust")!;

export default function Page() {
  return <ArticleView article={article} />;
}

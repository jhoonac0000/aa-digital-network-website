import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Home-Care Agencies Get Found First | AA Digital Network",
  description: "A typical home-care client is worth about $18,200 in revenue over six months — yet most Muslim home-care agencies are invisible on Google.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-home-care-agencies-reach-families-first` },
  openGraph: { title: "How Muslim Home-Care Agencies Get Found First | AA Digital Network", description: "A typical home-care client is worth about $18,200 in revenue over six months — yet most Muslim home-care agencies are invisible on Google.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-home-care-agencies-reach-families-first`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-home-care-agencies-reach-families-first.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-home-care-agencies-reach-families-first")!;

export default function Page() {
  return <ArticleView article={article} />;
}

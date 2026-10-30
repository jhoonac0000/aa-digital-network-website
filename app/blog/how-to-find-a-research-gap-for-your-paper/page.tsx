import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find a Research Gap for Your Paper | AA Digital Network",
  description: "A research gap is not just an unstudied topic — it is a specific, defensible opening in the literature. Here is how to find one honestly.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-to-find-a-research-gap-for-your-paper` },
  openGraph: { title: "How to Find a Research Gap for Your Paper | AA Digital Network", description: "A research gap is not just an unstudied topic — it is a specific, defensible opening in the literature. Here is how to find one honestly.", url: `https://aa-digital-network-website.pages.dev/blog/how-to-find-a-research-gap-for-your-paper`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-to-find-a-research-gap-for-your-paper")!;

export default function Page() {
  return <ArticleView article={article} />;
}

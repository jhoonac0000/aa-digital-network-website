import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Halal Supplement Brands Win Subscribers | AA Digital Network",
  description: "Halal supplements are forecast to grow from $6.25B to $11.03B by 2032 — yet most small brands are invisible on Google. The funnel that puts you first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-halal-supplement-brands-win-subscribe-and-save-customers` },
  openGraph: { title: "How Halal Supplement Brands Win Subscribers | AA Digital Network", description: "Halal supplements are forecast to grow from $6.25B to $11.03B by 2032 — yet most small brands are invisible on Google. The funnel that puts you first.", url: `https://aa-digital-network-website.pages.dev/blog/how-halal-supplement-brands-win-subscribe-and-save-customers`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-halal-supplement-brands-win-subscribe-and-save-customers.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-halal-supplement-brands-win-subscribe-and-save-customers")!;

export default function Page() {
  return <ArticleView article={article} />;
}

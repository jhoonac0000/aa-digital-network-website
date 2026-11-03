import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Halal Beauty Brands Get More Sales | AA Digital Network",
  description: "Halal beauty brands: get found in halal skincare searches, tell your certification story properly, and turn one-time buyers into refill customers, step by step.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-halal-beauty-brands-get-more-sales` },
  openGraph: { title: "How Halal Beauty Brands Get More Sales | AA Digital Network", description: "Halal beauty brands: get found in halal skincare searches, tell your certification story properly, and turn one-time buyers into refill customers, step by step.", url: `https://aa-digital-network-website.pages.dev/blog/how-halal-beauty-brands-get-more-sales`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-halal-beauty-brands-get-more-sales.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-halal-beauty-brands-get-more-sales")!;

export default function Page() {
  return <ArticleView article={article} />;
}

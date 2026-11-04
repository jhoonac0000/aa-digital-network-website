import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Halal Food Businesses Get Found First on Google | AA Digital Network",
  description: "Your customers search for halal food every day — and eat at the businesses Google shows first. The practical system: profile, local pages, reviews.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-halal-food-businesses-get-found-first` },
  openGraph: { title: "How Halal Food Businesses Get Found First on Google | AA Digital Network", description: "Your customers search for halal food every day — and eat at the businesses Google shows first. The practical system: profile, local pages, reviews.", url: `https://aa-digital-network-website.pages.dev/blog/how-halal-food-businesses-get-found-first`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-halal-food-businesses-get-found-first.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-halal-food-businesses-get-found-first")!;

export default function Page() {
  return <ArticleView article={article} />;
}

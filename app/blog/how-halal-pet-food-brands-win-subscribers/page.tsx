import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Halal Pet Food Brands Win Subscribers | AA Digital Network",
  description: "Muslim pet owners search 'halal cat food' daily — yet most halal pet brands have no subscription funnel. Here is the one that turns searches into subscribers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-halal-pet-food-brands-win-subscribers` },
  openGraph: { title: "How Halal Pet Food Brands Win Subscribers | AA Digital Network", description: "Muslim pet owners search 'halal cat food' daily — yet most halal pet brands have no subscription funnel. Here is the one that turns searches into subscribers.", url: `https://aa-digital-network-website.pages.dev/blog/how-halal-pet-food-brands-win-subscribers`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-halal-pet-food-brands-win-subscribers.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-halal-pet-food-brands-win-subscribers")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Halal Meal-Prep Brands Win Weekly Subscribers | AA Digital Network",
  description: "The halal meal kits market is forecast to grow from $2.4B to $6.0B by 2033 — yet most small halal meal-prep brands are invisible on Google when families search. Here is the funnel that puts you first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-halal-meal-prep-brands-win-weekly-subscribers` },
  openGraph: { title: "How Halal Meal-Prep Brands Win Weekly Subscribers | AA Digital Network", description: "The halal meal kits market is forecast to grow from $2.4B to $6.0B by 2033 — yet most small halal meal-prep brands are invisible on Google when families search. Here is the funnel that puts you first.", url: `https://aa-digital-network-website.pages.dev/blog/how-halal-meal-prep-brands-win-weekly-subscribers`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-halal-meal-prep-brands-win-weekly-subscribers.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-halal-meal-prep-brands-win-weekly-subscribers")!;

export default function Page() {
  return <ArticleView article={article} />;
}

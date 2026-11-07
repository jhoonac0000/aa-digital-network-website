import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Local Businesses Lose Customers on Google | AA Digital Network",
  description: "Most local customers are won or lost on your Google profile, not your premises. What we check, what we fix, and the review system we set up.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/why-local-businesses-lose-customers-on-google` },
  openGraph: { title: "Why Local Businesses Lose Customers on Google | AA Digital Network", description: "Most local customers are won or lost on your Google profile, not your premises. What we check, what we fix, and the review system we set up.", url: `https://aa-digital-network-website.pages.dev/blog/why-local-businesses-lose-customers-on-google`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/why-local-businesses-lose-customers-on-google.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("why-local-businesses-lose-customers-on-google")!;

export default function Page() {
  return <ArticleView article={article} />;
}

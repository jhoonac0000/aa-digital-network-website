import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Car Dealers Win Halal Buyers | AA Digital Network",
  description: "Muslim buyers search 'halal car financing' — yet most Muslim-owned dealerships never answer it. Here is the funnel that turns searches into buyers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-car-dealers-win-halal-buyers` },
  openGraph: { title: "How Muslim Car Dealers Win Halal Buyers | AA Digital Network", description: "Muslim buyers search 'halal car financing' — yet most Muslim-owned dealerships never answer it. Here is the funnel that turns searches into buyers.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-car-dealers-win-halal-buyers`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-car-dealers-win-halal-buyers.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-car-dealers-win-halal-buyers")!;

export default function Page() {
  return <ArticleView article={article} />;
}

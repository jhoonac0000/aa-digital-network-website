import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Halal Perfume Brands Win More Orders | AA Digital Network",
  description: "Shoppers search 'halal perfume' and 'alcohol-free attar' daily — yet most fragrance brands have no funnel. Here's the funnel that turns searches into orders.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-halal-perfume-brands-win-more-orders` },
  openGraph: { title: "How Halal Perfume Brands Win More Orders | AA Digital Network", description: "Shoppers search 'halal perfume' and 'alcohol-free attar' daily — yet most fragrance brands have no funnel. Here's the funnel that turns searches into orders.", url: `https://aa-digital-network-website.pages.dev/blog/how-halal-perfume-brands-win-more-orders`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-halal-perfume-brands-win-more-orders.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-halal-perfume-brands-win-more-orders")!;

export default function Page() {
  return <ArticleView article={article} />;
}

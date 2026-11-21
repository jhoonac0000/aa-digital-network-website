import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Islamic Home Decor Brands Win More Orders | AA Digital Network",
  description: "Shoppers search 'Ramadan decor' from December — yet most Islamic decor brands have no funnel. Here is the one that turns searches into orders.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-islamic-home-decor-brands-win-more-orders` },
  openGraph: { title: "How Islamic Home Decor Brands Win More Orders | AA Digital Network", description: "Shoppers search 'Ramadan decor' from December — yet most Islamic decor brands have no funnel. Here is the one that turns searches into orders.", url: `https://aa-digital-network-website.pages.dev/blog/how-islamic-home-decor-brands-win-more-orders`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-islamic-home-decor-brands-win-more-orders.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-islamic-home-decor-brands-win-more-orders")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Umrah Travel Agencies Win More Bookings | AA Digital Network",
  description: "More than 18 million pilgrims now travel for Umrah from abroad — yet most small agencies are invisible on Google.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-umrah-travel-agencies-win-more-bookings` },
  openGraph: { title: "How Umrah Travel Agencies Win More Bookings | AA Digital Network", description: "More than 18 million pilgrims now travel for Umrah from abroad — yet most small agencies are invisible on Google.", url: `https://aa-digital-network-website.pages.dev/blog/how-umrah-travel-agencies-win-more-bookings`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-umrah-travel-agencies-win-more-bookings.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-umrah-travel-agencies-win-more-bookings")!;

export default function Page() {
  return <ArticleView article={article} />;
}

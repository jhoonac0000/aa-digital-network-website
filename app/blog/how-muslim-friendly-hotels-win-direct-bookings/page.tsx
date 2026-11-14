import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim-Friendly Hotels Win Direct Bookings | AA Digital Network",
  description: "OTA commission runs 15 to 25 percent — yet most Muslim-friendly hotels stay invisible to families. The funnel that turns searches into direct bookings.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-friendly-hotels-win-direct-bookings` },
  openGraph: { title: "How Muslim-Friendly Hotels Win Direct Bookings | AA Digital Network", description: "OTA commission runs 15 to 25 percent — yet most Muslim-friendly hotels stay invisible to families. The funnel that turns searches into direct bookings.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-friendly-hotels-win-direct-bookings`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-friendly-hotels-win-direct-bookings.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-friendly-hotels-win-direct-bookings")!;

export default function Page() {
  return <ArticleView article={article} />;
}

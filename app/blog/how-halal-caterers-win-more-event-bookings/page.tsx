import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Halal Caterers Win More Event Bookings | AA Digital Network",
  description: "The average US wedding catering bill is about $80 a person — yet most halal caterers stay invisible to families. The funnel that turns quotes into tastings and events.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-halal-caterers-win-more-event-bookings` },
  openGraph: { title: "How Halal Caterers Win More Event Bookings | AA Digital Network", description: "The average US wedding catering bill is about $80 a person — yet most halal caterers stay invisible to families. The funnel that turns quotes into tastings and events.", url: `https://aa-digital-network-website.pages.dev/blog/how-halal-caterers-win-more-event-bookings`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-halal-caterers-win-more-event-bookings.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-halal-caterers-win-more-event-bookings")!;

export default function Page() {
  return <ArticleView article={article} />;
}

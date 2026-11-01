import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Wedding Planners Get More Bookings | AA Digital Network",
  description: "Muslim wedding planners: get found on Google, answer the faith questions couples ask, reply first, and turn searches into booked consultations, step by step.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-wedding-planners-get-more-bookings` },
  openGraph: { title: "How Muslim Wedding Planners Get More Bookings | AA Digital Network", description: "Muslim wedding planners: get found on Google, answer the faith questions couples ask, reply first, and turn searches into booked consultations, step by step.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-wedding-planners-get-more-bookings`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-wedding-planners-get-more-bookings.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-wedding-planners-get-more-bookings")!;

export default function Page() {
  return <ArticleView article={article} />;
}

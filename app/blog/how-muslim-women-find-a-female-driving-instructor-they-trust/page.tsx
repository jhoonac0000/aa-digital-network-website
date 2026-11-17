import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Female Driving Instructor | AA Digital Network",
  description: "Muslim women message two or three driving schools in one week — yet most women-only schools are invisible on Google. Here is the funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-women-find-a-female-driving-instructor-they-trust` },
  openGraph: { title: "Find a Female Driving Instructor | AA Digital Network", description: "Muslim women message two or three driving schools in one week — yet most women-only schools are invisible on Google. Here is the funnel.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-women-find-a-female-driving-instructor-they-trust`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-women-find-a-female-driving-instructor-they-trust.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-women-find-a-female-driving-instructor-they-trust")!;

export default function Page() {
  return <ArticleView article={article} />;
}

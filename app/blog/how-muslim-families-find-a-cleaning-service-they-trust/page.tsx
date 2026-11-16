import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Families Find a Cleaning Service They Can Trust | AA Digital Network",
  description: "Muslim families message two or three cleaning companies in one week — yet most Muslim-owned cleaners are invisible on Google. Here is the funnel.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-families-find-a-cleaning-service-they-trust` },
  openGraph: { title: "How Muslim Families Find a Cleaning Service They Can Trust | AA Digital Network", description: "Muslim families message two or three cleaning companies in one week — yet most Muslim-owned cleaners are invisible on Google. Here is the funnel.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-families-find-a-cleaning-service-they-trust`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-families-find-a-cleaning-service-they-trust.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-families-find-a-cleaning-service-they-trust")!;

export default function Page() {
  return <ArticleView article={article} />;
}

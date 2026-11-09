import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Financial Advisors Get Found First | AA Digital Network",
  description: "A single $100,000 client is worth roughly $1,000 a year in recurring fees — yet most Muslim advisors are invisible on Google.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-financial-advisors-reach-halal-investors` },
  openGraph: { title: "How Muslim Financial Advisors Get Found First | AA Digital Network", description: "A single $100,000 client is worth roughly $1,000 a year in recurring fees — yet most Muslim advisors are invisible on Google.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-financial-advisors-reach-halal-investors`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-financial-advisors-reach-halal-investors.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-financial-advisors-reach-halal-investors")!;

export default function Page() {
  return <ArticleView article={article} />;
}

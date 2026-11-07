import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Realtors Reach Halal Homebuyers First | AA Digital Network",
  description: "Guidance Residential has financed $12B+ for 45,000 families — yet most Muslim realtors are invisible on Google. Here is the funnel that puts you first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-realtors-reach-halal-homebuyers-first` },
  openGraph: { title: "How Muslim Realtors Reach Halal Homebuyers First | AA Digital Network", description: "Guidance Residential has financed $12B+ for 45,000 families — yet most Muslim realtors are invisible on Google. Here is the funnel that puts you first.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-realtors-reach-halal-homebuyers-first`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-realtors-reach-halal-homebuyers-first.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-realtors-reach-halal-homebuyers-first")!;

export default function Page() {
  return <ArticleView article={article} />;
}

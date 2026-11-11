import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Matchmakers Reach Families First | AA Digital Network",
  description: "Muzz reports 21 million users — yet boutique Muslim matchmakers are invisible on Google when families search. Here is the funnel that puts you first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-matchmakers-reach-families-first` },
  openGraph: { title: "How Muslim Matchmakers Reach Families First | AA Digital Network", description: "Muzz reports 21 million users — yet boutique Muslim matchmakers are invisible on Google when families search. Here is the funnel that puts you first.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-matchmakers-reach-families-first`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-matchmakers-reach-families-first.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-matchmakers-reach-families-first")!;

export default function Page() {
  return <ArticleView article={article} />;
}

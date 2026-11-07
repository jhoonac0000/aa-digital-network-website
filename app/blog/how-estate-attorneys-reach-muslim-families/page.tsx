import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Estate Attorneys Reach Muslim Families | AA Digital Network",
  description: "Only a quarter of Americans have a will — and most Muslim families need one that honours Sharia and state law. Here is the funnel that puts your firm first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-estate-attorneys-reach-muslim-families` },
  openGraph: { title: "How Estate Attorneys Reach Muslim Families | AA Digital Network", description: "Only a quarter of Americans have a will — and most Muslim families need one that honours Sharia and state law. Here is the funnel that puts your firm first.", url: `https://aa-digital-network-website.pages.dev/blog/how-estate-attorneys-reach-muslim-families`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-estate-attorneys-reach-muslim-families.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-estate-attorneys-reach-muslim-families")!;

export default function Page() {
  return <ArticleView article={article} />;
}

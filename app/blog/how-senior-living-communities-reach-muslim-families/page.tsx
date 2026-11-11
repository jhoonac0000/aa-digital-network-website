import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Senior Living Communities Reach Muslim Families First | AA Digital Network",
  description: "The US senior living market is about $76.39 billion in 2026 — yet most Muslim-friendly communities are invisible on Google.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-senior-living-communities-reach-muslim-families` },
  openGraph: { title: "How Senior Living Communities Reach Muslim Families First | AA Digital Network", description: "The US senior living market is about $76.39 billion in 2026 — yet most Muslim-friendly communities are invisible on Google.", url: `https://aa-digital-network-website.pages.dev/blog/how-senior-living-communities-reach-muslim-families`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-senior-living-communities-reach-muslim-families.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-senior-living-communities-reach-muslim-families")!;

export default function Page() {
  return <ArticleView article={article} />;
}

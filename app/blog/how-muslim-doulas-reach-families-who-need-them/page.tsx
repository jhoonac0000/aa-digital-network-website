import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Doulas Reach Families Who Need Them | AA Digital Network",
  description: "The doula market is set to more than double by 2034 — yet Muslim doulas are invisible on Google when mothers search. The funnel that puts you first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-doulas-reach-families-who-need-them` },
  openGraph: { title: "How Muslim Doulas Reach Families Who Need Them | AA Digital Network", description: "The doula market is set to more than double by 2034 — yet Muslim doulas are invisible on Google when mothers search. The funnel that puts you first.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-doulas-reach-families-who-need-them`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-doulas-reach-families-who-need-them.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-doulas-reach-families-who-need-them")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim CPAs Win Clients Before Tax Season | AA Digital Network",
  description: "Tax professionals e-filed 73.9 million individual returns in the 2026 season — yet most Muslim CPAs are invisible on Google when business owners search.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-cpas-win-clients-before-tax-season` },
  openGraph: { title: "How Muslim CPAs Win Clients Before Tax Season | AA Digital Network", description: "Tax professionals e-filed 73.9 million individual returns in the 2026 season — yet most Muslim CPAs are invisible on Google when business owners search.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-cpas-win-clients-before-tax-season`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-cpas-win-clients-before-tax-season.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-cpas-win-clients-before-tax-season")!;

export default function Page() {
  return <ArticleView article={article} />;
}

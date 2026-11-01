import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Prospect Research, Explained | AA Digital Network",
  description: "Prospect research is the unglamorous step before the application — and why some nonprofits win repeatedly. See what good research contains and how to judge it.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/what-grant-prospect-research-looks-like` },
  openGraph: { title: "Grant Prospect Research, Explained | AA Digital Network", description: "Prospect research is the unglamorous step before the application — and why some nonprofits win repeatedly. See what good research contains and how to judge it.", url: `https://aa-digital-network-website.pages.dev/blog/what-grant-prospect-research-looks-like`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/what-grant-prospect-research-looks-like.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("what-grant-prospect-research-looks-like")!;

export default function Page() {
  return <ArticleView article={article} />;
}

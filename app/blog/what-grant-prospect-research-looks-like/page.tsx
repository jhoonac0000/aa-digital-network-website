import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Grant Prospect Research Looks Like (and Why Most Nonprofits Skip It) | AA Digital Network",
  description: "Prospect research is the unglamorous step before the application — and the reason some organisations win repeatedly while others keep missing.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/blog/what-grant-prospect-research-looks-like` },
  openGraph: { title: "What Grant Prospect Research Looks Like (and Why Most Nonprofits Skip It) | AA Digital Network", description: "Prospect research is the unglamorous step before the application — and the reason some organisations win repeatedly while others keep missing.", url: `https://aa-digital-network.vercel.app/blog/what-grant-prospect-research-looks-like`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("what-grant-prospect-research-looks-like")!;

export default function Page() {
  return <ArticleView article={article} />;
}

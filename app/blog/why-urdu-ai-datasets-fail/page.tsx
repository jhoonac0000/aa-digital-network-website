import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Urdu AI Datasets Fail — and What Good Data Looks Like | AA Digital Network",
  description: "Most Urdu AI data is machine-translated, inconsistently scripted, or never checked by a native reader. That is why Urdu features sound wrong.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/blog/why-urdu-ai-datasets-fail` },
  openGraph: { title: "Why Urdu AI Datasets Fail — and What Good Data Looks Like | AA Digital Network", description: "Most Urdu AI data is machine-translated, inconsistently scripted, or never checked by a native reader. That is why Urdu features sound wrong.", url: `https://aa-digital-network.vercel.app/blog/why-urdu-ai-datasets-fail`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("why-urdu-ai-datasets-fail")!;

export default function Page() {
  return <ArticleView article={article} />;
}

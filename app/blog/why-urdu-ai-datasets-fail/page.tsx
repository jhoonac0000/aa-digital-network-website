import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Urdu AI Datasets Fail | AA Digital Network",
  description: "Most Urdu AI data is machine-translated or never checked by a native reader, in inconsistent script. That is why Urdu features sound wrong — and what fixes it.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/why-urdu-ai-datasets-fail` },
  openGraph: { title: "Why Urdu AI Datasets Fail | AA Digital Network", description: "Most Urdu AI data is machine-translated or never checked by a native reader, in inconsistent script. That is why Urdu features sound wrong — and what fixes it.", url: `https://aa-digital-network-website.pages.dev/blog/why-urdu-ai-datasets-fail`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/why-urdu-ai-datasets-fail.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("why-urdu-ai-datasets-fail")!;

export default function Page() {
  return <ArticleView article={article} />;
}

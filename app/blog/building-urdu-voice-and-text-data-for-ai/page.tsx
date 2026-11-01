import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urdu Voice and Text Data for AI | AA Digital Network",
  description: "A practical, step-by-step guide to collecting, transcribing and checking Urdu voice and text data — from the first brief to a dataset you can actually train on.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/building-urdu-voice-and-text-data-for-ai` },
  openGraph: { title: "Urdu Voice and Text Data for AI | AA Digital Network", description: "A practical, step-by-step guide to collecting, transcribing and checking Urdu voice and text data — from the first brief to a dataset you can actually train on.", url: `https://aa-digital-network-website.pages.dev/blog/building-urdu-voice-and-text-data-for-ai`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/building-urdu-voice-and-text-data-for-ai.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("building-urdu-voice-and-text-data-for-ai")!;

export default function Page() {
  return <ArticleView article={article} />;
}

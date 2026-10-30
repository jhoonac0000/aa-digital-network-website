import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Urdu Voice and Text Data for AI: A Practical Guide | AA Digital Network",
  description: "A step-by-step look at collecting, transcribing and checking Urdu data — from the brief to a dataset you can actually train on.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/building-urdu-voice-and-text-data-for-ai` },
  openGraph: { title: "Building Urdu Voice and Text Data for AI: A Practical Guide | AA Digital Network", description: "A step-by-step look at collecting, transcribing and checking Urdu data — from the brief to a dataset you can actually train on.", url: `https://aa-digital-network-website.pages.dev/blog/building-urdu-voice-and-text-data-for-ai`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("building-urdu-voice-and-text-data-for-ai")!;

export default function Page() {
  return <ArticleView article={article} />;
}

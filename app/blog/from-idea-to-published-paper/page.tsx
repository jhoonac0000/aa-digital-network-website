import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Idea to Published Paper | AA Digital Network",
  description: "What happens between a good idea and a submitted paper: the stages, where honest research support helps, and where it must stop. A practical, honest map.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/from-idea-to-published-paper` },
  openGraph: { title: "From Idea to Published Paper | AA Digital Network", description: "What happens between a good idea and a submitted paper: the stages, where honest research support helps, and where it must stop. A practical, honest map.", url: `https://aa-digital-network-website.pages.dev/blog/from-idea-to-published-paper`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/from-idea-to-published-paper.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("from-idea-to-published-paper")!;

export default function Page() {
  return <ArticleView article={article} />;
}

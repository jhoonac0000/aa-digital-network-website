import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Women-Only Salons Fill Every Chair | AA Digital Network",
  description: "Women-only hijab-friendly salons are thriving in New York, Chicago, Detroit and Los Angeles — yet most are invisible on Google when clients search.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-women-only-salons-fill-every-chair` },
  openGraph: { title: "How Women-Only Salons Fill Every Chair | AA Digital Network", description: "Women-only hijab-friendly salons are thriving in New York, Chicago, Detroit and Los Angeles — yet most are invisible on Google when clients search.", url: `https://aa-digital-network-website.pages.dev/blog/how-women-only-salons-fill-every-chair`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-women-only-salons-fill-every-chair.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-women-only-salons-fill-every-chair")!;

export default function Page() {
  return <ArticleView article={article} />;
}

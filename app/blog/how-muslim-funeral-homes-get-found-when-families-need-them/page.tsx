import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Funeral Homes Get Found in a Crisis | AA Digital Network",
  description: "When a family loses someone, they search once — and call the funeral home they can find. Here is the visibility system that makes sure that call reaches you.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-funeral-homes-get-found-when-families-need-them` },
  openGraph: { title: "How Muslim Funeral Homes Get Found in a Crisis | AA Digital Network", description: "When a family loses someone, they search once — and call the funeral home they can find. Here is the visibility system that makes sure that call reaches you.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-funeral-homes-get-found-when-families-need-them`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-funeral-homes-get-found-when-families-need-them.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-funeral-homes-get-found-when-families-need-them")!;

export default function Page() {
  return <ArticleView article={article} />;
}

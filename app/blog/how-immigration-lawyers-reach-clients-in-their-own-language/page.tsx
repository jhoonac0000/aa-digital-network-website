import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Immigration Lawyers Reach Clients in Their Own Language | AA Digital Network",
  description: "A family searching for an immigration lawyer in Arabic, Urdu or Bengali will call the firm that speaks their language. Here is the funnel that makes that firm yours.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-immigration-lawyers-reach-clients-in-their-own-language` },
  openGraph: { title: "How Immigration Lawyers Reach Clients in Their Own Language | AA Digital Network", description: "A family searching for an immigration lawyer in Arabic, Urdu or Bengali will call the firm that speaks their language. Here is the funnel that makes that firm yours.", url: `https://aa-digital-network-website.pages.dev/blog/how-immigration-lawyers-reach-clients-in-their-own-language`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-immigration-lawyers-reach-clients-in-their-own-language.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-immigration-lawyers-reach-clients-in-their-own-language")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Clients in Their Language | AA Digital Network",
  description: "A family searching for an immigration lawyer in Arabic, Urdu or Bengali calls the firm that speaks their language. Here is the funnel that makes it yours.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-immigration-lawyers-reach-clients-in-their-own-language` },
  openGraph: { title: "Immigration Clients in Their Language | AA Digital Network", description: "A family searching for an immigration lawyer in Arabic, Urdu or Bengali calls the firm that speaks their language. Here is the funnel that makes it yours.", url: `https://aa-digital-network-website.pages.dev/blog/how-immigration-lawyers-reach-clients-in-their-own-language`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-immigration-lawyers-reach-clients-in-their-own-language.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-immigration-lawyers-reach-clients-in-their-own-language")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Homeschool Providers Win Enrollments | AA Digital Network",
  description: "Muslim parents compare 3–4 homeschool programs in a week — yet most Islamic providers have no funnel. Here is the one that turns trials into enrollments.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-homeschool-providers-win-enrollments` },
  openGraph: { title: "How Muslim Homeschool Providers Win Enrollments | AA Digital Network", description: "Muslim parents compare 3–4 homeschool programs in a week — yet most Islamic providers have no funnel. Here is the one that turns trials into enrollments.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-homeschool-providers-win-enrollments`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-homeschool-providers-win-enrollments.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-homeschool-providers-win-enrollments")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic School Admissions That Work | AA Digital Network",
  description: "One admission is worth $5,000–$15,000 a year, yet most Islamic schools are marketed by volunteers. Here is the funnel that turns searches into enrolments.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-islamic-schools-fill-every-seat` },
  openGraph: { title: "Islamic School Admissions That Work | AA Digital Network", description: "One admission is worth $5,000–$15,000 a year, yet most Islamic schools are marketed by volunteers. Here is the funnel that turns searches into enrolments.", url: `https://aa-digital-network-website.pages.dev/blog/how-islamic-schools-fill-every-seat`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-islamic-schools-fill-every-seat.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-islamic-schools-fill-every-seat")!;

export default function Page() {
  return <ArticleView article={article} />;
}

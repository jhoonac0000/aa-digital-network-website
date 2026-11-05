import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Islamic Schools Fill Every Seat: The Admissions Funnel That Works | AA Digital Network",
  description: "One admission is worth $5,000 to $15,000 a year, yet most Islamic schools are marketed by volunteers. Here is the admissions funnel that turns searches into enrolled families.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-islamic-schools-fill-every-seat` },
  openGraph: { title: "How Islamic Schools Fill Every Seat: The Admissions Funnel That Works | AA Digital Network", description: "One admission is worth $5,000 to $15,000 a year, yet most Islamic schools are marketed by volunteers. Here is the admissions funnel that turns searches into enrolled families.", url: `https://aa-digital-network-website.pages.dev/blog/how-islamic-schools-fill-every-seat`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-islamic-schools-fill-every-seat.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-islamic-schools-fill-every-seat")!;

export default function Page() {
  return <ArticleView article={article} />;
}

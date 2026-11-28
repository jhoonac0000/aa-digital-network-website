import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Islamic Summer Camps Fill Every Seat Before Registration Closes | AA Digital Network",
  description: "Parents search for Islamic summer camps in December — and the camps that answer first fill first. Here is the funnel that turns searches into registrations.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-islamic-summer-camps-fill-every-seat` },
  openGraph: { title: "How Islamic Summer Camps Fill Every Seat Before Registration Closes | AA Digital Network", description: "Parents search for Islamic summer camps in December — and the camps that answer first fill first. Here is the funnel that turns searches into registrations.", url: `https://aa-digital-network-website.pages.dev/blog/how-islamic-summer-camps-fill-every-seat`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-islamic-summer-camps-fill-every-seat.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-islamic-summer-camps-fill-every-seat")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Small Clinics Win Patients With Short-Form Video | AA Digital Network",
  description: "Patients meet your clinic on video before they ever meet you in person. Twelve Shorts a month, in your clinic's own voice, that turn searches into booked appointments.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-small-clinics-win-patients-with-shorts` },
  openGraph: { title: "How Small Clinics Win Patients With Short-Form Video | AA Digital Network", description: "Patients meet your clinic on video before they ever meet you in person. Twelve Shorts a month, in your clinic's own voice, that turn searches into booked appointments.", url: `https://aa-digital-network-website.pages.dev/blog/how-small-clinics-win-patients-with-shorts`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-small-clinics-win-patients-with-shorts.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-small-clinics-win-patients-with-shorts")!;

export default function Page() {
  return <ArticleView article={article} />;
}

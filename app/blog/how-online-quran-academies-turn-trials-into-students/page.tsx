import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Online Quran Academies Turn Free Trials Into Enrolled Students | AA Digital Network",
  description: "Searches for online Quran learning have risen since 2019 — yet most small academies are invisible when parents search. The funnel that turns trials into students.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-online-quran-academies-turn-trials-into-students` },
  openGraph: { title: "How Online Quran Academies Turn Free Trials Into Enrolled Students | AA Digital Network", description: "Searches for online Quran learning have risen since 2019 — yet most small academies are invisible when parents search. The funnel that turns trials into students.", url: `https://aa-digital-network-website.pages.dev/blog/how-online-quran-academies-turn-trials-into-students`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-online-quran-academies-turn-trials-into-students.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-online-quran-academies-turn-trials-into-students")!;

export default function Page() {
  return <ArticleView article={article} />;
}

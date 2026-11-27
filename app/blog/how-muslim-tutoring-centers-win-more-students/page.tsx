import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Tutoring Centers Win More Students | AA Digital Network",
  description: "Muslim parents search 'SAT prep near me' — yet most Muslim tutoring centers never answer it. Here is the funnel that turns searches into enrollments.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-tutoring-centers-win-more-students` },
  openGraph: { title: "How Muslim Tutoring Centers Win More Students | AA Digital Network", description: "Muslim parents search 'SAT prep near me' — yet most Muslim tutoring centers never answer it. Here is the funnel that turns searches into enrollments.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-tutoring-centers-win-more-students`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-tutoring-centers-win-more-students.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-tutoring-centers-win-more-students")!;

export default function Page() {
  return <ArticleView article={article} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Couples Find a Fertility Clinic | AA Digital Network",
  description: "One IVF cycle costs $12,000 to $30,000 — yet most Muslim-friendly clinics are invisible on Google when couples search. Here is the funnel that puts you first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-couples-find-a-fertility-clinic-they-trust` },
  openGraph: { title: "How Muslim Couples Find a Fertility Clinic | AA Digital Network", description: "One IVF cycle costs $12,000 to $30,000 — yet most Muslim-friendly clinics are invisible on Google when couples search. Here is the funnel that puts you first.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-couples-find-a-fertility-clinic-they-trust`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-couples-find-a-fertility-clinic-they-trust.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-couples-find-a-fertility-clinic-they-trust")!;

export default function Page() {
  return <ArticleView article={article} />;
}

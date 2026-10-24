import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find Grants That Actually Fit Your Nonprofit | AA Digital Network",
  description: "Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, size and priorities before you write a single page.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/blog/how-to-find-grants-that-fit-your-nonprofit` },
  openGraph: { title: "How to Find Grants That Actually Fit Your Nonprofit | AA Digital Network", description: "Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, size and priorities before you write a single page.", url: `https://aa-digital-network.vercel.app/blog/how-to-find-grants-that-fit-your-nonprofit`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-to-find-grants-that-fit-your-nonprofit")!;

export default function Page() {
  return <ArticleView article={article} />;
}

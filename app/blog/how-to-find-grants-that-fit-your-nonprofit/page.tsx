import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Grants That Fit Your Nonprofit | AA Digital Network",
  description: "Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, geography, size and timing before writing a single proposal.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-to-find-grants-that-fit-your-nonprofit` },
  openGraph: { title: "Find Grants That Fit Your Nonprofit | AA Digital Network", description: "Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, geography, size and timing before writing a single proposal.", url: `https://aa-digital-network-website.pages.dev/blog/how-to-find-grants-that-fit-your-nonprofit`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-to-find-grants-that-fit-your-nonprofit.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-to-find-grants-that-fit-your-nonprofit")!;

export default function Page() {
  return <ArticleView article={article} />;
}

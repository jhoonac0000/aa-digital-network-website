import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Families Find a Halal Wedding Venue They Trust | AA Digital Network",
  description: "The venue takes 24–40% of a wedding budget — yet most Muslim-friendly halls are invisible on Google. Here is the funnel that turns searches into tours.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-families-find-a-halal-wedding-venue-they-trust` },
  openGraph: { title: "How Muslim Families Find a Halal Wedding Venue They Trust | AA Digital Network", description: "The venue takes 24–40% of a wedding budget — yet most Muslim-friendly halls are invisible on Google. Here is the funnel that turns searches into tours.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-families-find-a-halal-wedding-venue-they-trust`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-families-find-a-halal-wedding-venue-they-trust.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-families-find-a-halal-wedding-venue-they-trust")!;

export default function Page() {
  return <ArticleView article={article} />;
}

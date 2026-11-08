import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Therapists Get Found First | AA Digital Network",
  description: "A Muslim therapist's next client is searching tonight for a therapist who understands their faith. Here is the funnel that puts your practice first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-therapists-reach-clients-who-need-them` },
  openGraph: { title: "How Muslim Therapists Get Found First | AA Digital Network", description: "A Muslim therapist's next client is searching tonight for a therapist who understands their faith. Here is the funnel that puts your practice first.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-therapists-reach-clients-who-need-them`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-therapists-reach-clients-who-need-them.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-therapists-reach-clients-who-need-them")!;

export default function Page() {
  return <ArticleView article={article} />;
}

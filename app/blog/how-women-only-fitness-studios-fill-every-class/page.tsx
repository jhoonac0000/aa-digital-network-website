import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Women-Only Fitness Studios Fill Every Class | AA Digital Network",
  description: "The women-only gym market was about $5.30 billion in 2025 — yet most Muslim-friendly studios are invisible on Google.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-women-only-fitness-studios-fill-every-class` },
  openGraph: { title: "How Women-Only Fitness Studios Fill Every Class | AA Digital Network", description: "The women-only gym market was about $5.30 billion in 2025 — yet most Muslim-friendly studios are invisible on Google.", url: `https://aa-digital-network-website.pages.dev/blog/how-women-only-fitness-studios-fill-every-class`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-women-only-fitness-studios-fill-every-class.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-women-only-fitness-studios-fill-every-class")!;

export default function Page() {
  return <ArticleView article={article} />;
}

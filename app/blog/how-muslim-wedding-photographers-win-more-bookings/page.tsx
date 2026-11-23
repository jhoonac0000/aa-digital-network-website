import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Muslim Wedding Photographers Win More Bookings | AA Digital Network",
  description: "Muslim families book the first photographer they can find and trust. Here is the funnel that makes it you — faith-aware, private, and built to win bookings.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/how-muslim-wedding-photographers-win-more-bookings` },
  openGraph: { title: "How Muslim Wedding Photographers Win More Bookings | AA Digital Network", description: "Muslim families book the first photographer they can find and trust. Here is the funnel that makes it you — faith-aware, private, and built to win bookings.", url: `https://aa-digital-network-website.pages.dev/blog/how-muslim-wedding-photographers-win-more-bookings`, type: "article", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/how-muslim-wedding-photographers-win-more-bookings.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("how-muslim-wedding-photographers-win-more-bookings")!;

export default function Page() {
  return <ArticleView article={article} />;
}

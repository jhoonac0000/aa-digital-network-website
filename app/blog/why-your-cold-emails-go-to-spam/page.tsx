import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Cold Emails Go to Spam | AA Digital Network",
  description: "Your emails are not being ignored — they are being filtered. Learn why cold emails land in spam — authentication, lists, reputation — and what fixes them.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog/why-your-cold-emails-go-to-spam` },
  openGraph: { title: "Why Your Cold Emails Go to Spam | AA Digital Network", description: "Your emails are not being ignored — they are being filtered. Learn why cold emails land in spam — authentication, lists, reputation — and what fixes them.", url: `https://aa-digital-network-website.pages.dev/blog/why-your-cold-emails-go-to-spam`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/images/blog/why-your-cold-emails-go-to-spam.jpg`] },
};

import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const article = getArticle("why-your-cold-emails-go-to-spam")!;

export default function Page() {
  return <ArticleView article={article} />;
}

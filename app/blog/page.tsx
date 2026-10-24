import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Practical Guides on Websites, Ads & SEO | AA Digital Network",
  description: "Practical guides from AA Digital Network: email deliverability, grant research, Urdu AI data and research support — each linked to the service it covers.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/blog` },
  openGraph: { title: "Blog — Practical Guides on Websites, Ads & SEO | AA Digital Network", description: "Practical guides from AA Digital Network: email deliverability, grant research, Urdu AI data and research support — each linked to the service it covers.", url: `https://aa-digital-network.vercel.app/blog`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="wrap page">
      <h1>Blog</h1>
      <p className="lead">
        Practical guides on the services we offer — written to help first, and linked to the
        service page if you want help with it.
      </p>
      <div className="grid">
          <div className="card" key="why-your-cold-emails-go-to-spam">
            <h3><Link href="/blog/why-your-cold-emails-go-to-spam">Why Your Cold Emails Go to Spam</Link></h3>
            <p>Your emails are not being ignored — they are being filtered. Here are the real reasons cold emails land in spam, and what actually fixes it.</p>
            <p className="small"><Link href="/services/email-deliverability-audit">Related service →</Link></p>
          </div>
          <div className="card" key="email-deliverability-checklist-before-your-next-campaign">
            <h3><Link href="/blog/email-deliverability-checklist-before-your-next-campaign">Email Deliverability Checklist: 12 Checks Before Your Next Campaign</Link></h3>
            <p>A practical pre-send checklist: authentication, list hygiene, content and volume — run it before every campaign, not after it fails.</p>
            <p className="small"><Link href="/services/email-deliverability-audit">Related service →</Link></p>
          </div>
          <div className="card" key="how-to-find-grants-that-fit-your-nonprofit">
            <h3><Link href="/blog/how-to-find-grants-that-fit-your-nonprofit">How to Find Grants That Actually Fit Your Nonprofit</Link></h3>
            <p>Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, size and priorities before you write a single page.</p>
            <p className="small"><Link href="/services/grant-prospect-research">Related service →</Link></p>
          </div>
          <div className="card" key="what-grant-prospect-research-looks-like">
            <h3><Link href="/blog/what-grant-prospect-research-looks-like">What Grant Prospect Research Looks Like (and Why Most Nonprofits Skip It)</Link></h3>
            <p>Prospect research is the unglamorous step before the application — and the reason some organisations win repeatedly while others keep missing.</p>
            <p className="small"><Link href="/services/grant-prospect-research">Related service →</Link></p>
          </div>
          <div className="card" key="why-urdu-ai-datasets-fail">
            <h3><Link href="/blog/why-urdu-ai-datasets-fail">Why Urdu AI Datasets Fail — and What Good Data Looks Like</Link></h3>
            <p>Most Urdu AI data is machine-translated, inconsistently scripted, or never checked by a native reader. That is why Urdu features sound wrong.</p>
            <p className="small"><Link href="/services/urdu-ai-data-studio">Related service →</Link></p>
          </div>
          <div className="card" key="building-urdu-voice-and-text-data-for-ai">
            <h3><Link href="/blog/building-urdu-voice-and-text-data-for-ai">Building Urdu Voice and Text Data for AI: A Practical Guide</Link></h3>
            <p>A step-by-step look at collecting, transcribing and checking Urdu data — from the brief to a dataset you can actually train on.</p>
            <p className="small"><Link href="/services/urdu-ai-data-studio">Related service →</Link></p>
          </div>
          <div className="card" key="how-to-find-a-research-gap-for-your-paper">
            <h3><Link href="/blog/how-to-find-a-research-gap-for-your-paper">How to Find a Research Gap for Your Paper</Link></h3>
            <p>A research gap is not just an unstudied topic — it is a specific, defensible opening in the literature. Here is how to find one honestly.</p>
            <p className="small"><Link href="/services/research-support-services">Related service →</Link></p>
          </div>
          <div className="card" key="from-idea-to-published-paper">
            <h3><Link href="/blog/from-idea-to-published-paper">From Idea to Published Paper: What Research Support Actually Covers</Link></h3>
            <p>What happens between a good idea and a submitted paper — and where honest support helps, versus where it crosses a line.</p>
            <p className="small"><Link href="/services/research-support-services">Related service →</Link></p>
          </div>
      </div>
    </div>
  );
}

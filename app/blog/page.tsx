import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Practical Guides on Websites, Ads & SEO | AA Digital Network",
  description: "Practical guides from AA Digital Network: email deliverability, grant research, Urdu AI data and research support — each linked to the service it covers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog` },
  openGraph: { title: "Blog — Practical Guides on Websites, Ads & SEO | AA Digital Network", description: "Practical guides from AA Digital Network: email deliverability, grant research, Urdu AI data and research support — each linked to the service it covers.", url: `https://aa-digital-network-website.pages.dev/blog`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
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
            <img className="card-img" src="/images/blog/why-your-cold-emails-go-to-spam.jpg" alt="Illustration of cold emails being diverted by a spam filter shield into a junk folder instead of reaching the inbox" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/why-your-cold-emails-go-to-spam">Why Your Cold Emails Go to Spam</Link></h3>
            <p>Your emails are not being ignored — they are being filtered. Here are the real reasons cold emails land in spam, and what actually fixes it.</p>
            <p className="small"><Link href="/services/email-deliverability-audit">Related service →</Link></p>
          </div>
          <div className="card" key="email-deliverability-checklist-before-your-next-campaign">
            <img className="card-img" src="/images/blog/email-deliverability-checklist-before-your-next-campaign.jpg" alt="Illustration of a pre-send email deliverability checklist on a clipboard beside a laptop showing emails marked with green checkmarks" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/email-deliverability-checklist-before-your-next-campaign">Email Deliverability Checklist: 12 Checks Before Your Next Campaign</Link></h3>
            <p>A practical pre-send checklist: authentication, list hygiene, content and volume — run it before every campaign, not after it fails.</p>
            <p className="small"><Link href="/services/email-deliverability-audit">Related service →</Link></p>
          </div>
          <div className="card" key="how-to-find-grants-that-fit-your-nonprofit">
            <img className="card-img" src="/images/blog/how-to-find-grants-that-fit-your-nonprofit.jpg" alt="Illustration of a nonprofit researcher using a magnifying glass to find a grant opportunity card that fits like a puzzle piece" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-to-find-grants-that-fit-your-nonprofit">How to Find Grants That Actually Fit Your Nonprofit</Link></h3>
            <p>Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, size and priorities before you write a single page.</p>
            <p className="small"><Link href="/services/grant-prospect-research">Related service →</Link></p>
          </div>
          <div className="card" key="what-grant-prospect-research-looks-like">
            <img className="card-img" src="/images/blog/what-grant-prospect-research-looks-like.jpg" alt="Illustration of grant prospect research in progress, with a board of connected funder profiles and charts above a researcher's desk" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/what-grant-prospect-research-looks-like">What Grant Prospect Research Looks Like (and Why Most Nonprofits Skip It)</Link></h3>
            <p>Prospect research is the unglamorous step before the application — and the reason some organisations win repeatedly while others keep missing.</p>
            <p className="small"><Link href="/services/grant-prospect-research">Related service →</Link></p>
          </div>
          <div className="card" key="why-urdu-ai-datasets-fail">
            <img className="card-img" src="/images/blog/why-urdu-ai-datasets-fail.jpg" alt="Illustration of flowing Urdu calligraphy breaking apart into fragmented, mismatched digital data tiles with warning highlights" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/why-urdu-ai-datasets-fail">Why Urdu AI Datasets Fail — and What Good Data Looks Like</Link></h3>
            <p>Most Urdu AI data is machine-translated, inconsistently scripted, or never checked by a native reader. That is why Urdu features sound wrong.</p>
            <p className="small"><Link href="/services/urdu-ai-data-studio">Related service →</Link></p>
          </div>
          <div className="card" key="building-urdu-voice-and-text-data-for-ai">
            <img className="card-img" src="/images/blog/building-urdu-voice-and-text-data-for-ai.jpg" alt="Illustration of a speaker recording Urdu voice data into a studio microphone, with the audio waveform flowing into checked transcription lines on a screen" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/building-urdu-voice-and-text-data-for-ai">Building Urdu Voice and Text Data for AI: A Practical Guide</Link></h3>
            <p>A step-by-step look at collecting, transcribing and checking Urdu data — from the brief to a dataset you can actually train on.</p>
            <p className="small"><Link href="/services/urdu-ai-data-studio">Related service →</Link></p>
          </div>
          <div className="card" key="how-to-find-a-research-gap-for-your-paper">
            <img className="card-img" src="/images/blog/how-to-find-a-research-gap-for-your-paper.jpg" alt="Illustration of a researcher reading between tall stacks of academic papers in a library, with warm light falling on the gap between shelves" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-to-find-a-research-gap-for-your-paper">How to Find a Research Gap for Your Paper</Link></h3>
            <p>A research gap is not just an unstudied topic — it is a specific, defensible opening in the literature. Here is how to find one honestly.</p>
            <p className="small"><Link href="/services/research-support-services">Related service →</Link></p>
          </div>
          <div className="card" key="from-idea-to-published-paper">
            <img className="card-img" src="/images/blog/from-idea-to-published-paper.jpg" alt="Illustration of the journey from a first idea in a sketch notebook to manuscript pages, a laptop draft and a finished published journal" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/from-idea-to-published-paper">From Idea to Published Paper: What Research Support Actually Covers</Link></h3>
            <p>What happens between a good idea and a submitted paper — and where honest support helps, versus where it crosses a line.</p>
            <p className="small"><Link href="/services/research-support-services">Related service →</Link></p>
          </div>
          <div className="card" key="how-muslim-wedding-planners-get-more-bookings">
            <img className="card-img" src="/images/blog/how-muslim-wedding-planners-get-more-bookings.jpg" alt="Muslim wedding planner wearing a hijab reviewing new booking enquiries on a tablet inside a decorated walima venue" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-muslim-wedding-planners-get-more-bookings">How Muslim Wedding Planners Get More Bookings: The Funnel, Step by Step</Link></h3>
            <p>Couples book the planner they can find, trust and reach first. Here is the practical funnel — search, faith-aware pages, instant replies — that turns searches into consultations.</p>
            <p className="small"><Link href="/services/halal-wedding-booking">Related service →</Link></p>
          </div>
          <div className="card" key="how-halal-beauty-brands-get-more-sales">
            <img className="card-img" src="/images/blog/how-halal-beauty-brands-get-more-sales.jpg" alt="Small halal beauty brand founder's studio desk with a laptop showing an online store, skincare products lined up for photography, a phone on a tripod and a ring light" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-halal-beauty-brands-get-more-sales">How Halal Beauty Brands Get More Sales: The Funnel, Step by Step</Link></h3>
            <p>Your customers are searching for halal skincare every day — and buying from the brands they can find. Here is the practical funnel — search, product pages, short video and refill reminders — that turns searches into repeat orders.</p>
            <p className="small"><Link href="/services/halal-beauty-sales-funnel">Related service →</Link></p>
          </div>
      </div>
    </div>
  );
}

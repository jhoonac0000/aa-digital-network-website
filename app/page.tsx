import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AA Digital Network — Websites, Ad Videos & SEO That Bring Clients",
  description: "AA Digital Network: websites, ad videos, guest posting, accessibility audits and automation for small businesses. Honest pricing, no fake promises.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev` },
  openGraph: { title: "AA Digital Network — Websites, Ad Videos & SEO That Bring Clients", description: "AA Digital Network: websites, ad videos, guest posting, accessibility audits and automation for small businesses. Honest pricing, no fake promises.", url: `https://aa-digital-network-website.pages.dev`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import Link from "next/link";
import WhatsAppCta from "@/components/WhatsAppCta";
import { WA_DISPLAY } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Websites, videos and SEO that bring you clients — without agency prices</h1>
          <p>
            AA Digital Network builds websites, ad videos, backlinks and automations for small
            businesses in the US, UK, Canada and Australia. Honest work, plain pricing, and a
            WhatsApp reply that is free advice — not a sales pitch.
          </p>
          <div className="cta-row">
            <Link className="btn btn-secondary" href="/work">See Our Work</Link>
            <WhatsAppCta message="Hi AA Digital Network, I would like to discuss a project." />
          </div>
          <p className="trust-strip">
            Live showcase: Noor Islamic Website · 5 demo business sites · 70+ original articles published
          </p>
        </div>
      </section>

      <section className="wrap">
        <h2>Our services</h2>
        <div className="grid">
          <div className="card" key="website-development">
            <h3><Link href="/services/website-development">Website Development</Link></h3>
            <p>Fast, SEO-ready websites for small businesses — built to bring enquiries, not just look good.</p>
          </div>
          <div className="card" key="ad-videos">
            <h3><Link href="/services/ad-videos">Digital Ad Videos</Link></h3>
            <p>Short social media ad videos in Urdu and English that stop the scroll and explain your offer fast.</p>
          </div>
          <div className="card" key="guest-posting">
            <h3><Link href="/services/guest-posting">Guest Posting & Backlinks</Link></h3>
            <p>Real guest posts on real sites — original articles that earn backlinks and referral traffic.</p>
          </div>
          <div className="card" key="ada-accessibility">
            <h3><Link href="/services/ada-accessibility">ADA Accessibility Audits</Link></h3>
            <p>Website accessibility audits and fixes to WCAG 2.2 AA — clearer for every visitor, stronger for your business.</p>
          </div>
          <div className="card" key="medical-billing-leads">
            <h3><Link href="/services/medical-billing-leads">Medical Billing Lead Generation</Link></h3>
            <p>Researched leads for US medical billing services — practices that actually need billing help.</p>
          </div>
          <div className="card" key="automation">
            <h3><Link href="/services/automation">AI Automation</Link></h3>
            <p>Practical AI and workflow automation that answers leads fast, books appointments and removes repetitive work.</p>
          </div>
          <div className="card" key="video-editing">
            <h3><Link href="/services/video-editing">Short-Form Video Editing</Link></h3>
            <p>Reels and Shorts edited to hold attention — clean cuts, captions, hooks and pacing that fit each platform.</p>
          </div>
          <div className="card" key="white-label-seo">
            <h3><Link href="/services/white-label-seo">White-Label SEO</Link></h3>
            <p>SEO done under your agency's brand — reports, content and links your clients see as yours.</p>
          </div>
          <div className="card" key="grant-prospect-research">
            <h3><Link href="/services/grant-prospect-research">Grant Prospect Research<span className="badge-new">New</span></Link></h3>
            <p>A researched shortlist of grants your organisation can actually win — matched to your mission, budget and eligibility.</p>
          </div>
          <div className="card" key="email-deliverability-audit">
            <h3><Link href="/services/email-deliverability-audit">Email Deliverability Audit<span className="badge-new">New</span></Link></h3>
            <p>Find out exactly why your emails land in spam — and get a prioritised fix list to reach the inbox again.</p>
          </div>
          <div className="card" key="urdu-ai-data-studio">
            <h3><Link href="/services/urdu-ai-data-studio">Urdu AI Data Studio<span className="badge-new">New</span></Link></h3>
            <p>Clean, quality-checked Urdu text and audio data for AI teams — built by people who actually read Urdu.</p>
          </div>
          <div className="card" key="research-support-services">
            <h3><Link href="/services/research-support-services">Research Support Services<span className="badge-new">New</span></Link></h3>
            <p>Honest, practical help for researchers — finding the gap, shaping the paper, and getting it submission-ready.</p>
          </div>
        </div>
        <p>
          <Link href="/services">See all services →</Link>
        </p>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Our showcase: Noor Islamic Website</h2>
          <p>
            Noor is our model asset — original content, free tools, and steady Google indexing,
            built with the same approach we use for clients: real content, clean technical setup,
            and no shortcuts.
          </p>
          <ul className="check-list">
            <li>70+ original articles across kids, stories and everyday topics</li>
            <li>Four free tools: Prayer Times, Qibla Compass, Hijri Calendar, Zakat Calculator</li>
            <li>Indexed in Google with a clean, fast static build</li>
          </ul>
          <p>
            <a href="https://islamic-noor-wesbite.vercel.app" target="_blank" rel="noopener noreferrer">
              Visit the live site →
            </a>
          </p>
        </div>
      </section>

      <section className="wrap">
        <h2>How we work</h2>
        <ol className="steps">
          <li><strong>Tell us on WhatsApp</strong><p>Describe what you need in a few lines.</p></li>
          <li><strong>Free quote and direction</strong><p>We reply with a clear quote and an honest take on what will help.</p></li>
          <li><strong>We build</strong><p>You get previews and progress, not silence.</p></li>
          <li><strong>You review, we refine</strong><p>We revise until it feels right, then launch.</p></li>
        </ol>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Free tools we built</h2>
          <p>
            Our tools are proof of skill you can try before you hire us — starting with the four
            Islamic tools on Noor, with general business tools on the way.
          </p>
          <p>
            <Link href="/tools">Browse free tools →</Link>
          </p>
        </div>
      </section>

      <section className="wrap">
        <h2>Books and digital products — coming soon</h2>
        <p>
          Our first products are in production: an Islamic kids book and a Ramadan planner.
          No listings until they are real — see the honest preview on the Books page.
        </p>
        <p>
          <Link href="/books">See what is coming →</Link>
        </p>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Honest, halal, no fake promises</h2>
          <p>
            We do not promise rankings, lawsuit-proofing, or overnight results — because nobody
            honest can. We promise real work, clear prices, and communication you can check.
          </p>
        </div>
      </section>

      <section className="wrap">
        <div className="cta-band">
          <h2>Tell us what you need</h2>
          <p>First reply is free advice, not a sales pitch.</p>
          <WhatsAppCta message="Hi AA Digital Network, I would like to discuss a project." />
          <p className="small">WhatsApp {WA_DISPLAY} · We aim to reply within 24 hours.</p>
        </div>
      </section>
    </>
  );
}

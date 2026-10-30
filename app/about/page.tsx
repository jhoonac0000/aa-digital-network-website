import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AA Digital Network — Honest, Halal, Remote-First",
  description: "About AA Digital Network: a remote-first digital services agency founded by an MPhil IT researcher — honest work, halal income, and clients first.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/about` },
  openGraph: { title: "About AA Digital Network — Honest, Halal, Remote-First", description: "About AA Digital Network: a remote-first digital services agency founded by an MPhil IT researcher — honest work, halal income, and clients first.", url: `https://aa-digital-network-website.pages.dev/about`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="wrap page">
      <h1>About AA Digital Network</h1>
      <p className="lead">
        A small, remote-first agency that builds websites, videos and search presence for
        small businesses — honestly, and at prices small businesses can actually pay.
      </p>
      <h2>Who I am</h2>
      <p>
        I am an MPhil researcher in IT. I started AA Digital Network because I kept seeing
        the same thing: small businesses paying agency prices for work that was outsourced,
        copied, or never delivered — and good people doing honest work with no online
        presence at all.
      </p>
      <p>
        So I build things myself, with the same care I would want as a customer: websites
        that load fast and say clearly what a business does, videos that respect the
        viewer's time, and outreach that is personal instead of spammy. When I do not know
        something, I say so — and when a job is not a fit, I say that too.
      </p>
      <h2>What we believe</h2>
      <ul className="check-list">
        <li>Halal income only: no deceptive marketing, no fake reviews, no shortcuts that harm clients.</li>
        <li>Plain pricing: you know what something costs before you commit.</li>
        <li>No fake promises: no guaranteed rankings, no lawsuit-proof claims, no overnight results.</li>
        <li>Clients first: your business, your brand, your data — always yours.</li>
      </ul>
      <p>
        <Link href="/work">See our work →</Link>
        {" · "}
        <Link href="/contact">Talk to us →</Link>
      </p>
    </div>
  );
}

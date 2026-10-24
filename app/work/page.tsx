import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Live Websites, Demos & Video Samples | AA Digital Network",
  description: "See AA Digital Network's work: the live Noor Islamic Website showcase, five demo business sites, and video samples.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/work` },
  openGraph: { title: "Our Work — Live Websites, Demos & Video Samples | AA Digital Network", description: "See AA Digital Network's work: the live Noor Islamic Website showcase, five demo business sites, and video samples.", url: `https://aa-digital-network.vercel.app/work`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/og.png`] },
};

import Link from "next/link";

const DEMOS = [
  { name: "Ember Spice", desc: "Restaurant demo site", href: "https://rad-bubblegum-3efdfd.netlify.app/#/project/ember-spice" },
  { name: "CarePlus", desc: "Clinic demo site", href: "https://rad-bubblegum-3efdfd.netlify.app/#/project/careplus" },
  { name: "Urban Nest", desc: "Real estate demo site", href: "https://rad-bubblegum-3efdfd.netlify.app/#/project/urban-nest" },
  { name: "Volt Fitness", desc: "Fitness demo site", href: "https://rad-bubblegum-3efdfd.netlify.app/#/project/volt-fitness" },
  { name: "Nexora", desc: "Tech startup demo site", href: "https://rad-bubblegum-3efdfd.netlify.app/#/project/nexora" },
];

export default function WorkPage() {
  return (
    <div className="wrap page">
      <h1>Our work</h1>
      <p className="lead">
        Proof before promises: a live showcase site, five demo business sites, and video work
        you can judge for yourself.
      </p>
      <h2>Showcase: Noor Islamic Website</h2>
      <p>
        Our model asset — 60+ original articles, four free tools, and steady Google indexing,
        built with the same content and technical standard we apply to client work.
      </p>
      <p>
        <a href="https://islamic-noor-wesbite.vercel.app" target="_blank" rel="noopener noreferrer">
          Visit Noor live →
        </a>
      </p>
      <h2>Demo business sites</h2>
      <div className="grid">
        {DEMOS.map((d) => (
          <div className="card" key={d.name}>
            <h3>
              <a href={d.href} target="_blank" rel="noopener noreferrer">{d.name}</a>
            </h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
      <h2>Video samples</h2>
      <p>
        Ad video and short-form editing samples are shared on request over WhatsApp — tell us
        your niche and we will send the closest examples.
      </p>
      <p>
        <Link href="/contact">Ask for samples →</Link>
      </p>
    </div>
  );
}

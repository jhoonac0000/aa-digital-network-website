import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Tools — Built by AA Digital Network",
  description: "Free tools built by AA Digital Network: Prayer Times, Qibla Compass, Hijri Calendar and Zakat Calculator, with general business tools on the way.",
  alternates: { canonical: `https://aa-digital-network.vercel.app/tools` },
  openGraph: { title: "Free AI Tools — Built by AA Digital Network", description: "Free tools built by AA Digital Network: Prayer Times, Qibla Compass, Hijri Calendar and Zakat Calculator, with general business tools on the way.", url: `https://aa-digital-network.vercel.app/tools`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network.vercel.app/icon.svg`] },
};

import Link from "next/link";

const TOOLS = [
  { name: "Prayer Times", desc: "Daily prayer times with an embeddable widget for community sites.", href: "https://islamic-noor-wesbite.vercel.app/tools/prayer-times" },
  { name: "Qibla Compass", desc: "Find the Qibla direction from your location, in the browser.", href: "https://islamic-noor-wesbite.vercel.app/tools/qibla-compass" },
  { name: "Hijri Calendar", desc: "Islamic calendar dates alongside the Gregorian calendar.", href: "https://islamic-noor-wesbite.vercel.app/tools/hijri-calendar" },
  { name: "Zakat Calculator", desc: "A simple, private Zakat calculation that runs entirely in your browser.", href: "https://islamic-noor-wesbite.vercel.app/tools/zakat-calculator" },
];

export default function ToolsPage() {
  return (
    <div className="wrap page">
      <h1>Free tools</h1>
      <p className="lead">
        Tools we built and use ourselves — free, no sign-up, and private by design.
        The four Islamic tools below run on our showcase site Noor; general business tools
        (PDF Toolkit, Resume Builder, Background Remover, YouTube Title Generator) are next.
      </p>
      <div className="grid">
        {TOOLS.map((t) => (
          <div className="card" key={t.name}>
            <h3>
              <a href={t.href} target="_blank" rel="noopener noreferrer">{t.name}</a>
            </h3>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
      <h2>Need a tool built into your website?</h2>
      <p>
        Tools like these can live on your site too — as a traffic magnet and a reason for
        visitors to return. See our website and automation services.
      </p>
      <p>
        <Link href="/services/website-development">Website Development →</Link>
        {" · "}
        <Link href="/services/automation">n8n Automation →</Link>
      </p>
    </div>
  );
}

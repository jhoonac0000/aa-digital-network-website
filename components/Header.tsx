import Link from "next/link";
import { NAV_LINKS, WA_LINK } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">AA</span> Digital Network
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          className="btn btn-wa btn-small header-wa"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
          <span className="wa-cta-text">Chat on WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

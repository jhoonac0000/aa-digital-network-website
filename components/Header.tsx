import Link from "next/link";
import { NAV_LINKS, WA_DISPLAY, WA_LINK } from "@/lib/site";

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
        <a className="btn btn-wa btn-small" href={WA_LINK} target="_blank" rel="noopener noreferrer">
          WhatsApp {WA_DISPLAY}
        </a>
      </div>
    </header>
  );
}

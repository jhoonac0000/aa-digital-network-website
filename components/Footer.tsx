import Link from "next/link";
import { NAV_LINKS, WA_DISPLAY, WA_LINK } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-brand">AA Digital Network</p>
          <p>Websites, videos, SEO and automation for small businesses — built honestly, priced plainly.</p>
          <p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              WhatsApp {WA_DISPLAY}
            </a>
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} AA Digital Network. All content original.</p>
    </footer>
  );
}

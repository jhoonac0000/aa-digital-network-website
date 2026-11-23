"use client";

import { useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type Status = "pass" | "warn" | "fail";

interface CheckResult {
  name: string;
  status: Status;
  points: number;
  max: number;
  detail: string;
}

interface Report {
  url: string;
  score: number;
  checks: CheckResult[];
}

function normalizeUrl(raw: string): URL | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const u = new URL(withScheme);
    if (!u.hostname.includes(".")) return null;
    return u;
  } catch {
    return null;
  }
}

async function fetchHtml(target: string): Promise<string> {
  const encoded = encodeURIComponent(target);
  // Free public relays, tried in turn (the first is retried once — these
  // services are occasionally flaky, and one retry usually gets through).
  const attempts = [
    `https://api.allorigins.win/raw?url=${encoded}`,
    `https://api.codetabs.com/v1/proxy?quest=${encoded}`,
    `https://api.cors.lol/?url=${encoded}`,
    `https://api.allorigins.win/raw?url=${encoded}`,
  ];
  for (const proxyUrl of attempts) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 18000);
      const res = await fetch(proxyUrl, { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) continue;
      const text = await res.text();
      if (text.length > 100 && /<html|<title|<body/i.test(text)) return text;
    } catch {
      // try the next relay
    }
  }
  throw new Error("fetch-failed");
}

function analyse(doc: Document, pageUrl: URL): Report {
  const checks: CheckResult[] = [];
  const add = (name: string, status: Status, points: number, max: number, detail: string) =>
    checks.push({ name, status, points, max, detail });

  // 1. HTTPS
  if (pageUrl.protocol === "https:") {
    add("Secure HTTPS connection", "pass", 8, 8, "This page loads over HTTPS, so browsers show it as secure.");
  } else {
    add("Secure HTTPS connection", "fail", 0, 8, "This address uses plain HTTP. Browsers label it \u201cNot secure\u201d and search engines prefer HTTPS pages.");
  }

  // 2. Title tag
  const title = (doc.title || "").trim();
  if (!title) {
    add("Title tag", "fail", 0, 10, "No title tag found. The title is the headline search engines show for your page — every page needs one.");
  } else if (title.length >= 30 && title.length <= 60) {
    add("Title tag", "pass", 10, 10, `Title found (${title.length} characters): \u201c${title}\u201d — a good length for search results.`);
  } else {
    add("Title tag", "warn", 5, 10, `Title found (${title.length} characters): \u201c${title}\u201d — aim for 30–60 characters so it reads well in search results.`);
  }

  // 3. Meta description
  const desc = (doc.querySelector('meta[name="description"]')?.getAttribute("content") || "").trim();
  if (!desc) {
    add("Meta description", "fail", 0, 10, "No meta description found. Without one, search engines invent the summary shown under your title — often badly.");
  } else if (desc.length >= 120 && desc.length <= 160) {
    add("Meta description", "pass", 10, 10, `Meta description found (${desc.length} characters) — a good length for search results.`);
  } else {
    add("Meta description", "warn", 5, 10, `Meta description found (${desc.length} characters) — aim for 120–160 characters so it is neither cut off nor too thin.`);
  }

  // 4. H1 heading
  const h1Count = doc.querySelectorAll("h1").length;
  if (h1Count === 1) {
    add("One clear H1 heading", "pass", 10, 10, "Exactly one H1 heading — the page's main topic is clear to search engines and readers.");
  } else if (h1Count === 0) {
    add("One clear H1 heading", "fail", 0, 10, "No H1 heading found. Each page should have one H1 that states its main topic.");
  } else {
    add("One clear H1 heading", "warn", 5, 10, `${h1Count} H1 headings found. One clear H1 per page works best — extra H1s blur the page's main topic.`);
  }

  // 5. H2 structure
  const h2Count = doc.querySelectorAll("h2").length;
  if (h2Count >= 2) {
    add("Section headings (H2)", "pass", 6, 6, `${h2Count} H2 headings break the page into clear sections — good for readers and search engines.`);
  } else if (h2Count === 1) {
    add("Section headings (H2)", "warn", 3, 6, "Only one H2 heading. More section headings make longer pages easier to scan and understand.");
  } else {
    add("Section headings (H2)", "fail", 0, 6, "No H2 headings found. Section headings help visitors scan and help search engines map the page's topics.");
  }

  // 6. Image alt text
  const images = Array.from(doc.querySelectorAll("img"));
  if (images.length === 0) {
    add("Image alt text", "warn", 3, 10, "No images found on this page, so there is no alt text to check. Images with honest alt text help accessibility and image search.");
  } else {
    const withAlt = images.filter((img) => img.getAttribute("alt") !== null).length;
    const pct = Math.round((withAlt / images.length) * 100);
    if (pct >= 90) {
      add("Image alt text", "pass", 10, 10, `${withAlt} of ${images.length} images have alt text (${pct}%) — good for accessibility and image search.`);
    } else if (pct >= 50) {
      add("Image alt text", "warn", 5, 10, `${withAlt} of ${images.length} images have alt text (${pct}%). Add a short, honest alt description to every content image.`);
    } else {
      add("Image alt text", "fail", 0, 10, `Only ${withAlt} of ${images.length} images have alt text (${pct}%). Screen readers and search engines cannot tell what the others show.`);
    }
  }

  // 7. Open Graph tags
  const ogProps = ["og:title", "og:description", "og:image"].filter((p) =>
    doc.querySelector(`meta[property="${p}"]`)
  );
  if (ogProps.length === 3) {
    add("Social sharing (Open Graph) tags", "pass", 8, 8, "Open Graph title, description and image are all set — links to this page will preview properly on WhatsApp, Facebook and LinkedIn.");
  } else if (ogProps.length > 0) {
    add("Social sharing (Open Graph) tags", "warn", 4, 8, `Only ${ogProps.length} of the 3 key Open Graph tags are set. Add the missing ones so shared links show a proper title, summary and image.`);
  } else {
    add("Social sharing (Open Graph) tags", "fail", 0, 8, "No Open Graph tags found. When someone shares this page on WhatsApp or Facebook, the preview will be guesswork.");
  }

  // 8. Canonical tag
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href");
  if (canonical) {
    add("Canonical tag", "pass", 6, 6, "A canonical tag tells search engines which address is the official version of this page.");
  } else {
    add("Canonical tag", "warn", 2, 6, "No canonical tag found. Adding one prevents duplicate-address confusion when the page is reachable in more than one way.");
  }

  // 9. Structured data (JSON-LD)
  const ldCount = doc.querySelectorAll('script[type="application/ld+json"]').length;
  if (ldCount >= 1) {
    add("Structured data (for Google & AI search)", "pass", 8, 8, `${ldCount} structured-data block${ldCount > 1 ? "s" : ""} found. This machine-readable summary helps Google and AI search tools understand and cite your page.`);
  } else {
    add("Structured data (for Google & AI search)", "warn", 3, 8, "No structured data (JSON-LD) found. Adding it helps Google and AI search tools understand your business and quote your page accurately.");
  }

  // 10. Word count
  const bodyClone = doc.body ? (doc.body.cloneNode(true) as HTMLElement) : null;
  if (bodyClone) {
    bodyClone.querySelectorAll("script, style, noscript").forEach((el) => el.remove());
  }
  const text = (bodyClone?.textContent || "").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  if (words >= 600) {
    add("Enough content on the page", "pass", 8, 8, `About ${words.toLocaleString()} words of readable content — enough for search engines and AI tools to understand what the page offers.`);
  } else if (words >= 300) {
    add("Enough content on the page", "warn", 4, 8, `About ${words.toLocaleString()} words of readable content. Pages with more genuinely useful content usually explain themselves better to search engines.`);
  } else {
    add("Enough content on the page", "fail", 0, 8, `Only about ${words.toLocaleString()} words of readable content. Very thin pages struggle to be understood — or trusted — by search engines and visitors.`);
  }

  // 11. Internal links
  const anchors = Array.from(doc.querySelectorAll("a[href]"));
  let internal = 0;
  for (const a of anchors) {
    const href = (a.getAttribute("href") || "").trim();
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;
    if (href.startsWith("/") || !/^https?:\/\//i.test(href)) {
      internal++;
    } else {
      try {
        if (new URL(href).hostname === pageUrl.hostname) internal++;
      } catch {
        // unparseable href — ignore
      }
    }
  }
  if (internal >= 5) {
    add("Links to your other pages", "pass", 8, 8, `${internal} links point to other pages on your site — this helps visitors and search engines find your important pages.`);
  } else if (internal >= 1) {
    add("Links to your other pages", "warn", 4, 8, `Only ${internal} link${internal > 1 ? "s" : ""} to other pages on your site. Linking your key pages together helps them all get found.`);
  } else {
    add("Links to your other pages", "fail", 0, 8, "No links to other pages on your site were found. A page that links nowhere is a dead end for visitors and search engines.");
  }

  // 12. Viewport / mobile
  const viewport = doc.querySelector('meta[name="viewport"]');
  if (viewport) {
    add("Mobile-ready (viewport) tag", "pass", 8, 8, "A viewport tag is set, so the page can adapt to phone screens — where most visitors now arrive.");
  } else {
    add("Mobile-ready (viewport) tag", "fail", 0, 8, "No viewport tag found. Without it, phones show a shrunken desktop page — and Google ranks mobile-ready pages first.");
  }

  const score = checks.reduce((sum, c) => sum + c.points, 0);
  return { url: pageUrl.toString(), score, checks };
}

function verdict(score: number): string {
  if (score >= 80) return "Strong basics — this page covers most of what search engines and AI tools look for first.";
  if (score >= 50) return "A fair start — the basics are partly in place, and the fixes below would make a real difference.";
  return "Needs work — several basics are missing. The good news: every item below is fixable.";
}

const BADGE: Record<Status, string> = { pass: "\u2713", warn: "!", fail: "\u2717" };
const LABEL: Record<Status, string> = { pass: "Pass", warn: "Warning", fail: "Fail" };

export default function SeoChecker() {
  const [input, setInput] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error" | "invalid">("idle");
  const [report, setReport] = useState<Report | null>(null);

  async function runCheck(e: React.FormEvent) {
    e.preventDefault();
    const url = normalizeUrl(input);
    if (!url) {
      setState("invalid");
      setReport(null);
      return;
    }
    setState("loading");
    setReport(null);
    try {
      const html = await fetchHtml(url.toString());
      const doc = new DOMParser().parseFromString(html, "text/html");
      setReport(analyse(doc, url));
      setState("done");
    } catch {
      setState("error");
    }
  }

  const waAuditMsg = report
    ? `Hi AA Digital Network, I ran the free website check on ${report.url} and scored ${report.score}/100. Please help me fix the issues.`
    : "Hi AA Digital Network, please run a free manual website check for me.";

  return (
    <div>
      <form className="checker-form" onSubmit={runCheck}>
        <label className="checker-label" htmlFor="checker-url">
          Your website address
        </label>
        <div className="checker-row">
          <input
            id="checker-url"
            type="text"
            inputMode="url"
            placeholder="e.g. yourbusiness.com or https://yourbusiness.com/page"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-describedby="checker-note"
          />
          <button className="btn btn-primary" type="submit" disabled={state === "loading"}>
            {state === "loading" ? "Checking…" : "Run the free check"}
          </button>
        </div>
        <p className="small" id="checker-note">
          The check runs on this page, in your browser. We do not store your address or your results.
        </p>
      </form>

      {state === "invalid" && (
        <div className="proof-box" role="alert">
          <p>
            That does not look like a complete website address. Try something like
            yourbusiness.com — or message us and we will check it for you by hand.
          </p>
        </div>
      )}

      {state === "loading" && (
        <p aria-live="polite">Reading the page and running 12 checks — this can take a few seconds…</p>
      )}

      {state === "error" && (
        <div className="proof-box" role="alert">
          <p>
            <strong>We could not read that page from here.</strong> Some websites block automated
            readers, and a few block the free relay services this tool uses. That says nothing bad
            about your site — and it is never a dead end:
          </p>
          <p>
            <a
              className="btn btn-wa"
              href={waLink(waAuditMsg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Ask for a free manual check on WhatsApp
            </a>{" "}
            <Link href="/contact">or use our contact page →</Link>
          </p>
        </div>
      )}

      {state === "done" && report && (
        <div aria-live="polite">
          <div className="checker-score">
            <div className="checker-score-num">
              {report.score}
              <span className="checker-score-max">/100</span>
            </div>
            <div>
              <p className="checker-score-url">
                <strong>{report.url}</strong>
              </p>
              <p>{verdict(report.score)}</p>
              <p className="small">
                This score covers the on-page basics readable from one page's public code. It is an
                honest snapshot — not a ranking promise.
              </p>
            </div>
          </div>

          <ul className="check-results">
            {report.checks.map((c) => (
              <li className="check-row" key={c.name}>
                <span className={`check-badge check-${c.status}`} aria-label={LABEL[c.status]}>
                  {BADGE[c.status]}
                </span>
                <div>
                  <h3>
                    {c.name} <span className="small">— {LABEL[c.status]}</span>
                  </h3>
                  <p>{c.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="cta-band checker-cta">
            <h2>Want us to fix these for you?</h2>
            <p>
              Send us your result and we will reply with a plain, honest plan — what to fix first,
              what it involves, and what it costs. No pressure and no ranking guarantees, ever.
            </p>
            <p>
              <a
                className="btn btn-wa"
                href={waLink(waAuditMsg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Chat on WhatsApp — +92 333 7476228
              </a>
            </p>
            <p className="small">
              Prefer a form? <Link href="/contact">Use our contact page →</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

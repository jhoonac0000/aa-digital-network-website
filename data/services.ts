export interface Service {
  slug: string; name: string; short: string;
  problem: string[]; audiences: string[]; deliverables: string[]; proof: string;
  priceLabel: string; priceNote: string;
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[]; related: string[]; isNew: boolean;
}

export const SERVICES: Service[] = [
  {
    "slug": "website-development",
    "name": "Website Development",
    "short": "Fast, SEO-ready websites for small businesses — built to bring enquiries, not just look good.",
    "problem": [
      "Most small business websites are either missing, outdated, or so slow that visitors leave before they read a single line. Every week without a proper website is a week of customers choosing a competitor who looks more trustworthy online.",
      "A good business website does three jobs: it explains what you do in seconds, it proves you are real, and it makes it easy to contact you. If your site fails any of these, it is costing you work."
    ],
    "audiences": [
      "Local shops and clinics",
      "Coaches and consultants",
      "Trades and home services",
      "Startups launching a first site"
    ],
    "deliverables": [
      "Mobile-first website, typically 5 to 10 pages, built around your services",
      "Clear contact and WhatsApp enquiry paths on every page",
      "On-page SEO basics: titles, descriptions, headings and sitemap",
      "Fast loading static pages — no heavy plugins slowing things down",
      "A short handover note so you know how to request changes"
    ],
    "proof": "Our own showcase site Noor Islamic Website is built on this same approach — original content, free tools, and steady Google indexing. We also built five demo business sites you can browse on the Work page.",
    "priceLabel": "Custom quote",
    "priceNote": "Price depends on pages, features and content. Message us on WhatsApp with your business type and we will give you a clear quote — no obligation.",
    "process": [
      {
        "title": "Tell us what you need",
        "text": "Message us on WhatsApp: your business, your services, and any site you like. We reply with questions, not a sales pitch."
      },
      {
        "title": "We build and you review",
        "text": "We build the site and share a preview link. You ask for changes and we refine until it feels right."
      },
      {
        "title": "Launch and support",
        "text": "We launch the site, submit it for indexing, and stay available for updates and small fixes."
      }
    ],
    "faqs": [
      {
        "q": "How long does a website take?",
        "a": "Most small business sites take one to two weeks from confirmed content. Larger sites take longer — we give you a timeline before we start."
      },
      {
        "q": "Do I own my website?",
        "a": "Yes. The site, its content and its domain are yours. We simply build and maintain them for you."
      },
      {
        "q": "Will my site show up on Google?",
        "a": "We build every site with SEO basics and submit it for indexing. Rankings take time and depend on competition — we never promise a position."
      },
      {
        "q": "Can you update my existing site?",
        "a": "Yes. We can rebuild it properly or improve what you have, depending on what makes more sense for you."
      }
    ],
    "related": [
      "ada-accessibility",
      "white-label-seo"
    ],
    "isNew": false
  },
  {
    "slug": "ad-videos",
    "name": "Digital Ad Videos",
    "short": "Short social media ad videos in Urdu and English that stop the scroll and explain your offer fast.",
    "problem": [
      "People skip most ads in the first three seconds. A shaky phone clip with no hook, no captions and no clear offer does not sell — it just gets scrolled past.",
      "A good ad video earns attention first and explains second: a strong opening, one clear message, and a visible next step. That is what we build."
    ],
    "audiences": [
      "Local shops and restaurants",
      "Online sellers and brands",
      "Clinics and service businesses",
      "Creators promoting a product"
    ],
    "deliverables": [
      "Short ad videos for Facebook, Instagram, TikTok and YouTube",
      "Voiceover plus on-screen text and captions in Urdu or English",
      "A strong opening hook in the first three seconds",
      "Ready-to-post formats for each platform you use"
    ],
    "proof": "We produce ad-style videos for our own channels and client demos, with voiceover-led editing rather than raw clips. Samples are on the Work page.",
    "priceLabel": "Custom quote",
    "priceNote": "Price depends on length, voiceover and number of versions. Tell us your product and platform on WhatsApp for a clear quote.",
    "process": [
      {
        "title": "Tell us the offer",
        "text": "Share your product, your audience and the one action you want viewers to take."
      },
      {
        "title": "Script, voice and edit",
        "text": "We write a short script, record the voiceover and edit the video with captions and music."
      },
      {
        "title": "Review and deliver",
        "text": "You review a preview, we revise, and you receive final files ready to post."
      }
    ],
    "faqs": [
      {
        "q": "Which languages do you support?",
        "a": "Urdu and English. Urdu videos use natural voiceover with on-screen text."
      },
      {
        "q": "How long are the videos?",
        "a": "Mostly 30 to 60 seconds — the length that works best for social feeds. Longer versions are possible on request."
      },
      {
        "q": "Do you write the script?",
        "a": "Yes. We write a short, simple script around your offer and confirm it with you before recording."
      },
      {
        "q": "Can I ask for changes?",
        "a": "Yes — revisions are part of the process. We refine until the video says what you want it to say."
      }
    ],
    "related": [
      "video-editing",
      "website-development"
    ],
    "isNew": false
  },
  {
    "slug": "guest-posting",
    "name": "Guest Posting & Backlinks",
    "short": "Real guest posts on real sites — original articles that earn backlinks and referral traffic.",
    "problem": [
      "Buying cheap backlink packages usually means spammy sites, copied content and links that disappear. Google ignores most of them, and some can hurt your site.",
      "Real backlinks come from real articles on real sites that accept genuine contributions. That takes outreach, original writing and patience — which is exactly what this service does."
    ],
    "audiences": [
      "SEO agencies needing placements",
      "Site owners building authority",
      "Bloggers and niche brands",
      "Businesses investing in long-term SEO"
    ],
    "deliverables": [
      "Outreach to relevant, real websites in your niche",
      "A fully original article written for the host site",
      "Placement report with the live link once published",
      "Only free or fairly priced placements — no link farms, no copied content"
    ],
    "proof": "Our own site Noor grew its early presence through the same approach: original articles, honest outreach, and no shortcuts. We apply the same standard to client placements.",
    "priceLabel": "Custom quote",
    "priceNote": "Price depends on the site, article length and niche. Message us on WhatsApp with your site and target topics for a quote.",
    "process": [
      {
        "title": "Share your site and topics",
        "text": "Tell us your website, niche and the topics you want covered."
      },
      {
        "title": "Outreach and writing",
        "text": "We contact relevant sites and write an original article tailored to each one."
      },
      {
        "title": "Placement report",
        "text": "When a post goes live, you receive the link and a short report. No placement, no charge for that placement."
      }
    ],
    "faqs": [
      {
        "q": "Are the links permanent?",
        "a": "Placements are on real sites and normally stay live. If a link is removed, tell us and we will look into a replacement."
      },
      {
        "q": "Do you use AI-spun or copied content?",
        "a": "No. Every article is written originally for the host site. Copied content helps nobody."
      },
      {
        "q": "How long does a placement take?",
        "a": "Outreach and editorial review take time — usually a few weeks per placement. We report progress honestly."
      },
      {
        "q": "Do you guarantee rankings?",
        "a": "No. Backlinks support SEO, but rankings depend on many factors. We promise real work, not positions."
      }
    ],
    "related": [
      "white-label-seo",
      "website-development"
    ],
    "isNew": false
  },
  {
    "slug": "ada-accessibility",
    "name": "ADA Accessibility Audits",
    "short": "Website accessibility audits and fixes to WCAG 2.2 AA — clearer for every visitor, stronger for your business.",
    "problem": [
      "Millions of people browse with screen readers, keyboards, or low vision. If your site has poor contrast, missing labels or keyboard traps, those visitors simply cannot use it — and in the US, inaccessible sites also attract demand letters.",
      "An audit finds the real barriers on your site, page by page, and fixes them in priority order. It does not make legal claims — it makes your site genuinely easier to use."
    ],
    "audiences": [
      "US small and mid-size businesses",
      "Clinics and professional practices",
      "Restaurants and local services",
      "Agencies serving US clients"
    ],
    "deliverables": [
      "A full accessibility scan report with every issue listed and explained",
      "Fixes for the issues found, in priority order — critical issues first",
      "A plain-language summary you can share with your team",
      "Optional monthly monitoring so new issues are caught early"
    ],
    "proof": "We start with a free scan report for US businesses — you see the actual issues on your site before you pay anything. That report is the proof of the work.",
    "priceLabel": "Audit + fix from $499–$899",
    "priceNote": "One-time audit and fix starts at $499 depending on site size. Monthly monitoring is $99–$199 per month. Request a free scan first and decide with the facts in front of you.",
    "process": [
      {
        "title": "Free scan report",
        "text": "Share your website. We run a full scan and send you the real issues found — free, no obligation."
      },
      {
        "title": "Audit and fix",
        "text": "We work through the issues in priority order and verify the fixes with a re-scan."
      },
      {
        "title": "Monitor monthly (optional)",
        "text": "Monthly monitoring catches new issues as your site changes, with a short report each month."
      }
    ],
    "faqs": [
      {
        "q": "Will this make my site lawsuit-proof?",
        "a": "No — and nobody honest can promise that. What we do is improve your site toward WCAG 2.2 AA and keep monitoring it, which genuinely reduces risk and helps real visitors."
      },
      {
        "q": "What standard do you audit against?",
        "a": "WCAG 2.2 AA — the widely used accessibility standard for websites."
      },
      {
        "q": "How long does a fix take?",
        "a": "Most small business sites take one to two weeks, depending on how many issues the scan finds."
      },
      {
        "q": "What if my site changes later?",
        "a": "That is what monthly monitoring is for. New pages and plugins can introduce new issues, and we catch them early."
      }
    ],
    "related": [
      "website-development",
      "medical-billing-leads"
    ],
    "isNew": false
  },
  {
    "slug": "medical-billing-leads",
    "name": "Medical Billing Lead Generation",
    "short": "Researched leads for US medical billing services — practices that actually need billing help.",
    "problem": [
      "Medical billing companies waste hours chasing practices that already have billing solved, or that are too small to be a fit. Cold lists without research burn time and morale.",
      "Good lead generation starts with fit: the right practice size, the right specialty, and a real reason to talk. We research first, then hand over leads worth calling."
    ],
    "audiences": [
      "Medical billing companies",
      "Revenue cycle management firms",
      "Healthcare BPO providers",
      "Consultants serving US practices"
    ],
    "deliverables": [
      "Researched lead lists matched to your ideal practice profile",
      "Practice details that matter: specialty, size signals and contact routes",
      "Leads delivered in a clean sheet, ready for your outreach team",
      "A short note on why each lead fits, where it is clear"
    ],
    "proof": "We run the same research discipline across our outreach lines: named prospects, verified details, and no bulk-scraped junk. Ask for a small sample list first and judge the quality yourself.",
    "priceLabel": "Custom quote",
    "priceNote": "Price depends on volume and research depth. Message us on WhatsApp with your ideal practice profile for a quote.",
    "process": [
      {
        "title": "Define your ideal practice",
        "text": "Tell us the specialties, sizes and states you serve best."
      },
      {
        "title": "Research and verify",
        "text": "We research and verify practices against that profile and build your list."
      },
      {
        "title": "Deliver and refine",
        "text": "You receive the list, work it, and tell us what converts — we refine the next batch around that."
      }
    ],
    "faqs": [
      {
        "q": "Are the leads verified?",
        "a": "We verify the practice details we list. Contact details change over time, so we note the verification date on every batch."
      },
      {
        "q": "Do you do the outreach too?",
        "a": "This service is lead research and lists. Outreach support can be discussed separately if you need it."
      },
      {
        "q": "How many leads can I get?",
        "a": "That depends on your niche and geography. We tell you honestly what volume is realistic before you pay."
      },
      {
        "q": "What do you need from me to start?",
        "a": "Your ideal practice profile: specialties, practice sizes, and any states you do or do not serve."
      }
    ],
    "related": [
      "ada-accessibility",
      "guest-posting"
    ],
    "isNew": false
  },
  {
    "slug": "automation",
    "name": "n8n Automation",
    "short": "Practical n8n workflows that save small teams hours every week — posting, email, sheets and more.",
    "problem": [
      "Small teams repeat the same manual jobs every day: copying posts between platforms, moving form entries into sheets, sending the same emails. It eats hours and invites mistakes.",
      "A small, well-built automation does one job reliably, in the background, and tells you when something needs attention. No enterprise software, no big budget."
    ],
    "audiences": [
      "Small businesses with repetitive tasks",
      "Creators posting on a schedule",
      "Agencies managing client content",
      "Teams living in spreadsheets and email"
    ],
    "deliverables": [
      "A documented n8n workflow built for your exact task",
      "Clear notes on what triggers it, what it does, and what can fail",
      "A short walkthrough so your team can run it",
      "Fixes for the first issues that appear in real use"
    ],
    "proof": "We run our own publishing and outreach workflows on n8n — including a YouTube Shorts scheduler that uploads from a queue sheet. We build for clients the way we build for ourselves.",
    "priceLabel": "Custom quote",
    "priceNote": "Price depends on the workflow's size and the systems it connects. Describe the manual job on WhatsApp and we will quote it plainly.",
    "process": [
      {
        "title": "Describe the manual job",
        "text": "Tell us the repetitive task: what goes in, what comes out, and how often it happens."
      },
      {
        "title": "We build and test",
        "text": "We build the workflow and test it with real data before handing it over."
      },
      {
        "title": "Handover and support",
        "text": "You get the workflow plus notes, and support while it settles into daily use."
      }
    ],
    "faqs": [
      {
        "q": "What is n8n?",
        "a": "An open workflow tool that connects apps and services — forms, sheets, email, social platforms — so routine jobs run themselves."
      },
      {
        "q": "Do I need to pay for n8n?",
        "a": "Self-hosted n8n is free to run; cloud hosting is optional. We will explain the cheapest honest option for your case."
      },
      {
        "q": "What if a workflow breaks?",
        "a": "Every workflow we hand over includes notes on common failures. We also fix early issues as part of the handover."
      },
      {
        "q": "Can you automate social posting?",
        "a": "Yes — scheduled posting from a sheet is one of the most common jobs, and one we run ourselves daily."
      }
    ],
    "related": [
      "video-editing",
      "website-development"
    ],
    "isNew": false
  },
  {
    "slug": "video-editing",
    "name": "Short-Form Video Editing",
    "short": "Reels and Shorts edited to hold attention — clean cuts, captions, hooks and pacing that fit each platform.",
    "problem": [
      "Raw footage rarely performs. Long pauses, no captions, and a slow opening lose viewers before your message lands — especially with sound off, which is how many people watch.",
      "Good short-form editing is invisible: tight cuts, readable captions, a hook in the first seconds, and pacing that matches the platform. That is the whole service."
    ],
    "audiences": [
      "Creators posting Reels and Shorts",
      "Small businesses doing social video",
      "Coaches and educators",
      "Agencies needing editing capacity"
    ],
    "deliverables": [
      "Edited vertical videos ready for Reels, Shorts and TikTok",
      "Captions burned in, in a clean readable style",
      "Hook-first openings and tight pacing",
      "Revisions until the video feels right"
    ],
    "proof": "We edit short-form video for our own channels, where pacing and captions decide whether a viewer stays. Samples are on the Work page.",
    "priceLabel": "Custom quote",
    "priceNote": "Price depends on video count, length and turnaround. Share a sample clip on WhatsApp for a clear quote.",
    "process": [
      {
        "title": "Send your footage",
        "text": "Share your raw clips and tell us the message and platform."
      },
      {
        "title": "We edit and caption",
        "text": "We cut, caption and pace the video for that platform's audience."
      },
      {
        "title": "Review and final files",
        "text": "You review, we revise, and you receive final files ready to post."
      }
    ],
    "faqs": [
      {
        "q": "What footage do you need?",
        "a": "Raw clips from your phone or camera are fine. Tell us the key message and we handle the rest."
      },
      {
        "q": "Do you add captions?",
        "a": "Yes — captions are included, styled to be readable on small screens."
      },
      {
        "q": "How fast is delivery?",
        "a": "Most single videos take a few days. Larger batches get a schedule we agree on first."
      },
      {
        "q": "Can you match my existing style?",
        "a": "Yes. Share a video you like and we will match its pacing and caption style."
      }
    ],
    "related": [
      "ad-videos",
      "automation"
    ],
    "isNew": false
  },
  {
    "slug": "white-label-seo",
    "name": "White-Label SEO",
    "short": "SEO done under your agency's brand — reports, content and links your clients see as yours.",
    "problem": [
      "Small agencies lose SEO work because hiring an in-house specialist is expensive, and freelancers vary wildly in quality. Clients still ask for SEO every week.",
      "White-label SEO solves this quietly: we do the work, you keep the client relationship, and every report carries your brand. Your clients never need to know we exist."
    ],
    "audiences": [
      "Web design agencies",
      "Marketing freelancers",
      "Small digital agencies",
      "Consultants adding SEO to their offer"
    ],
    "deliverables": [
      "Monthly SEO work: on-page fixes, content guidance and link building",
      "White-label reports under your agency's brand",
      "Clear monthly summaries you can forward to clients",
      "Honest communication about what is improving and what is not"
    ],
    "proof": "Our own site Noor is our working proof: original content, steady indexing, and a clean technical setup — the same standard we apply to white-label work.",
    "priceLabel": "Custom quote",
    "priceNote": "Monthly retainers depend on the client's site and goals. Tell us your client type on WhatsApp and we will scope it.",
    "process": [
      {
        "title": "Tell us about your client",
        "text": "Share the client's site, niche and goals — under NDA if you need one."
      },
      {
        "title": "We plan and execute",
        "text": "We agree a monthly scope, then do the work: fixes, content direction and outreach."
      },
      {
        "title": "You report to your client",
        "text": "You receive a branded monthly report to forward. We stay behind the scenes."
      }
    ],
    "faqs": [
      {
        "q": "Will my clients know about you?",
        "a": "No. All reports and communication are under your brand. We never contact your clients directly."
      },
      {
        "q": "What SEO work do you actually do?",
        "a": "On-page improvements, content direction, and genuine outreach-based links. No link farms, no copied content, no ranking guarantees."
      },
      {
        "q": "Can I start with one client?",
        "a": "Yes. Start with one client, judge the quality, and scale from there."
      },
      {
        "q": "How do you report results?",
        "a": "A monthly branded report: what was done, what changed, and what is next. Plain language, no vanity metrics."
      }
    ],
    "related": [
      "guest-posting",
      "website-development"
    ],
    "isNew": false
  },
  {
    "slug": "grant-prospect-research",
    "name": "Grant Prospect Research",
    "short": "A researched shortlist of grants your organisation can actually win — matched to your mission, budget and eligibility.",
    "problem": [
      "Nonprofits and community organisations waste weeks applying for grants they were never eligible for, or never find the funders that would have said yes. Grant databases are huge, and most of their listings are noise for any one organisation.",
      "Good prospect research flips this: instead of spraying applications, you start from a short, honest list of funders whose priorities, sizes and deadlines genuinely fit you — and you apply where you have a real chance."
    ],
    "audiences": [
      "Nonprofits and charities",
      "Community organisations",
      "Schools and education projects",
      "Faith-based and social initiatives"
    ],
    "deliverables": [
      "A researched prospect list matched to your mission, location and budget range",
      "A short profile for each funder: what they fund, typical grant size, and deadlines",
      "Eligibility notes in plain language — why each prospect fits, and any gap to close",
      "A deadline calendar so you never miss a window"
    ],
    "proof": "This service is research, not promises: every prospect comes with the reason it fits and the source of the information, so you can verify each one yourself before applying.",
    "priceLabel": "From $500",
    "priceNote": "Research packs start at $500 depending on scope and geography. Message us on WhatsApp with your mission and location for an exact quote.",
    "process": [
      {
        "title": "Share your mission and needs",
        "text": "Tell us what you do, where you work, and what funding you need it for."
      },
      {
        "title": "We research and shortlist",
        "text": "We search funder databases and public sources, then shortlist only the prospects that genuinely fit."
      },
      {
        "title": "You receive the prospect pack",
        "text": "You get the list, funder profiles and deadline calendar — ready for your team to apply."
      }
    ],
    "faqs": [
      {
        "q": "Does this include writing the grant proposal?",
        "a": "No — this service is research and shortlisting. Proposal drafting support is available separately under Research Support Services."
      },
      {
        "q": "How many prospects will I get?",
        "a": "That depends on your niche and geography. We tell you the realistic number before you pay — a short honest list beats a long useless one."
      },
      {
        "q": "Can you guarantee I will win a grant?",
        "a": "No. Nobody can guarantee funding decisions. What we guarantee is careful, verifiable research behind every prospect."
      },
      {
        "q": "What do you need from me to start?",
        "a": "Your mission statement, location, budget range, and any funders you have already tried."
      }
    ],
    "related": [
      "research-support-services",
      "email-deliverability-audit"
    ],
    "isNew": true
  },
  {
    "slug": "email-deliverability-audit",
    "name": "Email Deliverability Audit",
    "short": "Find out exactly why your emails land in spam — and get a prioritised fix list to reach the inbox again.",
    "problem": [
      "Cold emails and newsletters that land in spam are not just ignored — they damage your sender reputation, so each next campaign performs worse. Most senders never learn why: a missing authentication record, a tired list, or a domain that looks untrustworthy to inbox providers.",
      "A deliverability audit tests what inbox providers actually see, finds the real causes, and gives you fixes in priority order — instead of guessing with new subject lines."
    ],
    "audiences": [
      "Businesses running cold outreach",
      "Newsletter and email marketers",
      "Agencies sending for clients",
      "Founders whose replies stopped coming"
    ],
    "deliverables": [
      "Authentication check: SPF, DKIM and DMARC records reviewed and explained",
      "Inbox placement tests across major providers",
      "List hygiene review: bounces, stale addresses and spam-trap risk",
      "Sender reputation review and a prioritised fix list"
    ],
    "proof": "The audit starts from evidence, not opinion: real test results from real inboxes, with each issue explained in plain language and ranked by impact.",
    "priceLabel": "From $150",
    "priceNote": "Audits start at $150 for a single domain and sending setup. Multi-domain and agency setups are quoted on WhatsApp.",
    "process": [
      {
        "title": "Share your domain and setup",
        "text": "Tell us your sending domain, tools and what changed when deliverability dropped."
      },
      {
        "title": "We test and audit",
        "text": "We run authentication checks, placement tests and list reviews, and record the evidence."
      },
      {
        "title": "You receive the fix list",
        "text": "You get a prioritised report: what to fix first, how to fix it, and what to re-test after."
      }
    ],
    "faqs": [
      {
        "q": "Will you fix everything for me?",
        "a": "The audit gives you the prioritised fix list with instructions. Hands-on implementation can be arranged as a separate scope."
      },
      {
        "q": "How long does an audit take?",
        "a": "Most single-domain audits take a few days, including placement tests."
      },
      {
        "q": "Do you need access to my email accounts?",
        "a": "No. We need your domain and sending setup details, not your inbox passwords."
      },
      {
        "q": "Can you guarantee inbox placement?",
        "a": "No — inbox providers make the final call. What we do is remove the technical and list problems that cause spam placement."
      }
    ],
    "related": [
      "grant-prospect-research",
      "automation"
    ],
    "isNew": true
  },
  {
    "slug": "urdu-ai-data-studio",
    "name": "Urdu AI Data Studio",
    "short": "Clean, quality-checked Urdu text and audio data for AI teams — built by people who actually read Urdu.",
    "problem": [
      "Urdu is a major world language, but good AI data for it is scarce, noisy, or machine-translated — and machine translation from English produces Urdu that no native speaker would write. Models trained on it sound wrong and fail on real users.",
      "Quality Urdu data needs native eyes: correct script, natural phrasing, and careful annotation. That is what this studio does — data built and checked by people who read and speak Urdu."
    ],
    "audiences": [
      "AI startups building Urdu features",
      "Research teams working on low-resource languages",
      "Voice and chatbot developers",
      "Edtech teams localising for Urdu speakers"
    ],
    "deliverables": [
      "Curated Urdu text datasets for your use case, with source notes",
      "Transcribed and annotated Urdu audio, checked by native reviewers",
      "Annotation and labelling to your guidelines",
      "A quality report: coverage, checks performed, and known limits"
    ],
    "proof": "Every batch ships with a quality report and a sample you can inspect before committing to volume. If the data does not read like real Urdu, you should not pay for it.",
    "priceLabel": "From $15/hour",
    "priceNote": "Studio work starts at $15 per hour. Larger datasets are quoted per project on WhatsApp after a short brief.",
    "process": [
      {
        "title": "Share your data brief",
        "text": "Tell us the task, the format you need, and the volume you are aiming for."
      },
      {
        "title": "We collect and annotate",
        "text": "We gather, transcribe or annotate the data to your guidelines, in Urdu, by native reviewers."
      },
      {
        "title": "Quality check and delivery",
        "text": "A second check runs before delivery, and you receive the data plus a quality report."
      }
    ],
    "faqs": [
      {
        "q": "Is the data machine-translated?",
        "a": "No. Machine translation is exactly the problem this studio avoids. Data is collected and checked in real Urdu."
      },
      {
        "q": "Who owns the delivered data?",
        "a": "You do, for the use agreed in your brief. We do not resell your commissioned dataset."
      },
      {
        "q": "What formats do you deliver?",
        "a": "Common formats for text and audio work — CSV, JSON, plain text and standard audio files. Tell us what your pipeline needs."
      },
      {
        "q": "Can you handle large volumes?",
        "a": "Yes, with a project quote. Start with a small paid sample batch and scale once the quality is proven."
      }
    ],
    "related": [
      "research-support-services",
      "automation"
    ],
    "isNew": true
  },
  {
    "slug": "research-support-services",
    "name": "Research Support Services",
    "short": "Honest, practical help for researchers — finding the gap, shaping the paper, and getting it submission-ready.",
    "problem": [
      "Many researchers know their field but get stuck on the same points: finding a genuine research gap, organising a literature survey, or turning good work into a paper that reads clearly. Supervisors are busy, and generic advice rarely fits your topic.",
      "Research support gives you structured help at the stage you are actually stuck on — from gap analysis to a clean, well-formatted draft — while the ideas and the authorship stay entirely yours."
    ],
    "audiences": [
      "Masters and PhD students",
      "Early-career researchers",
      "Independent researchers",
      "Teams preparing journal submissions"
    ],
    "deliverables": [
      "Research gap analysis for your topic, with the papers that define it",
      "Literature survey support: organised, summarised, and properly referenced",
      "Structure and clarity editing for drafts you have written",
      "Formatting help for journal or conference requirements"
    ],
    "proof": "This service is run by an MPhil IT researcher who has done this work, not by a content mill. Support is documented and transparent — you always know what was done and why.",
    "priceLabel": "Custom quote",
    "priceNote": "Every project is different, so pricing is quoted per project on WhatsApp after a short discussion of your topic and stage.",
    "process": [
      {
        "title": "Tell us your topic and stage",
        "text": "Share your field, your topic, and where you are stuck — gap, survey, draft, or formatting."
      },
      {
        "title": "We research and support",
        "text": "We work through that stage with you: sources, structure, and clear next steps."
      },
      {
        "title": "Review and refine",
        "text": "You review the work, we refine it, and you move forward with a stronger paper."
      }
    ],
    "faqs": [
      {
        "q": "Do you write the paper for me?",
        "a": "No. We support your research — gap analysis, surveys, structure and editing. The ideas, the work and the authorship are yours."
      },
      {
        "q": "Can you guarantee journal acceptance?",
        "a": "No, and nobody honest can. Peer review is independent. What we do is raise the quality of what you submit."
      },
      {
        "q": "Which fields do you cover?",
        "a": "Computing and IT are our home ground, especially applied and interdisciplinary topics. Ask about your field on WhatsApp and we will tell you honestly if we can help."
      },
      {
        "q": "Is my topic kept private?",
        "a": "Yes. Your topic, drafts and data are never shared or reused. Confidentiality is part of the service."
      }
    ],
    "related": [
      "grant-prospect-research",
      "urdu-ai-data-studio"
    ],
    "isNew": true
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

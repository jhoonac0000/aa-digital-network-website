export interface Service {
  slug: string; name: string; short: string;
  problem: string[]; audiences: string[]; deliverables: string[]; proof: string;
  priceLabel: string; priceNote: string;
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[]; related: string[]; isNew: boolean;
  image?: string; imageAlt?: string; imageCaption?: string;
  extraImages?: { after: string; src: string; alt: string; caption: string }[];
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
      "Your domain is included for the first year, registered in your own name — it always stays yours; from year two it renews under our care arrangement, and we remind you before it expires",
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
    "name": "AI Automation",
    "short": "Practical AI and workflow automation that answers leads fast, books appointments and removes repetitive work — running day and night, not just office hours.",
    "problem": [
      "Small teams lose work in the gaps: a lead waits hours for a reply, a missed call never gets a message back, appointments are confirmed by hand, and the same data is typed into three places. Each gap quietly costs customers.",
      "Good automation closes one gap at a time: a new enquiry gets an instant, useful reply, a missed call triggers a message, reminders go out on their own, and routine jobs run in the background. It does not replace your team — it stops work from slipping through."
    ],
    "audiences": [
      "Clinics, salons and appointment businesses",
      "Home services and trades",
      "Coaches, consultants and small agencies",
      "Creators and teams posting on a schedule"
    ],
    "deliverables": [
      "Speed-to-lead: new form, message or missed-call enquiries get an instant reply and are logged for follow-up",
      "Website AI chatbot that answers common questions, captures details and points visitors to booking",
      "Appointment reminders and no-show recovery, plus review requests after completed work",
      "Routine workflows: posting schedules, email sequences, and form-to-sheet or CRM entries",
      "A documented workflow built for your exact task, with notes on what triggers it and what can fail",
      "Hosting set up so your automation keeps running day and night — not on a personal laptop"
    ],
    "proof": "We run our own publishing and outreach workflows on automation — including a YouTube Shorts scheduler that uploads from a queue sheet. We build for clients the way we build for ourselves.",
    "priceLabel": "Custom quote",
    "priceNote": "Every job starts with a free audit: we look at the manual work, name the one workflow worth automating first, and quote it plainly. Hosting costs are explained before you pay anything.",
    "process": [
      {
        "title": "Free audit first",
        "text": "Tell us the manual job that eats your time. We check it and name the first workflow worth building — if automation will not help, we say so."
      },
      {
        "title": "We build and test",
        "text": "We build the workflow and test it with real data before it touches your customers."
      },
      {
        "title": "Handover and monthly care",
        "text": "You get the workflow plus notes, and monthly care keeps it running, fixed and improved as your tools change."
      }
    ],
    "faqs": [
      {
        "q": "Which tools do you use?",
        "a": "n8n, Zapier or Make — whichever fits your job and budget. We explain the cheapest honest option for your case, including what the tool itself costs."
      },
      {
        "q": "Does it stop if a computer is switched off?",
        "a": "No. Client workflows run on cloud hosting, not on a personal computer, so they keep working day and night."
      },
      {
        "q": "What if a workflow breaks?",
        "a": "Tools change and logins expire — that is normal. Monthly care covers monitoring and fixes, and every handover includes notes on common failures."
      },
      {
        "q": "Do you guarantee more sales or bookings?",
        "a": "No. Automation makes sure enquiries are answered fast and nothing slips through — results still depend on your offer, prices and market. We promise real work, not outcomes."
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
      "Past-award review: what each funder actually funded recently, from public records where available",
      "Priority ranking — prospects ordered by fit, so you apply in the right order",
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
      "Blacklist check across major lists, plus Google Postmaster Tools reputation review",
      "Sender reputation review, warm-up guidance for new or damaged domains, and a prioritised fix list"
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
  },
  {
    "slug": "ai-virtual-try-on",
    "name": "AI Virtual Try-On",
    "short": "Done-for-you virtual try-on for fashion brands and clothing stores — your customers send a photo, pick a product, and see themselves wearing it.",
    "problem": [
      "Online clothing shoppers hesitate at the same question: how will this look on me? When they cannot picture it, they delay, ask questions your team answers one by one, or simply buy from a bigger store that shows them more.",
      "The large marketplaces now show shoppers AI try-on results — but the tools behind them are enterprise products or self-serve apps that get real garments wrong: colours shift, embroidery disappears, and modest clothing loses its coverage. Small and mid-size fashion brands are left showing flat product photos while the big platforms show the outfit on a person."
    ],
    "audiences": [
      "Abaya and modest fashion brands (UK, US, CA, AU)",
      "Suit and menswear stores",
      "Boutique clothing brands selling online",
      "Stores taking orders on WhatsApp or Instagram"
    ],
    "deliverables": [
      "Virtual try-on set up for your products — customer photo plus product photo becomes a realistic try-on image",
      "Every render checked by a person before it goes out: coverage, sleeves, hem and embroidery on modest garments",
      "A simple try-on section for your store, like the live demo on this page",
      "A WhatsApp-based flow for stores that sell through chat: customers send a photo, you send back their try-on",
      "Honest setup: any paid AI tool cost, if your volume needs one, is stated up front and stays in your name"
    ],
    "proof": "The samples on this page are real outputs from our own process: a plain customer photo and a product photo in, a photorealistic try-on out — including a modest abaya where the hijab and coverage are preserved. Judge the service by those results, not by promises.",
    "priceLabel": "Pilot $299–$499 one-time",
    "priceNote": "The pilot covers setup plus 10–20 of your products, so you can test try-on with real customers before committing. After that, an optional care plan is $99–$199 per month for new products, checks and updates. Before that, you get 1 free try-on — marked \"Sample — AA Digital Network\" — purely to check our quality; clean unmarked outputs are part of the paid setup. Send a photo and a product on WhatsApp to claim the free one.",
    "process": [
      {
        "title": "Send a photo and a product",
        "text": "Message us on WhatsApp with one customer-style photo and one product photo. We prepare that try-on free, so you see the real output quality first."
      },
      {
        "title": "Pilot setup",
        "text": "We set up try-on for 10–20 of your products, check every render by hand, and connect the flow to your store or WhatsApp ordering."
      },
      {
        "title": "Care plan (optional)",
        "text": "New products are added and checked each month, and the demo stays current as your catalogue changes."
      }
    ],
    "faqs": [
      {
        "q": "Is the try-on instant and automatic?",
        "a": "No — and we will not pretend otherwise. Each try-on is prepared with AI tools and checked by a person before it is sent, because automatic tools regularly get garments wrong. That checking is the service."
      },
      {
        "q": "Does it work for modest clothing and abayas?",
        "a": "That is exactly where we focus. Every modest-wear render is checked for hijab, sleeve and hem coverage and for embroidery detail before it goes out — the things generic try-on tools most often break."
      },
      {
        "q": "Will this reduce my returns?",
        "a": "We make no such promise. Try-on helps shoppers picture a product on themselves before ordering; what it does for your return rate depends on your products and customers."
      },
      {
        "q": "What happens to customer photos?",
        "a": "Photos are used only to prepare that customer's try-on. They are never published or reused in our demos — the samples on this page were created by us, for this page."
      },
      {
        "q": "What do I need to start?",
        "a": "Product photos of the items you want covered, and a WhatsApp number or store page where customers reach you. That is enough for the free sample."
      }
    ],
    "related": [
      "website-development",
      "ad-videos"
    ],
    "isNew": true
  },
  {
    "slug": "muslim-daycare-enrollment",
    "name": "Muslim Daycare Enrollment Funnel",
    "short": "Done-for-you enrollment funnel for Muslim daycares and Islamic preschools — local search, faith-aware pages and tour bookings that fill your places and your waitlist.",
    "problem": [
      "Parents choosing childcare search online first — \"Muslim daycare near me\", \"Islamic preschool near me\" — and most tour three or four centres within a single week. A centre that cannot be found on Google, or whose page never answers the faith questions, is simply never toured.",
      "Most Muslim daycares run on word of mouth and a thin directory listing. Generic childcare marketing exists, but it is written generically: it cannot speak credibly about halal meals, a prayer-time routine, Islamic identity, language-matched staff, or the safety and privacy questions Muslim parents ask before anything else."
    ],
    "audiences": [
      "Muslim daycare centres in the US, UK and Canada",
      "Islamic preschools and faith-based Montessori settings",
      "Licensed Muslim childminders with places to fill",
      "Centres carrying a waitlist they want to grow and manage"
    ],
    "deliverables": [
      "Google Business Profile and local SEO built around \"Muslim daycare near me\" searches",
      "Faith-aware landing pages: halal meals, prayer-time routine, Islamic environment and early learning, staff credentials and safety",
      "Tour-booking and waitlist funnel, with fast follow-up on every enquiry",
      "Trust-building short videos: a facility tour and a director introduction",
      "Children are filmed only with written parental consent — otherwise videos show the facility and staff only",
      "A free enrollment visibility audit before you pay anything"
    ],
    "proof": "We start with the free audit: we show you exactly what Muslim parents in your area see when they search — which centres they find, and why yours is or is not among them. You judge the funnel on that evidence before spending anything.",
    "priceLabel": "Funnel build $1,000–$2,000",
    "priceNote": "The one-time funnel build is $1,000–$2,000 depending on the size of your centre; ongoing management is $399–$699 per month. For scale: a single enrolled child typically pays a centre many times the monthly retainer in tuition over a year. Start with the free audit and decide with the facts in front of you.",
    "process": [
      {
        "title": "Free visibility audit",
        "text": "We search the way parents in your area search and report what they find — your profile, your pages, and the centres being found instead of you."
      },
      {
        "title": "We build the funnel",
        "text": "Profile, pages, tour booking and waitlist follow-up are built around the questions Muslim parents actually ask."
      },
      {
        "title": "Tours and monthly care",
        "text": "Enquiries are answered fast and tours get booked. Monthly care keeps your visibility growing and reports enquiries in plain numbers."
      }
    ],
    "faqs": [
      {
        "q": "Do you provide childcare or guarantee enrollments?",
        "a": "No. We are a marketing service, not a childcare provider, and nobody honest can guarantee enrollments. We bring qualified tour bookings and waitlist enquiries to licensed centres — the care, the licensing and the enrollment decisions stay entirely yours."
      },
      {
        "q": "Will you film the children at our centre?",
        "a": "Only with written consent from parents, arranged in advance. Most centres choose facility-and-staff-only videos: the rooms, the routine and the director's introduction build real trust without filming a single child, and privacy is protected throughout."
      },
      {
        "q": "What do parents actually search for?",
        "a": "\"Muslim daycare near me\" and \"Islamic preschool near me\" — plus the same searches with their city or neighbourhood added. We build your profile and pages around those searches and around the questions parents ask when they tour."
      },
      {
        "q": "How quickly will enquiries come?",
        "a": "Profile and page fixes can surface within weeks; local rankings build over months. We report enquiries and booked tours monthly in plain numbers, and we never promise a search position or a fixed number of enrollments."
      }
    ],
    "related": [
      "halal-wedding-booking",
      "website-development"
    ],
    "isNew": true,
    "image": "/images/services/muslim-daycare-enrollment-funnel-hero.jpg",
    "imageAlt": "Teacher wearing a hijab reading a picture book to toddlers in a bright Muslim preschool classroom with Arabic alphabet posters",
    "imageCaption": "Parents choose the centre they can picture their child in. A funnel starts by making your centre visible — and then shows the warmth, routine and safety parents are looking for.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/muslim-daycare-enrollment-parent-search.jpg", "alt": "Muslim mother searching on her smartphone for a daycare near her home while her toddler plays beside her", "caption": "The search happens at home, on a phone, usually in the evening. If your centre is not in those results, the tour never happens." },
      { "after": "deliverables", "src": "/images/services/muslim-daycare-enrollment-tour-booking.jpg", "alt": "Daycare director showing a parent around a colourful play area during a centre tour", "caption": "The tour is where enrollment is decided. The funnel's job is to get the right parents through your door — prepared, and already trusting you." }
    ]
  },
  {
    "slug": "halal-wedding-booking",
    "name": "Halal Wedding Booking Funnel",
    "short": "Done-for-you booking funnel for Muslim wedding planners — local search, faith-aware pages and consultation bookings for nikah, mehndi and walima events.",
    "problem": [
      "Engaged couples search online first, and they book consultations with the planners they can find and trust. A Muslim planner who lives on referrals and Instagram alone never reaches the families who do not already know their name — and those families book someone else.",
      "Even when a planner is found, generic wedding pages lose the booking. Muslim families ask specific questions first — separate seating, prayer space, zabiha halal catering, alcohol-free venues, an imam's coordination — and a page that answers none of them gets scrolled past, however beautiful the photos are."
    ],
    "audiences": [
      "Muslim wedding planners in the US, UK and Canada",
      "Nikah and walima planning specialists",
      "Small, family-run planning studios",
      "Planners ready to grow beyond referrals"
    ],
    "deliverables": [
      "Google Business Profile and local SEO built around \"Muslim wedding planner near me\" searches",
      "Faith-aware landing pages: separate seating options, prayer space, halal catering, alcohol-free venues, modest bridal lounge, imam coordination",
      "Inquiry and consultation-booking funnel, with instant reply and polite follow-up",
      "Dignified short videos: venue films and a planner introduction",
      "Couples are filmed only with their written consent — never by default",
      "A free booking visibility audit before you pay anything"
    ],
    "proof": "We start with the free audit: what Muslim families in your city actually see when they search for a planner like you — and which planners they find instead. You judge the funnel on that evidence, not on our promises.",
    "priceLabel": "Funnel build $1,000–$2,000",
    "priceNote": "The one-time funnel build is $1,000–$2,000 depending on scope; ongoing management is $399–$699 per month. For scale: one full-service planning booking is typically worth several thousand dollars in fees, so a single extra booking can cover a year of management. Start with the free audit.",
    "process": [
      {
        "title": "Free booking visibility audit",
        "text": "We search the way couples in your city search and show you what they find — and where your enquiries are leaking away."
      },
      {
        "title": "We build the funnel",
        "text": "Profile, faith-aware pages and a consultation-booking path with instant replies, built around how Muslim families actually choose a planner."
      },
      {
        "title": "Consultations and monthly care",
        "text": "Enquiries turn into booked consultations, and monthly care keeps your visibility growing through engagement season and beyond, with plain reporting."
      }
    ],
    "faqs": [
      {
        "q": "Do you plan weddings or give religious rulings?",
        "a": "Neither. We are a marketing service: we bring qualified consultation bookings to experienced planners. The planning is yours, and religious questions belong to qualified scholars — we never issue rulings or speak on religious matters."
      },
      {
        "q": "Will you film our couples?",
        "a": "Only with their written consent, arranged in advance. Most planners start with venue films and a planner introduction: your work, your venues and your manner build the trust, and no couple's privacy is ever used without permission."
      },
      {
        "q": "How is this different from a generic wedding marketing agency?",
        "a": "The copy. Generic agencies cannot credibly write about separate seating, prayer timings, halal catering vetting or a modest bridal lounge. Those details are exactly what Muslim families check before booking a consultation — so they are written into every page we build."
      },
      {
        "q": "Can you guarantee bookings?",
        "a": "No, and you should be careful with anyone who does. We guarantee the work: visibility, faith-aware pages, a working booking funnel and honest monthly reporting of enquiries and consultations. Whether a consultation becomes a booking depends on your packages, prices and the conversation itself."
      }
    ],
    "related": [
      "muslim-daycare-enrollment",
      "instant-lead-response"
    ],
    "isNew": true,
    "image": "/images/services/halal-wedding-booking-funnel-hero.jpg",
    "imageAlt": "Elegant empty walima reception hall with white and gold decor, floral centrepieces and a decorated stage",
    "imageCaption": "Your work is beautiful — the funnel makes sure couples can find it, trust it, and book a consultation before they find someone else.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/halal-wedding-booking-consultation.jpg", "alt": "Muslim wedding planner in a hijab showing an engaged couple a portfolio and booking calendar during a consultation", "caption": "The consultation is where bookings are won. Everything before it — search, pages, replies — exists to get the right couples into this chair." },
      { "after": "deliverables", "src": "/images/services/halal-wedding-booking-calendar.jpg", "alt": "Wedding planner's desk with an appointment calendar filling with booked consultations, a smartphone and a notebook", "caption": "A funnel you can see: enquiries answered in minutes, consultations in the calendar, and a follow-up for every couple who goes quiet." }
    ]
  },
  {
    "slug": "instant-lead-response",
    "name": "Instant Lead Response & Follow-Up",
    "short": "AI automation that replies to every new enquiry in about a minute, alerts you instantly, and follows up politely until the customer answers — so no lead quietly dies.",
    "problem": [
      "The research is blunt: a study by MIT and InsideSales found a lead contacted within five minutes is about 21 times more likely to qualify than one contacted after thirty minutes — and Velocify's study of millions of leads found first contact within one minute lifts conversion by roughly 391%. Yet the average business takes around 42 to 47 hours to send a first reply, and many leads never receive one at all.",
      "The gap is not effort — it is timing. Enquiries arrive while you are with a patient, on a roof, or asleep. An instant, useful reply closes the gap, an immediate alert lets you step in, and scheduled follow-ups make sure silence never means the end of the conversation."
    ],
    "audiences": [
      "Clinics, dentists and healthcare practices",
      "Real-estate, home-service and trades businesses",
      "Coaches, consultants and small agencies",
      "Any small team that lives on enquiries"
    ],
    "deliverables": [
      "Instant, personal reply to every new form or email enquiry — typically within about a minute",
      "An immediate alert to you on every new lead, so a human can step in at any point",
      "A polite follow-up sequence on a set schedule, until the customer replies or the sequence ends",
      "Every enquiry logged in one place with its status, so nobody is ever contacted twice by mistake",
      "Set up and tested on sample data first, then switched on for your real enquiries",
      "Runs in the cloud around the clock — never on a personal laptop"
    ],
    "proof": "This is the pattern our own outreach system runs on every day: a shared list, paced sending, timed follow-ups and status flags so nobody is contacted twice by mistake. Before any client setup goes live, the same engine is demonstrated on a sample enquiry inbox — you watch the reply leave in under a minute and the follow-ups queue themselves.",
    "priceLabel": "Custom quote",
    "priceNote": "Every setup starts with a free audit of how your enquiries currently arrive and where they wait. Email replies stay free within normal sending limits; if you want replies by SMS or WhatsApp, the small per-message cost on your own account is flagged before anything is switched on — never added quietly.",
    "process": [
      {
        "title": "Free audit first",
        "text": "Tell us how enquiries reach you today. We map where they wait, where they die, and what the honest automated version of the flow looks like."
      },
      {
        "title": "We build and test",
        "text": "The reply, alert and follow-up sequence are built and proven on sample enquiries first — you see the timings work before a real customer is involved."
      },
      {
        "title": "Go live, with monthly care",
        "text": "The automation runs in the cloud day and night. Monthly care keeps it monitored, fixed and improved as your tools change."
      }
    ],
    "faqs": [
      {
        "q": "Can you promise customers will reply or buy?",
        "a": "No. We promise the reply goes out fast and the follow-ups happen on schedule — that much is mechanics, and we prove it before you pay for a live setup. Whether a customer answers or buys depends on your offer, your prices and your market."
      },
      {
        "q": "Will the automatic replies sound robotic?",
        "a": "They are written in your business's voice: they confirm the enquiry, set a clear expectation for a human follow-up, and answer the basic question asked. Anything unusual still reaches you instantly — the alert on every new lead means a person can step in at any moment."
      },
      {
        "q": "What does it run on?",
        "a": "Cloud automation tools such as Make or Zapier, on accounts that stay on around the clock. Your setup never depends on a personal computer being left switched on, and we tell you honestly what the tool itself costs at your volume."
      },
      {
        "q": "Most of our enquiries come by phone. Does this still help?",
        "a": "Often, yes — the same pattern can start from a missed call or a message in many setups. Tell us how your enquiries actually arrive during the free audit and we will map the version that genuinely fits, or tell you honestly if automation is not the answer."
      }
    ],
    "related": [
      "appointment-reminders-reviews",
      "automation"
    ],
    "isNew": true,
    "image": "/images/services/instant-lead-response-automation-hero.jpg",
    "imageAlt": "Business owner smiling at an instant reply notification on his smartphone seconds after a new website enquiry arrives",
    "imageCaption": "The first reply wins. Automation makes yours the first — in about a minute, at 2pm or 2am.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/instant-lead-response-owner-alert.jpg", "alt": "Trades business owner checking a new lead alert on his phone in his workshop", "caption": "You are alerted the moment a lead lands — automation answers instantly, and you stay in control of the conversation." },
      { "after": "deliverables", "src": "/images/services/instant-lead-response-follow-up-sequence.jpg", "alt": "Smartphone on a desk showing a polite sequence of follow-up messages beside a notebook checklist", "caption": "Most leads need several touches. The follow-up sequence sends them politely, on schedule, until the customer replies or the sequence ends." }
    ]
  },
  {
    "slug": "appointment-reminders-reviews",
    "name": "Appointment Reminders & Review Requests",
    "short": "Automatic appointment reminders that cut no-shows, and a polite review request after every visit — set up once, then running on its own in the cloud.",
    "problem": [
      "Every empty chair is revenue that never comes back, and most no-shows are not rudeness — they are forgetting. A systematic review of 29 studies (Hasvold & Wootton) found automated reminders cut missed appointments by about 29% on average; one hospital study recorded 11.2% missed appointments with a text reminder against 18.1% without one.",
      "The same businesses usually have a second quiet leak: happy customers who never leave a review, simply because nobody asked at the right moment. One small automation closes both gaps — the reminder before the visit, and the polite request after it."
    ],
    "audiences": [
      "Clinics, dentists and healthcare practices",
      "Salons, barbers and beauty studios",
      "Physiotherapy, wellness and therapy clinics",
      "Any business that lives by its appointment book"
    ],
    "deliverables": [
      "A reminder the day before every appointment — and on the morning of the visit too, if you want it",
      "An automatic, polite Google review request after each completed visit",
      "A simple list for you: who was reminded, and who was asked",
      "Email-first setup keeps running costs at zero; text reminders are available with per-message costs flagged upfront",
      "Works from your existing booking list — by hand, from a form, or from your booking tool",
      "Runs in the cloud around the clock — never on a personal laptop"
    ],
    "proof": "Our own publishing scheduler runs this exact pattern every day: dated rows in a list, and the action fires at each row's set time whether anyone is watching or not. An appointment list is the same shape. Before any client setup, the demo runs on our own test appointment list and our own review link — every claim is something you can watch working.",
    "priceLabel": "Custom quote",
    "priceNote": "Setup is quoted after a free audit of your booking flow. Email reminders run at zero message cost; if you choose text-message reminders, the small per-message cost sits on your own sending account and is explained before anything is switched on.",
    "process": [
      {
        "title": "Free audit first",
        "text": "Show us how bookings reach your diary today. We map the reminder and review-request flow around the tools you already use."
      },
      {
        "title": "We build and test",
        "text": "The flow is built on a test list with test appointments, so you see reminders and review requests fire at the right times before a real customer is involved."
      },
      {
        "title": "Go live, with monthly care",
        "text": "Reminders and requests run on their own in the cloud. Monthly care keeps the list flow healthy and the wording fresh as your services change."
      }
    ],
    "faqs": [
      {
        "q": "Will reminders eliminate no-shows?",
        "a": "No, and we will never claim that. Across the studies, missed appointments fall by roughly a third on average — they never reach zero, because reminders fix forgetting, and forgetting is only one of the reasons customers miss appointments."
      },
      {
        "q": "Can you guarantee more reviews or a better rating?",
        "a": "No. The automation asks politely at the right moment — shortly after a completed visit, while the experience is fresh. That is all any honest service can do. What customers write, and whether they write at all, remains entirely their choice."
      },
      {
        "q": "How do appointments get into the system?",
        "a": "Each booking becomes one row in a list — added by hand, through a form, or from your booking tool. In the free audit we map whichever route your team already uses, so nobody is asked to change how they work just to feed the automation."
      },
      {
        "q": "What does it cost to run?",
        "a": "The email-first route runs at zero message cost on cloud free tiers, which is enough for most small appointment books. Text messages, if you want them, cost a small amount per message on your own account — always flagged before setup, never added quietly."
      }
    ],
    "related": [
      "instant-lead-response",
      "automation"
    ],
    "isNew": true,
    "image": "/images/services/appointment-reminders-review-requests-hero.jpg",
    "imageAlt": "Patient at a clinic reception smiling at an appointment reminder message on her phone",
    "imageCaption": "One automation, two leaks closed: the reminder that fills the chair, and the request that turns a good visit into a public review.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/appointment-reminders-schedule.jpg", "alt": "Salon appointment book and calendar with the week's bookings and a reminder notification on a smartphone", "caption": "Your appointment book already holds every date the automation needs. Each booking becomes a reminder at exactly the right time." },
      { "after": "deliverables", "src": "/images/services/appointment-reminders-google-reviews.jpg", "alt": "Happy customer leaving a five-star review on her smartphone after a salon visit", "caption": "Asked politely, at the right moment, happy customers do write reviews. The automation simply never forgets to ask." }
    ]
  },
  {
    "slug": "halal-beauty-sales-funnel",
    "name": "Halal Beauty Sales Funnel",
    "short": "Done-for-you sales funnel for small halal skincare and beauty brands — search, product pages, monthly short videos and a repeat-purchase system that turns one-time buyers into refill customers.",
    "problem": [
      "Your customers are searching every day — \"halal serum\", \"halal skincare\", \"wudu-friendly nail polish\" — mostly on Google, TikTok and Instagram. Small halal beauty brands with genuinely good products rarely appear in those results, because their marketing is the founder's own Instagram account, posted between packing orders. The sale goes to a bigger brand with a weaker product and a stronger funnel.",
      "Generic beauty marketing does not solve this. It cannot write credibly about halal certification, alcohol-free and pork-free ingredient lists, or wudu-friendly formulas — and it defaults to a style of beauty content many Muslim customers scroll straight past. Your certification story is your strongest selling point, and almost nobody in beauty marketing knows how to tell it."
    ],
    "audiences": [
      "Small Muslim-owned halal skincare brands in the US, UK and Canada",
      "Halal makeup and wudu-friendly nail polish brands selling online",
      "Shopify, Instagram and TikTok Shop beauty sellers ready to grow beyond the founder's posts",
      "Halal beauty brands with a physical store that also sells online"
    ],
    "deliverables": [
      "Search visibility built around \"halal skincare\", \"halal serum\" and your product searches — plus a Google Business Profile if you have a physical store",
      "Product landing pages that tell your certification and ingredients story clearly — and bundle and gift-set pages for the holiday and Ramadan gifting seasons",
      "12 Shorts and Reels a month: routine demos, founder story and ingredient explainers — product-focused, modestly presented, no over-sexualised beauty content",
      "An email and WhatsApp repeat-purchase funnel: refill reminders timed to how fast a product runs out, and a polite review request after every order",
      "Claims discipline: we only ever present your own certification and your own ingredient list, in your own wording — we never invent skin or medical results",
      "A free beauty visibility audit, plus a free 30-second demo Reel of one hero product, before you pay anything"
    ],
    "proof": "We start with the free audit: we show you what a customer searching for your kind of product actually finds — which brands appear, and why yours is or is not among them — and we make a short demo Reel of your hero product so you can judge our video work before spending anything. You decide on evidence, not promises.",
    "priceLabel": "Funnel setup $1,000–$2,000",
    "priceNote": "The one-time funnel and content setup is $1,000–$2,000 depending on your product range; ongoing management is $399–$699 per month. For scale: skincare is a repeat-purchase product — a refill customer buys again every few weeks, so a funnel that wins a brand 20 to 30 extra orders a month covers the retainer several times over. Start with the free audit and the free demo Reel.",
    "process": [
      {
        "title": "Free beauty visibility audit",
        "text": "We search the way your customers search — Google, TikTok, Instagram — and report which brands they find, what your product pages say and miss, and where your repeat sales are leaking away."
      },
      {
        "title": "We build the funnel",
        "text": "Search pages, product and gift-set landing pages, your monthly video plan and the refill-and-review funnel are built around your certification and your ingredients — the story only your brand can tell."
      },
      {
        "title": "Sales and monthly care",
        "text": "Twelve short videos a month, refill reminders that bring customers back on schedule, and plain monthly reporting: views, orders and repeat purchases, in numbers you can check."
      }
    ],
    "faqs": [
      {
        "q": "Do you guarantee sales or a number of orders?",
        "a": "No, and you should be careful with anyone who does. We guarantee the work: search visibility, product pages that tell your certification story properly, twelve short videos a month, a working repeat-purchase funnel and honest monthly reporting. Whether a viewer becomes a buyer also depends on your products, prices and reviews — the funnel makes sure those strengths are actually seen."
      },
      {
        "q": "Will you make claims about what our products do to skin?",
        "a": "Never. We present your certification and your ingredient list, in your own approved wording — that is where our copy stops. We do not invent results, before-and-after claims or medical promises, for your protection as much as ours: beauty advertising rules in the US, UK and Canada are strict, and your customers trust you because your claims are honest."
      },
      {
        "q": "How do the videos present our products?",
        "a": "Product-first and modest: hands, textures, routines and the founder's story, with ingredient explainers your customers actually ask about. No over-sexualised beauty content, ever — it does not suit your audience, and it is not needed to sell good skincare."
      },
      {
        "q": "We only sell on Instagram and TikTok Shop. Do we need a website funnel?",
        "a": "Social is where your customers discover you, but discovery is not the whole sale. Search pages catch the customers who type \"halal serum\" into Google, and the refill funnel brings buyers back without you posting every day. We build around the channels you already sell on — Shopify, Instagram or TikTok Shop — rather than asking you to start again."
      }
    ],
    "related": [
      "ai-virtual-try-on",
      "ad-videos"
    ],
    "isNew": true,
    "image": "/images/services/halal-beauty-sales-funnel-hero.jpg",
    "imageAlt": "Halal skincare flat lay with two serum bottles, a moisturiser jar and a sunscreen tube beside dates, almonds and green leaves on a cream background",
    "imageCaption": "Beautiful products are not the problem — being found is. The funnel puts your certification story in front of the customers already searching for it.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/halal-beauty-sales-funnel-customer-search.jpg", "alt": "Muslim woman wearing a hijab smiling while shopping for skincare products on her smartphone at home, with skincare bottles on the table beside her", "caption": "The search happens at home, on a phone, usually in the evening. If your brand is not in those results, the order goes to a brand that is." },
      { "after": "deliverables", "src": "/images/services/halal-beauty-sales-funnel-gift-sets.jpg", "alt": "Halal beauty gift sets with ribbons, serum bottles and cream jars arranged in open gift boxes on a boutique shelf", "caption": "Gifting is beauty's biggest season — twice over, with the holidays and Ramadan. Bundle and gift-set pages turn your existing products into the present your customers were looking for." }
    ]
  },
  {
    "slug": "clinic-shorts-retainer",
    "name": "Done-for-You Clinic Shorts",
    "short": "Twelve ready Shorts and Reels a month for small dental, therapy and family clinics — patient education, clinic tours and FAQ answers, filmed and edited for you.",
    "problem": [
      "Small clinics barely post video at all, and the big video agencies do not pitch small clinics in the first place. So the clinic down the road with a phone and a weekly habit looks more modern, more approachable and more trustworthy than a better clinic that posts nothing — and patients choose on what they can see.",
      "Patients now meet a clinic on video before they ever meet it in person. They want to see the room, hear the clinician explain something simply, and feel reassured before they book. A clinic with no Shorts asks a nervous new patient to trust a blank page; a clinic with a steady run of short, honest videos has already answered half their questions."
    ],
    "audiences": [
      "Dental clinics and orthodontic practices",
      "Physiotherapy, wellness and therapy clinics",
      "Family and general practice clinics",
      "Small specialist clinics with a local patient base"
    ],
    "deliverables": [
      "Twelve ready Shorts and Reels every month, edited and captioned for Instagram, Facebook, TikTok and YouTube Shorts",
      "A monthly topic plan built from the questions your patients actually ask — treatments, what to expect, costs explained plainly, and clinic life",
      "Scripts written in plain language from answers you approve — no medical claims beyond your own wording",
      "Clinic tour clips and clinician introductions that show your rooms and your team, not stock footage",
      "Simple filming guidance so your team can capture usable clips on a phone in minutes, without a film crew",
      "You approve every Short before it posts — nothing goes live without your sign-off",
      "Patients are filmed only with their written consent — otherwise videos show your facility and staff only",
      "A short monthly report: what was posted, and what patients responded to"
    ],
    "proof": "You approve every video before it posts, so the first month itself is the proof: twelve Shorts in your clinic's own voice, about your own treatments, with your own team on camera. There is no long setup before you see anything — the work is visible from week one, and you can judge it on your own patients' reactions.",
    "priceLabel": "$300–$500 per month",
    "priceNote": "The monthly retainer is $300–$500 depending on clinic type and volume, and it covers twelve ready Shorts a month. Tell us your clinic type on WhatsApp and we will confirm your exact figure inside that range before you commit to anything.",
    "process": [
      {
        "title": "Tell us about your clinic",
        "text": "Message us on WhatsApp: your clinic type, your services, and the questions patients ask you most. We build your first month's topic plan from those questions."
      },
      {
        "title": "We script, you approve, we edit",
        "text": "We write short scripts in your approved wording, guide your team on filming simple phone clips, and edit everything with captions and music. You approve each Short before posting."
      },
      {
        "title": "Twelve Shorts a month, every month",
        "text": "Shorts go out on a steady schedule across your platforms, and each month's report shows what patients responded to — so the next month's topics get sharper."
      }
    ],
    "faqs": [
      {
        "q": "Do you film our patients?",
        "a": "Only with their written consent, arranged in advance. Most clinics start with clinician explainers, facility tours and FAQ answers — your team and your rooms carry the content perfectly well, and no patient ever appears by default."
      },
      {
        "q": "Do you give medical advice in the videos?",
        "a": "No. Scripts are written from answers you approve, in your own wording, and you sign off every Short before it posts. Clinical judgement stays entirely with your clinicians; we handle the scripting, filming guidance and editing."
      },
      {
        "q": "Do we need cameras or a film crew?",
        "a": "No. A modern phone is enough. We give your team simple filming guidance — light, framing, one take at a time — and we do the editing, captions and formatting. Clinics usually film a month of clips in a couple of short sessions."
      },
      {
        "q": "Will Shorts bring us new patients?",
        "a": "Shorts build the trust that turns a search into a booking: patients arrive already knowing your face, your rooms and your manner. Nobody honest can guarantee patient numbers — bookings also depend on your availability, prices and reputation — but a clinic that patients can see and hear will always beat a clinic they cannot."
      }
    ],
    "related": [
      "video-editing",
      "ad-videos"
    ],
    "isNew": true,
    "image": "/images/services/clinic-shorts-retainer-hero.jpg",
    "imageAlt": "Clinician in a small modern clinic recording a short educational video on a smartphone mounted on a tripod",
    "imageCaption": "The format that works for small clinics: one clinician, one honest answer, one minute — filmed in your own rooms, not a studio.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/clinic-shorts-patient-search.jpg", "alt": "Patient in a clinic waiting room watching a short health-education video on her smartphone", "caption": "This is where the decision starts: a patient watching a clinic's video before ever calling. If your clinic has no video, that moment belongs to someone else." },
      { "after": "deliverables", "src": "/images/services/clinic-shorts-monthly-calendar.jpg", "alt": "Small clinic team reviewing a monthly short-video content calendar on a laptop with a phone on a tripod beside them", "caption": "Twelve Shorts a month is a system, not a scramble: topics planned from real patient questions, filmed in short sessions, approved by you before posting." }
    ]
  },
  {
    "slug": "halal-local-seo",
    "name": "Halal Local SEO",
    "short": "Done-for-you Google Business Profile management, local SEO and review replies for halal restaurants, butcheries and grocery stores — so “halal food near me” searches find you first.",
    "problem": [
      "Halal food businesses are caught between two kinds of agency that both miss them. Secular SEO agencies chase dentists, lawyers and contractors. Islamic marketing agencies mostly serve mosques, charities and Umrah brands. Commercial halal food businesses — restaurants, butcheries, grocery stores — have no dedicated local SEO service, even though their customers search with the highest local intent of all: “halal food near me”, right now, in this city.",
      "Most halal food owners are busy running the business, so their online presence stays thin: an unclaimed or half-finished Google profile, old photos, unanswered reviews, and no pages matching the searches customers actually type. When a hungry family searches, Google shows the business that looks alive — and the better restaurant down the road loses the table to a competitor who simply looks after their profile."
    ],
    "audiences": [
      "Halal restaurants and takeaways in the US, UK and Canada",
      "Halal butcheries and meat shops",
      "Halal grocery stores and supermarkets",
      "Halal cafes, bakeries and dessert shops"
    ],
    "deliverables": [
      "Google Business Profile management: complete, accurate and kept up to date — hours, services, halal certification details as you state them, photos and posts",
      "Local SEO built around the searches your customers actually type: “halal restaurant near me”, “halal butcher” and your city, “halal grocery store”",
      "A review-response system: every review answered promptly and professionally, good or bad, in a tone that fits your business",
      "Local pages on your own website for your main dishes, products and service areas, so Google has something real to rank",
      "Monthly reporting in plain numbers: profile views, calls, direction requests and review trends",
      "A Google Business Profile audit first, so you see exactly where you stand before paying for management"
    ],
    "proof": "We start with the audit: what customers in your city actually see when they search for halal food like yours — which businesses Google shows, and why yours is or is not among them. The US halal food market is estimated at around $290 billion with strong growth, and thousands of independent halal outlets compete in it — the businesses winning that search are the ones whose profiles are complete, reviewed and alive. You judge us on that audit before committing to a retainer.",
    "priceLabel": "$249–$399 per month",
    "priceNote": "The monthly retainer is $249–$399 depending on the number of locations and the scope of review management. Start with the Google Business Profile audit, see where you stand, and decide with the facts in front of you.",
    "process": [
      {
        "title": "Profile audit",
        "text": "We search the way your customers search and report what they find — your profile, your reviews, and the competitors Google is showing instead of you."
      },
      {
        "title": "We optimise and build",
        "text": "Your profile is completed and corrected, local pages are built around real searches, and the review-response system starts. Photos and posts keep the profile looking alive."
      },
      {
        "title": "Monthly management and reporting",
        "text": "Reviews are answered, posts go out, and each month you get plain numbers — views, calls, directions and review trends — so you can see whether the phone is ringing more."
      }
    ],
    "faqs": [
      {
        "q": "Do you guarantee the number one spot on Google?",
        "a": "No, and you should distrust any agency that does. Rankings depend on competition, distance, reviews and many factors outside any agency's control. What we promise is the work that earns visibility: a complete profile, real local pages, answered reviews and steady activity — reported in plain numbers every month."
      },
      {
        "q": "Do you write fake reviews for us?",
        "a": "Never. Fake reviews risk your profile and your reputation, and customers can tell. We build a system that asks real customers for honest reviews and answers every review professionally — the slow, real way that actually holds."
      },
      {
        "q": "Do you cover my city and country?",
        "a": "We serve halal food businesses in the US, UK and Canada, in any city where customers search for halal food locally. Tell us your city on WhatsApp and we will check your local competition as part of the audit."
      },
      {
        "q": "What if I have more than one branch?",
        "a": "Each location gets its own profile management, since customers search branch by branch. Tell us how many locations you have and we will quote the retainer for all of them together."
      }
    ],
    "related": [
      "white-label-seo",
      "website-development"
    ],
    "isNew": true,
    "image": "/images/services/halal-local-seo-hero.jpg",
    "imageAlt": "Customer outside a halal restaurant holding a smartphone showing a local map search for halal food nearby",
    "imageCaption": "The moment that decides dinner: a customer searching “halal food near me” outside your door. Your profile is your shopfront in that moment.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/halal-local-seo-reviews.jpg", "alt": "Halal butcher shop owner reviewing customer feedback on a laptop at the counter", "caption": "Reviews are the new word of mouth — and they are public. Answering them well is often the difference between the shop customers trust and the one they scroll past." },
      { "after": "deliverables", "src": "/images/services/halal-local-seo-family-search.jpg", "alt": "Muslim family in a car checking a phone map to find a nearby halal restaurant", "caption": "Families do not browse for halal food — they search when they are already hungry and already out. Being found in that moment is the whole service." }
    ]
  },
  {
    "slug": "diaspora-language-intake",
    "name": "Diaspora-Language Intake Funnel",
    "short": "Native-language landing pages and WhatsApp intake for US and UK immigration lawyers — Arabic, Urdu and Bengali funnels that turn diaspora searches into qualified case enquiries.",
    "problem": [
      "Immigration law firms in diaspora-heavy cities lose clients they never meet. A family in Dearborn, Houston, New York or London searches for an immigration lawyer in Arabic, Urdu or Bengali — and finds English-only pages from firms that never speak their language. They call the firm whose page feels like home, not the firm with the better record, because trust starts with being understood.",
      "Most law-firm marketing agencies sell English, and sometimes Spanish, and nothing else. They have no native copywriter for Arabic, Urdu or Bengali, so the diaspora segment — roughly 3.7 million Arab Americans alone, plus large Pakistani and Bangladeshi communities — is simply not served. An immigration case is worth $2,000 to $10,000 and a single lead costs $60 to $100, yet no specialist agency builds the funnel these families actually need."
    ],
    "audiences": [
      "Immigration law firms serving Arab, Pakistani and Bangladeshi communities",
      "Solo and small immigration practices in Dearborn, Houston, New York, Chicago, London and Toronto",
      "Firms handling asylum, family petitions, work visas and citizenship cases",
      "Law firms with bilingual staff but English-only marketing"
    ],
    "deliverables": [
      "Native-language landing pages for each language you serve — Arabic, Urdu and Bengali — written by native translators, not machine translation",
      "A WhatsApp intake funnel: clients describe their case in their own language, by text or voice note, and you receive a qualified, organised enquiry",
      "Short explainer videos in the client's language, answering the questions every immigration client asks first",
      "Clear next-step pages: what documents to prepare, what the first consultation covers, and what it costs",
      "A follow-up sequence for enquiries that go quiet, in the client's own language",
      "A short monthly report: enquiries by language, by case type, and by outcome"
    ],
    "proof": "The numbers are the proof, and they are public: about 3.7 million Arab Americans (Arab American Institute estimate), large Pakistani and Bangladeshi diasporas in the same cities, a cost per immigration lead of roughly $60 to $100, and case values of $2,000 to $10,000. We start with a free demo funnel — real pages in your clients' language — so you judge the work before paying for it.",
    "priceLabel": "$750–$1,500 per language + $249–$499/mo",
    "priceNote": "The one-time funnel build is $750–$1,500 per language, plus a $249–$499 monthly intake and support retainer. We start with a free demo funnel so you can see the pages in your clients' language before paying anything.",
    "process": [
      {
        "title": "Tell us your languages and case types",
        "text": "Message us on WhatsApp: which languages your clients speak, which cases you take, and which cities you serve. We map the searches your clients actually type."
      },
      {
        "title": "We build the demo funnel",
        "text": "Native-language landing pages and a WhatsApp intake flow, written by native translators and reviewed with you. You approve every word before it goes live."
      },
      {
        "title": "Intake runs, you take the cases",
        "text": "Enquiries arrive organised by language and case type, with follow-up handled in the client's language. Each month's report shows what came in and where it came from."
      }
    ],
    "faqs": [
      {
        "q": "Do you give legal advice in the funnel?",
        "a": "No. The funnel explains your services, your process and what clients should prepare — in their language. Legal advice stays entirely with your licensed attorneys; we handle the pages, the intake flow and the follow-up."
      },
      {
        "q": "Who writes the Arabic, Urdu and Bengali copy?",
        "a": "Native translators working from your approved wording, never machine translation. Legal terms are checked against your own phrasing, and you approve every page before it goes live."
      },
      {
        "q": "Will this work for my city?",
        "a": "We serve immigration firms in the US, UK and Canada, in any city with a diaspora community searching in its own language. Tell us your city on WhatsApp and we will check your local competition as part of the demo."
      },
      {
        "q": "What if a client messages in a language we do not cover?",
        "a": "The intake flow asks for their language first, so nothing is lost. If a language keeps appearing in your enquiries, we can add that language's pages as a new build — the funnel grows with your client base."
      }
    ],
    "related": [
      "website-development",
      "ad-videos"
    ],
    "isNew": true,
    "image": "/images/services/diaspora-language-intake-hero.jpg",
    "imageAlt": "Immigration lawyer welcoming a Muslim family across a desk in a bright modern law office, with case documents and a laptop",
    "imageCaption": "The first meeting decides the case: a family that is understood in its own language trusts the firm before the paperwork starts.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/diaspora-language-intake-whatsapp.jpg", "alt": "Muslim woman in a hijab sending a voice message in her own language on her smartphone at home in the evening", "caption": "The enquiry usually starts at home, in the evening, in the client's own language — by voice note as often as by text. If your firm cannot receive it, the case goes elsewhere." },
      { "after": "deliverables", "src": "/images/services/diaspora-language-intake-landing-pages.jpg", "alt": "Laptop on an office desk showing a law firm landing page in Arabic script with a WhatsApp contact button, beside a smartphone", "caption": "A landing page in the client's language, with one clear action: message us on WhatsApp. Everything else on the page exists to make that step feel safe." }
    ]
  },
  {
    "slug": "islamic-schools-admissions",
    "name": "Islamic Schools Admissions Funnel",
    "short": "Enrollment landing pages, virtual tour videos and a WhatsApp inquiry funnel for private Islamic schools — so open seats become enrolled families.",
    "problem": [
      "There are more than 300 independent Islamic schools in the US and around 150 in the UK, charging $5,000 to $15,000 a year in tuition — so a single new admission is worth more than a whole year of marketing. Yet most of these schools are marketed by volunteer parents with a Canva account, while the big education agencies chase universities and never pitch a K-12 Islamic school at all.",
      "Parents choose a school the way they choose everything else now: they search, they watch, and they message. A school with no virtual tour, no parent voices and no quick way to ask a question loses the family to the school down the road that simply answers faster. And there is a trust barrier no secular agency can cross: school boards will not hand their children's filming to a random agency, so the schools that need video most are the ones least served."
    ],
    "audiences": [
      "Private Islamic K-12 schools in the US and UK",
      "New Islamic schools filling their first cohorts",
      "Schools with open seats mid-year or in specific grades",
      "School boards planning the next admissions cycle"
    ],
    "deliverables": [
      "Enrollment landing pages for each grade band, answering the questions parents actually ask — fees, curriculum, Islamic environment, transport and admissions dates",
      "A virtual tour video of your school, filmed with your staff and your rooms — not stock footage",
      "Parent-testimonial videos, recorded only with written parental consent",
      "A WhatsApp and chat inquiry funnel, so a parent's question reaches your admissions team in minutes, not days",
      "A free admissions audit first: your website, your Google presence, and what parents find when they search for a school like yours",
      "A short monthly report: enquiries, tours booked, and applications started"
    ],
    "proof": "The arithmetic is the proof: one admission brings $5,000 to $15,000 a year in tuition, against a $399 to $699 monthly retainer — a single enrolled student covers the whole year of marketing. We start with a free admissions audit, so you see exactly what parents find today before deciding anything.",
    "priceLabel": "$1,000–$2,000 build + $399–$699/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $399–$699 monthly admissions marketing retainer. Start with the free admissions audit, see where you stand, and decide with the facts in front of you.",
    "process": [
      {
        "title": "Admissions audit",
        "text": "We search the way your parents search and report what they find — your website, your Google presence, and the schools parents see instead of you."
      },
      {
        "title": "We build the funnel",
        "text": "Enrollment pages, the virtual tour video and the WhatsApp inquiry flow, built with your staff and approved by your board. Children appear only with written parental consent."
      },
      {
        "title": "Monthly admissions marketing",
        "text": "Enquiries are answered fast, tours are booked, and each month you get plain numbers — enquiries, tours and applications started — so you can see whether seats are filling."
      }
    ],
    "faqs": [
      {
        "q": "Will you film our children?",
        "a": "Only with written parental consent, arranged in advance — and most schools never need it. Staff introductions, classroom tours, parent testimonials and facility footage carry the whole funnel, and no child ever appears by default or as a condition of enrollment."
      },
      {
        "q": "Do you guarantee enrollment numbers?",
        "a": "No, and you should distrust any agency that does. Enrollment depends on your fees, your capacity, your reputation and your admissions process — things no agency controls. What we promise is the work that earns enquiries: pages parents trust, a tour they can watch, and replies that arrive in minutes."
      },
      {
        "q": "Do you cover all grades, from kindergarten to high school?",
        "a": "Yes. The funnel is built grade by grade, because a kindergarten parent and a high-school parent ask completely different questions. Tell us your grades on WhatsApp and we will build the pages around them."
      },
      {
        "q": "We are a new school with no parents to film yet. Can this still work?",
        "a": "Yes — new schools are a common starting point. The funnel leads with the virtual tour, staff introductions and your vision for the school, and parent testimonials are added as your first families join. A new school with a clear, honest funnel beats an established school with a silent website."
      }
    ],
    "related": [
      "muslim-daycare-enrollment",
      "video-editing"
    ],
    "isNew": true,
    "image": "/images/services/islamic-schools-admissions-hero.jpg",
    "imageAlt": "Muslim parents in modest dress walking their children toward the entrance of a private Islamic school on a bright morning",
    "imageCaption": "The school run is the decision moment: parents who have already seen the school online arrive at the gate already half-decided.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/islamic-schools-admissions-tour.jpg", "alt": "School principal guiding two Muslim parents through a bright colourful primary school classroom during a tour", "caption": "The tour is where enrollment is decided. The funnel's job is to get the right parents into this room — prepared, and already trusting the school." },
      { "after": "deliverables", "src": "/images/services/islamic-schools-admissions-parents.jpg", "alt": "Muslim parents at home in the evening reviewing a school admissions brochure and a tablet showing a virtual school tour", "caption": "The decision is made at home, in the evening, together. If your school has no tour to watch and no quick way to ask, that evening belongs to another school." }
    ]
  },
  {
    "slug": "janaza-visibility",
    "name": "Janaza Visibility Retainer",
    "short": "Done-for-you local visibility for Muslim funeral homes, Islamic cemeteries and masjid janaza committees — Google Business Profile, local SEO, a 24/7 WhatsApp emergency-inquiry funnel, and dignified pre-need and repatriation pages.",
    "problem": [
      "When a Muslim family loses someone, they search once — usually at night, usually on a phone, usually in distress — and they call the funeral home they can find. A janaza package is worth $3,000 to $8,500, yet the funeral homes and janaza committees that serve these families are often invisible on Google: an unclaimed profile, no reviews answered, no page that explains ghusl, kafan, janaza prayer and repatriation in plain language. The family calls whoever appears first. The missed call is not a lost lead. It is a family in grief, calling someone else.",
      "Generic funeral-marketing agencies exist, but none of them is Muslim-specific. They cannot write credibly about ghusl and kafan, about burial within 24 hours, about repatriation to a home country, or about the difference between a pre-need plan and an emergency call. Their copy sounds like a sales page because it is one. And the businesses themselves are often volunteer-run or small family operations — too small for a big agency to bother with, too sensitive for a loud one to handle. So the gap stays open, in every large city with a Muslim community."
    ],
    "audiences": [
      "Muslim funeral homes in the US, UK and Canada",
      "Islamic cemeteries and burial societies",
      "Masjid janaza committees and volunteer burial teams",
      "Funeral homes serving Muslim families that want to be found by them"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, hours, services and photos, so \"Muslim funeral home near me\" finds you first",
      "Local SEO pages for your city and services — janaza, ghusl and kafan, burial, repatriation, pre-need planning — in language families actually search",
      "A 24/7 WhatsApp emergency-inquiry funnel, so a family that messages at 2 a.m. reaches a real person fast, and no call is ever missed silently",
      "Pre-need planning and repatriation landing pages, written with dignity and approved by you before anything goes live",
      "Review management: asking bereaved families gently, at the right time, and answering every review with care",
      "Dignified informational short videos — \"the first steps after a death\" — in Urdu and English, never filming the deceased",
      "A free visibility audit first: what a grieving family finds when they search for you today",
      "A short monthly report: calls, messages, profile views and direction requests"
    ],
    "proof": "The arithmetic is the proof: a single janaza package is $3,000 to $8,500 — Sacramento Muslim Cemetery lists $3,650 local and $7,000 outside the area, and other established services charge around $3,450 to $4,995 — against a $299 to $499 monthly retainer. One family that finds you instead of a competitor covers months of the retainer. We start with a free visibility audit, so you see exactly what a grieving family finds today before deciding anything.",
    "priceLabel": "$999–$1,999 setup + $299–$499/mo",
    "priceNote": "The one-time setup is $999–$1,999, plus a $299–$499 monthly visibility and support retainer. Start with the free visibility audit, see where you stand, and decide with the facts in front of you.",
    "process": [
      {
        "title": "Visibility audit",
        "text": "We search the way a grieving family searches — at night, on a phone — and report what they find: your profile, your reviews, and the funeral homes Google shows instead of you."
      },
      {
        "title": "We build the system",
        "text": "Profile, local pages, the WhatsApp emergency funnel and the pre-need and repatriation pages, written with dignity and approved by you. The deceased are never filmed, and no family is ever contacted without care."
      },
      {
        "title": "Monthly visibility, reported plainly",
        "text": "Calls and messages answered fast, reviews handled gently, and each month plain numbers — calls, messages, profile views — so you can see whether grieving families are reaching you."
      }
    ],
    "faqs": [
      {
        "q": "Do you film the deceased or grieving families?",
        "a": "Never. The deceased are never filmed, and grieving families are never filmed without their clear, written consent — and almost never at all. The videos we make are facility tours and dignified guides about the first steps after a death, in Urdu and English. Dignity is not a feature of this service; it is the condition of it."
      },
      {
        "q": "Do you guarantee more calls?",
        "a": "No, and you should distrust any agency that does. Calls depend on your reputation, your capacity, your prices and your community standing — things no agency controls. What we promise is the work that earns the call: a profile families can find, pages that answer their questions, and an emergency line that actually answers."
      },
      {
        "q": "We are a small volunteer-run janaza committee. Can this still work?",
        "a": "Yes — volunteer-run committees are a common starting point. The funnel is built around your real capacity: the emergency WhatsApp line, the pre-need pages and the profile all work whether you have two volunteers or twenty staff. A small committee that answers fast beats a large funeral home that does not answer at all."
      },
      {
        "q": "Which cities do you cover?",
        "a": "We serve Muslim funeral homes, cemeteries and janaza committees across the US, UK and Canada — in any city with a Muslim community searching for these services. Tell us your city on WhatsApp and we will check your local competition as part of the free audit."
      }
    ],
    "related": [
      "halal-local-seo",
      "ad-videos"
    ],
    "isNew": true,
    "image": "/images/services/janaza-visibility-hero.jpg",
    "imageAlt": "Peaceful Muslim cemetery garden at golden hour with neat rows of simple headstones, green trees and a quiet path",
    "imageCaption": "The families who need you most are searching at the hardest hour of their lives. Being findable then is not marketing — it is service.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/janaza-visibility-whatsapp.jpg", "alt": "Muslim man at home late at night holding a smartphone showing a WhatsApp chat, in warm lamp light", "caption": "The emergency enquiry usually arrives at night, by message, from a family that cannot wait until morning. If your line does not answer, the family calls someone else." },
      { "after": "deliverables", "src": "/images/services/janaza-visibility-search.jpg", "alt": "Smartphone in a person's hands showing a Google search for a Muslim funeral home near me with a map and business listing", "caption": "One search, one call. The funeral home that appears with a complete profile, answered reviews and a working number is the one the family trusts in that moment." }
    ]
  },
  {
    "slug": "islamic-will-estate-funnel",
    "name": "Islamic Will & Estate Lead Funnel",
    "short": "Done-for-you lead funnel for estate attorneys and Islamic-will services — local SEO, a Faraid-calculator lead magnet and dignified educational videos that turn searches into consultation bookings.",
    "problem": [
      "Only about 26% of Americans have a will, and American Muslims are among the least likely to have one that honours both Sharia and state law — because finding an attorney who understands both is genuinely hard. The families who need this most search \"Islamic will near me\" or \"Sharia-compliant will\" and find almost nothing useful: English-only pages from general estate firms, or small specialists whose marketing is a bare website and a prayer. The attorney who could help them never gets the call.",
      "The specialists exist — small firms and online Islamic-will services — but their marketing is weak, and no large estate-marketing agency targets this niche, because it has neither the religious literacy nor the audience's language. Faraid and mirath cannot be faked in copy, and a secular agency cannot write it credibly. Meanwhile a single estate plan or trust client is worth $1,500 to $5,000 or more, so the funnel that reaches these families pays for itself with a handful of consultations."
    ],
    "audiences": [
      "Estate attorneys who draft Islamic wills and trusts",
      "Small law firms serving Muslim families in the US and UK",
      "Online Islamic-will services that need qualified leads",
      "Attorneys with bilingual staff but English-only marketing"
    ],
    "deliverables": [
      "Local SEO and Google Business Profile optimisation for \"Islamic will near me\" and \"Sharia-compliant will\" searches in your city",
      "Landing pages that explain, in plain language, how a will can honour both Sharia and state law — written with your approved wording, never ours",
      "A free Faraid inheritance calculator-style lead magnet, so families can explore their situation before booking a consultation",
      "A WhatsApp and consultation-booking funnel, so an enquiry reaches your office organised and ready, not as a cold call",
      "Dignified educational short videos — guardianship for children, protecting the family home, planning for elderly parents — no recitation, simple meaning only",
      "A follow-up sequence for enquiries that go quiet, in the family's own language where needed",
      "A free Islamic-will visibility audit first: what a family finds when they search for you today",
      "A short monthly report: enquiries, consultations booked, and where they came from"
    ],
    "proof": "The numbers are the proof, and they are public: only about 26% of Americans have a will (2026, Trust & Will), and a single estate plan or trust client is worth $1,500 to $5,000 or more to an attorney. Against a $299 to $499 monthly retainer, one or two new clients a month cover the whole year of marketing. We start with a free visibility audit, so you see exactly what families find today before deciding anything.",
    "priceLabel": "$750–$1,500 build + $299–$499/mo",
    "priceNote": "The one-time funnel build is $750–$1,500, plus a $299–$499 monthly lead-generation retainer. Start with the free Islamic-will visibility audit, see where you stand, and decide with the facts in front of you.",
    "process": [
      {
        "title": "Visibility audit",
        "text": "We search the way a Muslim family searches — \"Islamic will near me\", \"Sharia-compliant will\" — and report what they find: your website, your Google presence, and the firms families see instead of you."
      },
      {
        "title": "We build the funnel",
        "text": "Landing pages, the Faraid-calculator lead magnet, the booking flow and the explainer videos, built with your approved wording. Legal content stays yours; we handle the pages, the intake and the follow-up."
      },
      {
        "title": "Consultations arrive, you take the cases",
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own diary filling up."
      }
    ],
    "faqs": [
      {
        "q": "Do you write wills or give legal advice?",
        "a": "No — never. We do not draft wills, we do not give legal advice, and we do not give religious rulings. The funnel explains your services, your process and what families should prepare. Legal advice stays entirely with your licensed attorneys, and any Sharia questions stay with your own scholars or Sharia board."
      },
      {
        "q": "Is the Faraid calculator legal advice?",
        "a": "No. It is an educational lead magnet that shows families, in general terms, how Islamic inheritance shares work — clearly labelled as general information, not advice for their situation. The calculator's job is to start a conversation that ends in your consultation room, where real advice belongs."
      },
      {
        "q": "Do you guarantee a number of clients?",
        "a": "No, and you should distrust any agency that does. Consultations depend on your fees, your reputation, your capacity and your local market — things no agency controls. What we promise is the work that earns enquiries: pages families trust, a calculator they actually use, and replies that arrive fast."
      },
      {
        "q": "Which cities do you cover?",
        "a": "We serve Islamic estate attorneys across the US, UK and Canada — in any city with Muslim families searching for a Sharia-compliant will. Tell us your city on WhatsApp and we will check your local competition as part of the free audit."
      }
    ],
    "related": [
      "diaspora-language-intake",
      "website-development"
    ],
    "isNew": true,
    "image": "/images/services/islamic-will-estate-funnel-hero.jpg",
    "imageAlt": "Muslim family sitting with an estate attorney across a desk in a bright modern law office, with documents and a laptop on the desk",
    "imageCaption": "The will is decided in a conversation, not on a form: a family that understands the plan trusts the attorney before the paperwork starts.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/islamic-will-estate-funnel-calculator.jpg", "alt": "Laptop screen showing a simple inheritance calculator web page with a clean form and a pie chart, on a bright office desk beside a notebook", "caption": "The calculator is the door in: a family explores their situation in private, in plain language — and books the consultation when the numbers make sense." },
      { "after": "deliverables", "src": "/images/services/islamic-will-estate-funnel-consultation.jpg", "alt": "Estate attorney explaining a will document to an elderly Muslim couple in a calm law office", "caption": "Guardianship, the family home, elderly parents — the questions are always personal. The funnel's job is to get this conversation booked, with the right attorney." }
    ]
  },
{
    "slug": "muslim-therapist-funnel",
    "name": "Faith-Sensitive Therapist Funnel",
    "short": "Done-for-you client funnel for Muslim therapists and counselling practices — local SEO, Google Business Profile, faith-sensitive landing pages and a private consultation-booking funnel that turns searches into booked sessions.",
    "problem": [
      "A Muslim therapist's next client is searching tonight — quietly, on a phone, probably after the children are asleep — for a therapist who understands their faith, their family, and the pressures they cannot explain to a stranger. A private-pay therapy session is typically around $174, and a long-term client stays for ten sessions or more, so one new client is worth roughly $1,740 or more. Yet the therapists who could help them are almost invisible on Google: a bare directory listing, a thin website, no page that says plainly, in language a Muslim client trusts, \"yes, I understand — and here is how to book.\" The client keeps searching, and books with whoever appears first and feels safe.",
      "Client acquisition is the hardest part of running a therapy practice — a 2026 Heard report found 34% of therapists cite it as their number-one difficulty, with acquisition costs of $215 to $350 per client and six to eighteen months to build a full caseload. Solo Muslim therapists depend almost entirely on directory listings such as the Psychology Today Muslim filter and the ICNA and AMENA directories, and their own marketing is weak. Generic therapist-marketing agencies exist, but none of them is Muslim-specific: they cannot write faith-sensitive copy about privacy, family values and iman-friendly language credibly, and solo practices are too small for a large agency to bother with. So the gap stays open, in every city with a Muslim community."
    ],
    "audiences": [
      "Solo Muslim therapists in the US and UK",
      "Group counselling practices serving Muslim clients",
      "Culturally-competent counsellors whose clients are mostly Muslim",
      "Telehealth therapists licensed across several states"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, services and photos, so \"Muslim therapist near me\" finds you first",
      "Local SEO pages for your city and services — anxiety, family pressure, marriage stress, faith and identity — in language clients actually search",
      "Faith-sensitive landing pages with a privacy-first inquiry form and consultation booking — no client photo or story ever used",
      "Psychology Today Muslim-filter and ICNA/AMENA directory optimisation, so your listings work as hard as your website",
      "Dignified educational short videos — anxiety, family pressure, marriage stress — in your own voice or text-led, with no recitation and no client stories",
      "A follow-up sequence for enquiries that go quiet, in the client's own language where needed",
      "A free visibility audit first: what a Muslim client finds when they search for you today",
      "A short monthly report: enquiries, consultations booked, and where they came from"
    ],
    "proof": "The arithmetic is the proof: a private-pay session is typically around $174 (2025 report), and a long-term client stays for ten sessions or more — roughly $1,740 or more per client — against a $299 to $499 monthly retainer. Two or three new clients cover the retainer, and a 2026 Heard report found 34% of therapists call client acquisition their number-one difficulty, with six to eighteen months to build a full caseload. We start with a free visibility audit, so you see exactly what a Muslim client finds today before deciding anything.",
    "priceLabel": "$750–$1,500 build + $299–$499/mo",
    "priceNote": "The one-time funnel build is $750–$1,500, plus a $299–$499 monthly lead-generation retainer. Start with the free visibility audit, see where you stand, and decide with the facts in front of you.",
    "process": [
      {
        "title": "Visibility audit",
        "text": "We search the way a Muslim client searches — \"Muslim therapist near me\", \"Muslim counsellor\" plus your city — and report what they find: your website, your Google presence, your directory listings, and the therapists clients see instead of you."
      },
      {
        "title": "We build the funnel",
        "text": "Profile, local pages, the privacy-first booking flow, directory optimisation and the explainer videos, built with your approved wording. Only your own license and credentials are ever shown, and no client is ever featured in any form."
      },
      {
        "title": "Consultations arrive, you take the clients",
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own diary filling up."
      }
    ],
    "faqs": [
      {
        "q": "Do you provide therapy?",
        "a": "No — never. We do not provide therapy, counselling or any clinical service, and we make no medical or outcome claims of any kind. We build the funnel that brings you qualified enquiries and consultation bookings. The therapy itself, and every clinical decision, stays entirely with you as the licensed therapist."
      },
      {
        "q": "Do you guarantee a number of clients?",
        "a": "No, and you should distrust any agency that does. Consultations depend on your fees, your specialisms, your reputation, your capacity and your local market — things no agency controls. What we promise is the work that earns enquiries: pages clients trust, listings they can find, and replies that arrive fast."
      },
      {
        "q": "Will you use my clients' photos or stories in marketing?",
        "a": "Never. No client photo, story, testimonial or identifying detail is ever used in any page, video or post we make for you — not with permission, not anonymised, not at all. Your marketing is built entirely from your own expertise, your credentials and your own voice."
      },
      {
        "q": "Which cities do you cover?",
        "a": "We serve Muslim therapists across the US, UK and Canada — including New York and New Jersey, Houston, Chicago, Dearborn in Michigan, London and Toronto — in any city with Muslim clients searching for a faith-sensitive therapist. Telehealth practices can take clients across several states."
      }
    ],
    "related": [
      "diaspora-language-intake",
      "halal-local-seo"
    ],
    "isNew": true,
    "image": "/images/services/muslim-therapist-funnel-hero.jpg",
    "imageAlt": "Calm warm therapy office where a Muslim woman therapist in hijab listens attentively to a client seated across a small wooden desk, soft daylight and plants",
    "imageCaption": "The consultation is decided in a quiet room, not on a loud advert: a client who feels understood before the first session is a client who books.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/muslim-therapist-funnel-search.jpg", "alt": "Hands holding a smartphone showing a Google search for Muslim therapist near me with map results and business listings", "caption": "One search, one decision. The therapist whose profile is complete, whose reviews are answered and whose booking works is the one the client trusts in that moment." },
      { "after": "deliverables", "src": "/images/services/muslim-therapist-funnel-consultation.jpg", "alt": "Therapist's desk in soft morning light with a laptop showing a booking calendar, a closed notebook, a pen and a cup of tea", "caption": "The booking is the whole funnel in miniature: one clear action, one honest price range, and a practice that answers. Everything else exists to make this moment easy." }
    ]
  },
{
    "slug": "halal-homebuyer-funnel",
    "name": "Halal Homebuyer Funnel",
    "short": "Done-for-you buyer funnel for Muslim realtors and halal-financing loan officers — local SEO, Google Business Profile, riba-free financing explainer pages, and a pre-approval inquiry and WhatsApp funnel that turns searches into qualified buyers.",
    "problem": [
      "A Muslim family buying its first home searches once — usually in the evening, usually on a phone, usually after months of saving — and they call the realtor they can find who understands their one non-negotiable: no riba. A buyer-agent commission on a $400,000 home is worth about $9,680 gross at the Q3 2025 rate of roughly 2.42%, yet the Muslim realtors who serve these families are often invisible on Google: an unclaimed profile, no page that explains riba-free financing in plain language, no way to ask a question without a cold call. The family calls whoever appears first. The missed call is not a lost lead. It is a family buying the biggest purchase of their life from someone else.",
      "Generic real-estate marketing agencies exist, but none of them is Muslim-specific. They cannot explain Musharaka, Murabaha and Ijara credibly, they cannot write about the difference between a conventional mortgage and a riba-free purchase plan without sounding like a brochure, and they cannot speak to a family whose first question is whether the financing is halal. Meanwhile the market is proven and large — Guidance Residential alone has financed more than $12 billion for 45,000 families across 38 states, and US halal home financing is roughly a $500 million-a-year market — yet the realtors who could serve these buyers buy expensive Zillow and Redfin leads instead of being found by the families already searching for them. So the gap stays open, in every large city with a Muslim community."
    ],
    "audiences": [
      "Muslim realtors in the US, UK and Canada",
      "Halal-financing loan officers and mortgage brokers",
      "Real estate teams serving Muslim buyers in diaspora cities",
      "Agents with bilingual staff but English-only marketing"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, hours, services and photos, so \"Muslim realtor near me\" finds you first",
      "Local SEO pages for your city and services — halal mortgage, riba-free financing, first-time buyer — in language families actually search",
      "Riba-free financing explainer landing pages (Musharaka, Murabaha, Ijara in simple words), written with your approved wording and your lender's own Shariah board reference — never ours",
      "A pre-approval inquiry and WhatsApp funnel, so a buyer who messages in the evening reaches a real person fast, and no enquiry is ever missed silently",
      "First-time buyer short videos — \"first home, without riba — what are the steps\" — in English, Urdu and Arabic where your buyers need it",
      "Review management: asking happy buyers at the right time, and answering every review with care",
      "A free visibility audit first: what a Muslim buyer finds when they search for you today",
      "A short monthly report: enquiries, pre-approval calls, profile views and direction requests"
    ],
    "proof": "The arithmetic is the proof: at the Q3 2025 buyer-agent commission of roughly 2.42%, a single $400,000 home is worth about $9,680 gross buyer-side before the brokerage split — against a $399 to $699 monthly retainer. One closed deal covers a whole year of the funnel. And the market is proven: Guidance Residential alone has financed more than $12 billion for 45,000 families across 38 states. We start with a free visibility audit, so you see exactly what a Muslim buyer finds today before deciding anything.",
    "priceLabel": "$1,000–$2,000 build + $399–$699/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $399–$699 monthly lead-generation retainer. Start with the free visibility audit, see where you stand, and decide with the facts in front of you.",
    "process": [
      {
        "title": "Visibility audit",
        "text": "We search the way a Muslim buyer searches — \"Muslim realtor near me\", \"halal mortgage near me\" — and report what they find: your profile, your reviews, and the agents Google shows instead of you."
      },
      {
        "title": "We build the funnel",
        "text": "Profile, local pages, the riba-free financing explainers, the pre-approval and WhatsApp funnel and the first-time buyer videos, built with your approved wording and your lender's own Shariah board reference. We never provide financing and never give a fatwa."
      },
      {
        "title": "Qualified buyers arrive, you close the deals",
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own diary filling up."
      }
    ],
    "faqs": [
      {
        "q": "Do you provide halal home financing or give a fatwa?",
        "a": "No — never. We do not provide financing, we do not arrange loans, and we do not give fatwas or religious rulings. The funnel sends qualified buyers to you, a licensed agent, and to your licensed lender. Any Shariah reference on the pages is your lender's own Shariah board, never ours."
      },
      {
        "q": "Do you guarantee closed deals?",
        "a": "No, and you should distrust any agency that does. Closings depend on your listings, your prices, your local market and the buyer's financing — things no agency controls. What we promise is the work that earns the enquiry: pages buyers trust, financing explained plainly, and replies that arrive fast."
      },
      {
        "q": "I am a solo realtor. Can this still work?",
        "a": "Yes — solo agents are a common starting point. The funnel is built around your real capacity: the local pages, the financing explainers and the WhatsApp flow all work whether you are one agent or a whole team. A solo realtor who answers fast beats a large brokerage that does not answer at all."
      },
      {
        "q": "Which cities do you cover?",
        "a": "We serve Muslim realtors and halal-financing loan officers across the US, UK and Canada, with a focus on diaspora cities — Houston, Dearborn, Chicago, New Jersey and New York, Dallas, London and Toronto. Message us on WhatsApp with your city and we will check your local competition as part of the free audit."
      }
    ],
    "related": [
      "islamic-will-estate-funnel",
      "halal-local-seo"
    ],
    "isNew": true,
    "image": "/images/services/halal-homebuyer-funnel-hero.jpg",
    "imageAlt": "Happy Muslim family with two children standing outside a modern suburban house as a realtor hands over the keys, in bright daylight",
    "imageCaption": "The keys change hands in a moment — but the family chose their realtor months earlier, in a search. Being found then is the whole funnel.",
    "extraImages": [
      { "after": "problem", "src": "/images/services/halal-homebuyer-funnel-search.jpg", "alt": "Smartphone in a person's hands showing a Google search for Muslim realtor near me with map results and business listings", "caption": "One search, one call. The realtor who appears with a complete profile, answered reviews and a working number is the one the family trusts in that moment." },
      { "after": "deliverables", "src": "/images/services/halal-homebuyer-funnel-keys.jpg", "alt": "Close-up of house keys being handed over a wooden table with a small sold sign and purchase documents, in warm light", "caption": "A single closed deal covers a whole year of the funnel. The pages, the explainers and the fast replies exist to make that handover happen." }
    ]
  },
  {
    "slug": "gbp-fix-review-system",
    "name": "GBP Fix + Review System",
    "short": "A one-off fix of your Google Business Profile — categories, hours, photos, services, Q&A and posts — plus a simple review system (QR counter card, staff script, reply templates) so the customers already searching for you choose you. Starts with a free diagnostic scorecard.",
    "problem": [
      "When a customer searches “near me” on Google, they never see your shop, your kitchen or your waiting room. They see a profile: a star rating, a review count, a handful of photos, and whether the owner ever replies. That profile is where the decision is made — and for most independent businesses it is half-finished: wrong category, missing hours, three old photos, no services listed, and reviews sitting unanswered since last year.",
      "Meanwhile the competitor a few streets away — not better, just better-kept — has 200 reviews, fresh photos and replies on everything, so Google shows them first and customers call them first. Research backs up how hard this hits: BrightLocal's 2026 consumer survey found that 47% of customers will not even consider a business with fewer than 20 reviews. Most owners know reviews matter; what they do not have is the time to fix the profile properly or a system that keeps new reviews coming. That is exactly the gap this service fills — a one-off fix, not another monthly retainer."
    ],
    "audiences": [
      "Single-location restaurants and takeaways, including halal food businesses in the UK, US and Canada",
      "Plumbers, HVAC and other home-service trades with one service area",
      "Dentists, clinics and other single-location practices",
      "Independent shops, salons and local services with a thin or neglected Google profile"
    ],
    "deliverables": [
      "A free diagnostic scorecard first: your profile scored on 10 checks against your top local competitor, with the real numbers from Google Maps — before any price is mentioned",
      "Categories corrected: the right primary category and useful secondary categories",
      "Business hours and special hours set accurately — holidays, Ramadan hours and seasonal changes included where they apply",
      "Services list built out, with prices where you provide them",
      "Photos uploaded and put in the right order, cover and logo set, and a simple phone shot list for any gaps we flag",
      "Website, menu and booking links checked and fixed",
      "Attributes set where true — halal, women-owned, wheelchair access, payment methods",
      "Q&A seeded with the five questions customers actually ask, answered in your words",
      "Business description rewritten (750 characters, keyword-natural, no stuffing) and your first two Google Posts written and published",
      "Review system: your direct review link created and tested, a print-ready QR card for the counter or receipt, one polite sentence for staff to say at payment, and a WhatsApp/SMS template to send after a job",
      "Review reply templates — three positive, two neutral, two negative — calm and professional, plus a one-page sheet on checking and replying to new reviews each week",
      "Before-and-after screenshots of your profile, so you can see every change we made"
    ],
    "proof": "The proof is the scorecard itself. Before you pay anything, we score your profile against your top local competitor on 10 checks — review count, rating, photos, hours, categories, services, Q&A, owner replies, recent posts and your website link — using your real, same-day Google Maps numbers. You keep the scorecard either way, and you can hand it to anyone. If we cannot complete the fixes listed in your scorecard, you pay nothing further and we refund your deposit. Completed work that is live on your profile is not refundable — you can see every change before the balance is due.",
    "priceLabel": "$149–$299 one-off (+ optional care plan $99–$199/mo)",
    "priceNote": "The fix is $149 for a single small profile, $199 standard, and $299 for a fuller profile with multiple service areas or heavy photo work. The exact fixed price is quoted after your free scorecard — never before, and never hourly. Terms are 50% upfront via Payoneer and 50% on delivery. The optional care plan ($99–$199/month, billed monthly in advance) covers a weekly Google Post, review replies drafted for your approval, a one-page monthly report and photo and hours updates as needed.",
    "process": [
      {
        "title": "Free scorecard",
        "text": "Message us on WhatsApp with your business name and city. We check your profile against your top local competitor on 10 checks and send you the one-page scorecard — free, no obligation, yours to keep."
      },
      {
        "title": "Fixed quote and access",
        "text": "If you want the fixes done, we quote one fixed price from the scorecard. On your go-ahead and the 50% upfront payment, you add us as a Manager on your Google Business Profile — we never ask for your password."
      },
      {
        "title": "The fix and the review system",
        "text": "We work through the scorecard in order — categories, hours, links, services, attributes, description, photos, Q&A, posts — then set up the review link, QR card, staff script and reply templates. Our target is seven days from upfront payment to handover; most simple profiles are done in two to three."
      },
      {
        "title": "Walkthrough and optional care plan",
        "text": "You receive before-and-after screenshots and a short walkthrough: what changed, how to use the QR card and templates, and how to check reviews weekly. If you want us to keep it running, the care plan is offered once — a no is final, with no repeat pitching."
      }
    ],
    "faqs": [
      {
        "q": "What exactly is included in the fix?",
        "a": "Everything on your scorecard that is marked fixable: categories, hours and special hours, services list, photo upload and ordering with a shot list for gaps, website/menu/booking links, true attributes, your Q&A seeded with five real customer questions, a rewritten business description, and your first two Google Posts. The review system is included in the same price: tested review link, print-ready QR card, a staff request script, an after-job message template, seven review reply templates and a one-page weekly routine sheet."
      },
      {
        "q": "How is my price decided?",
        "a": "From the scorecard, not from a sales call. A single small takeaway or shop profile is $149, a standard profile is $199, and a fuller profile with multiple service areas or heavy photo work is $299. We quote the exact fixed figure after the free diagnostic and before you commit to anything, so the price depends only on how much of the scorecard you want done. Payment is 50% upfront via Payoneer and 50% on delivery."
      },
      {
        "q": "Do you need my Google password?",
        "a": "Never — no exceptions. You add our working email as a Manager on your Google Business Profile, which lets us make the edits while you stay the owner and can remove us at any time. If you would rather not grant access at all, we can supply a guided fix list from your scorecard instead, and you or your staff apply the changes yourselves."
      },
      {
        "q": "Do you guarantee more reviews or the top spot on Google?",
        "a": "No, and you should distrust any agency that does. Rankings and review counts depend on your customers, your competition and Google — things no agency controls. What we guarantee is the work: a complete, accurate profile and a working system that makes it easy for real customers to leave honest reviews. We never buy reviews, write fake ones or use gating tricks — those risk your profile, and they are against Google's rules and ours."
      },
      {
        "q": "What does the care plan add?",
        "a": "The care plan ($99–$199 a month, billed monthly in advance) keeps the profile alive after the fix: one Google Post written and published every week, replies to new reviews drafted for your approval — or posted directly if you grant that permission — a one-page monthly report covering review count, rating, search views and calls or directions from your profile insights, and photo and hours updates whenever they change, including holiday and Ramadan hours. It is optional, and you can start or stop it month to month."
      }
    ],
    "related": [
      "halal-local-seo",
      "appointment-reminders-reviews"
    ],
    "isNew": true,
    "image": "/images/services/gbp-fix-review-system-hero.jpg",
    "imageAlt": "Owner of a small halal takeaway behind his counter in the evening, looking at a smartphone showing his Google Maps business listing and star rating",
    "imageCaption": "Your profile is your shopfront in the moment a customer searches. This service fixes that shopfront — once, properly — and sets up the system that keeps reviews coming.",
    "extraImages": [
      {
        "after": "problem",
        "src": "/images/services/gbp-fix-review-system-reviews.jpg",
        "alt": "Smartphone on a restaurant counter beside the till, its screen showing customer reviews with star ratings and no owner replies",
        "caption": "Unanswered reviews are a public conversation you are not part of. Customers read the silence as an answer — and choose the business that replies."
      },
      {
        "after": "deliverables",
        "src": "/images/services/gbp-fix-review-system-qr-card.jpg",
        "alt": "Printed counter card with a large QR code and five stars standing on a shop counter beside the card payment terminal",
        "caption": "The review system in one object: a QR card at the till, one polite sentence from staff, and a short link that takes a happy customer straight to the review box."
      }
    ]
  }  ,
  {
    "audiences": [
      "Muslim home-care agencies in the US and UK",
      "Halal home-care providers serving elderly clients at home",
      "Small care agencies with bilingual staff but English-only marketing",
      "New home-care agencies launching in diaspora cities"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, services, hours and photos, so \"Muslim home care near me\" and \"halal home care\" find you first",
      "Local SEO pages for your city and services — elderly care at home, dementia support, respite care, live-in care — in the words families actually search",
      "Faith-aware landing pages: halal meals, prayer-time respect, same-gender caregiver option, Urdu and Arabic-speaking caregiver matching — written with your approved wording",
      "A family inquiry and callback funnel built for the adult child who decides: one clear action, a same-day callback promise, and a plain explanation of what the first assessment covers",
      "Dignified trust-building short videos — caregiver introductions and dignity-first messaging — with no client ever filmed, photographed or named",
      "A free family visibility audit first: what a Muslim family finds when they search for home care in your city today",
      "Review management: asking grateful families at the right time, and answering every review with care",
      "A short monthly report: enquiries, callbacks, assessments booked, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Young Muslim woman in hijab sitting on a sofa at home in the evening, holding a smartphone and searching for home care for her elderly father",
        "caption": "One search, one decision, made late at night by a daughter who is worried and in a hurry. The agency with a complete profile and a working callback is the one she trusts in that moment.",
        "src": "/images/services/faith-aware-home-care-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Friendly care agency coordinator at a bright office desk on a phone call with a family, smiling warmly, with a laptop showing a care schedule calendar",
        "caption": "The callback is the whole funnel in miniature: one clear action, one honest answer, and an agency that picks up. Everything else exists to make this moment easy.",
        "src": "/images/services/faith-aware-home-care-family-call.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We do not provide home care, nursing or any medical service, and we make no medical or outcome claims of any kind. We build the funnel that brings you qualified family enquiries and assessment bookings. The care itself, and every clinical decision, stays entirely with you as the licensed agency.",
        "q": "Do you provide home care or medical care?"
      },
      {
        "a": "No, and you should distrust any agency that does. Enquiries depend on your fees, your capacity, your reputation and your local market — things no agency controls. What we promise is the work that earns enquiries: pages families trust, a profile they can find, and callbacks that arrive fast.",
        "q": "Do you guarantee a number of new clients?"
      },
      {
        "a": "Never. No client photo, video, story or identifying detail is ever used in any page, video or post we make for you — not with permission, not anonymised, not at all. Your marketing is built entirely from your own caregivers' introductions, your service and your own voice.",
        "q": "Will you film or photograph our clients for marketing?"
      },
      {
        "a": "We serve Muslim home-care agencies across the US, UK and Canada — including New York and New Jersey, Houston, Chicago, Dearborn in Michigan, London, Birmingham and Toronto — in any city with Muslim families searching for faith-aware care at home. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/faith-aware-home-care-hero.jpg",
    "imageAlt": "Kind professional home caregiver in a modest uniform gently helping a smiling elderly Muslim man with a white beard walk in a bright living room at home",
    "imageCaption": "Care is decided by the family, at home, in a quiet moment — and the agency that is found first, and sounds like it understands, is the one that gets the call.",
    "isNew": true,
    "name": "Faith-Aware Home-Care Funnel",
    "priceLabel": "$1,000–$2,000 build + $499–$799/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $499–$799 monthly lead-generation retainer. Start with the free family visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A daughter in New Jersey is searching tonight — quietly, on her phone, after putting her own children to bed — for care for her father, who lives alone and is starting to struggle with the stairs. She types \"Muslim home care near me\" and finds three agencies. Two have no website at all. The third has a generic page that says nothing about halal meals, prayer times, a same-gender caregiver, or a caregiver who speaks Urdu. She closes the tab and calls the agency her cousin mentioned instead. That agency did not win on care quality. It won on being findable — and on sounding like it understood the family.",
      "The arithmetic makes the invisibility expensive. A typical home-care client is worth about $18,200 in revenue over six months at the 2025 median of $35 an hour for 20 hours a week — roughly $6,370 in gross profit — so one new family covers a whole year of a marketing retainer several times over. Yet Muslim home-care agencies in the US and UK are almost invisible on Google: an unclaimed profile, no page that answers a family's faith questions, no way to ask for a callback without a cold call. Generic home-care marketing agencies exist, but their copy is English-generic: they cannot write credibly about halal meals, prayer schedules, modesty and gender preference, or language-matched caregivers, and small Muslim agencies are too small for a large agency to bother with. So the gap stays open, in every city with an ageing Muslim community."
    ],
    "process": [
      {
        "text": "We search the way a worried adult child searches — \"Muslim home care near me\", \"halal home care\" plus your city — and report what they find: your profile, your reviews, and the agencies Google shows instead of you.",
        "title": "Family visibility audit"
      },
      {
        "text": "Profile, local pages, the faith-aware landing pages, the callback funnel and the dignified introduction videos, built with your approved wording. Only your own licensed service and your own caregivers are ever shown, and no client is ever featured in any form.",
        "title": "We build the funnel"
      },
      {
        "text": "Enquiries arrive organised, with the callback handled fast. Each month's report shows what came in and where it came from, so you can judge the funnel on your own assessment diary filling up.",
        "title": "Families reach you, you take the assessments"
      }
    ],
    "proof": "The arithmetic is the proof: at the 2025 median of $35 an hour for 20 hours a week, a typical home-care client is worth about $18,200 in revenue over six months — roughly $6,370 in gross profit — against a $499 to $799 monthly retainer. One new family covers a whole year of the funnel several times over, and the diaspora population that needs this care grows every year. We start with a free family visibility audit, so you see exactly what a Muslim family finds today before deciding anything.",
    "related": [
      "muslim-therapist-funnel",
      "halal-local-seo"
    ],
    "short": "Done-for-you family inquiry funnel for Muslim home-care agencies — local SEO, Google Business Profile, faith-aware landing pages and a callback funnel that turns worried adult children into booked care assessments.",
    "slug": "faith-aware-home-care"
  },
  {
    "audiences": [
      "Independent Muslim financial advisors in the US and UK",
      "Solo CFPs and small RIAs serving Muslim clients",
      "Sharia-compliant wealth planners with a $100,000+ client base",
      "Advisors with bilingual staff but English-only marketing"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, services, hours and photos, so \"halal financial advisor near me\" and \"Sharia-compliant financial planner\" find you first",
      "Local SEO pages for your city and services — retirement, halal 401(k) and IRA allocation, zakat on investments, children's education funds — in the words Muslim investors actually search",
      "Faith-aware landing pages written in riba-free language, with your approved wording and your own Shariah board reference — never ours",
      "A free Halal Portfolio Check lead magnet: a screening-summary style report on the investor's current holdings, built with your approved method",
      "A consultation-booking funnel, so an investor who messages in the evening reaches a real person fast, and no enquiry is ever missed silently",
      "Halal-investing explainer short videos — \"retirement without riba — what are the steps\" — in English, Urdu and Arabic where your clients need it",
      "A free advisor visibility audit first: what a Muslim investor finds when they search for you today",
      "A short monthly report: enquiries, consultations booked, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Muslim man in his thirties sitting on a sofa at home in the evening, holding a smartphone and searching for a halal financial advisor",
        "caption": "One search, one decision. The advisor who appears with a complete profile, a plain explanation of halal investing and a working booking is the one the family trusts in that moment.",
        "src": "/images/services/halal-wealth-funnel-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Financial advisor's desk in soft morning light with a laptop showing a simple investment portfolio dashboard, a closed notebook, a pen and a cup of tea",
        "caption": "The consultation is the whole funnel in miniature: one clear action, one honest explanation, and an advisor who answers. Everything else exists to make this moment easy.",
        "src": "/images/services/halal-wealth-funnel-consultation.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We do not give financial advice, we do not recommend investments, and we make no returns claims of any kind. We build the funnel that brings you qualified consultation bookings. The advice itself, and every investment decision, stays entirely with you as the licensed advisor.",
        "q": "Do you give financial advice or recommend investments?"
      },
      {
        "a": "No, and you should distrust any agency that does. Consultations depend on your fees, your minimums, your reputation and your local market — things no agency controls. What we promise is the work that earns enquiries: pages investors trust, a profile they can find, and replies that arrive fast.",
        "q": "Do you guarantee a number of new clients?"
      },
      {
        "a": "Yes — solo advisors are a common starting point. The funnel is built around your real capacity: the local pages, the Portfolio Check and the booking flow all work whether you are one advisor or a whole firm. A solo advisor who answers fast beats a large firm that does not answer at all.",
        "q": "I am a solo advisor. Can this still work?"
      },
      {
        "a": "We serve independent Muslim financial advisors and Sharia-compliant wealth planners across the US, UK and Canada, with a focus on diaspora cities — Houston, Dallas, Dearborn, Chicago, New Jersey and New York, London and Toronto. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/halal-wealth-funnel-hero.jpg",
    "imageAlt": "Professional Muslim financial advisor in a suit explaining a retirement plan on a laptop to a young Muslim couple in a bright modern office",
    "imageCaption": "The first meeting is decided in a search, not in an office: an investor who finds an advisor who understands riba-free investing is an investor who books.",
    "isNew": true,
    "name": "Halal Wealth Client Funnel",
    "priceLabel": "$1,000–$2,000 build + $499–$799/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $499–$799 monthly lead-generation retainer. Start with the free advisor visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A Muslim family in Houston has finally saved enough to think seriously about retirement, and they have one non-negotiable: no riba. They search \"halal financial advisor near me\" and find robo-advisors with $100,000 minimums, fund pages full of jargon, and one independent advisor whose profile is bare and whose website says nothing about zakat on investments, halal allocation for a 401(k), or an education fund without interest. They give up and stay with a conventional advisor they do not fully trust. The independent advisor who could have helped them never knew the family existed — because the family could not find him.",
      "The arithmetic makes the invisibility expensive. A single $100,000 client is worth roughly $1,000 a year in recurring fees at a typical 1% annual rate, and clients stay for years — so one new client covers a whole year of a marketing retainer. Yet independent Muslim advisors are almost invisible on Google: an unclaimed profile, no page that explains halal investing in plain words, no way to book a consultation without a cold call. Halal investing products exist — Wahed, Amana and Iman funds, ShariaPortfolio and NoorVest with $100,000 minimums — but they sell products, not advisors. Generic advisor-marketing agencies exist, but their copy is English-generic, they cannot write credibly about riba, purification, AAOIFI and Dow Jones Islamic screens or zakat on investments, and their retainers run $3,500 to $12,000 a month. So the gap stays open, in every city with Muslim families saving for the future."
    ],
    "process": [
      {
        "text": "We search the way a Muslim investor searches — \"halal financial advisor near me\", \"Sharia-compliant financial planner\" plus your city — and report what they find: your profile, your reviews, and the advisors Google shows instead of you.",
        "title": "Advisor visibility audit"
      },
      {
        "text": "Profile, local pages, the faith-aware landing pages, the Halal Portfolio Check lead magnet and the consultation-booking funnel, built with your approved wording and your own Shariah board reference. We never give financial advice and never recommend an investment.",
        "title": "We build the funnel"
      },
      {
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own consultation diary filling up.",
        "title": "Investors reach you, you take the consultations"
      }
    ],
    "proof": "The arithmetic is the proof: a single $100,000 client is worth roughly $1,000 a year in recurring fees at a typical 1% annual rate, and clients stay for years — against a $499 to $799 monthly retainer that is five to ten times cheaper than the $3,500 to $12,000 a month generic advisor-marketing agencies charge. One new client covers a whole year of the funnel, and every year brings new Muslim investors searching. We start with a free advisor visibility audit, so you see exactly what a Muslim investor finds today before deciding anything.",
    "related": [
      "islamic-will-estate-funnel",
      "halal-local-seo"
    ],
    "short": "Done-for-you client funnel for independent Muslim financial advisors and Sharia-compliant wealth planners — local SEO, Google Business Profile, faith-aware landing pages and a consultation-booking funnel that turns searches into booked first meetings.",
    "slug": "halal-wealth-funnel"
  },
  {
    "audiences": [
      "Women-only fitness studios in the US, UK, Canada and Australia",
      "Muslim-friendly gyms and modest Pilates and strength studios",
      "Female-only swim, yoga and barre studios with women-only hours",
      "Studio owners who are trainers first and marketers second"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, women-only hours, services and photos, so \"women only gym near me\" and \"Muslim women gym near me\" find you first",
      "Local SEO pages for your city and your classes — women-only Pilates, modest strength training, female-coach sessions, prayer-friendly timings — in the words Muslim women actually search",
      "Privacy-first landing pages: no cameras, women-only hours, female coaches, modest dress welcome, and a clear statement of who can and cannot enter — written in your own approved words",
      "A free-trial and first-class booking funnel, so a woman who messages in the evening reaches a real person fast, and no enquiry is ever missed silently",
      "Facility-only short videos — studio tour, female coach introduction, class timetable walkthrough — never filming members, because privacy is the selling point",
      "A free member visibility audit first: what a Muslim woman finds when she searches for a women-only gym in your city today",
      "A short monthly report: enquiries, trial classes booked, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Muslim woman wearing a hijab sitting on a sofa at home in the evening, holding a smartphone and searching for a women-only gym near her",
        "caption": "One search, one decision. The studio that appears with a complete profile, a plain privacy promise and a working trial booking is the one she trusts in that moment.",
        "src": "/images/services/modest-member-funnel-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Friendly female fitness coach in modest athletic wear standing at the reception desk of a bright women-only studio beside a weekly class timetable board",
        "caption": "The coach is the welcome, not the advert. Everything before this moment — search, pages, replies — exists to get the right women into this studio.",
        "src": "/images/services/modest-member-funnel-coach.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We do not provide fitness coaching, training plans or any health advice. We build the funnel that brings you qualified trial bookings and membership enquiries. The coaching itself, and every class, stays entirely with you and your qualified female coaches.",
        "q": "Do you provide fitness coaching or training?"
      },
      {
        "a": "Never. No member is ever photographed or filmed for marketing — not in class, not in testimonials, not in the background of a shot. Our videos show the facility, the coach and the timetable only. Privacy is the reason women choose your studio, so it is the one rule we never break.",
        "q": "Do you film or photograph members?"
      },
      {
        "a": "No, and you should distrust any agency that does. Trial bookings depend on your timetable, your prices, your reviews and your local market — things no agency controls. What we promise is the work that earns enquiries: pages women trust, a profile they can find, and replies that arrive fast.",
        "q": "Do you guarantee a number of new members?"
      },
      {
        "a": "Yes — a single small studio is a common starting point. The funnel is built around your real capacity: the local pages, the trial booking and the follow-up all work whether you run one room or three branches. A small studio that answers fast beats a large gym that does not answer at all.",
        "q": "I run a small studio. Can this still work?"
      },
      {
        "a": "We serve women-only and Muslim-friendly fitness studios across the US, UK, Canada and Australia, with a focus on diaspora cities — Houston, Dearborn, Chicago, New York and New Jersey, London and Birmingham, Toronto and Calgary, Sydney and Melbourne. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/modest-member-funnel-hero.jpg",
    "imageAlt": "Bright modern women-only fitness studio interior in soft morning light, with pilates reformers, yoga mats, plants and large windows, no people and no cameras",
    "imageCaption": "The first visit is decided in a search, not in the studio: a woman who finds a place that understands privacy is a woman who books a trial.",
    "isNew": true,
    "name": "Modest Member Funnel",
    "priceLabel": "$1,000–$2,000 build + $399–$699/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $399–$699 monthly member-generation retainer. Start with the free member visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A Muslim woman in Calgary has finally decided to start exercising. She has one non-negotiable: a place where no man will walk in, no camera will record her, and she can train without her hijab in peace. She searches \"Muslim women gym near me\" and finds big co-ed chains, a women-only gym forty minutes away with a bare profile and no timetable, and a Pilates studio whose website says nothing about women-only hours, female coaches or modest dress. She gives up and stays at home. The small studio two streets away that could have helped her never knew she existed — because she could not find it.",
      "The arithmetic makes the invisibility expensive. The global women-only gym market was about $5.30 billion in 2025 and is forecast to reach about $8.52 billion by 2033, and female-only gyms already hold about 62.4% of the single-sex gym market — with religious and cultural preferences named directly as a driver. New studios are opening right now: FITRA, a women-only gym in Calgary, opened in late October 2026 next to an Islamic centre, on a plain \"no men, no cameras\" promise. Yet the studios themselves are almost invisible on Google: an unclaimed profile, no page that explains women-only hours in plain words, no way to book a trial class without a cold call. Generic gym-marketing agencies chase the big chains and their standard playbook — member testimonials on camera, mixed-class reels — would actively harm a studio whose whole promise is privacy. So the gap stays open, in every city where Muslim women are searching for a place to train."
    ],
    "process": [
      {
        "text": "We search the way a Muslim woman searches — \"women only gym near me\", \"Muslim women gym near me\" plus your city — and report what she finds: your profile, your reviews, and the studios Google shows instead of you.",
        "title": "Member visibility audit"
      },
      {
        "text": "Profile, local pages, the privacy-first landing pages, the trial-class booking funnel and facility-only videos, built with your approved wording. We never film a member and never make a weight-loss or health claim.",
        "title": "We build the funnel"
      },
      {
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own trial classes filling up.",
        "title": "Women reach you, you take the trial classes"
      }
    ],
    "proof": "The market is the proof: a women-only gym market of about $5.30 billion in 2025 growing toward about $8.52 billion by 2033, female-only gyms holding about 62.4% of the single-sex market, and new studios like FITRA in Calgary opening on a \"no men, no cameras\" promise — against a $399 to $699 monthly retainer that is a fraction of what generic gym-marketing agencies charge for chains. One full class of new members covers months of the funnel, and every month brings more Muslim women searching. We start with a free member visibility audit, so you see exactly what a woman finds today before deciding anything.",
    "related": [
      "halal-local-seo",
      "gbp-fix-review-system"
    ],
    "short": "Done-for-you member funnel for women-only and Muslim-friendly fitness studios — local SEO, Google Business Profile, privacy-first landing pages and a trial-class booking funnel that turns searches into booked first classes.",
    "slug": "modest-member-funnel"
  },
  {
    "audiences": [
      "Small and mid-size Umrah travel agencies in the US and Canada",
      "Agencies running Ramadan and December school-holiday Umrah groups",
      "Masjid-affiliated group-trip organisers working with a licensed agency",
      "Agency owners who are operators first and marketers second"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, services, hours and photos, so \"Umrah packages from [your city]\" and \"Umrah travel agency near me\" find you first",
      "Local SEO pages for your city and your packages — Ramadan Umrah, December Umrah, 10-night and 14-night packages — in the words Muslim families actually search",
      "A landing page for every package: nights, hotel distance from the Haram, inclusions, from-price and the date the price was checked — so a family can compare without calling three agencies",
      "A WhatsApp inquiry and callback funnel, so a family that messages in the evening reaches a real person fast, and no enquiry is ever missed silently",
      "Trust-building short videos — agency introduction, package walkthrough, past pilgrims' written reviews on screen — never claiming footage of the Haram",
      "A free booking visibility audit first: what a family finds when it searches for Umrah packages in your city today",
      "A short monthly report: enquiries, package inquiries, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Muslim family with two children sitting together at a dining table at home in the evening, parents looking at a laptop showing Umrah travel packages",
        "caption": "One search, one family decision. The agency that appears with a complete profile, clear package pages and a working inquiry is the one the family trusts in that moment.",
        "src": "/images/services/umrah-booking-funnel-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Smartphone on a wooden desk showing a friendly chat conversation with a travel agency about Umrah package dates, a passport and printed itinerary beside it",
        "caption": "The booking is won in the reply, not in the advert: a family that gets a clear answer in minutes stops calling other agencies.",
        "src": "/images/services/umrah-booking-funnel-whatsapp.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We are not a travel agency, not a visa agent, and not a Nusuk permit handler. We build the funnel that brings you qualified booking inquiries. The travel itself, the visa, the permits and the hotels stay entirely with you as the licensed agency.",
        "q": "Are you a travel agency or visa agent?"
      },
      {
        "a": "No, and you should distrust any agency that does. We make no visa guarantee and no price guarantee — prices change, visas are decided by the authorities, and protections such as ATOL or IATA cover are your agency's own. What we promise is the work that earns enquiries: package pages families trust, a profile they can find, and replies that arrive fast.",
        "q": "Do you guarantee visas or prices?"
      },
      {
        "a": "No — we never claim Haram footage, never present a stock clip as a real trip, and never use a past pilgrim's words without permission. The videos show your agency, your packages and written reviews on screen. Trust is the whole business here, and a funnel that fakes it is not a funnel.",
        "q": "Do your videos show the Haram or real pilgrims?"
      },
      {
        "a": "Yes — a small agency is a common starting point. The funnel is built around your real capacity: the package pages, the WhatsApp inquiry flow and the follow-up all work whether you run two groups a year or twenty. A small agency that answers fast beats a large agency that does not answer at all.",
        "q": "I run a small agency. Can this still work?"
      },
      {
        "a": "We serve Umrah travel agencies across the US and Canada, with a focus on diaspora cities — Dearborn, Houston, Dallas, Chicago, New York and New Jersey, London and Birmingham, Toronto. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/umrah-booking-funnel-hero.jpg",
    "imageAlt": "Warm modern travel agency office interior with a consultant desk, Umrah package brochures, a wall map and a small model mosque on a shelf",
    "imageCaption": "The first booking is decided in a search, not in the office: a family that finds an agency that explains its packages plainly is a family that inquires.",
    "isNew": true,
    "name": "Umrah Booking Funnel",
    "priceLabel": "$1,000–$2,000 build + $499–$799/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $499–$799 monthly booking-generation retainer. Start with the free booking visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A Muslim family in Dearborn has been saving for two years for their first Umrah. The parents, the grandmother and two children will travel together, and the decision is the biggest the family will make all year. They search \"Umrah packages from Detroit\" and find big aggregator sites, one agency whose website lists no packages at all, and a Facebook page last updated eight months ago. Nobody answers their message that evening. They give up and ask at the masjid instead. The small licensed agency three streets away that could have helped them never knew the family existed — because the family could not find it.",
      "The arithmetic makes the invisibility expensive. More than 18 million pilgrims now travel for Umrah from outside Saudi Arabia — growth of about 214% between 2022 and 2025 — and the Nusuk app alone has more than 51 million users. A mid-range US package runs roughly $2,500 to $3,500 per person plus $800 to $1,300 in flights, so a single family booking is worth thousands of dollars in package revenue — one or two bookings cover a whole year of a marketing retainer. And the timing is unforgiving: Ramadan 2027 begins around 8 February 2027, agencies take Ramadan bookings three to six months ahead, and last-ten-nights hotels near the Haram sell out months early. Yet most small Umrah agencies still run on referrals and masjid announcements, with generic websites and no package-specific pages on Google. Paid-ad specialists exist in the UK, but no done-for-you organic funnel retainer serves the small US and Canadian agencies at an offshore price. So the gap stays open, in every city where families are searching for Umrah."
    ],
    "process": [
      {
        "text": "We search the way a Muslim family searches — \"Umrah packages from [your city]\", \"Umrah travel agency near me\" — and report what they find: your profile, your reviews, and the agencies Google shows instead of you.",
        "title": "Booking visibility audit"
      },
      {
        "text": "Profile, local pages, a landing page for every package, the WhatsApp inquiry funnel and trust-building videos, built with your approved wording and your real prices with a price-check date. We never claim Haram footage and never guarantee a visa.",
        "title": "We build the funnel"
      },
      {
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own booking diary filling up — especially as Ramadan approaches.",
        "title": "Families reach you, you take the bookings"
      }
    ],
    "proof": "The demand is the proof: more than 18 million Umrah pilgrims from abroad, about 214% growth since 2022, Ramadan accommodation searches up about 20.67% in Makkah and 25.16% in Madinah year on year — against a $499 to $799 monthly retainer that one family booking repays many times over. Ramadan 2027 begins around 8 February 2027 and agencies take those bookings three to six months ahead, so the agencies that are findable now take the bookings. We start with a free booking visibility audit, so you see exactly what a family finds today before deciding anything.",
    "related": [
      "halal-local-seo",
      "modest-member-funnel"
    ],
    "short": "Done-for-you booking funnel for small and mid-size Umrah travel agencies — local SEO, Google Business Profile, a landing page for every package and a WhatsApp inquiry funnel that turns searches into booked families.",
    "slug": "umrah-booking-funnel"
  },
{"audiences":["Muslim CPAs and tax preparers in the US, UK and Canada","Sharia-aware accounting firms, solo practitioners and small firms","Bookkeeping practices serving Muslim-owned small businesses","Firms offering zakat-aware year-end reviews and entity setup"],"deliverables":["Local SEO and Google Business Profile built around \"Muslim accountant near me\" and \"halal tax preparer near me\" searches","Tax-season landing pages, one per service: individual returns, small-business bookkeeping, S-corp and LLC setup, and zakat-aware year-end review","Inquiry and consultation-booking funnel, with fast follow-up on every enquiry — speed wins clients in tax season","Short deadline-explainer videos for general education only, never personal tax advice","A free tax-season visibility audit before you pay anything","Monthly reporting in plain numbers: enquiries, booked consultations and search visibility","All copy in your firm's own wording, respecting CPA advertising rules — no misleading claims, ever"],"extraImages":[{"after":"problem","alt":"Muslim small-business owner seen from behind at a laptop in a home office at dusk, searching for a local accountant, notebook and cup of tea on the desk","caption":"The search happens at home, in the evening, usually under deadline pressure. The firm that answers first wins the client.","src":"/images/services/halal-tax-bookkeeping-funnel-search.jpg"},{"after":"deliverables","alt":"Smartphone on a wooden desk showing a friendly messaging conversation about booking a tax consultation, with an appointment card, a pen and organised tax documents beside it","caption":"The booking is won in the reply. A fast, clear answer turns a search into a consultation on your calendar.","src":"/images/services/halal-tax-bookkeeping-funnel-consultation.jpg"}],"faqs":[{"a":"No — never. We are a marketing service, not an accounting firm. We never give tax advice, never prepare returns and never claim savings. We only bring qualified consultation bookings to licensed CPAs. Every claim on your pages is written in your own wording, and we respect CPA advertising rules throughout.","q":"Do you give tax advice or prepare tax returns?"},{"a":"The one-time funnel build is $1,000 to $2,000, plus a $499 to $799 monthly retainer. We start with a free tax-season visibility audit, so you see what business owners find today before deciding anything, and we confirm your exact figure before you commit.","q":"How much does the Halal Tax & Bookkeeping Funnel cost?"},{"a":"Firms sign their season clients between November and January, and the 2026 filing season opened on 26 January with a 15 April deadline. Starting now puts you in front of owners while they are choosing. Starting in February means competing after most of them have already booked.","q":"When should our firm start — is it too late for this tax season?"},{"a":"\"Muslim accountant near me\" and \"halal tax preparer near me\" are the core searches, plus questions about zakat and tax, S-corp versus LLC, and business zakah. We build your profile and pages around those searches and the real questions owners ask in the first consultation.","q":"What do Muslim business owners actually search for?"},{"a":"Yes — solo practitioners are a common starting point. The funnel is built around your real capacity: the local pages, the service pages and the booking flow all work whether you are one CPA or a whole firm. A solo CPA who answers fast beats a large firm that does not answer at all.","q":"I am a solo CPA. Can this still work for a one-person firm?"}],"image":"/images/services/halal-tax-bookkeeping-funnel-hero.jpg","imageAlt":"Bright modern accounting office desk with a laptop showing a spreadsheet, neatly stacked tax folders, a calculator, a small potted plant and a framed certificate on the wall","imageCaption":"The client is decided by the search, not by the office. The funnel makes sure your firm is the one the search finds first.","isNew":true,"name":"Halal Tax & Bookkeeping Funnel","priceLabel":"$1,000–$2,000 build + $499–$799/mo","priceNote":"The one-time funnel build is $1,000–$2,000 plus a $499–$799 monthly retainer. Start with the free tax-season visibility audit and decide with the facts in front of you.","problem":["Muslim business owners search online first — \"Muslim accountant near me\", \"halal tax preparer near me\" — and they need someone who understands both their tax return and their zakat. Most of them find generic firms, or nobody at all, because the Muslim CPA in their own city is invisible on Google when the search happens.","Most small Muslim accounting firms run on referrals and a thin directory listing. Generic CPA marketing exists, but it is written generically: it never mentions zakat, halal business structure, riba-free financing or business zakah, so it cannot earn the trust of a business owner choosing who handles their money and their religious obligations."],"process":[{"text":"We search the way Muslim business owners in your area search and report what they find — your profile, your pages, and the firms being found instead of you.","title":"Free tax-season visibility audit"},{"text":"Profile, one page per service, consultation booking and fast follow-up are built in your firm's own wording, around the questions owners actually ask.","title":"We build the funnel"},{"text":"Enquiries are answered fast and consultations get booked while the season window is open. Monthly care keeps your visibility growing and reports results in plain numbers.","title":"Consultations and monthly care"}],"proof":"In the 2026 filing season, tax professionals e-filed 73.9 million individual returns — about 53 percent of all e-filings, according to IRS statistics from April 2026 — yet most Muslim CPAs are invisible when a business owner searches. Accounting leads cost $40 to $100 through organic SEO against $150 to $400 on Google Ads (ProgeekTech 2026), and a monthly bookkeeping client typically pays around $500 a month and stays about four years, roughly $24,000 in lifetime value. We start with the free audit: we show you exactly what business owners in your area see when they search, and you judge the funnel on that evidence.","related":["halal-wealth-funnel","halal-local-seo"],"short":"Done-for-you client funnel for Muslim CPAs, tax preparers and Sharia-aware accounting firms — local search, tax-season pages and consultation bookings that fill your season before the deadline rush.","slug":"halal-tax-bookkeeping-funnel"},
{
  "slug": "modest-salon-booking-funnel",
  "name": "Modest Salon Booking Funnel",
  "short": "A done-for-you booking funnel for women-only and hijab-friendly salons — local SEO, privacy-first pages and a booking flow that answers while your stylists are busy.",
  "problem": [
    "A hijab-wearing client in your city is searching right now for a salon where she can take her hijab off in privacy. She types \"women only salon near me\" or \"hijab friendly salon near me\" into Google, and your salon is nowhere in the results — not because your work is not good enough, but because nothing on the internet says, clearly and credibly, that your salon is private. So she books the salon she can find, even if it is further away and half as good as yours.",
    "And when she does find you, the next failure is quieter. She calls while your stylist is mid-cut, scissors in hand, and nobody answers. She does not leave a voicemail. She calls the next salon on the list. A missed call in this business is not a missed call — it is a lost client, and a regular client in this niche is worth roughly $600 to $1,500 a year."
  ],
  "audiences": [
    "Women-only hair and beauty salons in the US, UK and Canada",
    "Hijab-friendly salons with private rooms or curtained stations",
    "Salon owners whose bookings still come only from Instagram and word of mouth",
    "Salons preparing for Eid and wedding-season demand"
  ],
  "deliverables": [
    "Local SEO and Google Business Profile setup for \"hijab friendly salon near me\" and \"women only salon near me\" searches in your city",
    "Privacy-first landing pages that state your women-only policy plainly: female-only staff, private room or curtained stations, no male entry during appointments, wudu-friendly and halal products",
    "An online and WhatsApp booking funnel that takes the booking while your stylists are busy cutting hair — no missed call, no lost client",
    "Eid and wedding-season campaign pages timed for the December holiday season and Eid al-Fitr 2027 pre-bookings",
    "Facility-only short videos — salon tour and stylist introductions — with clients never filmed or photographed",
    "A free booking visibility audit first, so you can see exactly where your salon is invisible on Google before you spend anything",
    "Monthly reporting on searches, profile views and bookings, in plain language"
  ],
  "proof": "Women-only hijab salons are thriving in New York, Chicago, Detroit and Los Angeles, according to Rakwa (31 October 2025), and the global modest clothing market is forecast to grow from about $101.9 billion in 2026 to about $162.3 billion by 2035 — the same wallet that pays for modest beauty. The funnel model itself is proven on salons: one Manchester salon's local SEO and service-page redesign lifted appointment bookings 80% year on year (Ascensor case study). A regular client visits every 4 to 8 weeks at $50 to $150 a visit, worth roughly $600 to $1,500 a year — so two or three new regular clients cover a full year of our retainer.",
  "priceLabel": "$1,000–$2,000 build + $399–$699/mo",
  "priceNote": "One-time funnel build $1,000–$2,000 plus a $399–$699 monthly retainer. Start with the free booking visibility audit — no obligation, and you see the gaps before you decide anything.",
  "process": [
    {
      "title": "Free booking visibility audit",
      "text": "We check how your salon appears — or does not appear — when clients search for a women-only or hijab-friendly salon in your city, and we show you the gaps in plain language."
    },
    {
      "title": "We build your funnel",
      "text": "We build your privacy-first pages, set up your Google Business Profile and booking flow, and film your facility-only tour — your salon's services and your own prices, nothing invented."
    },
    {
      "title": "Bookings arrive, we keep it working",
      "text": "Your monthly retainer keeps the funnel live: seasonal campaign pages for Eid and weddings, fresh facility content, and monthly reporting on what the funnel is bringing in."
    }
  ],
  "faqs": [
    {
      "q": "Do you run the salon or provide salon services?",
      "a": "No. We provide no salon service at all. We only bring qualified appointment bookings to licensed salons. Your stylists do the hair and beauty work; our job is making sure clients can find you, trust your privacy, and book without a missed call."
    },
    {
      "q": "Will you photograph or film my clients?",
      "a": "Never. Clients are never photographed or filmed — not for testimonials, not for before-and-after posts, not for any marketing. Our videos show only your facility and your own staff: the salon tour, the private stations, and your stylists introducing themselves."
    },
    {
      "q": "What makes this different from a generic salon marketing agency?",
      "a": "Generic agencies sell the standard salon playbook — client photos, on-camera testimonials, mixed-gender imagery — and that playbook backfires here, because privacy is the product. We build everything around women-only hours, private rooms, no male entry, and halal and wudu-friendly products."
    },
    {
      "q": "How long before bookings start coming in?",
      "a": "The booking flow and Google Business Profile work can start bringing enquiries within the first weeks, while local SEO builds over the following months. We do not promise a number of bookings or a date — we report real searches, profile views and bookings every month."
    },
    {
      "q": "What does the free booking visibility audit cover?",
      "a": "We search the way your clients search — \"hijab friendly salon near me\" and \"women only salon near me\" in your city — and show you where your salon appears, what your competitors show, and which privacy questions your pages fail to answer. You keep the findings either way."
    }
  ],
  "related": [
    "modest-member-funnel",
    "halal-local-seo"
  ],
  "isNew": true,
  "image": "/images/services/modest-salon-booking-funnel-hero.jpg",
  "imageAlt": "Elegant women-only hair salon interior with styling chairs and large mirrors, soft curtained private stations, warm pendant lighting, green plants and a reception counter with fresh flowers",
  "imageCaption": "Privacy is the product here, not an afterthought — the room itself has to say it before a single word is read.",
  "extraImages": [
    {
      "after": "problem",
      "src": "/images/services/modest-salon-booking-funnel-search.jpg",
      "alt": "A woman's hands in modest dress holding a smartphone showing a map search for salons, sitting in a bright living room with a cup of tea on a side table, face not shown",
      "caption": "She searches, she compares, she books the salon she can find. If that salon is not yours, the search was your only chance — and it is already gone."
    },
    {
      "after": "deliverables",
      "src": "/images/services/modest-salon-booking-funnel-booking.jpg",
      "alt": "Salon reception desk with an open appointment book, a tablet showing a booking calendar, a small vase of white flowers and neatly folded towels",
      "caption": "The booking is won while the stylist is busy cutting hair — that is the whole point of the funnel."
    }
  ]
}  ,
  {
    "audiences": [
      "Muslim-friendly senior living communities and assisted-living homes in the US, UK, Canada and Australia",
      "Small residential care homes with 6 to 40 residents, and new communities opening soon",
      "Faith-aware care-home operators whose families search in English, Urdu or Arabic",
      "Community projects and family-run homes whose owners are carers first and marketers second"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, services, hours and photos, so \"Muslim assisted living near me\" and \"halal senior living near me\" find you first",
      "Local SEO pages for your city and your community — halal meals, prayer space, same-gender care, Ramadan observance, Urdu and Arabic-speaking staff — in the words Muslim families actually search",
      "Faith-aware landing pages: halal kitchen, prayer-time routine, family-visit-friendly timings and a clear statement of what your community offers, written in your own approved words",
      "A tour-booking and interest-list funnel, so a family that messages in the evening reaches a real person fast, and no enquiry is ever missed silently",
      "Dignified short videos — facility tour, founder or director introduction, halal-kitchen and prayer-room walkthrough — residents filmed only with written consent, otherwise facility and staff only",
      "A free family visibility audit first: what a Muslim family finds when it searches for senior living in your city today",
      "A short monthly report: enquiries, tours booked, interest-list signups, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Muslim woman in her forties wearing a hijab sitting on a sofa at home in the evening, holding a laptop and searching for a Muslim senior living community for her elderly father",
        "caption": "One search, one family decision, usually made late at night. The community that appears with a complete profile, a plain faith-aware promise and a working tour booking is the one the family trusts in that moment.",
        "src": "/images/services/faith-aware-senior-living-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Friendly community director in modest professional dress showing a bright accessible ground-floor bedroom to a Muslim family, an elderly mother in a hijab and her adult daughter",
        "caption": "The tour is where trust is won or lost. Everything before this moment — search, pages, replies — exists to get the right families into this room.",
        "src": "/images/services/faith-aware-senior-living-tour.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We do not provide care, medical advice, placement advice or any health service. We build the funnel that brings you qualified family enquiries and tour bookings. The care itself, the licensing and the home stay entirely with you as the licensed facility.",
        "q": "Do you provide care or medical advice?"
      },
      {
        "a": "Only with written consent, and only ever a resident who has agreed. Otherwise our videos show the facility, the staff, the prayer room and the kitchen only — never a resident in the background, never a real family story without permission. Dignity is the reason families choose your community, so it is the one rule we never break.",
        "q": "Do you film or photograph residents?"
      },
      {
        "a": "No, and you should distrust any agency that does. A resident's decision depends on your rooms, your prices, your licence, your reviews and your local market — things no agency controls. What we promise is the work that earns enquiries: pages families trust, a profile they can find, and replies that arrive fast.",
        "q": "Do you guarantee a new resident?"
      },
      {
        "a": "Yes — a small home is a common starting point. The funnel is built around your real capacity: the local pages, the tour booking and the follow-up all work whether you run a six-resident home or a forty-resident community. A small home that answers fast beats a large chain that does not answer at all.",
        "q": "I run a small six-resident home. Can this still work?"
      },
      {
        "a": "We serve Muslim-friendly senior living communities across the US, UK, Canada and Australia, with a focus on diaspora cities — Houston, Dearborn, Chicago, New York and New Jersey, Northern Virginia and Washington DC, London and Birmingham, Toronto, Sydney and Melbourne. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/faith-aware-senior-living-hero.jpg",
    "imageAlt": "Bright modern Muslim-friendly senior living community interior with a warm lounge, a small prayer room corner with prayer mats and a bookshelf, and a clean halal kitchen in the background",
    "imageCaption": "The first tour is decided in a search, not in the community: a family that finds a place that understands halal meals, prayer and modesty is a family that books a visit.",
    "isNew": true,
    "name": "Faith-Aware Senior Living Funnel",
    "priceLabel": "$1,000–$2,000 build + $499–$799/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $499–$799 monthly family-inquiry retainer. Start with the free family visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A daughter in Houston has finally accepted what her family has been avoiding for a year: her father, eighty-one, living alone since her mother passed, needs a place where someone is nearby, the food is halal, and he can pray on time without explaining himself. She searches \"Muslim assisted living near me\" at midnight and finds big chains, a directory listing with no photos, and a community whose website says nothing about halal meals, prayer space or same-gender care. She sends a message. Nobody answers that night. She gives up and asks at the masjid instead. The small faith-aware home four streets away that could have helped her family never knew they existed — because the family could not find it.",
      "The arithmetic makes the invisibility expensive. The US senior living market is about $76.39 billion in 2026 and forecast to reach about $101.86 billion by 2031, and nearly all 69 million baby boomers will be over 70 by 2033. Muslim families are ageing into the same wave: the UK has more than 2.5 million Muslims who are growing and ageing, and new Muslim facilities are opening right now — Alma's Senior Haven in Northern Virginia, a six-resident faith-aware home opening in spring 2027 with monthly rates of $7,500 to $10,500, and RayanCare building the UK's first Muslim-focused residential care home in West London. One new resident is worth $7,500 to $10,500 a month to a facility — a single resident covers a whole year of a marketing retainer many times over. Yet the small Muslim facilities themselves are almost invisible on Google, and generic senior-living agencies chase the big chains while their copy never mentions halal meals, prayer space, modesty or same-gender care. So the gap stays open, in every city where Muslim families are searching for a place for their parents."
    ],
    "process": [
      {
        "text": "We search the way a Muslim family searches — \"Muslim assisted living near me\", \"halal senior living near me\" plus your city — and report what they find: your profile, your reviews, and the communities Google shows instead of you.",
        "title": "Family visibility audit"
      },
      {
        "text": "Profile, local pages, the faith-aware landing pages, the tour-booking and interest-list funnel and dignified facility videos, built with your approved wording. We never film a resident without written consent and never make a care or medical claim.",
        "title": "We build the funnel"
      },
      {
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own tours filling up.",
        "title": "Families reach you, you take the tours"
      }
    ],
    "proof": "The arithmetic is the proof: a US senior living market of about $76.39 billion in 2026 growing toward about $101.86 billion by 2031, new Muslim facilities opening now with monthly rates of $7,500 to $10,500 per resident, and Sharia-compliant investor Arcapita buying a US senior living portfolio for $110 million — against a $499 to $799 monthly retainer. One new resident covers a whole year of the funnel many times over, and every year brings more Muslim families searching. We start with a free family visibility audit, so you see exactly what a family finds today before deciding anything.",
    "related": [
      "faith-aware-home-care",
      "halal-local-seo"
    ],
    "short": "Done-for-you family inquiry funnel for Muslim-friendly senior living communities and assisted-living homes — local SEO, Google Business Profile, faith-aware landing pages and a tour-booking funnel that turns searches into booked family tours.",
    "slug": "faith-aware-senior-living"
  },
  {
    "audiences": [
      "Boutique Muslim matchmakers and human matchmaking services in the US, UK and Canada",
      "Solo matchmakers and small teams whose clients come from Instagram and word of mouth",
      "Masjid-affiliated matrimonial services working with a vetted matchmaker",
      "Matchmakers who are connectors first and marketers second"
    ],
    "deliverables": [
      "Google Business Profile optimisation: correct categories, services, hours and photos, so \"Muslim matchmaker near me\" and \"Muslim marriage matchmaking service\" find you first",
      "Local SEO pages for your city and your service — vetted introductions, wali and chaperone involvement, confidential consultations — in the words singles and parents actually search",
      "Privacy-first landing pages: no public photos, no swiping, a clear vetting process and a clear statement of how confidentiality works, written in your own approved words",
      "A free consultation-booking funnel, so a single or a parent who messages in the evening reaches a real person fast, and no enquiry is ever missed silently",
      "Dignified short videos — founder introduction, process explainers, what a consultation looks like — never showing a client, a photo or a story, because privacy is the selling point",
      "A free inquiry visibility audit first: what a family finds when it searches for a Muslim matchmaker in your city today",
      "A short monthly report: enquiries, consultations booked, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Muslim mother wearing a hijab and her young adult daughter sitting together on a sofa at home in the evening, looking at a laptop and searching for a trusted Muslim matchmaker",
        "caption": "One search, one family decision, usually made quietly. The matchmaker who appears with a complete profile, a plain privacy promise and a working consultation booking is the one the family trusts in that moment.",
        "src": "/images/services/dignified-matchmaker-funnel-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Professional Muslim matchmaker woman wearing a hijab in a warm consultation conversation with a young Muslim woman client in a bright private office, notebook and laptop on the desk",
        "caption": "The consultation is where trust is won or lost. Everything before this moment — search, pages, replies — exists to get the right families into this conversation.",
        "src": "/images/services/dignified-matchmaker-funnel-consultation.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We do not do matchmaking, vetting or introductions. We build the funnel that brings you qualified consultation enquiries. The matchmaking itself, the vetting and every introduction stay entirely with you.",
        "q": "Do you do the matchmaking?"
      },
      {
        "a": "No, and you should distrust any agency that does. A match depends on your process, your network, your reputation and the families themselves — things no agency controls. What we promise is the work that earns enquiries: pages families trust, a profile they can find, and replies that arrive fast.",
        "q": "Do you guarantee a match or a marriage?"
      },
      {
        "a": "Never. No client is ever photographed, filmed or named for marketing — not in a testimonial, not in a success story, not in the background of a shot. Our videos show you, your process and your consultation only. Privacy is the reason families choose you, so it is the one rule we never break.",
        "q": "Do you show client photos or stories?"
      },
      {
        "a": "Yes — a solo matchmaker is a common starting point. The funnel is built around your real capacity: the local pages, the consultation booking and the follow-up all work whether you take five clients a month or fifty. A solo matchmaker who answers fast beats a large service that does not answer at all.",
        "q": "I am a solo matchmaker. Can this still work?"
      },
      {
        "a": "We serve boutique Muslim matchmakers across the US, UK and Canada, with a focus on diaspora cities — London and Birmingham, New York and New Jersey, Houston, Chicago, Dearborn, Dallas and Toronto. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/dignified-matchmaker-funnel-hero.jpg",
    "imageAlt": "Elegant private consultation room for a Muslim matchmaking service with two comfortable armchairs, a small table with tea cups, a bookshelf and soft warm light through sheer curtains",
    "imageCaption": "The first consultation is decided in a search, not in the office: a family that finds a matchmaker who understands privacy, vetting and wali involvement is a family that books a call.",
    "isNew": true,
    "name": "Dignified Matchmaker Funnel",
    "priceLabel": "$1,000–$2,000 build + $399–$699/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $399–$699 monthly inquiry-generation retainer. Start with the free inquiry visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A mother in London has been quietly looking for a matchmaker for her daughter for six months. She does not want an app, a public profile or a photo gallery — she wants a real person who vets properly, involves the wali, and keeps everything confidential. She searches \"Muslim matchmaker near me\" and finds a big marriage app, a directory listing with no details, and an Instagram page last updated four months ago. She sends a message. Nobody answers that evening. She gives up and asks a friend instead. The boutique matchmaker two streets away who could have helped her family never knew they existed — because the family could not find her.",
      "The arithmetic makes the invisibility expensive. Muzz, the world's largest Muslim marriage app, reports more than 21 million users and over 800,000 marriages, and launched in India in April 2026 — and that very success has warmed the audience for human matchmaking: after Hulu's \"Muslim Matchmaker\" in 2025, boutique services went mainstream, with Love Inshallah charging $29 to $349 a month across more than 20 countries, Yasara at £147 for a 90-day cycle, and Muslim Souls selling £500 six-month and £1,000 twelve-month packages. One or two new clients cover a whole year of a marketing retainer. Yet the boutique matchmakers themselves are almost invisible on Google: their marketing runs on Instagram and word of mouth, their websites are thin, and no proper funnel exists for \"Muslim matchmaker near me\". Generic dating agencies cannot touch this niche — their playbook of public photos, swiping and public testimonials would actively harm a service whose whole promise is privacy. So the gap stays open, in every city where singles and parents are searching for a matchmaker they can trust."
    ],
    "process": [
      {
        "text": "We search the way a single or a parent searches — \"Muslim matchmaker near me\", \"Muslim marriage matchmaking service\" plus your city — and report what they find: your profile, your reviews, and the services Google shows instead of you.",
        "title": "Inquiry visibility audit"
      },
      {
        "text": "Profile, local pages, the privacy-first landing pages, the consultation-booking funnel and dignified founder videos, built with your approved wording. We never show a client, a photo or a story, and never make a match or marriage claim.",
        "title": "We build the funnel"
      },
      {
        "text": "Enquiries arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own consultations filling up.",
        "title": "Families reach you, you take the consultations"
      }
    ],
    "proof": "The market is the proof: more than 21 million users on the largest Muslim marriage app and over 800,000 marriages claimed, boutique matchmakers charging £500 to £1,000 per package or $29 to $349 a month, and a mainstream shift toward vetted human introductions after \"Muslim Matchmaker\" — against a $399 to $699 monthly retainer. One or two new clients cover a whole year of the funnel, and every year brings new singles and new parents searching. We start with a free inquiry visibility audit, so you see exactly what a family finds today before deciding anything.",
    "related": [
      "halal-wedding-booking",
      "halal-local-seo"
    ],
    "short": "Done-for-you inquiry funnel for boutique Muslim matchmakers and human matchmaking services — local SEO, Google Business Profile, privacy-first landing pages and a confidential consultation-booking funnel that turns searches into booked first calls.",
    "slug": "dignified-matchmaker-funnel"
  }  ,
  {
    "audiences": [
      "Small halal meal-prep and meal-kit brands in the US, UK, Canada and Australia selling weekly ready meals, pre-portioned recipe kits or zabiha meat boxes",
      "Founder-run halal kitchens selling on Shopify, Instagram or TikTok",
      "Halal meal-prep brands preparing suhoor and iftar boxes and Ramadan meal plans",
      "Meal-kit brands whose customers find them on TikTok and Instagram but never reach a subscription page"
    ],
    "deliverables": [
      "Local SEO and Google Business Profile optimisation, so \"halal meal prep near me\" and \"halal meal kit delivery\" find your kitchen first where you operate",
      "Trial-box landing pages: first-box discount, first-week menu and a clear subscription signup in the brand's own words",
      "A WhatsApp order and subscription funnel, so a customer who messages in the evening reaches a real person fast and no order is ever missed silently",
      "Email and WhatsApp retention flow: weekly menu reminders, skip and pause help, and a referral offer that turns subscribers into referrers",
      "12 food Shorts and Reels a month — dish close-ups, packing, founder and chef story — because food is a visual product and video is its biggest selling tool",
      "A free subscription visibility audit first: what a customer finds when they search for halal meal prep in your city today",
      "A short monthly report: trial boxes, new subscribers, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Muslim family at home in the evening, mother in a hijab and father sitting on a sofa with a laptop, searching for halal meal prep delivery, a weekly meal box on the coffee table",
        "caption": "The order is decided at home, in the evening, usually after a long day. The brand that appears with a clear menu, a trial box and a working subscription signup is the one the family tries first.",
        "src": "/images/services/halal-meal-prep-funnel-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Close-up of hands in food-safe gloves packing fresh halal meals into labelled weekly meal boxes, steam rising, fresh herbs and colourful vegetables, bright clean kitchen",
        "caption": "Packing day is the product: the Shorts and Reels we film here — steam, colour, a real kitchen — are what turn a scroll into a trial box.",
        "src": "/images/services/halal-meal-prep-funnel-packing.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We are not a meal-prep brand, a kitchen or a food business. We build the funnel that brings you trial-box orders and subscribers. The cooking, the sourcing, the zabiha certification and every meal stay entirely with you and your kitchen.",
        "q": "Do you cook or deliver the meals?"
      },
      {
        "a": "No, and you should distrust any agency that does. Subscribers depend on your food, your prices, your delivery area and your reviews — things no agency controls. What we promise is the work that earns orders: pages customers trust, a profile they can find, and replies that arrive fast.",
        "q": "Do you guarantee subscribers or revenue?"
      },
      {
        "a": "Only with your approval, and only ever your kitchen, your team and your food. We never film a customer, and we never claim a certification or a sourcing detail in your name — every halal claim on the page is your own wording, checked by you before it goes live.",
        "q": "Do you film my kitchen or my customers?"
      },
      {
        "a": "Yes — a small founder-run kitchen is a common starting point. The funnel is built around your real capacity: the local pages, the trial-box offer and the follow-up all work whether you cook twenty boxes a week or two hundred. A small kitchen that answers fast beats a large brand that does not answer at all.",
        "q": "I run a small kitchen. Can this still work?"
      },
      {
        "a": "We serve halal meal-prep and meal-kit brands across the US, UK, Canada and Australia, with a focus on diaspora cities — New York and New Jersey, Houston, Chicago, Dearborn, Dallas, London and Birmingham, Toronto, Sydney and Melbourne. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/halal-meal-prep-funnel-hero.jpg",
    "imageAlt": "Bright modern halal meal-prep kitchen, a chef in a white apron packing fresh colourful weekly meal boxes on a steel counter, steaming rice dishes, grilled chicken and fresh vegetables in containers",
    "imageCaption": "The first box is decided in a search, not in the kitchen: a customer who finds a brand that explains its menu, its halal sourcing and its trial offer plainly is a customer who orders.",
    "isNew": true,
    "name": "Halal Meal-Prep Subscription Funnel",
    "priceLabel": "$1,000–$2,000 build + $499–$799/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $499–$799 monthly subscription-growth retainer. Start with the free subscription visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A mother in Houston works full time, the children are home by four, and dinner is the same tired question every evening. She wants food her family can trust — zabiha meat, a halal kitchen, no guesswork — and she wants it ready. She searches \"halal meal prep near me\" on her phone and finds a big generic meal-kit brand, an Instagram page with no menu and no prices, and a small halal kitchen whose website says nothing about a trial box, a weekly plan or delivery. She sends a message. Nobody answers that evening. She orders from the generic brand instead and cooks the meat herself. The small halal kitchen four streets away that could have fed her family every week never knew she existed — because she could not find it, or could not order from it.",
      "The arithmetic makes the invisibility expensive. The halal meal kits market is forecast to grow from about $2.4 billion to about $6.0 billion by 2033, at 10.30% a year, and new halal meal-kit startups are appearing right now in the US, the UK and Australia — HalalMealKits in New Jersey with IFANCA-certified ingredients, Simply Halal, Boxed Halal, Halal Fresh and HalalBox. A food and beverage subscription is typically worth about $300 to $800 in lifetime value, and a meal kit for two costs about $25 to $35 — so five to ten new subscribers cover a whole year of a marketing retainer. And the audience is wider than most brands think: about 30% of halal meal-kit customers are not Muslim, choosing halal for ethical and healthy eating. Yet the small halal brands themselves are almost invisible on Google, their marketing is a founder's own Instagram, and no proper subscription funnel exists for \"halal meal prep near me\". Generic food-marketing agencies chase the big players, and their copy never mentions zabiha sourcing or certification. So the gap stays open, in every city where families are searching for a halal box they can trust."
    ],
    "process": [
      {
        "text": "We search the way a customer searches — \"halal meal prep near me\", \"halal meal kit delivery\" plus your city — and report what they find: your profile, your reviews, and the brands Google shows instead of you.",
        "title": "Subscription visibility audit"
      },
      {
        "text": "Profile, local pages, the trial-box landing pages, the WhatsApp subscription funnel, the retention flow and the monthly food Shorts, built with your approved wording and your real menu and prices. We never claim a certification in your name and never make a health or diet claim.",
        "title": "We build the funnel"
      },
      {
        "text": "Trial orders and subscriptions arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own subscriber list growing.",
        "title": "Customers reach you, you cook and deliver"
      }
    ],
    "proof": "The market is the proof: a halal meal kits market forecast to grow from about $2.4 billion to about $6.0 billion by 2033 at 10.30% a year, new halal meal-kit startups appearing now across the US, UK and Australia, and a food subscription typically worth about $300 to $800 in lifetime value — against a $499 to $799 monthly retainer. Five to ten new subscribers cover a whole year of the funnel, and Ramadan 2027 starts around 8 February, so the brands that set up their funnel and content now are the ones that catch the suhoor and iftar wave. We start with a free subscription visibility audit, so you see exactly what a customer finds today before deciding anything.",
    "related": [
      "halal-local-seo",
      "gbp-fix-review-system"
    ],
    "short": "Done-for-you subscription funnel for small halal meal-prep and meal-kit brands — local SEO, Google Business Profile, trial-box landing pages, a WhatsApp order funnel, retention flow and 12 food Shorts a month that turn searches into weekly subscribers.",
    "slug": "halal-meal-prep-funnel"
  },
  {
    "audiences": [
      "Small Muslim-owned halal supplements and vitamins brands in the US, UK, Canada and Australia selling collagen, multivitamins, omega-3, vitamin D, protein powder or gummies",
      "Founder-run supplement brands selling on Shopify, Amazon or TikTok Shop",
      "Supplement brands whose customers search \"halal collagen\" or \"halal vitamins\" but never reach a subscription page",
      "Brands preparing January health-resolution and Ramadan energy and immunity campaigns"
    ],
    "deliverables": [
      "Local SEO and Google Business Profile optimisation, so \"halal collagen\", \"halal vitamins\" and \"halal protein powder\" find your brand first where you operate",
      "Product landing pages with a clear certification and sourcing story — zabiha bovine versus marine collagen, pork-gelatin-free capsules, alcohol-free — in your own approved wording",
      "A \"Subscribe & Save\" trial funnel: first-order discount, monthly refill signup, and a clear pause and skip promise",
      "Email and WhatsApp retention flow: refill reminders, subscription pause and skip help, and review requests that build trust",
      "12 product Shorts and Reels a month — ingredient explainers, founder story, \"what is in this bottle and why\" — face and product only, modest presentation",
      "A free supplement visibility audit first: what a customer finds when they search for halal supplements in your market today",
      "A short monthly report: trial orders, new subscribers, and where they came from"
    ],
    "extraImages": [
      {
        "after": "problem",
        "alt": "Muslim woman wearing a hijab at home in a bright kitchen, reading a supplement bottle label carefully at the counter in morning light, other supplement bottles nearby",
        "caption": "The label is read before the order is placed. The brand that explains its certification and its ingredients plainly — in its own words — is the one the customer trusts with something she will swallow.",
        "src": "/images/services/halal-supplements-funnel-search.jpg"
      },
      {
        "after": "deliverables",
        "alt": "Hands opening a neat subscription delivery box of halal vitamins and supplements, bottles arranged in rows, tissue paper, bright clean background",
        "caption": "The refill box is the product arriving every month. The funnel exists to make that box arrive on time, every time — and to make the next one easy to keep.",
        "src": "/images/services/halal-supplements-funnel-unboxing.jpg"
      }
    ],
    "faqs": [
      {
        "a": "No — never. We are not a supplement brand, a manufacturer or a health service. We build the funnel that brings you trial orders and subscribers. The products, the formulation, the certification and every claim about them stay entirely with you and your brand.",
        "q": "Do you make or sell the supplements?"
      },
      {
        "a": "No, and you should distrust any agency that does. Subscribers depend on your products, your prices, your reviews and your market — things no agency controls. What we promise is the work that earns orders: pages customers trust, a profile they can find, and replies that arrive fast.",
        "q": "Do you guarantee subscribers or sales?"
      },
      {
        "a": "Never. We make no health, treatment or outcome claim, and no disease-treatment claim of any kind. Every claim on the page is your own wording about your certification and ingredients, checked by you before it goes live, and kept inside the supplement advertising rules.",
        "q": "Do you make health claims for my products?"
      },
      {
        "a": "Yes — a small founder-run brand is a common starting point. The funnel is built around your real capacity: the local pages, the trial offer and the follow-up all work whether you sell twenty bottles a month or two thousand. A small brand that answers fast beats a large brand that does not answer at all.",
        "q": "I run a small supplement brand. Can this still work?"
      },
      {
        "a": "We serve halal supplement brands across the US, UK, Canada and Australia, with a focus on diaspora cities — New York and New Jersey, Houston, Chicago, Dearborn, Dallas, London and Birmingham, Toronto, Sydney and Melbourne. Message us on WhatsApp with your city and we will check your local competition as part of the free audit.",
        "q": "Which cities do you cover?"
      }
    ],
    "image": "/images/services/halal-supplements-funnel-hero.jpg",
    "imageAlt": "Clean bright product photograph of halal supplement bottles, collagen, multivitamins and omega-3, arranged on a white desk with green leaves and a glass of water, a small halal certification badge on the labels",
    "imageCaption": "The first bottle is decided in a search, not on the shelf: a customer who finds a brand that explains its certification and its ingredients plainly is a customer who subscribes.",
    "isNew": true,
    "name": "Halal Supplements Subscription Funnel",
    "priceLabel": "$1,000–$2,000 build + $499–$799/mo",
    "priceNote": "The one-time funnel build is $1,000–$2,000, plus a $499–$799 monthly subscription-growth retainer. Start with the free supplement visibility audit, see where you stand, and decide with the facts in front of you.",
    "problem": [
      "A mother in Dearborn has been looking for a collagen powder she can trust for three months. She wants to know one thing before anything else: is it really halal — zabiha bovine or marine, pork-gelatin-free, alcohol-free — and who certified it. She searches \"halal collagen\" on her phone and finds a big generic brand, an Amazon listing with no certification story, and a small Muslim-owned brand whose website says nothing about its sourcing, its certification or a subscription. She sends a message. Nobody answers that evening. She buys the generic bottle instead and hopes for the best. The small halal brand that could have kept her as a monthly subscriber for years never knew she existed — because she could not find it, or could not trust what she found.",
      "The arithmetic makes the invisibility expensive. The halal nutritional supplements market is forecast to grow from about $6.25 billion in 2025 to about $11.03 billion by 2032, at 8.45% a year, and a second report puts it at about $6.92 billion in 2026 rising to about $18.36 billion by 2035. Collagen is one of the best-selling supplements of 2026: one collagen brand sold 843,777 units on TikTok Shop US, and one supplement brand made about $6.64 million in thirty days on TikTok Shop US — 243,000 units, number one in the Health category. A supplement bottle typically costs about $25 to $35, and a subscriber refills every month, so one subscriber is worth about $300 to $400 a year — fifteen to twenty-five new subscribers cover a whole year of a marketing retainer. And the rules are moving our way: in Indonesia, mandatory halal certification for herbal medicines and health supplements took full effect on 17 October 2026, so certification is turning from a selling point into a compliance requirement. Yet the small halal brands themselves are almost invisible on Google, their marketing is the founder's own Instagram, and no proper subscription funnel exists for \"halal collagen\" or \"halal vitamins\". Generic supplement agencies chase the big direct-to-consumer brands, and their copy cannot credibly explain why one capsule is halal and another is not. So the gap stays open, in every city where customers are searching for a supplement they can trust."
    ],
    "process": [
      {
        "text": "We search the way a customer searches — \"halal collagen\", \"halal vitamins\", \"halal protein powder\" plus your market — and report what they find: your profile, your reviews, and the brands Google and TikTok Shop show instead of you.",
        "title": "Supplement visibility audit"
      },
      {
        "text": "Profile, local pages, the product landing pages with your certification and sourcing story, the Subscribe & Save trial funnel, the retention flow and the monthly product Shorts, built with your approved wording. We never make a health, treatment or outcome claim, and never write a certification claim you have not approved.",
        "title": "We build the funnel"
      },
      {
        "text": "Trial orders and subscriptions arrive organised, with follow-up handled for you. Each month's report shows what came in and where it came from, so you can judge the funnel on your own subscriber list growing.",
        "title": "Customers reach you, you ship the refills"
      }
    ],
    "proof": "The market is the proof: a halal nutritional supplements market forecast to grow from about $6.25 billion in 2025 to about $11.03 billion by 2032, collagen among the best-selling supplements of 2026 with one brand selling 843,777 units on TikTok Shop US, and a subscriber worth about $300 to $400 a year on a $25 to $35 bottle — against a $499 to $799 monthly retainer. Fifteen to twenty-five new subscribers cover a whole year of the funnel, and the timing is unforgiving: January health resolutions are the biggest supplement sales wave of the year, and Ramadan 2027 starts around 8 February, so the brands that set up their funnel and content now are the ones that catch both waves. We start with a free supplement visibility audit, so you see exactly what a customer finds today before deciding anything.",
    "related": [
      "halal-local-seo",
      "gbp-fix-review-system"
    ],
    "short": "Done-for-you subscription funnel for small halal supplement and vitamin brands — local SEO, Google Business Profile, certification-story product pages, a Subscribe & Save trial funnel, retention flow and 12 product Shorts a month that turn searches into monthly refills.",
    "slug": "halal-supplements-funnel"
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

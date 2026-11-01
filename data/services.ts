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
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export interface Article {
  slug: string; title: string; service: string;
  excerpt: string; sections: { heading: string; paragraphs: string[] }[];
}

export const ARTICLES: Article[] = [
  {
    "slug": "why-your-cold-emails-go-to-spam",
    "title": "Why Your Cold Emails Go to Spam",
    "service": "email-deliverability-audit",
    "excerpt": "Your emails are not being ignored — they are being filtered. Here are the real reasons cold emails land in spam, and what actually fixes it.",
    "sections": [
      {
        "heading": "It is rarely the subject line",
        "paragraphs": [
          "When replies dry up, most senders rewrite subject lines. Sometimes that helps a little. But if your emails are landing in spam, the cause is almost always technical: your domain is not properly authenticated, your list has gone stale, or your sending pattern looks like a spammer's.",
          "Inbox providers do not read your email and judge its quality. They check signals: does this domain prove it is who it claims to be, does it have a history of wanted mail, and do recipients engage with it? Fail those checks and the filter decides before a human ever sees your message."
        ]
      },
      {
        "heading": "The three authentication records that matter",
        "paragraphs": [
          "SPF, DKIM and DMARC are three small DNS records that prove your domain authorises the servers sending your mail. If any of them is missing or wrong, providers treat your mail with suspicion. Setting them up is a one-time job, and it is the single most common fix we find in audits.",
          "You can check your own setup in minutes with free DNS lookup tools. If a record is missing, your email provider's help pages usually explain how to add it — or an audit can list exactly what to change."
        ]
      },
      {
        "heading": "Your list and your sending pattern",
        "paragraphs": [
          "Old lists hurt twice: they bounce, and they generate complaints. Both damage your sender reputation. Regularly removing hard bounces and addresses that never engage is not losing leads — it is protecting the leads you can still reach.",
          "Volume spikes hurt too. Going from ten emails a day to five hundred overnight looks exactly like a compromised account. Warming up a domain gradually, and keeping daily volume steady, is boring advice that works."
        ]
      },
      {
        "heading": "What to check first",
        "paragraphs": [
          "Start with authentication, then list hygiene, then volume. In that order. Most spam problems are fixed by those three steps, without touching your copy at all.",
          "If you have done all three and still land in spam, a proper deliverability audit can test real inbox placement and find the specific cause — guessing further usually costs more time than testing."
        ]
      },
      {
        "heading": "Sender reputation is a history, not a switch",
        "paragraphs": [
          "Inbox providers remember how your domain has behaved. Every campaign adds to a record: how many messages bounced, how many recipients complained, and how many people actually opened or replied. A domain with months of wanted mail gets the benefit of the doubt. A new domain, or one with a bad recent record, does not.",
          "That is why a spam problem rarely appears overnight and rarely disappears overnight either. Fixing the technical cause stops the damage, but rebuilding trust takes a run of clean, wanted sends. Anyone who promises an instant reputation reset is selling something that does not exist."
        ]
      },
      {
        "heading": "Keep cold outreach on its own subdomain",
        "paragraphs": [
          "One of the most practical protections is separation. If your main domain sends invoices, support replies and newsletters, do not send cold outreach from that same domain. A problem in one stream then hurts all of them.",
          "Instead, use a dedicated subdomain for outreach, warm it up gradually, and keep its reputation isolated. Your main domain stays clean for the mail that matters most, and a deliverability problem in outreach stays contained where it started."
        ]
      },
      {
        "heading": "What a proper audit actually tests",
        "paragraphs": [
          "Guessing stops being useful at some point. A real audit sends test messages to seed addresses across providers and records where they actually land — inbox, promotions, or spam — instead of assuming. It also checks blacklist listings and reads your Google Postmaster Tools reputation data.",
          "Those results turn a vague problem into a specific one: a missing record, a listed IP, a tired list, or a content pattern. Fix the specific cause first, re-test, and only then judge whether the problem is solved."
        ]
      },
      {
        "heading": "Engagement is the quiet score behind everything",
        "paragraphs": [
          "Beyond authentication and lists, providers watch what recipients do with your mail. Do people open it, reply to it, move it out of spam, or add you to their contacts? Those actions tell a provider your mail is wanted. Deleting without reading, marking as spam, or ignoring message after message tells the opposite story — and it accumulates across campaigns.",
          "This is why buying a list is so destructive even when the addresses are technically valid. Strangers who never asked for your mail do not engage with it; they delete it or report it. A small list of people who expect your mail will outperform a large list of strangers on every metric that matters, including whether your next campaign reaches the inbox at all."
        ]
      },
      {
        "heading": "When the problem is your domain's past, not your present",
        "paragraphs": [
          "Sometimes the cause of a spam problem predates your current setup: a domain that was previously used for bulk mail, a shared IP with a bad history, or an old campaign that generated complaints. In those cases, fixing today's settings is necessary but not sufficient, because providers are still scoring yesterday's behaviour.",
          "Recovery then has a specific shape: stop the harmful sending first, clean the list thoroughly, move cold outreach to a warmed subdomain, and rebuild with small, engaged batches over weeks. It is slower than anyone wants, but it is the only recovery that actually holds — shortcuts here just restart the cycle."
        ]
      },
      {
        "heading": "A simple diagnostic order that saves weeks",
        "paragraphs": [
          "When spam placement appears, work in a fixed order instead of changing everything at once: authentication first, then list quality, then volume and warm-up, then content, then reputation history. Changing one variable at a time is the only way to learn which fix actually worked — and the only way to avoid undoing a fix while chasing the next guess.",
          "Document each step as you go: what you checked, what you found, and what changed afterwards. A short log turns a frustrating problem into a repeatable process, and it becomes the evidence base for the next campaign. Teams that keep this log stop repeating the same mistakes; teams that do not keep solving the same problem from scratch.",
          "If you reach the end of that order and placement is still poor, the remaining causes are usually specific to your setup: a listed IP, a damaged domain history, or a provider-specific policy issue. That is the point where a focused audit with real placement tests is cheaper than another month of guessing — because guessing has already cost you the month."
        ]
      }
    ]
  },
  {
    "slug": "email-deliverability-checklist-before-your-next-campaign",
    "title": "Email Deliverability Checklist: 12 Checks Before Your Next Campaign",
    "service": "email-deliverability-audit",
    "excerpt": "A practical pre-send checklist: authentication, list hygiene, content and volume — run it before every campaign, not after it fails.",
    "sections": [
      {
        "heading": "Authentication: the non-negotiables",
        "paragraphs": [
          "Before any campaign, confirm SPF, DKIM and DMARC are all published and valid for your sending domain. A single typo in a DNS record can silently break authentication for every email you send.",
          "Also confirm you are sending from a domain you own, not a free mailbox. Free-mail senders are filtered harder, and they cannot build a reputation you control."
        ]
      },
      {
        "heading": "List hygiene: clean before you send",
        "paragraphs": [
          "Remove hard bounces from your last campaign, and suppress addresses that have not opened anything in months. A smaller, engaged list beats a large, dead one — for deliverability and for results.",
          "Never buy lists. Purchased lists are full of stale addresses and spam traps, and one trap can damage your domain's reputation for weeks."
        ]
      },
      {
        "heading": "Content and volume: look human",
        "paragraphs": [
          "Avoid heavy images with little text, URL shorteners, and spam-trigger phrases in your first lines. Plain, relevant copy with one clear link performs better and filters less.",
          "Keep daily volume steady and ramp new domains slowly. If your campaign is much larger than your usual sending, split it across days rather than blasting it at once."
        ]
      },
      {
        "heading": "After you send",
        "paragraphs": [
          "Watch bounces and spam complaints, not just opens. A rising bounce rate is an early warning — pause, clean the list, and fix the cause before the next send.",
          "If problems persist after running this checklist, the cause is usually specific to your setup. That is when a focused audit, with real placement tests, earns its keep."
        ]
      },
      {
        "heading": "Warm-up is not optional for new domains",
        "paragraphs": [
          "A brand-new domain has no sending history, so providers treat its first campaigns with suspicion. Sending a large campaign on day one is one of the fastest ways to damage a domain before it has even started.",
          "Warm-up means ramping volume gradually over several weeks: small, engaged batches first, then larger ones as the domain earns trust. It is slow and unglamorous, and it is the difference between a domain that lasts and one that burns out in its first month."
        ]
      },
      {
        "heading": "Content triggers beyond the obvious",
        "paragraphs": [
          "Beyond heavy images and spammy phrases, several quieter content habits cause filtering: too many links, link shorteners that hide the destination, and mismatched sender names that do not match the sending domain. Each one on its own is small; together they look like a pattern.",
          "The safest content rule is simple: write like a real person writing to one real person. One clear link, honest sender details, and an unsubscribe option that actually works. Filters reward mail that behaves like wanted mail."
        ]
      },
      {
        "heading": "Track the right numbers after you send",
        "paragraphs": [
          "After a campaign, watch bounces and spam complaints before anything else. Opens are unreliable — privacy features now inflate them — but a rising bounce rate or a complaint spike is a real warning that your list or setup needs attention.",
          "If bounces climb, pause before the next send. Clean the list, check authentication again, and fix the cause. Sending another campaign over a damaged reputation only makes the next recovery longer."
        ]
      },
      {
        "heading": "Check the sending setup, not just the message",
        "paragraphs": [
          "Before a campaign, confirm which servers are actually authorised to send for your domain, and that every tool you use — your CRM, your outreach platform, your newsletter service — is covered by your authentication records. A common failure is adding a new tool and forgetting to authorise it, so its mail fails checks that everything else passes.",
          "Also check that your sending domain matches the domain in your visible From address. When the two differ, providers notice the mismatch and trust the message less. Alignment between what recipients see and what the records prove is a small detail with an outsized effect on placement."
        ]
      },
      {
        "heading": "A pre-send test takes five minutes and saves a campaign",
        "paragraphs": [
          "Send the campaign to a handful of test addresses across Gmail, Outlook, and Yahoo before the real send, and check where each copy lands. If a test lands in spam, you have a cheap, private warning — and a chance to fix the cause before thousands of recipients see the same result.",
          "Free spam-score tools add a second layer: they flag content triggers, missing records, and broken links in a single report. Run one on every new template, not just on the first campaign. Templates drift over time as links and images change, and drift is exactly what pre-send tests are for."
        ]
      },
      {
        "heading": "Make the checklist a team habit, not a one-time event",
        "paragraphs": [
          "A checklist used once is a document; a checklist used before every campaign is a system. The difference shows up in the second month, when a new team member, a new tool, or a new list would otherwise reintroduce the exact problems the first run fixed. Print the checklist, assign an owner for each section, and require a sign-off before any large send.",
          "Review the checklist itself every quarter. Providers change their policies — authentication requirements tighten, bulk-sender rules evolve, and engagement signals shift. A checklist frozen in time slowly becomes a record of what used to work, and the gap between it and current reality is where new deliverability problems are born.",
          "Finally, keep the results. Record placement, bounce, and complaint rates for every campaign alongside the checklist run that preceded it. Over time that record shows which checks actually move your numbers and which ones are ritual — and it gives any future audit a running start instead of a blank page."
        ]
      },
      {
        "heading": "One last check: the human test",
        "paragraphs": [
          "Before you approve any campaign, read the first lines as the recipient would. Does the sender name look like a real person or business you would recognise? Does the subject promise something the email actually delivers? Would you open it, or would you report it? That thirty-second read catches problems no automated check can see.",
          "If the answer to any of those questions is uncomfortable, fix the message before worrying about the infrastructure. The best authentication in the world cannot save an email that reads like spam to the human it lands in front of."
        ]
      }
    ]
  },
  {
    "slug": "how-to-find-grants-that-fit-your-nonprofit",
    "title": "How to Find Grants That Actually Fit Your Nonprofit",
    "service": "grant-prospect-research",
    "excerpt": "Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, size and priorities before you write a single page.",
    "sections": [
      {
        "heading": "Start from eligibility, not from hope",
        "paragraphs": [
          "The most common grant mistake is applying everywhere. Funders publish eligibility rules for a reason: geography, organisation type, budget size, and project theme. If you fail one, your application is rejected no matter how good it is.",
          "Before you search, write down your own filters: where you work, what you do, your annual budget, and the amount you need. Every funder you consider must pass all four. This single habit eliminates most wasted applications."
        ]
      },
      {
        "heading": "Read what funders actually funded",
        "paragraphs": [
          "A funder's past grants tell you more than its mission statement. Look at the last two years of awards: the project types, the grant sizes, and the organisations funded. If nothing resembles you, move on — politely and quickly.",
          "Pay attention to grant size. A funder that gives $5,000 grants will not fund your $200,000 project, and a funder that gives $500,000 rarely funds small pilots. Fit the size as carefully as the theme."
        ]
      },
      {
        "heading": "Build a shortlist, then a calendar",
        "paragraphs": [
          "A good shortlist has ten to twenty prospects, each with a note on why it fits and what is missing. Rank them by fit, not by deadline — then build a deadline calendar around the ranking.",
          "Apply in waves, not all at once. Your first applications teach you what funders ask for; later ones in the same wave benefit from what you learned."
        ]
      },
      {
        "heading": "When research is worth paying for",
        "paragraphs": [
          "If your team spends weeks searching and still finds only obvious funders, outside prospect research can pay for itself: a researched shortlist with eligibility notes saves the weeks and raises the hit rate.",
          "Whatever you do, keep the standard high: every prospect should come with a reason it fits and a source you can verify. That is the difference between a list and a strategy."
        ]
      },
      {
        "heading": "Use past awards as your filter",
        "paragraphs": [
          "A funder's own history is the most honest eligibility test there is. Public records of past grants — including tax filings where they are public — show who actually received money, how much, and where they work. If no recipient resembles your organisation, that is information, not bad luck.",
          "Recency matters as much as resemblance. A funder that supported your kind of work five years ago may have moved on. Weight the last two years of awards most heavily, and treat older patterns as background, not as a promise."
        ]
      },
      {
        "heading": "Fit has five dimensions, not one",
        "paragraphs": [
          "Mission fit alone is not enough. A strong prospect also matches on geography, organisation type, budget size, and timing. A funder that only supports one region, or only registered charities, or only projects above a certain size, is a poor prospect no matter how much you admire its mission.",
          "Score each prospect on all five before you rank. The prospects that survive all five filters are the ones worth your writing time. Everything else is a distraction dressed as an opportunity."
        ]
      },
      {
        "heading": "A polite no is data, not failure",
        "paragraphs": [
          "Most applications are declined, and most declines say little. But patterns across declines are useful: if several funders say your budget is too small for their grants, that tells you to look for smaller funders, not to write the same proposal harder.",
          "Where feedback is offered, take it. And keep a record of every decline and its reason. Over a year, that record becomes a map of where you genuinely fit — which is exactly what the next round of research should start from."
        ]
      },
      {
        "heading": "Read the funder's own words, not just the directory listing",
        "paragraphs": [
          "Directory listings summarise; funder websites specify. Before you apply, read the funder's current guidelines, its most recent annual report, and any published strategy documents. Priorities shift, and a directory entry written two years ago may describe a programme that no longer exists in that form.",
          "Also look for what funders say they will not fund. Exclusions are often more specific than inclusions, and they save the most time: a single exclusion that matches your project ends the conversation cleanly, before you invest days in an application."
        ]
      },
      {
        "heading": "Build relationships before you need money",
        "paragraphs": [
          "The strongest applications rarely arrive cold. Funders notice organisations they have seen before — at events, in sector conversations, or through a brief introductory message months before a deadline. A short, respectful introduction that asks nothing is worth more than a polished proposal from a stranger.",
          "This does not mean lobbying or favour-seeking. It means being visible in the field the funder cares about, doing work they can see, and letting them learn your name before they read your application. Grants reward familiarity because familiarity reduces the funder's risk."
        ]
      },
      {
        "heading": "The application order matters as much as the shortlist",
        "paragraphs": [
          "Once the shortlist exists, the next decision is order. Apply first to the prospects where fit is strongest and the process is clearest, even if their deadlines are later. Early applications to strong-fit funders produce feedback and momentum; early applications to weak-fit funders produce rejections that teach nothing except that the fit was weak.",
          "Stagger the work so that no two major applications are due in the same week. Proposal quality collapses under deadline pile-ups, and a rushed proposal to a strong-fit funder is worse than a careful proposal to a slightly weaker one. A calendar that respects your team's real capacity is part of the strategy, not an administrative detail.",
          "After each round, update the shortlist with what you learned: which funders responded, what they asked, and where your project description proved weakest. The second round should be visibly smarter than the first — if it is not, the research is being filed instead of used."
        ]
      },
      {
        "heading": "Keep a record of every funder you rule out",
        "paragraphs": [
          "A ruled-out list is as valuable as a shortlist. Each rejection should carry its reason: wrong geography, wrong size, no unsolicited proposals, closed programme. Without that record, a future team member will research the same funders again and waste the same days.",
          "Review the ruled-out list once a year. Funders change priorities, open new programmes, and revise eligibility. A funder that was wrong last year is sometimes right this year — but only if you remember why it was ruled out in the first place."
        ]
      }
    ]
  },
  {
    "slug": "what-grant-prospect-research-looks-like",
    "title": "What Grant Prospect Research Looks Like (and Why Most Nonprofits Skip It)",
    "service": "grant-prospect-research",
    "excerpt": "Prospect research is the unglamorous step before the application — and the reason some organisations win repeatedly while others keep missing.",
    "sections": [
      {
        "heading": "The step everyone skips",
        "paragraphs": [
          "Grant writing gets the attention; prospect research does not. Yet research decides whether the writing matters at all. An excellent proposal to the wrong funder is still a rejection — and it cost weeks.",
          "Prospect research is simply systematic fit-checking: scanning funder sources, testing each prospect against your eligibility, and keeping only the ones that survive. It is slow, careful work — which is why it is usually skipped."
        ]
      },
      {
        "heading": "What a good prospect pack contains",
        "paragraphs": [
          "A useful pack is not a long list of links. It is a shortlist where every prospect has a profile: what the funder funds, typical grant size, deadlines, and — most importantly — why this prospect fits your organisation specifically.",
          "It also names the gaps: a prospect that fits except for one requirement is still useful, because you know exactly what to fix before applying."
        ]
      },
      {
        "heading": "Why small organisations benefit most",
        "paragraphs": [
          "Large nonprofits have staff for this. Small organisations do not — so they either apply blindly or do not apply at all. Both cost money: wasted effort, or missed funding.",
          "A one-time research pack levels this. It gives a small team the same starting point a large team has: a ranked, verified shortlist and a deadline calendar."
        ]
      },
      {
        "heading": "How to judge research quality",
        "paragraphs": [
          "Ask for the reasoning behind each prospect, not just the names. If a researcher cannot explain why a funder fits you, the list is not research — it is a search dump.",
          "Good research is verifiable: every prospect should trace back to a public source you can check yourself. That verifiability is the whole point."
        ]
      },
      {
        "heading": "The sources a good researcher actually uses",
        "paragraphs": [
          "Serious prospect research draws on several kinds of source, not one search engine. Funder directories list the basics; government portals list public grants; funder websites carry current priorities and deadlines; and public tax filings show what was actually awarded, to whom, and for how much.",
          "No single source is complete. Directories go stale, websites change without notice, and filings lag by a year or more. Cross-checking two or three sources for each prospect is what separates research from a list of links."
        ]
      },
      {
        "heading": "Scoring beats sorting",
        "paragraphs": [
          "A list sorted by deadline is not a strategy. A list scored by fit is. A simple score — mission match, geography, size, eligibility, and timing, each rated plainly — lets you see at a glance which prospects deserve your limited writing hours.",
          "Scoring also forces honesty. A prospect you like but that scores poorly is a prospect to set aside, not to chase. The discipline of the score protects small teams from their own optimism."
        ]
      },
      {
        "heading": "What research cannot do",
        "paragraphs": [
          "Research cannot guarantee an award, and it cannot fix a weak project. It can only put a strong project in front of the right funders. Funders also change priorities, close programmes, and decline excellent applications for reasons they never publish.",
          "Research also decays. A shortlist is a snapshot, not a permanent asset — deadlines pass, priorities shift, and eligibility rules change. Treat it as a working document to revisit each funding round, not as a one-time purchase."
        ]
      },
      {
        "heading": "The interview that makes research useful",
        "paragraphs": [
          "Good research starts with a conversation, not a database. A researcher should ask about your mission in your own words, your current funding, your capacity to deliver, and your appetite for reporting requirements. Without those answers, even accurate funder data produces a list that does not fit the organisation behind it.",
          "This interview also surfaces constraints that databases never show: a board that will not accept restricted funding, a team too small for heavy reporting, or a project that must start by a fixed date. Those constraints eliminate prospects faster than any search filter, and they should shape the shortlist from the beginning."
        ]
      },
      {
        "heading": "Keeping the shortlist alive after delivery",
        "paragraphs": [
          "A prospect pack delivered and filed away is worth little. Deadlines move, programmes close, and new funders appear. The organisations that win repeatedly treat their shortlist as a living pipeline: reviewed monthly, updated when a funder announces changes, and re-ranked after every round of applications.",
          "Assign one person to own that review, even if it takes an hour a month. Without an owner, the list quietly goes stale, and the next funding round starts from scratch — which is exactly the waste the research was meant to prevent."
        ]
      },
      {
        "heading": "How to tell good research from a dressed-up search dump",
        "paragraphs": [
          "The test is simple: pick three prospects from any research deliverable and ask why each one fits, in one sentence each, with a source you can open and check. Good research answers immediately. A search dump answers with generalities — a mission statement copied from a website, a grant range with no context, or a deadline with no eligibility note attached.",
          "A second test is what the research excludes and why. A credible shortlist names the near-misses it rejected and the reason for each rejection. That honesty is itself evidence of care: it shows the researcher actually applied filters instead of collecting everything the database returned.",
          "Price is a poor proxy for quality here. A cheap, long list is usually the most expensive option, because it costs your team weeks of wasted applications. A shorter, explained, verifiable list — even at a higher research fee — is cheaper the moment you count staff time."
        ]
      },
      {
        "heading": "Research is a service, not a document",
        "paragraphs": [
          "The value of prospect research is not the file you receive but the decisions it changes: which applications you write, which you skip, and in what order. If a research deliverable does not change a single decision, it was entertainment, not research — however polished it looks.",
          "Judge any research engagement by that standard after the first funding round. Did the shortlist change your application plan? Did it save weeks? Did it surface funders you would not have found? If the answers are yes, the research paid for itself. If not, change the researcher, not the strategy."
        ]
      }
    ]
  },
  {
    "slug": "why-urdu-ai-datasets-fail",
    "title": "Why Urdu AI Datasets Fail — and What Good Data Looks Like",
    "service": "urdu-ai-data-studio",
    "excerpt": "Most Urdu AI data is machine-translated, inconsistently scripted, or never checked by a native reader. That is why Urdu features sound wrong.",
    "sections": [
      {
        "heading": "The machine-translation trap",
        "paragraphs": [
          "The fastest way to build an Urdu dataset is to translate English data automatically. It is also the worst way. Machine translation produces Urdu that is grammatically passable and culturally empty: wrong idioms, unnatural phrasing, and vocabulary no native speaker would choose.",
          "A model trained on that data learns a version of Urdu that does not exist. Users notice immediately — and they stop trusting the product."
        ]
      },
      {
        "heading": "Script and spelling are not details",
        "paragraphs": [
          "Urdu script carries meaning in ways that Roman transliteration cannot. Datasets that mix scripts, ignore diacritics inconsistently, or normalise spelling carelessly teach models to be sloppy at exactly the points where users are precise.",
          "Good data starts with script decisions made deliberately: one script standard, documented normalisation rules, and checks that catch drift before it reaches training."
        ]
      },
      {
        "heading": "What good data looks like",
        "paragraphs": [
          "Good Urdu data is collected in Urdu, from real use: natural sentences, real questions, real speech. It is annotated by people who read the language, and checked a second time by someone else.",
          "It also ships with honest documentation: where the data came from, what was checked, and what its limits are. A dataset that hides its limits will teach your model its own blind spots."
        ]
      },
      {
        "heading": "Start small, check ruthlessly",
        "paragraphs": [
          "If you are building Urdu features, start with a small batch and inspect it yourself. Read a hundred examples. If they do not sound like real Urdu, no volume will fix it.",
          "Quality-first data costs more per example and far less per working product. That is the trade that matters."
        ]
      },
      {
        "heading": "Dialect and register are not edge cases",
        "paragraphs": [
          "Urdu varies by region, by formality, and by context — and it mixes with English constantly in everyday speech and writing. A dataset built from one region's formal written Urdu will fail on the casual, mixed speech that real users actually produce.",
          "Good data design names this variation up front: which regions, which registers, and how much code-mixing the data should contain. If those decisions are never made, they are made by accident — and the model inherits the accident."
        ]
      },
      {
        "heading": "Annotation guidelines decide quality",
        "paragraphs": [
          "Two annotators given the same vague instruction will produce two different datasets. Guidelines need examples, not just rules: show what counts as a correct label, show the borderline cases, and show what to do when an example is genuinely ambiguous.",
          "Disagreement between annotators is useful information, not a nuisance. When it is frequent, the guideline is unclear. Fix the guideline and re-annotate the affected batch — do not average away the disagreement and call it quality."
        ]
      },
      {
        "heading": "Evaluation must be native too",
        "paragraphs": [
          "A model can look excellent on a test set that was itself machine-translated, and still fail with real users. If your evaluation data has the same flaws as your training data, your metrics will flatter you all the way to launch.",
          "Build evaluation sets the same way you build training data: in real Urdu, checked by native readers, covering the variation your users will bring. Honest evaluation is slower, and it is the only kind worth trusting."
        ]
      },
      {
        "heading": "Roman Urdu is a separate problem, not a shortcut",
        "paragraphs": [
          "Much real-world Urdu appears in Roman script — typed in Latin letters on phones and social media. Treating Roman Urdu as just noisy Urdu misses the point: it has its own spelling conventions, its own mixing patterns with English, and its own ambiguities that do not exist in Urdu script.",
          "A dataset strategy should decide explicitly whether Roman Urdu is in scope, and if so, collect and annotate it as its own variety rather than transliterating it after the fact. Automatic transliteration introduces errors that look small in samples and compound across a whole dataset."
        ]
      },
      {
        "heading": "Quality checks need teeth, not just a second reader",
        "paragraphs": [
          "A second check only helps if it can reject work. Set a clear acceptance threshold for each batch — for example, an error rate above which the batch goes back for rework — and apply it consistently, even when deadlines press. A check that never rejects anything is decoration, not quality control.",
          "Also sample-check the checkers themselves. Periodically re-annotate a small set blind, and compare. When checker agreement drops, something changed — a guideline drifted, a new annotator misunderstood a rule, or the data itself got harder. Finding that early is far cheaper than finding it after training."
        ]
      },
      {
        "heading": "The documentation habit that separates good data from guesswork",
        "paragraphs": [
          "Every dataset should ship with a short document that a stranger could use to judge it: where the data came from, who annotated it, what the guidelines said, what was checked, what the known limits are, and which version it is. If that document does not exist, the dataset cannot be trusted — not because it is necessarily bad, but because nobody can tell whether it is good.",
          "This documentation habit also protects the team that built the data. When a model fails months later, the first question is always whether the data was at fault. A team with documentation answers in minutes; a team without it starts an investigation that should never have been necessary.",
          "Treat documentation as part of the deliverable, not as paperwork after delivery. A dataset without its documentation is an unfinished product, however clean the files themselves may look."
        ]
      },
      {
        "heading": "Start with the user, not the dataset",
        "paragraphs": [
          "Before collecting a single example, write down one real user and one real task: who will use this model, and what will they ask it to do? That sentence decides which variation matters, which registers to include, and what good performance even means.",
          "Without it, dataset teams optimise for size and speed — the two metrics that are easiest to measure and least related to whether the product works. With it, every later decision has a test: does this choice serve that user doing that task?",
          "Write that user-and-task sentence into the brief itself, and make every annotator and reviewer read it before starting. A shared picture of the user keeps hundreds of small decisions consistent in a way no rulebook alone can."
        ]
      }
    ]
  },
  {
    "slug": "building-urdu-voice-and-text-data-for-ai",
    "title": "Building Urdu Voice and Text Data for AI: A Practical Guide",
    "service": "urdu-ai-data-studio",
    "excerpt": "A step-by-step look at collecting, transcribing and checking Urdu data — from the brief to a dataset you can actually train on.",
    "sections": [
      {
        "heading": "Start with the brief, not the collection",
        "paragraphs": [
          "Every dataset project should start with a written brief: what task is this data for, what format does your pipeline need, and what does a good example look like? Without that, collectors guess — and guessing produces inconsistent data.",
          "Include examples in the brief: five good examples and five bad ones. Annotators work far better from examples than from abstract rules."
        ]
      },
      {
        "heading": "Collection: real language, real speakers",
        "paragraphs": [
          "For text, collect from real Urdu usage where you have the right to use it — not from translated English. For voice, record native speakers across the variation your product will meet: different ages, regions and speaking styles.",
          "Consent and rights matter from day one. Data collected without clear permission cannot be used later, no matter how good it is."
        ]
      },
      {
        "heading": "Annotation and the second check",
        "paragraphs": [
          "Annotation guidelines should be short, specific, and tested on a small batch before scaling. If two annotators disagree often, the guideline is unclear — fix the guideline, not the annotators.",
          "Every batch needs a second check by a different reviewer. The second check is where systematic errors surface: a misunderstood label, a script inconsistency, a recurring transcription habit."
        ]
      },
      {
        "heading": "Delivery: data plus a quality report",
        "paragraphs": [
          "A dataset delivery is incomplete without a quality report: coverage, checks performed, error rates found, and known limits. Your team needs that report to decide how much to trust the data.",
          "Treat the first small batch as a paid pilot. Prove the quality, then scale. That order protects both your budget and your model."
        ]
      },
      {
        "heading": "Speaker diversity is a design choice",
        "paragraphs": [
          "A voice dataset recorded from a narrow group of speakers teaches a model to understand that group — and to fail on everyone else. Age, region, gender, and speaking style all change how Urdu sounds, and a product trained on one slice will stumble on the rest.",
          "Plan diversity before recording begins: how many speakers, from which backgrounds, in what conditions. Diversity added after collection is expensive; diversity planned from the start is simply part of the brief."
        ]
      },
      {
        "heading": "Transcription conventions come before recording",
        "paragraphs": [
          "Decide the hard questions before anyone speaks: how are numbers written, how is English mixed into Urdu handled, what happens to hesitations and half-finished words, and which script standard applies? Every one of these will appear in the first hour of recordings.",
          "Write the conventions down, test them on a small sample, and only then scale. Changing conventions halfway through a project means reworking everything already collected — the most expensive mistake in dataset work."
        ]
      },
      {
        "heading": "Privacy and consent in practice",
        "paragraphs": [
          "Consent is not a checkbox at the start of a session. Speakers should understand what will be recorded, how it will be used, and whether they can withdraw. That understanding needs to be in plain language, not legal boilerplate.",
          "Also plan for personal information that slips into recordings: names, places, phone numbers. Decide in advance how it is removed, and who checks. Data that cannot be used safely later is data collected for nothing."
        ]
      },
      {
        "heading": "Recording conditions are data, not background",
        "paragraphs": [
          "A voice dataset recorded entirely in quiet rooms will fail in the noisy world where users actually speak. Background noise, phone microphones, distance from the mic, and room echo all change what a model hears — and if the training data never contains them, the model treats them as unfamiliar speech.",
          "Record across realistic conditions deliberately: quiet rooms, street noise, cheap phone microphones, and natural speaking distances. Note the conditions for each recording, so your team can measure performance by condition instead of discovering the gap after launch."
        ]
      },
      {
        "heading": "Version your dataset like software",
        "paragraphs": [
          "Datasets change: guidelines are clarified, errors are corrected, batches are added. Without versioning, nobody can say which data trained which model, or reproduce a result from last quarter. That makes debugging nearly impossible when a model regresses.",
          "Keep it simple but strict: a version number for every delivery, a short changelog of what changed, and frozen copies of delivered versions. When a model misbehaves, the first question should be answerable in seconds — which data version trained it?"
        ]
      },
      {
        "heading": "Pilots are the cheapest insurance in dataset work",
        "paragraphs": [
          "Before committing to full collection, run a small paid pilot: a few hundred examples, or an hour or two of audio, produced exactly as the full project would produce them — same brief, same guidelines, same checks. Then inspect the pilot yourself, end to end, with the same scepticism you would apply to a vendor's final delivery.",
          "The pilot answers the questions that matter before they become expensive: are the guidelines clear enough for annotators to agree, do the speakers match the target variation, do the recording conditions reflect real use, and does the quality report actually describe what was delivered? Every problem found in a pilot costs a fraction of the same problem found in a full dataset.",
          "If a pilot fails, that is success, not waste. It means the process was tested before the budget was spent. Fix the brief, the guidelines, or the recording plan, run a second small pilot, and only then scale. The most expensive dataset is the large one built on an untested process."
        ]
      },
      {
        "heading": "Budget for rework, or pay for it later",
        "paragraphs": [
          "No dataset project survives first contact with real data unchanged. Guidelines will need revision, a batch will fail checks, a recording setup will prove unusable. A budget with no room for rework is a budget that pretends otherwise — and the rework happens anyway, unpaid and rushed.",
          "Plan explicitly for one full rework cycle in time and cost. If it is not needed, you finish early. If it is needed — and it usually is — you absorb it without cutting the quality checks that exist to catch exactly these problems.",
          "Tell the client about the rework allowance up front, too. A client who expects one clean pass will see rework as failure; a client who was told to expect it will see it as the process working as designed."
        ]
      }
    ]
  },
  {
    "slug": "how-to-find-a-research-gap-for-your-paper",
    "title": "How to Find a Research Gap for Your Paper",
    "service": "research-support-services",
    "excerpt": "A research gap is not just an unstudied topic — it is a specific, defensible opening in the literature. Here is how to find one honestly.",
    "sections": [
      {
        "heading": "A gap is a relationship, not a topic",
        "paragraphs": [
          "Students often describe a gap as 'nobody studied X.' That is rarely true, and reviewers know it. A real gap is a relationship: two findings that disagree, a method never applied to a context, a population never included, or a result that does not replicate.",
          "So the search is not for empty land. It is for tension in the literature — places where existing work points in different directions or stops short."
        ]
      },
      {
        "heading": "Read for patterns, not for summaries",
        "paragraphs": [
          "Start with recent surveys and review papers in your area. Note what they say is unresolved — authors often state open problems plainly. Then read the primary papers behind those claims and check whether the gap is real or already closed.",
          "Keep a simple table as you read: paper, method, context, finding, limitation. Gaps appear in the table's empty cells and contradictions — not in your memory of what you read."
        ]
      },
      {
        "heading": "Test the gap before you commit",
        "paragraphs": [
          "A gap must survive three tests. Is it genuinely open — has nobody answered it? Is it answerable — can you study it with methods and data you can actually get? And does it matter — would an answer change what anyone does or believes?",
          "If it fails any test, refine it rather than defending it. A smaller, honest gap beats a grand, imaginary one — and reviewers can tell the difference."
        ]
      },
      {
        "heading": "From gap to question",
        "paragraphs": [
          "Once the gap survives, state it as one research question with clear boundaries: what you will study, in what context, and what would count as an answer. That question becomes the spine of your paper.",
          "If you get stuck at any stage — survey, table, or question — structured support can help you move faster without doing the thinking for you. The gap, and the paper, stay yours."
        ]
      },
      {
        "heading": "Three kinds of gap worth pursuing",
        "paragraphs": [
          "Most defensible gaps fall into three kinds. First, a disagreement: two good studies reach different conclusions, and nobody has resolved why. Second, a missing context: a result shown in one population or setting, never tested in yours. Third, a method gap: a newer method never applied to an old question.",
          "Naming which kind yours is sharpens everything after it. A disagreement gap needs a study designed to arbitrate. A context gap needs careful justification for why the new context matters. A method gap needs a clear argument for why the method changes the answer."
        ]
      },
      {
        "heading": "The literature table in practice",
        "paragraphs": [
          "Build the table early and keep it visible. Columns: paper, method, context, key finding, and limitation. Fill it as you read, not from memory afterwards. Memory smooths over the very contradictions you are looking for.",
          "After twenty or thirty papers, read the table as a whole. Gaps show up as patterns: a method used everywhere except your context, a population studied everywhere except yours, or two findings that cannot both be right. The table does the noticing; you do the judging."
        ]
      },
      {
        "heading": "When the gap closes while you work",
        "paragraphs": [
          "Sometimes another paper answers your question while you are still working on it. That is not a disaster — it is normal in active fields. The honest responses are to narrow the question, extend it, or test the new answer in a different context.",
          "What you should not do is pretend the new paper does not exist. Reviewers will find it, and hiding it damages your credibility far more than a reframed question ever could. Cite it, position against it, and move forward."
        ]
      },
      {
        "heading": "Talk to people, not just papers",
        "paragraphs": [
          "The literature shows what has been published, not what practitioners struggle with or what supervisors see failing. A short conversation with a supervisor, a practitioner, or a researcher in a neighbouring field often surfaces a gap that months of reading would miss — because the gap lives in practice, not in print.",
          "Conferences, seminars, and even the questions asked after a talk are rich sources. When several people ask the same unanswered question, that is a signal. Write those questions down; they are often more honest than any published future-work section."
        ]
      },
      {
        "heading": "Scope the gap to the time you actually have",
        "paragraphs": [
          "A gap that needs three years of data collection is not a gap for a one-year project, however interesting it is. Match the question to your real constraints: the data you can access, the methods you can learn, the time you have, and the supervision available.",
          "Scoping down is not settling. A tightly scoped question answered well is worth more than a grand question answered thinly — and it leaves a clean next step that other researchers, including your future self, can build on."
        ]
      },
      {
        "heading": "Write the gap down before you fall in love with it",
        "paragraphs": [
          "Once you think you have a gap, write it in three sentences: what is known, what is missing, and why the missing piece matters. If you cannot write those three sentences plainly, you do not yet have a gap — you have a feeling, and feelings do not survive contact with reviewers.",
          "Show those three sentences to someone who knows the field but is not invested in your project. Their reaction is a fast, cheap test: confusion means the gap is unclear, a counter-example means it may already be closed, and genuine interest means it is worth pursuing. Do this before investing months, not after.",
          "Keep the three sentences visible throughout the project. As the work progresses they will need refinement, and that refinement is healthy — but if the final paper answers a different question from the one you started with, say so explicitly. A paper that quietly changes its question reads as evasive; a paper that explains its evolution reads as honest."
        ]
      },
      {
        "heading": "A gap statement you can defend in one minute",
        "paragraphs": [
          "Imagine a sceptical colleague gives you sixty seconds: what is missing, why does it matter, and how will you study it? If your answer needs jargon, caveats, or a long preamble, the gap is not yet sharp enough. Clarity here is not dumbing down — it is proof you understand your own question.",
          "Practice that minute aloud before you commit months to the project. The gaps that survive a plain-spoken defence are the ones that survive reviewers too."
        ]
      }
    ]
  },
  {
    "slug": "from-idea-to-published-paper",
    "title": "From Idea to Published Paper: What Research Support Actually Covers",
    "service": "research-support-services",
    "excerpt": "What happens between a good idea and a submitted paper — and where honest support helps, versus where it crosses a line.",
    "sections": [
      {
        "heading": "The stages every paper passes through",
        "paragraphs": [
          "Idea, literature survey, gap, method, results, writing, formatting, submission. Most researchers are strong at some stages and stuck at others — and the stuck stage is where months disappear.",
          "Support should target the stuck stage, not replace the researcher. That distinction is what separates legitimate help from misconduct."
        ]
      },
      {
        "heading": "Where support genuinely helps",
        "paragraphs": [
          "A literature survey organised and summarised properly saves weeks. A gap analysis that tests your idea against the field prevents wasted months. Structure and clarity editing turns good work into readable work. Formatting to a journal's requirements removes a common reason for desk rejection.",
          "None of these replace your ideas or your results. They make your work presentable — which is a legitimate, normal part of research."
        ]
      },
      {
        "heading": "Where support must stop",
        "paragraphs": [
          "Nobody should write your paper for you, fabricate results, or promise acceptance. Services that offer those things are selling misconduct, and journals are increasingly able to detect it.",
          "Ask any support service directly: what exactly will you do, and what stays with me? If the answer is vague, walk away."
        ]
      },
      {
        "heading": "Choosing help wisely",
        "paragraphs": [
          "Look for support from people who have done research themselves, who document their work, and who keep your topic private. Start with one stage, judge the quality, and continue only if it genuinely helps.",
          "The goal is a stronger paper with your name on it — honestly earned, clearly written, and ready for reviewers to judge on its merits."
        ]
      },
      {
        "heading": "Responding to reviewers without losing your paper",
        "paragraphs": [
          "Reviewer comments fall into two piles: those that improve the paper and those that misunderstand it. Both deserve a calm, specific reply. For the first pile, make the change and say exactly where. For the second, explain the misunderstanding with evidence and point to the clarification you added.",
          "Never argue with the tone of a review, even a harsh one. Editors notice authors who respond thoroughly and graciously, and they notice the opposite too. A careful response letter is part of the paper, not an afterthought."
        ]
      },
      {
        "heading": "Preprints and timing",
        "paragraphs": [
          "Posting a preprint can get your work read months before formal publication, and it establishes priority. But not every journal treats preprints the same way, so check the target journal's policy before posting — a preprint that violates a journal's rules can close a door you wanted open.",
          "Timing matters in another way too. Submitting to the right journal first, rather than the most prestigious one, often gets a paper published sooner and read by the people who will actually use it. Fit beats prestige when the goal is a paper that gets cited."
        ]
      },
      {
        "heading": "Desk rejection is usually fixable",
        "paragraphs": [
          "A desk rejection — rejected without peer review — usually means scope, formatting, or a missing element, not a verdict on your work. Read the editor's note carefully: it normally names the reason, even briefly.",
          "Common fixable causes are a journal-scope mismatch, missing declarations, or a manuscript that does not follow the journal's structure. Fix the named cause, consider a better-fitting journal, and resubmit. Most published researchers have a drawer of desk rejections behind them."
        ]
      },
      {
        "heading": "Co-authorship should be agreed early, in writing",
        "paragraphs": [
          "Nothing poisons a paper faster than a late argument about who did what. Agree authorship and order early, in writing, based on contribution — and revisit the agreement if contributions change substantially during the work. It feels awkward at the start and prevents real damage later.",
          "Also agree on who handles submission, revisions, and correspondence, and what happens if someone becomes unavailable. These are boring administrative decisions until the week a revision is due and nobody knows who is responsible."
        ]
      },
      {
        "heading": "Keep a paper trail of every decision",
        "paragraphs": [
          "Research moves fast and memory fades. Keep dated notes of key decisions: why a method was chosen, why a dataset was excluded, how a borderline result was handled. When a reviewer asks why you did something, that note is the difference between a confident answer and a reconstruction.",
          "The same habit protects you. If anyone ever questions your work, a clear record of decisions, data handling, and analysis steps is your best evidence that the work was done carefully and honestly."
        ]
      },
      {
        "heading": "What to do while you wait for reviews",
        "paragraphs": [
          "Review takes months, and waiting passively wastes them. While a paper is under review, the productive moves are to start the next piece of work, prepare the data and code for sharing, and draft the plain-language summary you will need whether the paper is accepted or not. None of these depend on the review outcome, and all of them make the next step faster.",
          "Do not submit the same paper to another journal while it is under review — that is a serious breach of publishing ethics and a fast way to damage your reputation. If the wait becomes unreasonable, the correct move is a polite inquiry to the editor, not a parallel submission.",
          "When the decision arrives, whatever it is, read it twice before responding: once for the emotion, once for the content. The second reading is where the useful work lives, and it is the reading that turns a rejection into a stronger resubmission."
        ]
      },
      {
        "heading": "After publication, the work is not finished",
        "paragraphs": [
          "Publication is a milestone, not a finish line. Share the paper where its readers actually are, deposit data and code where your field expects them, and answer the questions that come — including the critical ones. A paper that is read, cited, and debated has done its job; a paper that sits unread has only been printed.",
          "Keep a short record of what the process taught you: which journal fit, which review comments improved the work, what you would do differently. That record is the most valuable thing you carry into the next paper, because the next paper starts with everything this one taught you."
        ]
      }
    ]
  }
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesForService(serviceSlug: string): Article[] {
  return ARTICLES.filter((a) => a.service === serviceSlug);
}

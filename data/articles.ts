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

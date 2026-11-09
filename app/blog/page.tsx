import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Practical Guides on Websites, Ads & SEO | AA Digital Network",
  description: "Practical guides from AA Digital Network: email deliverability, grant research, Urdu AI data and research support — each linked to the service it covers.",
  alternates: { canonical: `https://aa-digital-network-website.pages.dev/blog` },
  openGraph: { title: "Blog — Practical Guides on Websites, Ads & SEO | AA Digital Network", description: "Practical guides from AA Digital Network: email deliverability, grant research, Urdu AI data and research support — each linked to the service it covers.", url: `https://aa-digital-network-website.pages.dev/blog`, type: "website", siteName: "AA Digital Network", images: [`https://aa-digital-network-website.pages.dev/og.png`] },
};

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="wrap page">
      <h1>Blog</h1>
      <p className="lead">
        Practical guides on the services we offer — written to help first, and linked to the
        service page if you want help with it.
      </p>
      <div className="grid">
          <div className="card" key="why-your-cold-emails-go-to-spam">
            <img className="card-img" src="/images/blog/why-your-cold-emails-go-to-spam.jpg" alt="Illustration of cold emails being diverted by a spam filter shield into a junk folder instead of reaching the inbox" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/why-your-cold-emails-go-to-spam">Why Your Cold Emails Go to Spam</Link></h3>
            <p>Your emails are not being ignored — they are being filtered. Here are the real reasons cold emails land in spam, and what actually fixes it.</p>
            <p className="small"><Link href="/services/email-deliverability-audit">Related service →</Link></p>
          </div>
          <div className="card" key="email-deliverability-checklist-before-your-next-campaign">
            <img className="card-img" src="/images/blog/email-deliverability-checklist-before-your-next-campaign.jpg" alt="Illustration of a pre-send email deliverability checklist on a clipboard beside a laptop showing emails marked with green checkmarks" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/email-deliverability-checklist-before-your-next-campaign">Email Deliverability Checklist: 12 Checks Before Your Next Campaign</Link></h3>
            <p>A practical pre-send checklist: authentication, list hygiene, content and volume — run it before every campaign, not after it fails.</p>
            <p className="small"><Link href="/services/email-deliverability-audit">Related service →</Link></p>
          </div>
          <div className="card" key="how-to-find-grants-that-fit-your-nonprofit">
            <img className="card-img" src="/images/blog/how-to-find-grants-that-fit-your-nonprofit.jpg" alt="Illustration of a nonprofit researcher using a magnifying glass to find a grant opportunity card that fits like a puzzle piece" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-to-find-grants-that-fit-your-nonprofit">How to Find Grants That Actually Fit Your Nonprofit</Link></h3>
            <p>Most grant applications fail on fit, not quality. Learn to filter funders by eligibility, size and priorities before you write a single page.</p>
            <p className="small"><Link href="/services/grant-prospect-research">Related service →</Link></p>
          </div>
          <div className="card" key="what-grant-prospect-research-looks-like">
            <img className="card-img" src="/images/blog/what-grant-prospect-research-looks-like.jpg" alt="Illustration of grant prospect research in progress, with a board of connected funder profiles and charts above a researcher's desk" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/what-grant-prospect-research-looks-like">What Grant Prospect Research Looks Like (and Why Most Nonprofits Skip It)</Link></h3>
            <p>Prospect research is the unglamorous step before the application — and the reason some organisations win repeatedly while others keep missing.</p>
            <p className="small"><Link href="/services/grant-prospect-research">Related service →</Link></p>
          </div>
          <div className="card" key="why-urdu-ai-datasets-fail">
            <img className="card-img" src="/images/blog/why-urdu-ai-datasets-fail.jpg" alt="Illustration of flowing Urdu calligraphy breaking apart into fragmented, mismatched digital data tiles with warning highlights" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/why-urdu-ai-datasets-fail">Why Urdu AI Datasets Fail — and What Good Data Looks Like</Link></h3>
            <p>Most Urdu AI data is machine-translated, inconsistently scripted, or never checked by a native reader. That is why Urdu features sound wrong.</p>
            <p className="small"><Link href="/services/urdu-ai-data-studio">Related service →</Link></p>
          </div>
          <div className="card" key="building-urdu-voice-and-text-data-for-ai">
            <img className="card-img" src="/images/blog/building-urdu-voice-and-text-data-for-ai.jpg" alt="Illustration of a speaker recording Urdu voice data into a studio microphone, with the audio waveform flowing into checked transcription lines on a screen" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/building-urdu-voice-and-text-data-for-ai">Building Urdu Voice and Text Data for AI: A Practical Guide</Link></h3>
            <p>A step-by-step look at collecting, transcribing and checking Urdu data — from the brief to a dataset you can actually train on.</p>
            <p className="small"><Link href="/services/urdu-ai-data-studio">Related service →</Link></p>
          </div>
          <div className="card" key="how-to-find-a-research-gap-for-your-paper">
            <img className="card-img" src="/images/blog/how-to-find-a-research-gap-for-your-paper.jpg" alt="Illustration of a researcher reading between tall stacks of academic papers in a library, with warm light falling on the gap between shelves" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-to-find-a-research-gap-for-your-paper">How to Find a Research Gap for Your Paper</Link></h3>
            <p>A research gap is not just an unstudied topic — it is a specific, defensible opening in the literature. Here is how to find one honestly.</p>
            <p className="small"><Link href="/services/research-support-services">Related service →</Link></p>
          </div>
          <div className="card" key="from-idea-to-published-paper">
            <img className="card-img" src="/images/blog/from-idea-to-published-paper.jpg" alt="Illustration of the journey from a first idea in a sketch notebook to manuscript pages, a laptop draft and a finished published journal" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/from-idea-to-published-paper">From Idea to Published Paper: What Research Support Actually Covers</Link></h3>
            <p>What happens between a good idea and a submitted paper — and where honest support helps, versus where it crosses a line.</p>
            <p className="small"><Link href="/services/research-support-services">Related service →</Link></p>
          </div>
          <div className="card" key="how-muslim-wedding-planners-get-more-bookings">
            <img className="card-img" src="/images/blog/how-muslim-wedding-planners-get-more-bookings.jpg" alt="Muslim wedding planner wearing a hijab reviewing new booking enquiries on a tablet inside a decorated walima venue" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-muslim-wedding-planners-get-more-bookings">How Muslim Wedding Planners Get More Bookings: The Funnel, Step by Step</Link></h3>
            <p>Couples book the planner they can find, trust and reach first. Here is the practical funnel — search, faith-aware pages, instant replies — that turns searches into consultations.</p>
            <p className="small"><Link href="/services/halal-wedding-booking">Related service →</Link></p>
          </div>
          <div className="card" key="how-halal-beauty-brands-get-more-sales">
            <img className="card-img" src="/images/blog/how-halal-beauty-brands-get-more-sales.jpg" alt="Small halal beauty brand founder's studio desk with a laptop showing an online store, skincare products lined up for photography, a phone on a tripod and a ring light" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-halal-beauty-brands-get-more-sales">How Halal Beauty Brands Get More Sales: The Funnel, Step by Step</Link></h3>
            <p>Your customers are searching for halal skincare every day — and buying from the brands they can find. Here is the practical funnel — search, product pages, short video and refill reminders — that turns searches into repeat orders.</p>
            <p className="small"><Link href="/services/halal-beauty-sales-funnel">Related service →</Link></p>
          </div>
          <div className="card" key="how-small-clinics-win-patients-with-shorts">
            <img className="card-img" src="/images/blog/how-small-clinics-win-patients-with-shorts.jpg" alt="Physiotherapist demonstrating a shoulder stretch for a short video filmed on a phone on a tripod in a bright therapy clinic" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-small-clinics-win-patients-with-shorts">How Small Clinics Win Patients With Short-Form Video</Link></h3>
            <p>Patients meet your clinic on video before they ever meet you in person. Here is the practical system — twelve Shorts a month, in your clinic's own voice — that turns searches into booked appointments.</p>
            <p className="small"><Link href="/services/clinic-shorts-retainer">Related service →</Link></p>
          </div>
          <div className="card" key="how-halal-food-businesses-get-found-first">
            <img className="card-img" src="/images/blog/how-halal-food-businesses-get-found-first.jpg" alt="Halal grocery store owner arranging fresh produce at a colourful market stall with customers browsing" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-halal-food-businesses-get-found-first">How Halal Food Businesses Get Found First on Google</Link></h3>
            <p>Your customers are searching for halal food every day — and eating at the businesses Google shows them first. Here is the practical system — profile, local pages, reviews — that puts your restaurant, butchery or grocery store at the top of that search.</p>
            <p className="small"><Link href="/services/halal-local-seo">Related service →</Link></p>
          </div>
          <div className="card" key="how-immigration-lawyers-reach-clients-in-their-own-language">
            <img className="card-img" src="/images/blog/how-immigration-lawyers-reach-clients-in-their-own-language.jpg" alt="Immigration lawyer listening attentively to a Muslim couple in a bright modern office, with a folder of case documents open on the desk" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-immigration-lawyers-reach-clients-in-their-own-language">How Immigration Lawyers Reach Clients in Their Own Language</Link></h3>
            <p>A family searching for an immigration lawyer in Arabic, Urdu or Bengali will call the firm that speaks their language. Here is the funnel that makes that firm yours.</p>
            <p className="small"><Link href="/services/diaspora-language-intake">Related service →</Link></p>
          </div>
          <div className="card" key="how-islamic-schools-fill-every-seat">
            <img className="card-img" src="/images/blog/how-islamic-schools-fill-every-seat.jpg" alt="Teacher in hijab reading with a group of young children sitting in a circle in a bright modern Islamic school classroom" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-islamic-schools-fill-every-seat">How Islamic Schools Fill Every Seat: The Admissions Funnel That Works</Link></h3>
            <p>One admission is worth $5,000 to $15,000 a year in tuition, yet most Islamic schools are marketed by volunteers. Here is the admissions funnel that turns searches into enrolled families.</p>
            <p className="small"><Link href="/services/islamic-schools-admissions">Related service →</Link></p>
          </div>
          <div className="card" key="how-muslim-funeral-homes-get-found-when-families-need-them">
            <img className="card-img" src="/images/blog/how-muslim-funeral-homes-get-found-when-families-need-them.jpg" alt="Exterior of a modest, dignified Muslim funeral home building with a clean sign and a small garden at dusk, warm lights in the windows" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-muslim-funeral-homes-get-found-when-families-need-them">How Muslim Funeral Homes Get Found When Families Need Them Most</Link></h3>
            <p>When a family loses someone, they search once — and they call the funeral home they can find. Here is the visibility system that makes sure that call reaches you.</p>
            <p className="small"><Link href="/services/janaza-visibility">Related service →</Link></p>
          </div>
          <div className="card" key="how-estate-attorneys-reach-muslim-families">
            <img className="card-img" src="/images/blog/how-estate-attorneys-reach-muslim-families.jpg" alt="A signed will document and a fountain pen on a polished wooden desk in a law office, in soft window light" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-estate-attorneys-reach-muslim-families">How Estate Attorneys Reach Muslim Families Before It Is Too Late</Link></h3>
            <p>Only about a quarter of Americans have a will — and most Muslim families need one that honours both Sharia and state law. Here is the funnel that puts your firm in front of them first.</p>
            <p className="small"><Link href="/services/islamic-will-estate-funnel">Related service →</Link></p>
          </div>
<div className="card" key="how-muslim-therapists-reach-clients-who-need-them">
            <img className="card-img" src="/images/blog/how-muslim-therapists-reach-clients-who-need-them.jpg" alt="Bright modern therapy office interior with a welcoming entrance area, comfortable armchairs, soft natural light, plants and bookshelves" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-muslim-therapists-reach-clients-who-need-them">How Muslim Therapists Reach the Clients Who Need Them Most</Link></h3>
            <p>A Muslim therapist's next client is searching tonight for a therapist who understands their faith. Here is the funnel that puts your practice first.</p>
            <p className="small"><Link href="/services/muslim-therapist-funnel">Related service →</Link></p>
          </div>

================================================================
<div className="card" key="how-muslim-realtors-reach-halal-homebuyers-first">
            <img className="card-img" src="/images/blog/how-muslim-realtors-reach-halal-homebuyers-first.jpg" alt="Modern family home exterior at golden hour with a sold sign in the front yard, warm welcoming light" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-muslim-realtors-reach-halal-homebuyers-first">How Muslim Realtors Reach Halal Homebuyers First</Link></h3>
            <p>Guidance Residential has financed $12B+ for 45,000 families — yet most Muslim realtors are invisible on Google. Here is the funnel that puts you first.</p>
            <p className="small"><Link href="/services/halal-homebuyer-funnel">Related service →</Link></p>
          </div>

================================================================================
<div className="card" key="why-local-businesses-lose-customers-on-google">
            <img className="card-img" src="/images/blog/why-local-businesses-lose-customers-on-google.jpg" alt="Customer on a British high street in the early evening looking at a smartphone map search, with two small independent takeaways side by side behind them" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/why-local-businesses-lose-customers-on-google">Why Local Businesses Lose Customers on Google — Before the Phone Ever Rings</Link></h3>
            <p>Most local customers are won or lost on a Google profile, not on the premises. Here is what we check on yours, what we fix, and the review system we set up.</p>
            <p className="small"><Link href="/services/gbp-fix-review-system">Related service →</Link></p>
          </div>

<div className="card" key="how-muslim-home-care-agencies-reach-families-first">
            <img className="card-img" src="/images/blog/how-muslim-home-care-agencies-reach-families-first.jpg" alt="Elderly Muslim couple sitting together on a sofa in a bright living room at home, a kind caregiver preparing tea in the kitchen in the background" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-muslim-home-care-agencies-reach-families-first">How Muslim Home-Care Agencies Reach the Families Who Need Them First</Link></h3>
            <p>A typical home-care client is worth about $18,200 in revenue over six months — yet most Muslim home-care agencies are invisible on Google. Here is the funnel that puts you first.</p>
            <p className="small"><Link href="/services/faith-aware-home-care">Related service →</Link></p>
          </div>

================================================================================
<div className="card" key="how-muslim-financial-advisors-reach-halal-investors">
            <img className="card-img" src="/images/blog/how-muslim-financial-advisors-reach-halal-investors.jpg" alt="Muslim family with two children sitting together at a dining table at home in the evening, reviewing savings and education plans in a notebook" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-muslim-financial-advisors-reach-halal-investors">How Muslim Financial Advisors Reach Halal Investors First</Link></h3>
            <p>A single $100,000 client is worth roughly $1,000 a year in recurring fees — yet most independent Muslim advisors are invisible on Google. Here is the funnel that puts you first.</p>
            <p className="small"><Link href="/services/halal-wealth-funnel">Related service →</Link></p>
          </div>


================================================================================
<div className="card" key="how-women-only-fitness-studios-fill-every-class">
            <img className="card-img" src="/images/blog/how-women-only-fitness-studios-fill-every-class.jpg" alt="Female fitness coach in modest sportswear leading a small group class of women in hijabs in a bright private women-only studio, viewed from behind the group" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-women-only-fitness-studios-fill-every-class">How Women-Only Fitness Studios Fill Every Class</Link></h3>
            <p>The women-only gym market was about $5.30 billion in 2025 — yet most Muslim-friendly studios are invisible on Google. Here is the funnel that puts you first.</p>
            <p className="small"><Link href="/services/modest-member-funnel">Related service →</Link></p>
          </div>

================================================================================
<div className="card" key="how-umrah-travel-agencies-win-more-bookings">
            <img className="card-img" src="/images/blog/how-umrah-travel-agencies-win-more-bookings.jpg" alt="Muslim family with suitcases and backpacks walking through a bright modern airport departure hall, parents and two children in modest dress" width={2048} height={1152} loading="lazy" />
            <h3><Link href="/blog/how-umrah-travel-agencies-win-more-bookings">How Umrah Travel Agencies Win More Bookings</Link></h3>
            <p>More than 18 million pilgrims now travel for Umrah from abroad — yet most small agencies are invisible on Google. Here is the funnel that puts you first.</p>
            <p className="small"><Link href="/services/umrah-booking-funnel">Related service →</Link></p>
          </div>

      </div>
    </div>
  );
}

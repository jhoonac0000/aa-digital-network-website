import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/work`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tools`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/books`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/terms`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/website-development`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/ad-videos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/guest-posting`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/ada-accessibility`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/medical-billing-leads`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/automation`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/video-editing`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/white-label-seo`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/grant-prospect-research`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/email-deliverability-audit`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/urdu-ai-data-studio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/research-support-services`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/ai-virtual-try-on`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/why-your-cold-emails-go-to-spam`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/email-deliverability-checklist-before-your-next-campaign`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/how-to-find-grants-that-fit-your-nonprofit`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/what-grant-prospect-research-looks-like`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/why-urdu-ai-datasets-fail`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/building-urdu-voice-and-text-data-for-ai`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/how-to-find-a-research-gap-for-your-paper`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/from-idea-to-published-paper`, changeFrequency: "weekly", priority: 0.8 }
  ];
}

import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, WA_DISPLAY, WA_LINK } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AA Digital Network — Websites, Ad Videos & SEO That Bring Clients",
  description:
    "AA Digital Network: websites, ad videos, guest posting, accessibility audits, lead generation and automation for small businesses. Honest pricing, no fake promises. Message us on WhatsApp.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "AA Digital Network — Websites, Ad Videos & SEO That Bring Clients",
    description:
      "Websites, videos, SEO and automation for small businesses — built honestly, priced plainly.",
    url: SITE_URL,
    images: [`${SITE_URL}/og.png`],
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/og.png`] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1f38",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "A remote-first digital services agency for small businesses: websites, ad videos, guest posting, accessibility audits, lead generation and automation.",
  contactPoint: { "@type": "ContactPoint", contactType: "sales", url: WA_LINK, telephone: WA_DISPLAY },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const SITE_URL = "https://aa-digital-network.vercel.app";
export const SITE_NAME = "AA Digital Network";
export const WA_DISPLAY = "+92 321 6650737";
export const WA_NUMBER = "923216650737";
export const WA_LINK = "https://wa.me/923216650737";

export function waLink(message: string): string {
  return `${WA_LINK}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/tools", label: "Tools" },
  { href: "/books", label: "Books" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

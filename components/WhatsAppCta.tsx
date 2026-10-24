import { WA_DISPLAY, WA_LINK, waLink } from "@/lib/site";

export default function WhatsAppCta({ message, label }: { message: string; label?: string }) {
  return (
    <a className="btn btn-wa" href={waLink(message)} target="_blank" rel="noopener noreferrer">
      {label ?? `Chat on WhatsApp (${WA_DISPLAY})`}
    </a>
  );
}

export function waHref(): string {
  return WA_LINK;
}

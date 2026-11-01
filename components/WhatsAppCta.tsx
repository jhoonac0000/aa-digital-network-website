import { WA_LINK, waLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppCta({ message, label }: { message: string; label?: string }) {
  return (
    <a className="btn btn-wa" href={waLink(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      {label ?? "Chat on WhatsApp"}
    </a>
  );
}

export function waHref(): string {
  return WA_LINK;
}

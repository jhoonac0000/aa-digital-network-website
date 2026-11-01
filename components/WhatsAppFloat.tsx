import { WA_LINK } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="wa-float-label">Chat on WhatsApp</span>
    </a>
  );
}

"use client";

import { useEffect, useState } from "react";
import WhatsAppCta from "@/components/WhatsAppCta";

function usePreview(file: File | null): string | null {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!file) {
      setUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);
  return url;
}

export default function TryYourOwn() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [outfit, setOutfit] = useState<File | null>(null);
  const photoUrl = usePreview(photo);
  const outfitUrl = usePreview(outfit);

  return (
    <div>
      <div className="tryon-uploads">
        <div className="tryon-upload">
          <label htmlFor="tryon-photo">
            Step 1 — Apni photo upload karein (upload your photo)
            <input
              id="tryon-photo"
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
            />
          </label>
          {photoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoUrl} alt="Preview of your uploaded photo" />
          )}
        </div>
        <div className="tryon-upload">
          <label htmlFor="tryon-outfit">
            Step 2 — Apna suit / dress upload karein (upload the outfit)
            <input
              id="tryon-outfit"
              type="file"
              accept="image/*"
              onChange={(e) => setOutfit(e.target.files?.[0] ?? null)}
            />
          </label>
          {outfitUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={outfitUrl} alt="Preview of your uploaded outfit" />
          )}
        </div>
      </div>
      <p>
        <strong>Pehla try-on FREE hai (1 dafa) — quality check ke liye.</strong> (Your first
        try-on is free, once, so you can check our quality — it is not unlimited.) Honest note:
        the previews above stay on your own device — nothing is uploaded to us here, and there is
        no instant automatic result. A good try-on takes real preparation, so our team makes it by
        hand with AI tools and checks it before sending. Send us your photo and the outfit photo
        on WhatsApp and we will prepare your one free try-on and send it back on WhatsApp. Free
        try-ons carry a small &ldquo;Sample — AA Digital Network&rdquo; note on the image; the
        clean, unmarked outputs are part of the paid Full Setup for brands — see the comparison
        below.
      </p>
      <WhatsAppCta
        message="Hi AA Digital Network, I want my 1 free virtual try-on (sample). I will send my photo and the outfit photo here."
        label="Get my 1 free try-on on WhatsApp"
      />
    </div>
  );
}

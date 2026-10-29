"use client";

import { useEffect, useState } from "react";

interface TryOnSet {
  id: string;
  label: string;
  before: string;
  beforeAlt: string;
  outfit: string;
  outfitAlt: string;
  result: string;
  resultAlt: string;
}

const SETS: TryOnSet[] = [
  {
    id: "mens-navy-suit",
    label: "Men's Suit — Navy",
    before: "/ai-virtual-try-on-customer-photo-before.jpg",
    beforeAlt: "Customer photo before AI virtual try-on — a man in a plain t-shirt",
    outfit: "/ai-virtual-try-on-navy-suit-product.jpg",
    outfitAlt: "Navy blue men's two-piece suit product photo on a mannequin",
    result: "/ai-virtual-try-on-navy-suit-result.jpg",
    resultAlt: "AI virtual try-on result — the same man wearing the navy suit, photorealistic",
  },
  {
    id: "mens-charcoal-suit",
    label: "Men's Suit — Charcoal",
    before: "/ai-virtual-try-on-customer-photo-before.jpg",
    beforeAlt: "Customer photo before AI virtual try-on — a man in a plain t-shirt",
    outfit: "/ai-virtual-try-on-charcoal-suit-product.jpg",
    outfitAlt: "Charcoal grey men's two-piece suit product photo on a mannequin",
    result: "/ai-virtual-try-on-charcoal-suit-result.jpg",
    resultAlt: "AI virtual try-on result — the same man wearing the charcoal grey suit, photorealistic",
  },
  {
    id: "womens-abaya",
    label: "Women's Abaya",
    before: "/ai-virtual-try-on-abaya-customer-photo-before.jpg",
    beforeAlt: "Customer photo before AI virtual try-on — a woman in hijab wearing a plain dress",
    outfit: "/ai-virtual-try-on-embroidered-abaya-product.jpg",
    outfitAlt: "Black abaya with gold embroidery — product photo",
    result: "/ai-virtual-try-on-abaya-result.jpg",
    resultAlt: "AI virtual try-on result — the same woman wearing the embroidered black abaya, hijab and coverage preserved",
  },
];

const STAGES = ["1 · Customer photo", "2 · The outfit", "3 · Try-on result"] as const;

export default function TryOnDemo() {
  const [setIdx, setSetIdx] = useState(0);
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setStage((s) => (s + 1) % 3), 2800);
    return () => clearInterval(t);
  }, [paused, setIdx]);

  const set = SETS[setIdx];
  const images = [
    { src: set.before, alt: set.beforeAlt },
    { src: set.outfit, alt: set.outfitAlt },
    { src: set.result, alt: set.resultAlt },
  ];
  const current = images[stage];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="tryon-sets" role="tablist" aria-label="Choose a sample set">
        {SETS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === setIdx}
            className={`btn btn-secondary btn-small tryon-set-btn${i === setIdx ? " is-active" : ""}`}
            onClick={() => {
              setSetIdx(i);
              setStage(0);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <figure style={{ margin: 0 }}>
        <div className="tryon-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={`${set.id}-${stage}`} src={current.src} alt={current.alt} />
        </div>
        <figcaption className="tryon-caption">
          <strong aria-live="polite">{STAGES[stage]}</strong>
          <span className="tryon-dots">
            {STAGES.map((label, i) => (
              <button
                key={label}
                type="button"
                aria-label={`Show ${label}`}
                className={`tryon-dot${i === stage ? " is-on" : ""}`}
                onClick={() => setStage(i)}
              />
            ))}
          </span>
        </figcaption>
      </figure>
      <p className="small">
        Sample results: real AI try-on outputs prepared by our team from a customer photo and a
        product photo — the same process we run for your store. Watch the three steps rotate, or
        tap the dots to jump between them.
      </p>
    </div>
  );
}

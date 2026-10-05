"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function OfferBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="border-b border-lab-border bg-lab-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 font-mono text-[10px] uppercase tracking-widest md:text-xs">
        <p className="text-lab-lime">
          {brand.offer.label}
          <span className="mx-2 text-lab-muted">|</span>
          <span className="text-lab-cyan">CODE {brand.offer.code}</span>
          <span className="ml-2 hidden text-lab-muted sm:inline">{brand.offer.ends}</span>
        </p>
        <button type="button" className="text-lab-muted hover:text-lab-fg" onClick={() => setOpen(false)} aria-label="Dismiss">
          Close
        </button>
      </div>
    </div>
  );
}

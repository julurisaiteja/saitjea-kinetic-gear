"use client";
import { brand } from "@/lib/data";
import { HeroCinema } from "@/components/HeroCinema";

export function TrainingPulse({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden border border-lab-border bg-lab-bg ${className}`}
      role="img"
      aria-label="Training film pulse"
    >
      <HeroCinema video={brand.heroVideo} image={brand.heroImage} className="opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-lab-hero via-lab-hero/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-lab-cyan">Live session feed</p>
        <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          MOVE <span className="text-lab-lime">FREER</span>
        </p>
        <div className="mt-4 flex gap-6 font-mono text-[10px] uppercase tracking-widest text-lab-muted">
          <span className="text-lab-lime">♥ 148 bpm</span>
          <span>Zone 4</span>
          <span>42:18</span>
        </div>
      </div>
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-lab-lime/80 animate-pulse" />
    </div>
  );
}

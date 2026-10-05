"use client";
import { brand } from "@/lib/data";

export function AthleteTicker() {
  const rows = [...brand.reviews, ...brand.reviews];
  return (
    <section className="border-y border-lab-border bg-lab-surface py-4">
      <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-lab-muted">Athlete leaderboard</p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-ticker gap-0">
          {rows.map(([name, stars, text], i) => (
            <div
              key={`${name}-${i}`}
              className="flex w-[min(88vw,420px)] shrink-0 items-center gap-4 border-r border-lab-border px-6 py-2"
            >
              <div className="w-16 text-right font-mono text-2xl text-lab-lime animate-pulse-led">{stars}.0</div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-lab-cyan">{name}</p>
                <p className="mt-1 text-sm text-lab-muted line-clamp-2">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

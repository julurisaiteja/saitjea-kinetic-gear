"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function Newsletter({ compact }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <section className={compact ? "border-b border-lab-border px-4 py-10 md:px-6" : "mx-auto max-w-7xl px-4 py-16 md:px-6"}>
      <div className={`${compact ? "" : "plate"} flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-10`}>
        <div>
          <p className="led">Session drops</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl">Train intel in your inbox</h2>
          <p className="mt-2 text-sm text-lab-muted">{brand.loyalty}</p>
        </div>
        {done ? (
          <p className="font-mono text-xs uppercase tracking-widest text-lab-lime">Logged — demo only</p>
        ) : (
          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <input required type="email" className="input-lab" placeholder="athlete@email.com" />
            <button className="btn-lime shrink-0" type="submit">Join</button>
          </form>
        )}
      </div>
    </section>
  );
}

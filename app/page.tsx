import Link from "next/link";
import { brand, products } from "@/lib/data";
import { PlateCard } from "@/components/PlateCard";
import { AthleteTicker } from "@/components/AthleteTicker";
import { Newsletter } from "@/components/Newsletter";
import { TrainingPulse } from "@/components/TrainingPulse";
import { HeroCinema } from "@/components/HeroCinema";

export default function HomePage() {
  const picks = products.slice(0, 9);
  return (
    <>
      <section className="relative min-h-[94vh] overflow-hidden cyber-cut bg-[#070a08]">
        <div className="absolute inset-0 md:left-[42%]">
          <div className="scanlines absolute inset-0">
            <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a08] via-[#070a08]/85 to-transparent" />
        </div>
        <div className="relative mx-auto grid min-h-[94vh] max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6">
          <div className="animate-rise">
            <p className="led">// PERFORMANCE_OS · v4.1</p>
            <h1 className="mt-4 font-display text-[clamp(3.5rem,14vw,8rem)] font-extrabold leading-[0.8] tracking-tighter uppercase animate-rise-d1">
              KINETIC<br /><span className="text-[#b8ff3c]">GEAR</span>
            </h1>
            <p className="mt-6 max-w-md border-l-2 border-[#3de0ff] pl-4 text-lg text-[#8a9a8e] animate-rise-d2">{brand.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise-d2">
              <Link href="/shop" className="btn-lime">{brand.cta}</Link>
              <Link href="/fit-lab" className="btn-outline">Fit Lab</Link>
            </div>
          </div>
          <div className="animate-rise-d1 space-y-4">
            <TrainingPulse className="min-h-[320px] md:min-h-[400px] border border-[#b8ff3c]/40 shadow-[0_0_40px_rgba(184,255,60,0.15)]" />
            <div className="grid grid-cols-2 gap-3">
              {brand.stats.map(([n, l]) => (
                <div key={l} className="soft-scale border border-[#1f3a28] bg-[#0d1410]/80 p-4 backdrop-blur">
                  <p className="font-mono text-2xl text-[#b8ff3c] md:text-3xl">{n}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[#3de0ff]">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AthleteTicker />
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <p className="led">Loadout</p>
        <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">Field-tested kit</h2>
        <p className="mt-3 max-w-lg font-mono text-xs uppercase tracking-widest text-[#8a9a8e]">
          Nine plates from the lab rack — running, strength, recovery.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p) => <PlateCard key={p.id} product={p} />)}
        </div>
        <div className="mt-8">
          <Link href="/shop" className="led hover:text-[#b8ff3c]">Open full rack →</Link>
        </div>
      </section>
      <section className="border-y border-[#1f3a28] bg-[#0d1410] py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-6">
          <div>
            <p className="led">Signature tool</p>
            <h2 className="mt-2 font-display text-3xl uppercase md:text-4xl">TrainingPulse · Fit Lab</h2>
            <p className="mt-3 max-w-xl text-sm text-[#8a9a8e]">
              Live session film + one-click gear stacks. Telemetry vibe without a product WebGL turntable.
            </p>
          </div>
          <Link href="/fit-lab" className="btn-lime">Enter Fit Lab</Link>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

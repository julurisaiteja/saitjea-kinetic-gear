"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand, fitLabStacks, formatPrice, getProduct, products } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { TrainingPulse } from "@/components/TrainingPulse";

export default function FitLabPage() {
  const [sport, setSport] = useState(brand.categories[0]);
  const { addMany } = useCart();
  const stack = useMemo(() => {
    const ids = fitLabStacks[sport] || [];
    return ids.map(getProduct).filter(Boolean) as typeof products;
  }, [sport]);
  const total = stack.reduce((n, p) => n + p.price, 0);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <p className="led">Fit Lab</p>
      <h1 className="mt-2 font-display text-4xl uppercase md:text-5xl">Build your kit stack</h1>
      <p className="mt-2 max-w-xl text-[#8a9a8e]">Pick a training mode — field-tested combos, no dumbbell turntable.</p>
      <div className="mt-10"><TrainingPulse className="min-h-[260px] border border-[#b8ff3c]/30" /></div>
      <div className="mt-8 flex flex-wrap gap-2">
        {brand.categories.map((c) => (
          <button key={c} type="button" onClick={() => setSport(c)}
            className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-widest ${sport === c ? "border-[#b8ff3c] bg-[#b8ff3c]/10 text-[#b8ff3c]" : "border-[#1f3a28] text-[#8a9a8e]"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} className="border border-[#1f3a28] bg-[#0d1410] p-3">
            <div className="relative aspect-square"><Image src={p.image} alt={p.name} fill className="object-cover" sizes="240px" /></div>
            <p className="mt-3 font-display text-xl uppercase">{p.name}</p>
            <p className="font-mono text-sm text-[#b8ff3c]">{formatPrice(p.price)}</p>
          </Link>
        ))}
      </div>
      <button type="button" className="btn-lime mt-8" onClick={() => addMany(stack.map((p) => ({ p, qty: 1 })))}>
        Add stack · {formatPrice(total)}
      </button>
    </div>
  );
}

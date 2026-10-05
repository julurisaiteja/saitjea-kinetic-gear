"use client";
import Link from "next/link";

export function MobileTrainingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-lab-lime/40 bg-lab-bg/95 backdrop-blur md:hidden">
      <div className="flex">
        <Link href="/fit-lab" className="flex-1 py-3 text-center font-mono text-[10px] uppercase tracking-widest text-lab-cyan">
          Fit Lab
        </Link>
        <Link href="/shop" className="flex-1 border-x border-lab-border py-3 text-center font-mono text-[10px] uppercase tracking-widest">
          Train
        </Link>
        <Link href="/cart" className="flex-1 bg-lab-lime py-3 text-center font-mono text-[10px] uppercase tracking-widest text-lab-bg">
          Checkout
        </Link>
      </div>
    </div>
  );
}

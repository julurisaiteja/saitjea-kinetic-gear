"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count, wish } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-lab-border bg-lab-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-tight md:text-xl">
          KINETIC<span className="text-lab-lime">GEAR</span>
        </Link>
        <nav className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-lab-muted md:gap-6 md:text-xs">
          <Link href="/shop" className="hover:text-lab-cyan">Gear</Link>
          <Link href="/fit-lab" className="hidden hover:text-lab-cyan sm:inline">Fit Lab</Link>
          <Link href="/about" className="hidden hover:text-lab-cyan md:inline">Lab</Link>
          <Link href="/wishlist" className="hover:text-lab-lime">Save {wish.length || ""}</Link>
          <Link href="/cart" className="text-lab-fg hover:text-lab-lime">
            Bag{count ? ` (${count})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}

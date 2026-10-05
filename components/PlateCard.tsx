"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export function PlateCard({ product }: { product: Product }) {
  const { add, toggleWish, wish } = useCart();
  const liked = wish.includes(product.id);
  return (
    <article className="plate group flex flex-col animate-rise">
      <div className="relative aspect-[4/5] overflow-hidden border-b border-lab-border">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
            sizes="(max-width:768px) 50vw, 25vw"
          />
        </Link>
        {product.badge && (
          <span className="absolute left-0 top-0 bg-lab-lime px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-lab-bg">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => toggleWish(product.id)}
          className="absolute right-2 top-2 border border-lab-border bg-lab-bg/80 px-2 py-1 font-mono text-[10px] text-lab-cyan"
        >
          {liked ? "SAVED" : "SAVE"}
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lab-cyan">{product.category}</p>
        <Link href={`/product/${product.id}`} className="font-display text-base leading-tight hover:text-lab-lime md:text-lg">
          {product.name}
        </Link>
        <div className="mt-auto flex items-end justify-between gap-2">
          <p className="font-mono text-sm text-lab-lime">{formatPrice(product.price)}</p>
          <button type="button" className="btn-outline !px-2 !py-1.5 !text-[9px]" onClick={() => add(product)}>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

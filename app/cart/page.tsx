"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/data";

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();
  if (!items.length) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Bag empty</h1>
        <Link href="/shop" className="btn-lime mt-6 inline-flex">Browse gear</Link>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="font-display text-4xl">Training bag</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px]">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id + (item.variant || "")} className="plate flex gap-4 p-3">
              <div className="relative h-24 w-20 shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-display text-lg">{item.name}</p>
                {item.variant && <p className="font-mono text-[10px] text-lab-cyan">{item.variant}</p>}
                <p className="font-mono text-lab-lime">{formatPrice(item.price)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    className="input-lab !w-20 !py-1"
                    value={item.qty}
                    onChange={(e) => setQty(item.id, Number(e.target.value) || 1)}
                  />
                  <button type="button" className="text-xs text-lab-muted" onClick={() => remove(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <aside className="border border-lab-lime/40 p-6">
          <p className="font-mono text-[10px] uppercase text-lab-muted">Subtotal</p>
          <p className="font-display text-3xl text-lab-lime">{formatPrice(subtotal)}</p>
          <Link href="/checkout" className="btn-lime mt-6 flex w-full justify-center">Checkout</Link>
        </aside>
      </div>
    </div>
  );
}

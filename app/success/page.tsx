"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/data";

export default function SuccessPage() {
  const [order, setOrder] = useState("KG-······");
  useEffect(() => {
    setOrder("KG-" + Math.floor(100000 + Math.random() * 900000));
  }, []);
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="font-mono text-[10px] uppercase tracking-widest text-lab-cyan">Session logged</p>
      <h1 className="mt-2 font-display text-4xl text-lab-lime">Gear incoming</h1>
      <p className="mt-4 text-lab-muted">Order {order} · {brand.checkoutNote}</p>
      <Link href="/shop" className="btn-lime mt-8 inline-flex">Back to lab</Link>
    </div>
  );
}

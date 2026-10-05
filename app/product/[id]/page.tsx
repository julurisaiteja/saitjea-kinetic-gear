"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getProduct, formatPrice, relatedProducts, brand } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { PlateCard } from "@/components/PlateCard";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id);
  const { add, toggleWish, wish } = useCart();
  const [variant, setVariant] = useState(product?.variants[0] || "");
  const [img, setImg] = useState(0);
  const [tab, setTab] = useState<"specs" | "faq" | "extra">("specs");
  if (!product)
    return (
      <div className="mx-auto max-w-7xl px-4 py-20">
        Not found. <Link href="/shop">Back</Link>
      </div>
    );
  const related = relatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="plate relative aspect-square overflow-hidden">
            <Image src={product.images[img] || product.image} alt={product.name} fill className="object-cover" sizes="50vw" />
          </div>
          <div className="mt-3 flex gap-2">
            {product.images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => setImg(i)}
                className={`relative h-16 w-16 border ${img === i ? "border-lab-lime" : "border-lab-border"}`}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-lab-cyan">{product.category}</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-2 font-mono text-sm text-lab-muted">
            RATING {product.rating.toFixed(1)} · {product.reviewCount} FIELD TESTS
          </p>
          <p className="mt-4 font-mono text-3xl text-lab-lime">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-lab-muted">{product.description}</p>
          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lab-muted">Size</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`border px-3 py-2 font-mono text-xs ${variant === v ? "border-lab-lime text-lab-lime" : "border-lab-border"}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="btn-lime" onClick={() => add(product, 1, variant)}>Add to bag</button>
            <button type="button" className="btn-outline" onClick={() => toggleWish(product.id)}>
              {wish.includes(product.id) ? "Saved" : "Save"}
            </button>
          </div>
          <p className="mt-4 text-xs text-lab-muted">{brand.checkoutNote} · Code {brand.offer.code}</p>

          <div className="mt-8 border border-lab-border">
            <div className="flex border-b border-lab-border font-mono text-[10px] uppercase tracking-widest">
              {(["specs", "faq", "extra"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`flex-1 py-3 ${tab === t ? "bg-lab-lime/10 text-lab-lime" : "text-lab-muted"}`}
                >
                  {t === "extra" ? "Lab notes" : t}
                </button>
              ))}
            </div>
            <div className="p-4 text-sm">
              {tab === "specs" && (
                <dl className="space-y-2 font-mono text-xs">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-lab-border/50 py-2">
                      <dt className="text-lab-muted">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {tab === "faq" && (
                <div className="space-y-4">
                  {product.faq.map(([q, a]) => (
                    <div key={q}>
                      <p className="font-semibold">{q}</p>
                      <p className="mt-1 text-lab-muted">{a}</p>
                    </div>
                  ))}
                </div>
              )}
              {tab === "extra" && <p className="text-lab-muted">{brand.loyalty}</p>}
            </div>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="font-display text-2xl">Related plates</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {related.map((p) => (
            <PlateCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

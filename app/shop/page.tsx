"use client";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { brand, products } from "@/lib/data";
import { PlateCard } from "@/components/PlateCard";

function ShopInner() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") || "");
  const [cat, setCat] = useState(sp.get("cat") || "All");
  const [sort, setSort] = useState("featured");

  const list = useMemo(() => {
    let out = products.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okQ = !q || (p.name + p.description + p.category).toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [q, cat, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <p className="led">Gear catalog</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Train with intent</h1>
      <div className="mt-8 flex flex-col gap-3 border border-lab-border bg-lab-surface p-4 md:flex-row md:items-center">
        <input className="input-lab md:max-w-xs" placeholder="Search gear…" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="input-lab md:max-w-[200px]" value={cat} onChange={(e) => setCat(e.target.value)}>
          <option>All</option>
          {brand.categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select className="input-lab md:max-w-[200px]" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="price-asc">Price low</option>
          <option value="price-desc">Price high</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <PlateCard key={p.id} product={p} />
        ))}
      </div>
      {!list.length && <p className="mt-10 text-lab-muted">No matches in this mode.</p>}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopInner />
    </Suspense>
  );
}

import Link from "next/link";
import { brand } from "@/lib/data";
import { Newsletter } from "./Newsletter";

export function SiteFooter() {
  return (
    <footer className="border-t border-lab-border bg-lab-hero">
      <Newsletter compact />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-xl">Performance lab</p>
          <p className="mt-2 text-sm text-lab-muted">{brand.description}</p>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-lab-muted">
          <p className="text-lab-cyan">Routes</p>
          <div className="mt-3 flex flex-col gap-2 normal-case tracking-normal">
            <Link href="/shop">Gear catalog</Link>
            <Link href="/fit-lab">Fit Lab stacks</Link>
            <Link href="/about">About the lab</Link>
          </div>
        </div>
        <div className="font-mono text-xs text-lab-muted">
          <p className="uppercase tracking-widest text-lab-cyan">Field sites</p>
          <ul className="mt-3 space-y-1">
            {brand.stores.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-lab-border py-4 text-center font-mono text-[10px] uppercase tracking-widest text-lab-muted">
        Demo storefront · {brand.loyalty}
      </p>
    </footer>
  );
}

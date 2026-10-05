import productsA from "./products-a.json";
import productsB from "./products-b.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  slug: "kinetic-gear",
  name: "Kinetic Gear",
  tagline: "Train harder. Move freer.",
  niche: "Sports equipment",
  description: "Performance sports gear for runners, lifters, and weekend athletes — tested for real sessions.",
  cta: "Shop the gear",
  checkoutNote: "Free exchanges within 30 days on unused items.",
  heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2400&q=80",
  heroVideo: "https://videos.pexels.com/video-files/4753989/4753989-uhd_2560_1440_25fps.mp4",
  categories: ["Running","Strength","Recovery","Apparel","Accessories"] as string[],
  isBooking: false,
  offer: {"code":"TRAIN20","label":"Train Week — 20% off strength + recovery","ends":"48 hours left"},
  offerPct: 0.2,
  loyalty: "Kinetic Pro — free shipping & session plans",
  stats: [["50k+","athletes geared"],["30","day swap"],["4.9","gear rating"],["24/7","form chat"]] as [string, string][],
  marquee: ["Carbon plate ·","Knurled iron ·","Recovery science ·","Reflective hits ·","Field tested ·"] as string[],
  reviews: [["Devon L.",5,"Apex Runner Pro held up for marathon block. Snappy toe-off."],["Samira H.",5,"Bands + anchors replaced half my gym. Love the AI sizing."],["Nate C.",4,"Foam roller is aggressive in a good way. Cap runs true."]] as [string, number, string][],
  ai: [["Shoe for long runs?","Apex Runner Pro or Aero Boost X. Apex is snappier; Aero is plush past mile 10."],["Home strength starter?","Iron Grip Kit + Pulse Bands + Kinetic Mat Pro. Use TRAIN20 this week."],["What size tee?","Volt Tee runs athletic. Size up if you want room through the chest."],["Returns?","30-day unused swap. Worn road shoes: 14-day comfort check."]] as [string, string][],
  blog: [["Warm-up circuits under 8 minutes","Training"],["When to replace running shoes","Guides"],["Band progressions for travel weeks","Strength"]] as [string, string][],
  stores: ["Seaport Lab","Pop-up — Midtown"] as string[],
  nicheKind: "sports" as string,
  fontDisplay: "Space Grotesk",
  fontBody: "IBM Plex Sans",
  colors: {"bg":"#101412","fg":"#f2f7f3","muted":"#8a9a8e","primary":"#b8ff3c","accent":"#3de0ff","surface":"#171c19","border":"#2a332c","hero":"#0a0d0b"},
};

export const products: Product[] = [...(productsA as Product[]), ...(productsB as Product[])];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}

export const fitLabStacks: Record<string, string[]> = {
  Running: ["kinetic-gear-1", "kinetic-gear-11", "kinetic-gear-6"],
  Strength: ["kinetic-gear-2", "kinetic-gear-3", "kinetic-gear-10"],
  Recovery: ["kinetic-gear-4", "kinetic-gear-8", "kinetic-gear-12"],
  Apparel: ["kinetic-gear-5", "kinetic-gear-9"],
  Accessories: ["kinetic-gear-6", "kinetic-gear-10", "kinetic-gear-11"],
};

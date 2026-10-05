# Kinetic Gear — Studio Strategy

## Brand positioning (8 bullets)

1. **Unique angle:** Performance lab energy — not a gym stock collage; diagonal hero clip, LED micro-labels, and “equipment plates” instead of generic product cards.
2. **Customer:** Runners, lifters, and hybrid athletes who want kit that survives real sessions and swaps cleanly.
3. **5-second feel:** Charged confidence — lime/cyan on charcoal, motion film, stats that read like lab telemetry.
4. **Signature — Fit Lab:** Pick sport (training mode) → curated kit stack → one-tap “Add full stack” with live stack total and TRAIN20 hook at checkout.
5. **Journey:** Hero film + 3D rack preview → horizontal training-mode strip → equipment plates → Fit Lab → deep PDP → cart → fake Stripe checkout → success.
6. **Type & color:** Space Grotesk display + Inter Tight body; `#b8ff3c` primary, `#3de0ff` accent on `#0f1210` lab surfaces — no purple AI gradients.
7. **Motion:** `animate-rise` on hero; marquee athlete ticker; reduced-motion collapses to static poster + still 3D fallback frame.
8. **Conversion hooks:** Offer banner (TRAIN20), Kinetic Pro loyalty line, field-tested reviews, floating form AI with canned sizing/returns answers, newsletter + store list (Seaport Lab, Midtown pop-up).

## Pages shipped

`/`, `/shop`, `/fit-lab`, `/product/[id]`, `/cart`, `/checkout`, `/success`, `/wishlist`, `/about`

## Data source

`brands.json` + `premium-meta.mjs` (copied at site root); runtime catalog in `lib/data.ts`.

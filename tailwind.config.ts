import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: "#101412",
          fg: "#f2f7f3",
          muted: "#8a9a8e",
          lime: "#b8ff3c",
          cyan: "#3de0ff",
          surface: "#171c19",
          border: "#2a332c",
          hero: "#0a0d0b",
        },
      },
      fontFamily: {
        display: ["Barlow Condensed", "Georgia", "serif"],
        body: ["Barlow", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        ticker: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        pulseLed: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.55" } },
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
      },
      animation: {
        rise: "rise 0.65s ease-out both",
        ticker: "ticker 22s linear infinite",
        "pulse-led": "pulseLed 2.4s ease-in-out infinite",
      },
      clipPath: {
        diag: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#130d08",
        surface: "#1d1610",
        gold: {
          DEFAULT: "#d4af37",
          light: "#f7d774",
        },
        ink: "#ffffff",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.15)",
        "glow-sm": "0 0 10px rgba(212,175,55,0.25)",
        card: "0 8px 30px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg,#d4af37 0%,#f7d774 50%,#d4af37 100%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

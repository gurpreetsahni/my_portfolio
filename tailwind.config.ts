import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#050505",
          panel: "#0b0b10",
          panel2: "#0f0f16",
          line: "rgba(255,255,255,0.08)",
        },
        ink: {
          primary: "#f5f5f7",
          muted: "#9a9aa5",
          faint: "#5c5c66",
        },
        accent: {
          violet: "#7c5cff",
          blue: "#4c8dff",
          cyan: "#63e6e2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-1":
          "radial-gradient(60% 60% at 20% 20%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0) 70%)",
        "aurora-2":
          "radial-gradient(50% 50% at 80% 30%, rgba(76,141,255,0.30) 0%, rgba(76,141,255,0) 70%)",
        "aurora-3":
          "radial-gradient(45% 45% at 50% 90%, rgba(99,230,226,0.18) 0%, rgba(99,230,226,0) 70%)",
        "grad-violet-blue": "linear-gradient(135deg, #7c5cff 0%, #4c8dff 100%)",
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,92,255,0.25)",
        "glow-sm": "0 0 20px rgba(76,141,255,0.2)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "border-flow": "border-flow 6s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

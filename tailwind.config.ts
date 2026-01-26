import type { Config } from "tailwindcss";

const config: Config = {
  // Enforce manual toggling, though we will lock to dark
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // BASE: Oxford Navy
        background: "#0B1120",
        foreground: "#E2E8F0", // Slate-200 for high readability

        // LAYERS: Glass & Panels
        card: {
          DEFAULT: "rgba(30, 41, 59, 0.5)", // Slate-800 @ 50%
          foreground: "#E2E8F0",
        },
        popover: {
          DEFAULT: "#0B1120",
          foreground: "#E2E8F0",
        },

        // DOCTRINE COLORS
        primary: {
          DEFAULT: "#2DD4BF", // TEAL-400 (Tech / Execution / Stack)
          foreground: "#0F172A", // Slate-900
        },
        accent: {
          DEFAULT: "#FFD166", // WARM GOLD (Business / ROI / Strategy)
          foreground: "#0F172A",
        },
        success: {
          DEFAULT: "#34D399", // Emerald-400 (Status Only)
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#1E293B", // Slate-800
          foreground: "#94A3B8", // Slate-400
        },

        // UTILITY
        border: "#1E293B", // Slate-800 (Subtle)
        input: "#1E293B",
        ring: "#2DD4BF", // Teal Focus Rings

        // Destructive
        destructive: {
          DEFAULT: "hsl(0 62.8% 30.6%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
export default config;
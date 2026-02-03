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
        // BASE: Midnight Slate (Linear Style)
        background: "#0F1117",
        foreground: "#E2E8F0",

        // LAYERS: Glass & Surfaces
        surface: {
          50: "rgba(255, 255, 255, 0.05)", // Ultra-light glass
          100: "rgba(255, 255, 255, 0.10)", // Light Border/Hover
          200: "rgba(255, 255, 255, 0.20)", // Active states
        },

        card: {
          DEFAULT: "#161B22", // Solid fallback
          foreground: "#E2E8F0",
        },
        popover: {
          DEFAULT: "#0F1117",
          foreground: "#E2E8F0",
        },

        // DOCTRINE COLORS - Refined
        primary: {
          DEFAULT: "#5E6AD2", // LINEAR INDIGO/PURPLE - Tech & Stability
          foreground: "#FFFFFF",
          glow: "rgba(94, 106, 210, 0.5)",
        },
        accent: {
          DEFAULT: "#F59E0B", // AMBER-500 - Warmth/Strategy (unchanged but refined)
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#8A93A3", // Linear's signature text grey
        },

        // UTILITY
        border: "rgba(255, 255, 255, 0.08)", // Subtle borders
        input: "rgba(255, 255, 255, 0.08)",
        ring: "#5E6AD2",

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
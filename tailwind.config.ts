import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
        page: colors.slate[950], // The "Void" - New Base
        background: "#0F1117", // Keeping for now, but 'page' is the new standard
        foreground: "#E2E8F0",

        // LAYERS: Glass & Surfaces
        surface: {
          DEFAULT: colors.slate[900], // Cards
          elevated: colors.slate[800], // Hovers
          50: "rgba(255, 255, 255, 0.05)", // Ultra-light glass (Kept for compatibility)
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
          DEFAULT: colors.emerald[500], // The "Money" color
          foreground: colors.white,
          glow: "rgba(16, 185, 129, 0.5)",
        },
        accent: {
          DEFAULT: "#F59E0B", // AMBER-500 - Warmth/Strategy (unchanged but refined)
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#8A93A3", // Linear's signature text grey
        },

        // UTILITY - Refined border system (Linear micro-borders)
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.05)",
          highlight: "rgba(255, 255, 255, 0.12)",
        },
        input: "rgba(255, 255, 255, 0.08)",
        ring: colors.emerald[500],

        // Destructive
        destructive: {
          DEFAULT: "hsl(0 62.8% 30.6%)",
          foreground: "hsl(0 0% 98%)",
        },

        // Brands
        whatsapp: "#25D366",
      },
      // Luxury spacing system (Ram Maheshwari negative space)
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        section: "8rem",
        "section-lg": "10rem",
      },
      // Editorial typography scale (Ram Maheshwari inspired)
      fontSize: {
        "display-xl": [
          "4.5rem",
          { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-lg": [
          "3.75rem",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "display-md": [
          "3rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
      },
      borderRadius: {
        // Primitives (Inherit from globals.css variable)
        lg: "var(--radius)",         // ~0.5rem (8px)
        md: "calc(var(--radius) - 2px)", // ~0.375rem (6px)
        sm: "calc(var(--radius) - 4px)", // ~0.25rem (4px)

        // Semantic Aliases
        'button': "var(--radius)",        // Maps to 'lg' (8px) - For all interactive buttons
        'input': "var(--radius)",         // Maps to 'lg' (8px) - For form inputs
        'card': '0.75rem',                // 12px - Universal Card Radius (Strict)
        'inner': "calc(var(--radius) - 2px)", // Maps to 'md' (6px) - For pills, tags, inner items
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
export default config;
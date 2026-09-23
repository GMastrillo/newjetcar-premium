import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#f5f5f5",
        surface: {
          DEFAULT: "#080808",
          secondary: "#0f0f0f",
          tertiary: "#161616",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.16)",
          gold: "rgba(212, 175, 55, 0.35)",
        },
        accent: {
          DEFAULT: "#D4AF37", // Luxury Metallic Gold
          hover: "#E5BE48",
          dark: "#AA8222",
          light: "#F5E296",
          glow: "rgba(212, 175, 55, 0.25)",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F7E6A1",
          dark: "#9E7B1D",
          champagne: "#E8D8B0",
          deep: "#806315",
        },
        silver: {
          DEFAULT: "#C5C5C5",
          light: "#EAEAEA",
          muted: "#888888",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;

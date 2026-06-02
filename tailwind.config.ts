import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{ts,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#111111",
        paper: "#fafafa",
        mist: "#f4f4f2",
        line: "#e7e5e1",
        accent: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
        },
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(#e5e7eb 1px, transparent 1px)",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(17, 17, 17, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

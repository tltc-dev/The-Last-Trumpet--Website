// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ here, not postcss.config
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF1600",
        secondary: "#C1BEB7",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        inter: ["var(--font-inter)"],
        questrial: ["var(--font-questrial)"],
        outfit: ["var(--font-outfit)"],
        poppins: ["var(--font-poppins)"],
      },
      borderColor: {
        DEFAULT: "#C1BEB7",
      },
    },
  },
  plugins: [],
};

export default config;

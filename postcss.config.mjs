const config = {
  plugins: ["@tailwindcss/postcss"],
  darkMode: "class",
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
};

export default config;

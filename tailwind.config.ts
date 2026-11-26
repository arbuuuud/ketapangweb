import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      colors: {
        resort: {
          navy: "#0A2239",
          deep: "#061524",
          teal: "#134057",
          gold: "#C69C6D",
          goldlight: "#D8B48D",
          golddark: "#A37C4F",
          sand: "#F4EFEA",
          sandlight: "#FAF7F2",
          accent: "#E2725B",
          slate: "#3A4D5C",
        },
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(10, 34, 57, 0.12)",
        glow: "0 0 25px rgba(198, 156, 109, 0.35)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;

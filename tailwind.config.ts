import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#162331",
        forest: "#2E6142",
        clay: "#9A4B4B",
        cream: "#F6F3EC",
        paper: "#FFFDFC",
        mist: "#D8E0DA"
      },
      fontFamily: {
        display: ["Libre Baskerville", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        soft: "0 16px 34px rgba(22, 35, 49, 0.08)",
        deep: "0 24px 60px rgba(22, 35, 49, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      width: {
        fullscreen: "1300px",
      },
      colors: {
        primary: "#6385FF",
      },
      fontFamily: {
        Acorns: ["var(--font-Acorns)"],
      },
      animation: {
        spin: "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

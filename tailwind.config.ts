import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    },
  },
  plugins: [],
};
export default config;

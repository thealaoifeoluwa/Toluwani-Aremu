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
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(99, 133, 255, 0.4)",
        "glow-primary-lg": "0 0 30px rgba(99, 133, 255, 0.6)",
      },
      keyframes: {
        scrollLeft: {
          "0%": {
            translate: "-10% 0",
          },
          "100%": {
            translate: "-70% 0",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "100% 0%",
          },
        },
      },
      animation: {
        spin: "spin 4s linear infinite",
        scrollLeft: "scrollLeft 30s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

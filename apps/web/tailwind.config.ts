import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        surface: {
          DEFAULT: "#111315",
          secondary: "#15181B",
        },
        primary: {
          DEFAULT: "#00FF88",
          foreground: "#0B0B0B",
        },
        text: {
          primary: "#F0F0F0",
          secondary: "#B8C0CC",
        },
        border: "#22262A",
        danger: "#FF5A5A",
        warning: "#FFC857",
        success: "#00FF88",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      maxWidth: {
        "content": "1200px",
        "content-wide": "1440px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

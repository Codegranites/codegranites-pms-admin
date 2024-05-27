import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#052C42",
        "primary-light": "#2E577D",
        "primary-dark": "#031824",
        "color-600": "#161616",
        "color-normal": "#535353",
        header: "#282828",
        card: "#FBF9FA",
        checked: "#2E577D",
        test: "#2e5773",
        disabled: "#d2dfe9",
        white: "#ffffff",
        hover: "#9fb2c3",
        success: "#008031",
        "success-hover": "#8acba3",
        error: "#FF0000",
        active: "#EAEEF2",
        destructive: "#f81d28",
        "color-dark": "#1c9abc",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideDown: {
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideNavUp: {
          "100%": {
            transform: "translateY(-112px)",
            opacity: "0",
          },
        },
        fadeOut: {
          "50%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
          },
        },
        rotate3d: {
          "0%": {
            transform: "rotateY(0)",
          },
          "50%": { opacity: "0.5" },

          "100%": {
            transform: "rotateY(360deg)",
          },
        },
        pulsing: {
          "50%": {
            opacity: "0.2",
          },
        },
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideUp: {
          "70%": {
            opacity: "0.7",
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.5s infinite",
        slideUp: "slideUp 1s 0.2s ease forwards",
        loadspin: "loadspin 1.2s linear infinite",
        pulsing: "pulsing 1.5s ease infinite",
        rotate3d:
          "rotate3d 2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
        slideDown: "slideDown 1s 0.2s ease forwards",
        slideNavUp: "slideDown 1s 0.2s ease forwards",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      fontFamily: {
        Worksans: ["Work Sans", "sans-serif"],
        tommy: ["MADE TOMMY Outline", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

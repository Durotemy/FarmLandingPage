/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      colors: {
        "farm-green": "#38b2ac",
        "farm-red": "#e53e3e",
        "farm-yellow": "#f6d55c",
        "farm-blue": "#1a202c",
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        "3xs": "0.75rem", // 12px
        "4xs": "0.875rem", // 14px
        "5xs": "1.125rem", // 18px
        "6xs": "1.25rem", // 20px
        "7xs": "1.5rem", // 24px
        "8xs": "1.75rem", // 28px
        "9xs": "2rem", // 32px
        "10xs": "2.25rem", // 36px
        "11xs": "2.5rem", // 40px
        "12xs": "2.75rem", // 44px
        "13xs": "3rem", // 48px
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        slideInRight: "slideInRight 0.8s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

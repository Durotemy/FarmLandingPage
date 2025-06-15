/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        sans: ["Inter", "sans-serif"],

        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

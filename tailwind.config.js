/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      textUnderlineOffset: {
        3: "3px",
        colors: "#0ea5e9",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#eeeeee",
        secondary: "#f3f4f6",
        accent: "#8b5cf6",
        "accent-light": "#a78bfa",
        "accent-dark": "#7c3aed",
      },
    },
  },
  plugins: [],
};

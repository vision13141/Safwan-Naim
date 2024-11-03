/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontPart
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Vollkorn: ["Vollkorn", "serif"],
      }
    },
  },
  plugins: [],
}


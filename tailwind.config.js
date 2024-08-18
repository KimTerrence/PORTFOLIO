/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'jura':["Jura", "sans-serif"]
      },
      height:{
        'big': '35rem'
      }
    },
  },
  plugins: [],
}
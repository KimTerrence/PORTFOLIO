/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'jura':["Jura", "sans-serif"],
        'oswald':["Oswald"]
      },
      height:{
        'big': '35rem'
      },
      fontSize:{
        '10xl':'10rem'
      }
    },
  },
  plugins: [],
}
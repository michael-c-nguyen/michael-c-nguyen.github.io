/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        sand: '#fed7aa',
        sky: '#164e63'
      }
    },
  },
  plugins: [],
}
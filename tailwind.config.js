/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Jost', 'sans-serif'],
      },
      colors: {
        'brand-teal': '#4ADE80',
        'brand-cyan': '#22d3ee',
        'scrolled-teal': '#4FD1C5', // Matching the requested button color
      }
    },
  },
  plugins: [],
}

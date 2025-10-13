/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aladin: ['Aladin', 'system-ui'], // Add this line
      },
    },
  },
  plugins: [],
}
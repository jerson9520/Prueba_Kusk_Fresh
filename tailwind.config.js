/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#DF3D24',
        secondary: '#9D4343',
      }
    },
  },
  plugins: [],
}
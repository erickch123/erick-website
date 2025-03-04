/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128':'32rem',
        '100': '28rem'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}
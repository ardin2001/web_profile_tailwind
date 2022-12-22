/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container :{
      center : true,
      padding : '16px'
    },
    extend: {
      colors :{
        primary : '#0ea5e9',
        secondary : '#0f172a',
        third : '#475569'
      },
      screens :{
        '2xl' : '1350px'
      },
    },
  },
  plugins: [],
}
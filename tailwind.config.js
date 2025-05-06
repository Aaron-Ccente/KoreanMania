/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         rosa: '#ED6695' ,
         rojizo: '#FF004F',
         verde: '#275401',
         marron: '#6F3A0B',
         amarillo: '#D8DA30'
    },
    fontFamily: {
      acme: ['Acme', 'sans-serif'],
    },
  },
  plugins: [],
}
}

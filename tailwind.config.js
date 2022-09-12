/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#0F3D3E',
        darkprimary: '#100F0F',
        secondary: '#207678',
        tridary: '#9c988a',
        light: '#F1F1F1'
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        first: '#6A38C2',
        secont:{
          100: '#FA4010',
          200: 'rgba(250,85,18,8%)'
        },
        third: '#98E4E0',
        btnb:{
          100:'#6B9FFC',
          200:'#F3F7FF'
        },
        btno:{
          100:'#FC9A72',
          200:'#FFF0EA'
        },
        btng:{
          100:'#76D8D1',
          200:'#E1FFFD'
        }
      }
    },
  },
  plugins: [],
}


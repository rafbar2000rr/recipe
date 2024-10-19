/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors:{
      'White': 'hsl(0, 0%, 100%)',
      'Stone': {
        100: 'hsl(30, 54%, 90%)',
        150: 'hsl(30, 18%, 87%)',
        600: 'hsl(30, 10%, 34%)',
        900: 'hsl(24, 5%, 18%)'},
      'Brown': {800: 'hsl(14, 45%, 36%)'},
      
      'Rose': {
        800: 'hsl(332, 51%, 32%)',
        50: 'hsl(330, 100%, 98%)'},
        
    },
    fontFamily: {
      Youngserif: ['Young Serif', 'serif'],
      Outfit: ['Outfit', 'sans-serif'],
    }
  },
  },
  plugins: [require('@tailwindcss/typography')],
}




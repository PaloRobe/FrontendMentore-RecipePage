/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        White: "hsl(0, 0%, 100%)",
        Stone100: "hsl(30, 54%, 90%)",
        Stone150: "hsl(30, 18%, 87%)",
        Stone600: "hsl(30, 10%, 34%)",
        Stone900: "hsl(24, 5%, 18%)",
        Brown800: "hsl(14, 45%, 36%)",
        Rose800: "hsl(332, 51%, 32%)",
        Rose50: "hsl(330, 100%, 98%)",
      },
      fontFamily:{
        Outfit:["Outfit", "sans-serif"],
        Serif:["Young Serif", "serif"]

      }
    },
  },
  plugins: [],
}


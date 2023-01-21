/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ra:  ['Raleway', 'sans-serif'],
      },
      colors: {
        main:   'hsl(218, 28%, 13%)',
        intro:  'hsl(217, 28%, 15%)',
        footer: 'hsl(216, 53%, 9%)',
        testi:  'hsl(219, 30%, 18%)',

        cyan:   'hsl(176, 68%, 64%)',
        blue:   'hsl(198, 60%, 50%)',
        white:  'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

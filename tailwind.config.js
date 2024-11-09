/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


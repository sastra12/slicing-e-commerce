/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        'primary': '#183B56',
        'secondary': '#36B37E'
      },
    },
  },
  plugins: [],
}

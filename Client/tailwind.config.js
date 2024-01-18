/** @type {import('').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#1D7607'
      }),
      textColor: {
        'primary': 'black'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
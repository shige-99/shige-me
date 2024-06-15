/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'DEFAULT': '#2d3250',
          'dark': '#424769',
          'light': '#676f9d',
          'font': '#ffffff',
          'button': '#f9b17a'
        }
      }
    },
  },
  plugins: [],
}


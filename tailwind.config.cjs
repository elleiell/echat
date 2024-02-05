/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', 
      },
      backgroundColor: {
        'peach' : '#f3e8e3',
      },
    },
  },
  plugins: [],
}


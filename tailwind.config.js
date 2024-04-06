/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./Assets/HTML/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode using the 'class' option
  theme: {
    extend: {
      colors: {
        darkGray: '#333333',
        slate: {
          900: '#1a202c',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
}


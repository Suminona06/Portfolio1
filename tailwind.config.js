/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '32px',
    },
    extend: {
      colors: {
        primary: '#e60000',
        dark: '#0f172a',
        secondary: '#64748b',
        prime: '#cc0000',
      },
      screens: {
        '2xl' : '1300px',
      }
    },
  },
  plugins: [],
}


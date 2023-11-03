/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '32px',
    },
    extend: {
      colors: {
        primary: '#443C68',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl' : '1300px',
      }
    },
  },
  plugins: [],
}


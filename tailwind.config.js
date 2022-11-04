/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#f5f5f5',
        backgroundSecondary: '#eff0f5',
        backgroundSm: '#e6e9f2',
        fontPrimary: '#3a4562',
        fontSecondary: '#878d9d',
        hoverColor: '#5876c5',
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
};


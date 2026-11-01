/**
 * Tailwind CSS configuration.
 * Uses CommonJS syntax because Vite loads the file via require().
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#123B56', // Navy
        accent: '#159A9C', // Teal
        lightAqua: '#EAF6F6',
        textPrimary: '#263746',
      },
      fontFamily: {
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

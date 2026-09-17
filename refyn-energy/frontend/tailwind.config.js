/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { olive: '#5c6425', dark: '#1c2117', orange: '#e96b20', paper: '#f7f6f1' },
      },
      fontFamily: { sans: ['Inter', 'Manrope', 'Segoe UI', 'sans-serif'] },
    },
  },
  plugins: [],
}

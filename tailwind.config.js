/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cell-auto-fit': `repeat(auto-fit, minmax(min(100%, 200px), 1fr))`
      }
    },
  },
  plugins: [],
}


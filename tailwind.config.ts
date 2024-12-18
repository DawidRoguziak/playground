/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}', './old/**/*.{js,vue,html}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cell-auto-fit': `repeat(auto-fit, minmax(min(100%, 200px), 1fr))`
      }
    },
  },
  plugins: [],
}


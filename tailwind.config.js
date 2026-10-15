/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso:   '#2C2015',
        gold:       '#C8A96E',
        cream:      '#E8D5B7',
        parchment:  '#FAF7F2',
        ink:        '#1A1208',
        muted:      '#6B5C45',
        border:     '#E0D0B8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

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
        navy:       '#1A2B45',
        gold:       '#C8A865',
        lemon:      '#F5DE3A',
        lemonLight: '#FEFCE8',
        lemonMid:   '#FEF08A',
        skyblue:    '#93C5D8',
        skyLight:   '#EFF8FD',
        skyMid:     '#BAE6FD',
        cream:      '#FFFEF7',
        parchment:  '#FAF7F2',
        ink:        '#1A1208',
        muted:      '#5A4D3C',
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

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
        ink:        '#1A1208',
        gold:       '#C8A865',
        /* pastel blue — soft powder, like sea glass */
        pblue:      '#9EC4D5',
        pbluePale:  '#EBF6FA',
        pblueMid:   '#C8E3EE',
        /* pastel yellow — butter, not neon */
        pyellow:    '#F5DFA0',
        pyellowPale:'#FFFBEB',
        pyellowMid: '#FAE9A0',
        /* neutrals */
        sand:       '#F7F1E8',
        cream:      '#FFFEF9',
        muted:      '#6B5C45',
        border:     '#E5D8C8',
        parchment:  '#FAF7F2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Lato', 'system-ui', 'sans-serif'],
        script:  ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}

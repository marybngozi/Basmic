/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        // Red palette
        'brand-red': '#C92424',
        'dark-red': '#8A1616',

        // Blue palette
        'primary-blue': '#1E4D8C',
        'light-blue': '#6D9BDB',
        'deep-navy': '#0F2A4B',
        'sky-blue': '#A5C4E7',

        // Neutrals
        'light-neutral': '#F7E6E6',
        'dark-neutral': '#333333',
      },
    },
  },
  plugins: [],
}

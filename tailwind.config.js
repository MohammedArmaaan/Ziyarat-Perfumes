/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a2230',
        'ink-2': '#2a3344',
        teal: '#0d7d7d',
        'teal-2': '#14a4a4',
        emerald: '#0f6e5e',
        gold: '#b08a3e',
        'gold-2': '#c9a24a',
        rose: '#b87b7b',
        ivory: '#f4f1ea',
        'ivory-2': '#ece7da',
      },
    },
  },
  plugins: [],
};

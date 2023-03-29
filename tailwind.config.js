/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brushstroke-bg': "url('/brushstroke.png')",
        'brushstroke2-bg': "url('/brushstroke2.png')",
        'brushstroke3-bg': "url('/brushstroke3.png')",
        'brushstroke4-bg': "url('/brushstroke4.png')",
        'brushstroke5-bg': "url('/brushstroke5.png')",
        'brushstroke6-bg': "url('/brushstroke6.png')",
        'brushstroke7-bg': "url('/brushstroke7.png')",
        'brushstroke8-bg': "url('/brushstroke8.png')",
        'brushstrokefull-bg': "url('/brushstrokefull.png')",
      },
      fontFamily: {
        karla: [`var(--font-karla)`, 'sans-serif'],
        roboto: [`var(--font-roboto)`, 'sans-serif'],
        montserrat: [`var(--font-montserrat)`, 'sans-serif'],
        sourcesanspro: [`var(--font-sourcesanspro)`, 'sans-serif'],
      },
      animation: {
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.35) infinite',
      },
      keyframes: {
        bounce: {
          from: { transfrom: 'translateY(10px)' },
          to: { transfrom: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}

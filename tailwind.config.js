import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx,svg}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        traenki: {
          dark: '#0B1214',
          neutral: '#F1ECE3',
          primary: '#3C5050',
          shade: '#9DBAB9',
        },
      },
      animation: {
        swap: 'swap 12s cubic-bezier(0.32,0.72,0,0.75) infinite',
      },
      keyframes: {
        swap: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-50%)',
          },
          '2%': {
            opacity: 1,
            transform: 'translateY(0%)',
          },
          '16%': {
            opacity: 1,
            transform: 'translateY(0%)',
          },
          '18%': {
            opacity: 0,
            transform: 'translateY(50%)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(50%)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#9DBAB9 #F1ECE3',
        },
      })
    }),
  ],
}

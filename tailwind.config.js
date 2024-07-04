import defaultTheme from 'tailwindcss/defaultTheme'

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
          primary: '#9DBAB9',
          shade: '#3C5050',
        },
      },
    },
  },
}

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'example-bg': "url('https://sissamx.com.mx/hi-sports/images/background/construction-bg.png')"
      },
      colors: {
        font: '#fcee9d',
        'main-1': 'FC007A',
        'main-2': '0EDBBD',
        'main-3': '692495',
        'secondary-1': 'A6B030',
        'secondary-2': 'EEE400',
        'dark-bg-1': '1DOC47',
        'dark-bg-2': '13072D',
        'bg-1': 'FEFEFE',
        'bg-2': 'C6C6C6'
      },
      // fontFamily: {
      //   body: ['Bebas Neue'],
      //   bebas: ['Bebas Neue', 'regular' ]
      // }
    }
  },
  plugins: []
}

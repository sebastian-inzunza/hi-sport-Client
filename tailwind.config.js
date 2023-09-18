const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                caliente: '#ff0002',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};

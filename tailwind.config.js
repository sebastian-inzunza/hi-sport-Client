const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                caliente: '#ff0002',
                burger: 'rgba(245, 198, 255, 0.136)',
                borderMorado: 'rgba(29, 12, 71, 0.4);',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};

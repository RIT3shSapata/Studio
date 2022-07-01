/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'wiingy-white': {
                    500: '#c1c0c0',
                    700: '#8d8b8b',
                },
                'wiingy-grey': '#5A6077',
            },
        },
    },
    plugins: [],
};

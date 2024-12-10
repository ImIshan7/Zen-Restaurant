/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                primary: {
                    terracotta: '#D16C45',
                    olive: '#88A776',
                },
                secondary: {
                    beige: '#F4E7D3',
                    charcoal: '#4B4B4B',
                    golden: '#F1C232',
                },
                accent: {
                    cherry: '#C0392B',
                    white: '#FFFFFFE6',
                },
            },
        },
    },
    plugins: [],
};
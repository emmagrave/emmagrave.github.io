/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.php", "./includes/**/*.php"],
    theme: {
        extend: {
            fontFamily: {
                'merriweather': ['Merriweather', 'serif'],
                'allura': ['Allura', 'cursive'],
            },
            colors: {
                primary: '#c9a0a8',
                accent: '#d4a5ae',
                dark: '#2d2d2d',
                light: '#f8f5f3',
                gray: '#6b6b6b',
                shadow: 'rgba(0, 0, 0, 0.1)'
            }
        },
    },
    plugins: [],
}
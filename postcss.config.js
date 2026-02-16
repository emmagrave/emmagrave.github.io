module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-import': {},    // Permet de lire les @import "about.scss"
        'tailwindcss/nesting': {}, // Permet d'utiliser le signe & { }
        tailwindcss: {},
        autoprefixer: {},
    }
}
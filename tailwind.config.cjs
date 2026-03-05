/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                premium: {
                    gold: '#D4AF37',
                    rose: '#F33A6A',
                    cream: '#FFFDD0',
                    dark: '#1A1A1A',
                    soft: '#F8BBD0',
                    lavender: '#E1BEE7',
                    deep: '#4A148C'
                }
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                script: ['"Dancing Script"', 'cursive'],
            },
            animation: {
                'slow-zoom': 'slow-zoom 20s infinite alternate',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'pulse-glow': 'pulse-glow 2s infinite',
                'float': 'float 6s ease-in-out infinite'
            },
            keyframes: {
                'slow-zoom': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' }
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.05)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                }
            }
        },
    },
    plugins: [],
}

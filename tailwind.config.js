module.exports = {
    theme: {
        colors: {
            primary: {
                light: '#38438D',
                default: '#30377f',
                dark: '#262B65'
            },
            secondary: {
                light: '#4EB28E',
                default: '#3C9E7D',
                dark: '#2E7C63'
            },
            accent: {
                light: '#F4B971',
                default: '#F8B04D',
                dark: '#DC9D44'
            },
            white: {
                default: '#FFFFFF'
            },
        },
        fontFamily: {
            'titre': ['AracneRegular', 'sans-serif'],
            'body': ['BryanPro']
        }


    },
    variants: {},
    plugins: [],
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
        ]
    }
}
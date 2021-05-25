module.exports = {
    theme: {
        colors: {
            primary: {
                100: "#d6d7e5",
                200: "#acafcc",
                300: "#8387b2",
                400: "#595f99",
                500: "#30377f",
                600: "#262c66",
                700: "#1d214c",
                800: "#131633",
                900: "#0a0b19"
            },

            secondary: {
                100: "#d8ece5",
                200: "#b1d8cb",
                300: "#8ac5b1",
                400: "#63b197",
                500: "#3c9e7d",
                600: "#307e64",
                700: "#245f4b",
                800: "#183f32",
            },
            accent: {
                100: "#feefdb",
                200: "#fcdfb8",
                300: "#fbd094",
                400: "#f9c071",
                500: "#f8b04d",
                600: "#c68d3e",
                700: "#956a2e",
                800: "#63461f",
                900: "#32230f"

            },
            white: {
                DEFAULT: '#FFFFFF'
            },
            gray: {
                100: "#e1e3e6",
                200: "#c4c7cc",
                300: "#a6aab3",
                400: "#898e99",
                500: "#6b7280",
                600: "#565b66",
                700: "#40444d",
                800: "#2b2e33",
                900: "#15171a"
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
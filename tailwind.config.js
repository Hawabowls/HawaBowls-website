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
            pink: {
                100: "#fde3f0",
                200: "#fbc7e2",
                300: "#f8aad3",
                400: "#f68ec5",
                500: "#f472b6",
                600: "#c35b92",
                700: "#92446d",
                800: "#622e49",
                900: "#311724"
            }, orange: {
                100: "#fee9d8",
                200: "#fdd3b1",
                300: "#fdbe8a",
                400: "#fca863",
                500: "#fb923c",
                600: "#c97530",
                700: "#975824",
                800: "#643a18",
                900: "#321d0c"
            },
            red: {
                100: "#fcdada",
                200: "#f9b4b4",
                300: "#f58f8f",
                400: "#f26969",
                500: "#ef4444",
                600: "#bf3636",
                700: "#8f2929",
                800: "#601b1b",
                900: "#300e0e"
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
        extend: {
            fontFamily: {
                'titre': ['AracneRegular'],
                'body': ['BryanProB']
            },
            spacing: {
                128: '32rem',
                132: '36rem',
            },

            zIndex: {
                '-10': '-10',
            },
            screens: {
                'xs': '495px',
            },

            spacing: {
                '1/2': '50%',
                '1/3': "33.333333%",
                '2/3': "66.666667%",
                '1/4': " 25%",
                '2/4': "50%",
                '3/4': "75%",
                '1/5': "20%",
                '2/5': "40%",
                '3/5': "60%",
                '4/5': "80%",
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-200px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-down': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-up': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(-50px)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.8s ease-out',
                'fade-out-down': 'fade-out-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-out-up': 'fade-out-up 0.6s ease-out'
            }

        },
        variants: {
            extend: {
                alignSelf: ['odd']
            }

        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography'),
    ],
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
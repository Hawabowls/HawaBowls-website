import { join } from 'path'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Aloha|Hawabowls - Restaurant Hawaïen ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: "Inspirés par le soleil d'Hawai avec une touche nantaise, les poké hawa Bowls ravissent à la fois les sportifs et les gourmands soucieux de prendre soin de leur​ ligne" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/Fichier 3.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueSplide.js', mode: 'client' },
    { src: '~/plugins/persistedState.client.js' },
    { src: '~/plugins/vue-stripe.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  loading: '~/components/LoadingIcon.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  dev: process.env.NODE_ENV !== 'production',
  //tailwind
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  //sttripe
  env: {
    STRIPE_PK: process.env.STRIPE_PK
  },


  proxy: {
    '/api/': { target: 'https://hawabowls-api.herokuapp.com/api', pathRewrite: { '^/api/': '' }, changeOrigin: true }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: "Hawa'Bowls",
      author: 'Bertyn99',
    },
    icon: {
      fileName: "img/Fichier 3.png",
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    manifest: {
      name: "Hawa'Bowls",
      short_name: "Hawa'Bowls",
      description: "Une application qui sert a commander des poké délicieux",
      display: "standalone",
      orientation: "portrait",
      start_url: "/",
      theme_color: "#30377f",
      backgroudn_color: "#30377f",
      lang: 'fr'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['VueSplide'],
    postcss: {
      plugins: {
        'tailwindcss': join(__dirname, 'tailwind.config.js'),
        'postcss-nested': {},
        'postcss-preset-env': {},
      },
      preset: {
        autoprefixer: {
          flexbox: true,
          grid: true,
          overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
        },
      },
    }
  }

}

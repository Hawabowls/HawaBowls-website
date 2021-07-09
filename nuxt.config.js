import { join } from 'path'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Aloha|Hawabowls Website - Restaurant Hawaïen ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: "Inspirés par le soleil d'Hawai avec une touche nantaise, les poké hawa Bowls ravissent à la fois les sportifs et les gourmands soucieux de prendre soin de leur​ ligne" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: "Aloha! Hawabowls - Restaurant Hawaïen" },
      { hid: "og:site_name", property: "og:site_name", content: "ClicknChill" },
      { hid: "og:description", property: "og:description", content: "Inspirés par le soleil d'Hawai avec une touche nantaise, les poké hawa Bowls ravissent à la fois les sportifs et les gourmands soucieux de prendre soin de leur​ ligne" },
      { hid: "og:locale", property: "og:locale", content: "fr_FR" },
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
    { src: '~/plugins/vue-stripe.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  loading: '~/components/LoadingIcon.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',

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

  //google analytics
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },


  //robot.txt
  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: () => ['/users', '/cart', '/admin', '/checkout', '/login'] // accepts function 
    },
    {
      UserAgent: '*',
      Disallow: () => ['/admin', '/checkout'],
      Sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`
    }
  ],
  sitemap: {
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    hostname: process.env.WEBSITE_URL, // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [ // Les pages qu'on a pas trop envie de voir atterrir sur Google.
      '/login',
      '/admin/**',
      '/cart',
      '/checkout',
    ]
  },


  proxy: {
    '/api/': { target: 'https://hawabowls-api.herokuapp.com', pathRewrite: { '^/api/': '' }, changeOrigin: true }
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

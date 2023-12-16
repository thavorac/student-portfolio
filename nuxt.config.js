import Config from './config'
const noProxy = process.env.NO_PROXY === 'true'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'student-portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/styles/variables.css',
    // TODO: Ensure fonts showing great in both languages.
    '~/assets/styles/fonts/latin',
    // '~/assets/styles/fonts/khmer',
    '~/assets/styles/fonts/kantumruy',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '~plugins/axios.js',
    '~plugins/lodash.js',
    { src: '~/plugins/i18n.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org
    '@nuxtjs/svg', // https://github.com/nuxt-community/svg-module
    [
      '@nuxtjs/moment', // https://www.npmjs.com/package/@nuxtjs/moment
      {
        moment: {
          defaultLocale: 'en',
          locales: ['en', 'km'],
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n', Config.i18n],
    '@nuxtjs/auth-next', // https://auth.nuxtjs.org/
    '@nuxt/image', // https://image.nuxtjs.org
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    proxy: !noProxy, // For @nuxtjs/proxy module Axios integration
  },

  proxy: noProxy ? undefined : Config.proxies,

  privateRuntimeConfig: {
    noProxy,
  },
  auth: Config.auth,
  image: Config.image,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    postcss: {
      plugins: {
        'postcss-import': {
          extensions: '.scss',
        },
        /* 'postcss-url': {},
        cssnano: { preset: 'default' },  */ // disabled in dev mode
        // 'postcss-custom-properties': false,
      },
      order: 'presetEnvAndCssnanoLast',
    },
    splitChunks: {
      layouts: true,
    },
    minimize: true,
    extractCSS: true,
  },
  render: {
    resourceHints: false,
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      },
    },
  },
}

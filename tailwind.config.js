/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    options: {
      // Whitelisting some classes to avoid purge
      safelist: [],
    },
    content: [
      './node_modules/tv-*/dist/tv-*.umd.min.js',
      './assets/**/*.{vue,js,css}',
      './assets/styles/fonts/**/*.{vue,js,css}',
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Proxima Soft', 'Hanuman'],
      serif: ['Proxima Soft', 'Hanuman'],
    },
    debugScreens: {
      ignore: [],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    listStyleType: {
      disclosure: 'disclosure-closed',
      square: 'square',
      roman: 'upper-roman',
      disc: 'disc',
      decimal: 'decimal',
    },
    extend: {
      // height: {
      //   helpCenter: '261px',
      //   callToAction: '237.27px',
      // },
      // width: {
      //   helpCenter: '424px',
      //   helpCenter2xl: '1344px',
      //   helpCenterCard: '355px',
      //   helpCenterLg: '1148px',
      //   helpCenterSm: '350px',
      //   callToAction: '450px',
      // },
      colors: {
        brand: {
          100: '#ccdefb',
          200: '#99bdf7',
          300: '#669df2',
          400: '#337cee',
          500: '#005bea',
          600: '#0049bb',
          700: '#00378c',
          800: '#00245e',
          900: '#00122f',
        },
        opposite: {
          100: '#fbdfcc',
          200: '#f7bf99',
          300: '#f29e66',
          400: '#ee7e33',
          500: '#ea5e00',
          600: '#bb4b00',
          700: '#8c3800',
          800: '#5e2600',
          900: '#2f1300',
        },
      },
      textColor: {
        DEFAULT: 'rgba(0, 0, 0, 0.65)',
        default: 'rgba(0, 0, 0, 0.65)',
        secondary: 'rgba(0, 0, 0, 0.45)',
      },
      borderColor: {
        DEFAULT: '#d9d9d9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/line-clamp'),
    require('autoprefixer'),
  ],
}

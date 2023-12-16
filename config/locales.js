const en = require('../language/en-US')
const kh = require('../language/km-KH')

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'kh',
      iso: 'kh',
      name: 'Khmer',
    },
  ],
  defaultLocale: 'kh',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, kh },
  },
  strategy: 'prefix_except_default',
  vueI18nLoader: true,
}

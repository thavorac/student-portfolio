export default function ({ app }) {
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    const locale = newLocale === 'kh' ? 'km' : newLocale
    app.$moment.locale(locale)
  }
}

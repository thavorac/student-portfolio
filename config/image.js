/*
  For more information visit here:
  https://image.nuxtjs.org
*/

export default {
  dir: 'assets/img',
  domains: ['http://localhost:3000'],
  staticFilename: '[publicPath]/img/[name]-[hash][ext]',
  presets: {
    avatar: {
      modifiers: {
        format: 'jpg',
        width: 160,
        height: 160,
      },
    },
  },
}

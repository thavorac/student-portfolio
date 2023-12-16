module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'value-keyword-case': [
      null,
      {
        ignoreProperties: ['^[a-z][a-zA-Z0-9]+$'],
      },
    ],
  },
  ignoreFiles: [
    './assets/styles/default-design.css',
    './node_modules/ant-design-vue/dist/antd.css',
  ],
}

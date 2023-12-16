/*
  For more information visit here:
  https://github.com/nuxt-community/proxy-module
*/
export default {
  '/api-backend': {
    // example: http://backend.com/resource => http://localhost/api-backend/resource =>
    target: process.env.API_BACKEND, // example: http://backend.com/resource
    pathRewrite: { '^/api-backend': '' },
  },
}

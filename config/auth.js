export default {
  strategies: {
    keycloak: {
      scheme: 'oauth2',
      endpoints: {
        authorization: `${process.env.KEYCLOAK_REMOTE_HOST}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/auth`,
        token: `${process.env.KEYCLOAK_REMOTE_HOST}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
        logout:
          `${process.env.KEYCLOAK_REMOTE_HOST}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout?redirect_uri=` +
          encodeURIComponent(String(process.env.REMOTE_API)),
      },
      token: {
        property: 'access_token',
        type: 'Bearer',
        name: 'Authorization',
        maxAge: 1800, // Can be dynamic ?
      },
      refreshToken: {
        property: 'refresh_token',
        maxAge: 60 * 60 * 24 * 30, // Can be dynamic ?
      },
      responseType: 'code',
      grantType: 'authorization_code',
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      scope: ['openid', 'profile', 'email'],
      codeChallengeMethod: 'S256',
    },
  },
  resetOnError: true,
  redirect: {
    login: '/login',
    logout: '/',
    home: false,
    callback: '/',
  },
  plugins: [{ src: '~/plugins/axios.js', ssr: true }, '~/plugins/auth.js'],
}

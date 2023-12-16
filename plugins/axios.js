import resolveProxy from '~/lib/resolveProxy'
const noProxy = process.env.noProxy

export default function ({ $axios, $auth }) {
  $axios.onError((error) => {
    if (
      error.response &&
      error.response.status &&
      error.response.status === 500
    ) {
      Error(error)
    }

    // if (error.response && error.response.status && error.response.status === 401) {
    //   $auth.reset()
    // }
    return Promise.reject(error)
  })

  $axios.onRequest((config) => {
    if (noProxy) config.url = resolveProxy(config.url)

    // config.headers.common.accept = 'application/json'
    // config.headers.post['Content-Type'] = 'application/json'
    // config.headers.common['Access-Control-Allow-Origin'] = '*'
    // config.headers.common['Access-Control-Allow-Headers'] = '*'
    // config.headers.common['Access-Control-Allow-Methods'] = 'POST, GET'

    return config
  })
}

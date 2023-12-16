import proxies from '~/config/proxies'

const resolveProxy = (path) => {
  const proxyKey = Object.keys(proxies).find((key) => path.startsWith(key))
  if (!proxyKey) return path

  const { target, pathRewrite } = proxies[proxyKey]
  let _path = path

  if (pathRewrite) {
    Object.entries(pathRewrite).forEach(([regex, value]) => {
      _path = _path.replace(new RegExp(regex), value)
    })
  }

  return [target, _path].join('')
}

export default resolveProxy

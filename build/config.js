const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  appAssets: resolveApp('src/assets'),
  appBase: appDirectory,
  appBuild: resolveApp('dist'),
  appComponents: resolveApp('src/components'),
  appEnv: process.env.NODE_ENV,
  appImages: resolveApp('src/assets/images'),
  appIndexJs: resolveApp('src/index.js'),
  appNodeModules: resolveApp('node_modules'),
  appPages: resolveApp('src/pages'),
  appProdSourceMap: false,
  appSrc: resolveApp('src'),
  appStats: {
    stats: {
      children: false,
      chunkModules: false,
      chunks: false,
      colors: true,
      modules: false,
    },
  },
  appStyles: resolveApp('src/assets/css'),
  appTemplateMeta: {
    description: 'A Vue boilerplate starter app for rapid development.',
    template: resolveApp('public/index.html'),
    title: 'Webpack Vue Template',
  },
}

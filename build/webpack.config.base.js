'use strict'

const config = require('./config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  entry: {
    app: config.appIndexJs,
  },

  output: {
    path: config.appBuild,
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      assets: config.appAssets,
      components: config.appComponents,
      pages: config.appPages,
    },
  },

  stats: {
    children: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    modules: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: config.appSrc,
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: config.appSrc,
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: config.appHtml,
      title: config.appTitle,
    }),
  ],
}

module.exports = webpackConfig

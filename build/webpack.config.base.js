'use strict'

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config.js')

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
    // Removes the `dist` directory before building.
    new CleanWebpackPlugin([config.appBuild], {
      root: config.appBase,
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.appHtml,
      inject: true,
      title: config.appTitle,
    }),
  ],
}

module.exports = webpackConfig

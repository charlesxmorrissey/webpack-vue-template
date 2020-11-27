'use strict'

const eslintFormatter = require('eslint-formatter-pretty')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const config = require('./config')

const webpackConfig = {
  ...config.appStats,

  entry: {
    app: config.appIndexJs,
  },

  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    path: config.appBuild,
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': config.appSrc,
    },
    modules: ['node_modules'],
  },

  module: {
    rules: [
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
    new ESLintPlugin({
      context: config.appSrc,
      emitWarning: true,
      formatter: eslintFormatter,
    }),

    // Enables support for Single-File Vue components.
    new VueLoaderPlugin(),

    // Simplifies creation of HTML files to serve webpack bundles.
    new HtmlWebpackPlugin({
      description: config.appTemplateMeta.description,
      template: config.appTemplateMeta.template,
      title: config.appTemplateMeta.title,
    }),
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    // Prevent webpack from injecting useless setImmediate polyfill because
    // Vue source contains it (although only uses it if it's native).
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}

module.exports = webpackConfig

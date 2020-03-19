'use strict'

const ESLintFormatter = require('eslint-formatter-pretty')
const config = require('./config.js')
const webpack = require('webpack')
const webpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const webpackDevConfig = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    ...config.appStats,
    clientLogLevel: 'error',
    compress: true,
    contentBase: config.appBuild,
    hot: true,
    overlay: true,
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: config.appSrc,
        options: {
          emitWarning: true,
          formatter: ESLintFormatter,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: config.appSrc,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Makes some environment variables available to our JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    // Necessary to emit hot updates (CSS only).
    new webpack.HotModuleReplacementPlugin(),
  ],

  // Turn off performance hints during development because we don't
  // do any splitting or minification in interest of speed.
  performance: {
    hints: false,
  },
})

module.exports = webpackDevConfig

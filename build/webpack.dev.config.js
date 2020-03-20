'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require('./config.js')
const webpackConfig = require('./webpack.base.config')

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
        test: /\.vue$/,
        loader: 'vue-loader',
        include: config.appSrc,
      },
      {
        test: /\.css$/,
        oneOf: [
          // This matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  localsConvention: 'camelCase',
                  modules: {
                    context: config.appSrc,
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  },
                  sourceMap: config.appDevSourceMap,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: config.appDevSourceMap,
                },
              },
            ],
          },
          // This matches plain `<style>` or `<style scoped>`
          {
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: config.appDevSourceMap,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: config.appDevSourceMap,
                },
              },
            ],
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

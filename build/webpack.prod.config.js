'use strict'

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const config = require('./config')
const webpackConfig = require('./webpack.base.config')

const webpackProdConfig = merge(webpackConfig, {
  mode: 'production',
  devtool: config.appProdSourceMap ? 'source-map' : false,

  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].[chunkhash].js',
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
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  localsConvention: 'camelCase',
                  modules: {
                    context: config.appSrc,
                    localIdentName: '[hash:base64]',
                  },
                  sourceMap: config.appProdSourceMap,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: config.appProdSourceMap,
                },
              },
            ],
          },
          // This matches plain `<style>` or `<style scoped>`
          {
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: config.appProdSourceMap,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: config.appProdSourceMap,
                },
              },
            ],
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: config.appProdSourceMap,
        test: /\.js(\?.*)?$/i,
      }),

      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    // Makes some environment variables available to our JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    // Removes the `dist` directory before compilation.
    new CleanWebpackPlugin([config.appBuild], {
      root: config.appBase,
    }),

    // Extracts CSS styles into it's own CSS bundle.
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
})

module.exports = webpackProdConfig

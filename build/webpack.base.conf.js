/**
 *  webpack-base.conf.js.js
 *  Create By rehellinen
 *  Create On 2018/11/5 11:37
 */
const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const r = path => resolve(__dirname, path)

module.exports = {
  context: r('../'),
  entry: { app: './src/index.js' },
  output: {
    path: r('../dist'),
    filename: '[name].bundle.js',
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'sass': resolve('../src/assets/sass')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {indentedSyntax: true}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
module.exports = {
  // entry: './src/index.js', // 打包的入口文件
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: true,
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'image/',
        },
      },
    }, {
      test: /\.scss$/,
      use: [ 'style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
        },
      }, 'sass-loader', 'postcss-loader' ],
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader', 'postcss-loader' ],
    }, {
      test: /\.(eot|ttf|svg)/,
      use: {
        loader: 'file-loader',
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: '/',
    filename: '[name].js', // 没有这句的话，打包生成的js默认名称为main.js
    path: path.resolve(__dirname, 'dist'),
  },
};


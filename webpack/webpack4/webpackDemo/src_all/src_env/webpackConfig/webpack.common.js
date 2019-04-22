
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      // 只有在src目录下的js文件才会使用babel-loader进行转换
      include: path.resolve(__dirname, '../src'),
      use: [{
        loader: 'babel-loader'
      }],
    },
    {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'image/',
        },
      },
    }, {
      test: /\.(eot|ttf|svg)/,
      use: {
        loader: 'file-loader',
      },
    }],
  },
  // manifest
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
    // 当先某个模块中用了$变量时，就引入jQuery，将jQuery赋值给变量$
    new webpack.ProvidePlugin({
        $: 'jquery',
        _join: ['lodash', 'join'],
    })
  ],
  optimization: {
    // 在没改变源代码的情况下，文件名称中的hash值不变
    runtimeChunk: {
      name: 'runtime',
    },
    // tree shaking 需要optimization
    usedExports: true,
    // code spliting的配置，让打包后的文件命名开头不是vendors
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        verdors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
      },
    },
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
};

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
};

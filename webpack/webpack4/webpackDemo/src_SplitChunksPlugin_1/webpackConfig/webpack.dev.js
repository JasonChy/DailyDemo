const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
const devConfig = {
  // entry: './src/index.js', // 打包的入口文件
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    // hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  // tree shaking 需要optimization
  optimization: {
    usedExports: true,
  },
  output: {
    // publicPath: '/', // 使用devServer的使用要用/, npx webpack的时候要用./
  },
};

module.exports = webpackMerge(commonConfig, devConfig);

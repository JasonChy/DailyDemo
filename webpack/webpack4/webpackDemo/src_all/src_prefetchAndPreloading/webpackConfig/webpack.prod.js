const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
const prodConfig = {
  // entry: './src/index.js', // 打包的入口文件
  mode: 'production',
  devtool: 'cheap-module-source-map',
  // tree shaking 需要optimization
  optimization: {
    usedExports: true,
  },
  output: {
    publicPath: './', // 使用devServer的使用要用/, npx webpack的时候要用./
  },
};

module.exports = webpackMerge(commonConfig, prodConfig);

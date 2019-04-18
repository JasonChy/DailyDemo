const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
const prodConfig = {
  // entry: './src/index.js', // 打包的入口文件
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          },
        }, 'sass-loader', 'postcss-loader' ],
      }, {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
    }),
  ],
  // tree shaking 需要optimization
  optimization: {
    usedExports: true,
    minimizer: [ new OptimizeCSSAssetsPlugin({}) ],
  },
  output: {
    publicPath: './', // 使用devServer的使用要用/, npx webpack的时候要用./
    filename: '[name].[contenthash].js', // 没有这句的话，打包生成的js默认名称为main.js
    chunkFilename: '[name].[contenthash].js',
  },
};

module.exports = prodConfig;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
module.exports = {
  entry: './src/index.js',
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
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};


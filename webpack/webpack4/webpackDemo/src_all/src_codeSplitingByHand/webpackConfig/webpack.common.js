
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    lodash: './src/lodash.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      /* options: {
        presets: [
          [ '@babel/preset-env', {
            targets: {
              chrome: '67',
            },
            useBuiltIns: 'usage',
          },
            [ '@babel/preset-react' ],
          ],
        ],
      },*/
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
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].js', // 没有这句的话，打包生成的js默认名称为main.js
    path: path.resolve(__dirname, '../dist'),
  },
};

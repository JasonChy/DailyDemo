
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
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
  optimization: {
    // tree shaking 需要optimization
    usedExports: true,
    // code spliting的配置，让打包后的文件命名开头不是vendors
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].js', // 没有这句的话，打包生成的js默认名称为main.js
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist'),
  },
};


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
      use: [{
        loader: 'babel-loader'
      }],
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
  // manifest
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
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

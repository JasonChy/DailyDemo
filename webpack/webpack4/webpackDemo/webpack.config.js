const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.jpg$/,
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
          modules: true,
        },
      }, 'sass-loader', 'postcss-loader' ],
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};


const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // 打包时在其他地方遇到了lodash就不要再打包lodash，直接忽略掉
  // externals: ['lodash'],
  externals: {
    lodash: {
      root: '_', // 通过script标签引入的
      commonjs: 'lodash',
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    // 用script标签引入dist/library.js后会在全局变量中挂载一个library属性
    library: 'library',
    // 用import和require等模块化的方式引入
    libraryTarget: 'umd',
  }
};

// 插件是一个类
class CopyrightWebpackPlugin {
  constructor(options) {
    console.log(options);
  }

  apply(compiler) {
    // 用同步的钩子函数，写法如下：
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', compilation => {
      console.log('compiler');
    });

    // 用异步的钩子函数，写法如下
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, callback) => {
      // compilation中存放了本次打包的所有内容
      console.log(compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by qiyapeng';
        },
        size: function () {
          return 21;
        },
      });
      callback();
    });
  }
}

module.exports = CopyrightWebpackPlugin;

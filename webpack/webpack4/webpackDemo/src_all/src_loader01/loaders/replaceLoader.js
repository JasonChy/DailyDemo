
const loaderUtils = require('loader-utils');
// loader本质上就是一个函数
// 函数不能写成箭头函数，因为我们要在函数中用this对象
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const result = source.replace('Dell', options.name);
  this.callback(null, result);
  // return source.replace('Dell', options.name);
};

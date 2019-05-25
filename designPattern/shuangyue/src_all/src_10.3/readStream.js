// stream用到自定义事件
const fs = require('fs');

const readStream = fs.createReadStream('/Users/qiyapeng/java_error_in_webstorm.hprof');

let length = 0;
readStream.on('data', function (chunk) {
  let len = chunk.toString().length;
  console.log(len);
  length += len;
});
readStream.on('end', function () {
  console.log('length: ', length);
});

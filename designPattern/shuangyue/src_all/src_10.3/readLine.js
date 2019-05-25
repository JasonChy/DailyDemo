// stream用到自定义事件
const fs = require('fs');
const readLine = require('readline');

const fl = new readLine.createInterface({
  input: fs.createReadStream('/Users/qiyapeng/java_error_in_webstorm.hprof'),
});

let lineNum = 0;
fl.on('line', function(line) {
  lineNum++;
})
fl.on('close', function() {
  console.log('lineNum', lineNum);
})

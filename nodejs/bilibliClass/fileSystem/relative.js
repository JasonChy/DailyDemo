const fs = require('fs');
// 路径模块
const path = require('path');
const absolutePath = path.join(__dirname, './path.js');
console.log(absolutePath);

fs.readFile(absolutePath, 'utf-8', function(err, data) {
    console.log(err);
    console.log(data);
});

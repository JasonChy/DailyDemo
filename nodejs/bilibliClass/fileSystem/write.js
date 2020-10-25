
const fs = require('fs');

fs.writeFile('you.txt', '这是我使用nodejs写入的内容', function(error) {
    console.log(error);
})
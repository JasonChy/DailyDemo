
// 读文件
const fs = require('fs');
const path = require('path');

function readFiles(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path.join(__dirname, filePath), 'utf-8', (err, data) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(data)
            }
        });
    });
};

readFiles('content/firstCon.txt').then(function(data) {
    console.log(data);
    return readFiles('content/secondCon.txt')
}).then(function(data) {
    console.log(data);
    return readFiles('content/thirdCon.txt')
}).then(function(data) {
    console.log(data);
    return readFiles('content/fourthCon.txt')
}).then(function(data) {
    console.log(data);
});

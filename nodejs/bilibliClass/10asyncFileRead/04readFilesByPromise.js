
// 读文件
const fs = require('fs');
const path = require('path');

// const absolutePath = path.join(__dirname, 'content/firstCon.txt')
// fs.readFile(path.join(__dirname, 'content/firstCon.txt'), 'utf-8', (err, data) => {
//     console.log(data);
//     fs.readFile(path.join(__dirname, 'content/secondCon.txt'), 'utf-8', (err, data) => {
//         console.log(data);
//         fs.readFile(path.join(__dirname, 'content/thirdCon.txt'), 'utf-8', (err, data) => {
//             console.log(data);
//             fs.readFile(path.join(__dirname, 'content/fourthCon.txt'), 'utf-8', (err, data) => {
//                 console.log(data);
//             });
//         });
//     });
// });

const promise = new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, 'content/fourthCon.txt'), 'utf-8', (err, data) => {
        console.log(data);
        if (err != null) {
            reject(err);
        } else {
            resolve(data)
        }
    });
});

console.log('31:', promise);

promise.then(function(d) {
    console.log('33: ', d);
}).catch(function(error) {
    console.log(error);
})

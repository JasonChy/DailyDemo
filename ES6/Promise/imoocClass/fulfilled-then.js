
console.log('start');

let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello, world');
    }, 1000);
});

setTimeout(() => {
    promise.then(value => {
        console.log(value);
    })
}, 3000);
/*执行结果：
* start
the promise fulfilled
hello, world（两秒后执行）

Process finished with exit code 0

*/
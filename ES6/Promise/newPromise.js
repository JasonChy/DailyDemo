let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行完了');
        resolve('Ok了');
    }, 2000);
});

promise.then(
    (value) => {
        console.log('then方法执行了：' + value);
    }
);
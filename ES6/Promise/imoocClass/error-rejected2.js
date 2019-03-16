console.log('here we go');
new Promise((right, wrong) => {
    setTimeout(() => {
        throw new Error('bye');
    }, 2000);
})
    .then(
        value => {
            console.log(value + ' world');
        },
        value => {
            console.log('这是错误信息：', value)
        }
    );
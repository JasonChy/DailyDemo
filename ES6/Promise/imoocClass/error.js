console.log('here we go');

new Promise(resolve => {
    setTimeout(() => {
        throw new Error('bye');
    }, 2000);
})
    .then(value => {
        console.log(value + ' world');
    })
    .catch(error => {
        console.log('错误信息: ', error);
    });
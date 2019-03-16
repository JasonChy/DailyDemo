console.log('here we go');
Promise.all([1, 2, 3])
    .then(all => {
        console.log('1: ', all);
        return Promise.all([function () {
            console.log('ooxx');
        }, 'xxoo', false])
    })
    .then(all => {
        console.log('2: ', all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m P1');
            }, 1500);
        });
        let p2 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m P2');
            })
        });
        return Promise.all([p1, p2]);
    })
    .then(all => {
        console.log('3: ', all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m P1');
            }, 1500)
        });
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('I\'m P2');
            })
        }, 1000);
        let p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('I\'m P3');
            })
        }, 3000);
        return Promise.all([p1, p2, p3]);
    })
    .then(all => {
        console.log('all', all);
    })
    .catch(err => {
        console.log('catch: ', err);
    });

/*
* 执行结果：
* here we go
1:  [ 1, 2, 3 ]
2:  [ [Function], 'xxoo', false ]
3:  [ 'I\'m P1', 'I\'m P2' ]
catch:  I'm P2
*/
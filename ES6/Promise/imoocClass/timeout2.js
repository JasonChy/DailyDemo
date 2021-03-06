console.log('here we go');
new Promise(
    resolve => {
        setTimeout( () => {
            resolve('hello');
        }, 2000)
    }
)
    .then( value => {
        console.log(value);
        return new Promise(
            resolve => {
                setTimeout(()=> { resolve('world') })
            })
    } )

    .then( value => {
    console.log( value + ' world');
} );

/* 输出结果
* here we go
hello
world world

Process finished with exit code 0
*/
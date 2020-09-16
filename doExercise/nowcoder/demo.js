const array = ['abc', 'def', 'ghi', 'def', 'jkl'];

function counter (array) {
    let obj = {};
    // 不重复的个数
    let uniqueCount = 0
    array.map(function (ele) {
        if (obj.hasOwnProperty(ele)) {
            obj[ele]++;
        } else {
            obj[ele] = 1;
        }
    });

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            if (element === 1) {
                uniqueCount++;
            }
        }
    }

    console.log('不重复的个数为： ' + uniqueCount);
    console.log('每个字符串出现的次数为:');
    console.log(obj);
}
counter(array);
// ================
function reverseString(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
}
reverseString('abcdf');

// ================
function reverseString2(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    str.split('')
    return newStr;
}
reverseString2('abcdf');
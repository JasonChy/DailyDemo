/*// testObjString 是一个字符串
const testObjString = 'global.obj = {"name": "Jason", "age": "18"}';
const testObj = eval(testObjString);
// const testObj = JSON.parse(testObjString);

console.log(testObj);
console.log(global.obj);*/

const sanqianjiali = [];
for (let i = 0; i < 3000; i++) {
  sanqianjiali.push(new Object({ name: '佳丽' + i }));
}

console.log(sanqianjiali);

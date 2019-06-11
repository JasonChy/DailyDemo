// testObjString 是一个字符串
const testObjString = 'global.obj = {"name": "Jason", "age": "18"}';
const testObj = eval(testObjString);
// const testObj = JSON.parse(testObjString);

console.log(testObj);
console.log(global.obj);

// 单例模式
class SingleObject {
  login() {
    console.log('login...');
  }
}
// getInstance方法是静态的
SingleObject.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  };
})();

const obj1 = SingleObject.getInstance();
obj1.login();
const obj2 = SingleObject.getInstance();
obj2.login();
// obj1和obj2只向同一个对象
console.log('obj1 === obj2: ', obj1 === obj2);

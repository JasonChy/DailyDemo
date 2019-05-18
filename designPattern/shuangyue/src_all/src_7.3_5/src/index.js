// 这里使用core-decorators这个库中所提供的装饰器
import { readonly } from 'core-decorators';

// 装饰方法
class Person {
  @readonly
  name() {
    return '张三';
  }
}

const person = new Person();
console.log(person.name());

// 将name方法赋值为另一个函数时会报错：
// Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Person>'
person.name = function () {
  return '李四';
};

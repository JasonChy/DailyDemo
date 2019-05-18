
import { deprecate } from 'core-decorators';

// 装饰方法
class Person {
  @deprecate('即将废弃', { url: 'www.imooc.com' })
  name() {
    return '张三';
  }
}

const person = new Person();
console.log(person.name());
// 控制台会打出 deprecate.js:31 DEPRECATION Person#name: 即将废弃
//  See www.imooc.com for more details.

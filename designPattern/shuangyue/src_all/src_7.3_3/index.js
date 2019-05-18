
// 修饰方法
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Person {
  constructor() {
    this.first = 'A';
    this.last = 'B';
  }
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

const person = new Person();
console.log(person.name());

person.name = function () {
  alert(100);
};

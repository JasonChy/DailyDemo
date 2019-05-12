
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    alert(`${this.name} eat something`);
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`);
  }
}

export default People;

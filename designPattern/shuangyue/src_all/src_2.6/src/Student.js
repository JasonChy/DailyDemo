
import People from './People';

class Student extends People {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }

  study() {
    alert(`${this.name} study`);
  }
}

export default Student;

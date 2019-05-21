
// 主体，保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers.forEach(observers => {
      observers.update();
    });
  }
  attach(observer) {
    this.observers.push(observer);
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name} updata, state: ${this.subject.getState()}`);
  }
}

// 测试用例
const subject = new Subject();
const observer01 = new Observer('observer01', subject);
const observer02 = new Observer('observer02', subject);
const observer03 = new Observer('observer03', subject);

subject.setState(1);
subject.setState(2);
subject.setState(3);


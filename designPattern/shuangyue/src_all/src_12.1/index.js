// 交通灯的状态
class State {
  constructor(color) {
    this.color = color;
  }
  handle(context) {
    console.log(`turn to ${this.color} light`);
    // 设置状态
    context.setState(this);
  }
}
// 主体
class Context {
  constructor() {
    this.state = null;
  }
  // 获取状态
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

// 测试用例
const context = new Context();
const green = new State('green');
const yellow = new State('yellow');
const red = new State('red');

// 绿灯亮了
green.handle(context);
console.log(context.getState());
// 黄灯亮了
yellow.handle(context);
console.log(context.getState());
// 红灯亮了
red.handle(context);
console.log(context.getState());

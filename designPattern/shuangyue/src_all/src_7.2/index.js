
// 装饰器模式示例
class Circle {
  draw() {
    console.log('画一个圆形');
  }
}

class Decrator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.setRedBorder(circle);
  }
  setRedBorder(circle) {
    console.log('设置红色边框');
  }
}

// 测试用例
const circle = new Circle();
circle.draw();

const dec = new Decrator(circle);
dec.draw();

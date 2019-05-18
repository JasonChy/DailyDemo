
// 装饰方法
function log(target, name, descriptor) {
  const oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`calling ${name} with ${arguments}`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}

class MyMath {
  @log
  add(a, b) {
    return a + b;
  }
}

const math = new MyMath();
const result = math.add(2, 3);
console.log(result);

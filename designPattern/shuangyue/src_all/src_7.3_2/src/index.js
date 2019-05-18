
// 装饰一个类，带有参数的装饰器
function testDec(isDec) {
  return function(target) {
    target.isDec = isDec;
  };
}

@testDec(false)
class Demo {

}

alert(Demo.isDec);

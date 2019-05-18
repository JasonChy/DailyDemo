
// 装饰器模式示例
@testDec
class Demo {

}

function testDec(target) {
  target.isDec = true;
}

alert(Demo.isDec);

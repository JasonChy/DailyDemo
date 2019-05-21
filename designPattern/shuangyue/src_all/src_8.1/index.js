
// 代理模式
class RealImg {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk(); // 初始化即从硬盘中加载，模拟
  }
  display() {
    console.log('display: ' + this.fileName);
  }

  loadFromDisk() {
    console.log('loading...' + this.fileName);
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new RealImg(fileName);
  }
  display() {
    this.realImg.display();
  }
}

// 测试用例
const proxyImg = new ProxyImg('1.png');
proxyImg.display();

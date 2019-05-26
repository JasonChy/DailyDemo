// 迭代器
class Iterator {
  constructor(container) {
    this.list = container.list;
    this.index = 0;
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++];
    }
    return null;
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false;
    }
    return true;
  }
}
// 将顺序列表转换成 容器
class Container {
  constructor(list) {
    this.list = list;
  }
  // 生成遍历器
  getIteration() {
    return new Iterator(this);
  }
}

// 测试用例
const arr = [ 1, 2, 3, 4, 5, 6 ];
const container = new Container(arr);
const iterator = container.getIteration();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

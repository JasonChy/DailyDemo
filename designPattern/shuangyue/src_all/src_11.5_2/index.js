
function each(data) {
  // 带有遍历器特性的对象： data[Symbol.iterator]有值
  for (const item of data) {
    console.log(item);
  }
}

const arr = [ 1, 2, 3, 4 ];
const nodeList = document.getElementsByTagName('p');
const map = new Map();
map.set('a', 100);
map.set('b', 100);

each(arr);
each(nodeList);
each(map);

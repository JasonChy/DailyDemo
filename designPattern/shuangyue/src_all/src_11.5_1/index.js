
function each(data) {
  // 生成遍历器
  const iterator = data[Symbol.iterator]();

  /* console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());*/

  let item = { done: false };
  while (!item.done) {
    item = iterator.next();
    if (!item.done) {
      console.log(item.value);
    }
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

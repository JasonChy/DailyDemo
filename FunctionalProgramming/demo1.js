/**
 * Created by wb-qyp273848 on 2018/2/6.
 */
// 函数式编程 示例
const compose = function (f, g) {
  return function (x) {
    f( g(x) );
  }
};
const add1 = x => x + 1;
const mul5 = y => y * 5;
compose(mul5(add1(2)));


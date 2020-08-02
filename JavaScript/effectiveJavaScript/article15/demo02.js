function f() {
  return 'global';
}

function test(x) {
  function g() {
    return 'local';
  }
  var result = [];
  if (x) {
    result.push(f());
  }
  // console.log('13', f);
  result.push(f());
  return result;
}

console.log(test(true));
console.log(test(false));

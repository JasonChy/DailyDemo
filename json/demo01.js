function unique(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const arr01 = [ 'a', 'c', 'b', 'c', 'b', { aa: 12 }, { aa: 12 }, 'b', 'e', [ 'f' ], [ 'f' ]];

console.log(unique(arr01));

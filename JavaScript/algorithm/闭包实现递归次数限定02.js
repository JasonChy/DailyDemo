
function _add(number, retryTime) {
  if (retryTime <= 3) {
    console.log('time: ', retryTime);
    retryTime++;
    return number + _add(number - 1, retryTime);
  } else {
    return 0;
  }
}

function Add(number) {
  let retryTime = 1;
  let num = 10;
  return _add(number, retryTime);
}

console.log('\n', Add(10));

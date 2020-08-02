

function Add(number) {
  let retryTime = 1;
  let num = 10;

  function _add() {
    console.log(retryTime);
    if (num <= 0) {
      return 0;
    } else {
      retryTime++;
      _add();
    }
  }
}

console.log('\n', Add(100));

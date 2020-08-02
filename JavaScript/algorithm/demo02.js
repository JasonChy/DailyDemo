// ,
// let retryTime = 0;

function add(n, retryTime = 0) {
  if (n >= 0 && retryTime < 3) {
    console.log('14 retryTime', retryTime);
    // retryTime++;
    // return n + add(n - 1);
    return n + add(n - 1, ++retryTime);
  } else {
    return 0;
  }
}
console.log(add(10));

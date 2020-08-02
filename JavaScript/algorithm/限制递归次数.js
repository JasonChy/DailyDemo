// ,
let retryTime = 0;

function add(n) {
  if (n >= 0 && retryTime < 3) {
    console.log('14 retryTime', retryTime);
    retryTime++;
    // return n + add(n - 1);
    add(n - 1);
  } else {
    return 0;
  }
}
console.log(add(10));

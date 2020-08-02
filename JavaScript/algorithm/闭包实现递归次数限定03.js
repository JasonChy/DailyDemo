
function Request() {
  let retryTime = 1;
  // let num = 10;
  let url = "ccc";
  // return request(num);

  return (function request (num) {
    if (retryTime <= 5) {
      console.log('time: ', retryTime, num);
      retryTime++;
      request(num);
    }
  })(9);
}

console.log('\n', Request());

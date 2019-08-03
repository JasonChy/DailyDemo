async function uploadFile() {
  return Promise.reject(new Error('版本太低'));
}

let result = null;
try {
  result = uploadFile();
} catch (e) {
  console.log('9e', e);
}
console.log('6 result', result);

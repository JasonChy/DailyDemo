
// this 默认当前当前模块
console.log('Hello, world!');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('service-worker registed', registration);
        })
        .catch(error => {
          console.log('service-worker register error', error);
        })
  })
}
const EventEmitter = require('events').EventEmitter;

const emitter1 = new EventEmitter();
// 监听some事件
emitter1.on('some', info => {
  console.log('fn1', info);
});
emitter1.on('some', info => {
  console.log('fn2', info);
});
// 触发some事件
emitter1.emit('some', 'xxxxx');


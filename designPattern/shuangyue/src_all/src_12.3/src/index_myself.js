// inport只能用在网页打包文件中，不能用在nodejs（会报错）
// import StateMachine from 'javascript-state-machine';
// require引入方法既可以用在网页打包文件中，也可以用在nodejs中
const StateMachine = require('javascript-state-machine');

// 状态机模型
const fsm = new StateMachine({
  init: 'pending', // 初始化状态
  transition: [
    {
      name: 'resolve', // 事件名称
      from: 'pending',
      to: 'fullfilled',
    },
    {
      name: 'reject', // 事件名称
      from: 'pending',
      to: 'rejected',
    },
  ],
  methods: {
    // 监听 resolve
    onResolve: function(state, data) {
      // state是当前状态机实例： data是fsm.resolve(xxx)
      data.successList.forEach(fn => fn());
    },
    // 监听 resolve
    onReject: function(state, data) {
      // state是当前状态机实例： data是fsm.reject(xxx)
      data.failList.forEach(fn => fn());
    },
  },
});

// 定义Promise
class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];
    fn(
        function() {
          // resolve函数
          fsm.resolve(this);
        },
        function() {
          // reject函数
          fsm.reject(this);
        }
    );
  }
  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}

// 测试代码
function loadImage(src) {
  const promise = new MyPromise(function(resolve, reject) {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject(img);
    };
    img.src = src;
  });

  return promise;
}

const src = 'http://www.fatizi5.com/css/logo.gif';
const result = loadImage(src);

result.then(function() {
  console.log('ok 1');
}, function() {
  console.log('fail 1');
});

result.then(function() {
  console.log('ok 2');
}, function() {
  console.log('fail 2');
});

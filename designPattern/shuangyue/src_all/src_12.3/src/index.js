// inport只能用在网页打包文件中，不能用在nodejs（会报错）
import StateMachine from 'javascript-state-machine';

// 模型
const fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled',
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected',
    },
  ],
  methods: {
    // 成功
    onResolve(state, data) {
      // 参数：state - 当前状态示例; data - fsm.resolve(xxx) 执行时传递过来的参数
      data.successList.forEach(fn => fn());
    },
    // 失败
    onReject(state, data) {
      // 参数：state - 当前状态示例; data - fsm.reject(xxx) 执行时传递过来的参数
      data.failList.forEach(fn => fn());
    },
  },
});

// 定义 Promise
class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];

    fn(() => {
      // resolve 函数
      fsm.resolve(this);
    }, () => {
      // reject 函数
      fsm.reject(this);
    });
  }
  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}
// 测试代码
function loadImage(src) {
  const promise = new MyPromise(function(resolve, reject) {
    const img = document.createElement('img');
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject();
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

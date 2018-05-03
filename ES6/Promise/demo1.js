/**
 * Created by wb-qyp273848 on 2018/1/31.
 */

const promise = new Promise(
    function (resolve, reject) {
      // ...some code
      if (/*异步操作成功*/) {
        resolve(value);
      } else {
        reject(error)
      }
    }
);

promise.then(
    function () {
      // success
    },
    function () {
      // failure
    }
);
// ===============================
function timeout(ms) {
  return new Promise(
      (resolve, reject) => {
        setTimeout(resolve, ms, 'done')
      }
  );
}

timeout(100).then(
    (value) => {
      console.log(value);
    }
);
// ===============================
let promise = new Promise(
    function (resolve, reject) {
      console.log('Promise');
      resolve();
    }
);
promise.then(
    function () {
      console.log('resolved.');
    }
);
console.log('Hi');
// ==============================

function loadImageAsync(url) {
  return new Promise(
      function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
          resolve(image);
        };

        image.onerror = function () {
          reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
      }
  );
}
// ==================================================================

const getJSON = function (url) {
  const promise = new Promise(
      function (resolve, reject) {
        const handler = function () {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error(this.statusText));
          }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
      }
  );

  return promise;
};

getJSON("/posts.json").then(
    function (json) {
      console.log('Contents: ' + json);
    },
    function (error) {
      console.error('出错了', error);
    }
);
// ============================================
getJSON("/post/1.json")
    .then(
        function (post) {
          return getJSON(post.commentURL);
        }
    )
    .then(
        function funcA(comments) {
          console.log("resolve: ", comments);
        },
        function funcB(err) {
          console.log("rejected: ", err)
        }
    );
// ====================================================
getJSON("/post/1.json")
    .then(
        post => getJSON(post.commentURL)
    )
    .then(
        comments => console.log("resolved: ", comments),
        err => console.log("rejected: ", err)
    );
// Promise.prototype.catch()=====================================================
getJSON('/posts.json')
    .then(
        function (posts) {
          // ...
        }
    )
    .catch(function (error) {
      // 处理 getJSON 和 前一个回调函数运行时发生的错误
      console.log('发生错误！', error);
    });
// ==================================================
p.then(
    (val) => console.log('fulfilled: ', val)
).catch(
    (err) => console.log('rejected: ', err)
);
// 等同于
p.then(
    (val) => console.log('fulfilled: ', val)
).then(
    null, (err) => console.log('fulfilled: ', err)
);



















function loadImg(src) {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject('图片加载失败！');
    };
    img.src = src;
  });
  return promise;
}

const src = 'https://www.qiyapeng.com/wp-content/uploads/2018/10/jinyongzuopin-1024x724.jpg';
const result = loadImg(src);

result.then(img => {
  alert(`width: ${img.width}`);
  return img;
}).then(img => {
  alert(`height: ${img.height}`);
}).catch(ex => {
  alert(ex);
});

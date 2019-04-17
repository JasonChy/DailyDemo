/*
import './style.css';

const btn = document.getElementById('button');
btn.innerHTML = '点击';
document.body.appendChild(btn);

btn.onclick = function() {
  const div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
};
*/

import counter from './counter';
import number from './number';

counter();
number();

// 如果./number这个文件发生了变化
if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'));
    number();
  });
}

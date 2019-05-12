
class jQuery {
  constructor(selector) {
    const slice = Array.prototype.slice;
    const dom = slice.call(document.querySelectorAll(selector));
    const len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  append() {

  }

  addClass() {

  }

  html(data) {

  }

// 此处省略N个API
}

window.$ = function(selector) {
  return new jQuery(selector);
};

const $p = $('p');
console.log($p);
console.log($p.addClass());

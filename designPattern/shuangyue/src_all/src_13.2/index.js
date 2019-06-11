
// 一个原型对象
let prototype = {
  getName: function() {
    return this.first + ' ' + this.last;
  },
  say: function() {
    alert('hello');
  },
};

// 基于原型创建 x
const x = Object.create(prototype);
x.first = 'A';
x.last = 'B';
alert(x.getName());
x.say();

// 基于原型创建 y
const y = Object.create(prototype);
y.first = 'C';
y.last = 'D';
alert(y.getName());
y.say();


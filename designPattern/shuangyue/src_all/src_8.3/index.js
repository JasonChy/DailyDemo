// 明星
const star = {
  name: '张某某',
  age: 25,
  phone: 'start: 1390001111',
};

// 经纪人
let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      // 返回经纪人自己的电话
      return 'agent: 18756788765';
    }
    if (key === 'price') {
      // 明星不报价，经纪人价格
      return 120000;
    }
    return target[key];
  },
  set: function(target, key, value) {
    if (key === 'customPrice') {
      if (value < 100000) {
        // 最低10W
        throw new Error('价格太低');
      } else {
        target[key] = value;
        return true;
      }
    }
  },
})

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 15000;
console.log('agent.customPrice', agent.customPrice);

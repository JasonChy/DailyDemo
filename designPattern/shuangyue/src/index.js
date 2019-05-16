
// 车辆
class Car {
  constructor(num) {
    this.num = num;
  }
}

// 摄像头
class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now(),
    };
  }
}

// 出口显示屏
class Screen {
  show(car, inTime) {
    console.log('车牌号: ' + car.num);
    console.log('停车时间： ' + (Date.now() - inTime));
  }
}

// 停车场
class Park {
  constructor(floors) {
    this.floors = floors || [];
    this.camera = new Camera();
    this.screen = new Screen();
    // 存储摄像头返回的车辆信息
    this.carList = {};
  }
  in(car) {
  // 通过摄像头获取信息
    const info = this.camera.shot(car);
  //  停到某个停车位
    const i = parseInt(Math.random() * 100 % 100);
    const place = this.floors[0].places[i];
    place.in();
    info.place = place;
  //  记录信息
    this.carList[car.num] = info;
  }
  out(car) {
    const info = this.carList[car.num];
    const place = info.place;
    place.out();
  //  显示时间
    this.screen.show(car, info.inTime);
  //  清空记录
    delete this.carList[car.num];
  }
  emptyNum() {
    return this.floors.map(floor => {
      console.log(floor);
      return `${floor.index}层还有 ${floor.emptyPlaceNum()}个停车位`;
    }).join('\n');
  }
}

// 快车
class Floor {
  constructor(index, places) {
    // index： 第几层
    this.index = index;
    // 有多少停车位
    this.places = places || [];
  }
  emptyPlaceNum() {
    let num = 0;
    this.places.forEach(p => {
      if (p.empty) {
        num++;
      }
    });
    return num;
  }

}
// 专车
class Place {
  constructor() {
    this.empty = true;
  }
  in() {
    this.empty = false;
  }
  out() {
    this.empty = true;
  }
}

// 测试
const floors = [];
for (let i = 0; i < 3; i++) {
  const places = [];
  for (let j = 0; j < 100; j++) {
    places[j] = new Place();
  }
  floors[i] = new Floor(i + 1, places);
}

const park = new Park(floors);

// 初始化车辆
const car1 = new Car(`A100`);
const car2 = new Car(`A200`);
const car3 = new Car(`A300`);

console.log('第一辆车进入');
console.log(park.emptyNum());
park.in(car1);

console.log('第二辆车进入');
console.log(park.emptyNum());
park.in(car2);

console.log('第一辆车出来');
console.log(park.emptyNum());
park.out(car1);

console.log('第二辆车出来');
console.log(park.emptyNum());
park.out(car2);

console.log('第三辆车进入');
console.log(park.emptyNum());
park.in(car3);

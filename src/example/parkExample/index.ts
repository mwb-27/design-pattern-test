// 停车场
class Park {
  floors: Array<Floor>;
  carList: any; // 存储摄像头拍摄的车辆信息
  camera: Camera;
  screen: Screen;
  constructor(floors: Array<Floor>) {
    this.floors = floors || [];
    this.camera = new Camera();
    this.screen = new Screen();
    this.carList = {};
  }
  in(car: Car) {
    // 通过摄像头获取的车辆信息
    const info: { place?: Place; num: string; inTime: number } =
      this.camera.shot(car);
    // 停到某个车位
    const i = parseInt(((Math.random() * 100) % 100).toString());
    const place = this.floors[0].places[i];
    place.in();
    info.place = place;
    this.carList[car.num] = info;
  }
  out(car: Car) {
    // 通过摄像头获取的车辆信息
    const info = this.carList[car.num];
    const place = info.place;
    place.out();
    this.screen.show(car, info.inTime);
    delete this.carList[car.num];
  }
  emptyNum() {
    return this.floors.map((floor) => {
      return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个空余车位`;
    });
  }
}

// 层
class Floor {
  index: number;
  places: Array<Place>;
  constructor(index: number, places: Array<Place>) {
    this.index = index;
    this.places = places || [];
  }
  emptyPlaceNum() {
    let num = 0;
    this.places.forEach((p) => {
      if (p.empty) {
        num++;
      }
    });
    return num;
  }
}

class Place {
  empty: boolean;
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

class Camera {
  shot(car: Car) {
    return {
      num: car.num,
      inTime: Date.now(),
    };
  }
}

class Car {
  num: string;
  constructor(num: string) {
    this.num = num;
  }
}

class Screen {
  show(car: Car, inTime: Date) {
    console.log(`车牌号 ${car.num} and inTime ${inTime}`);
  }
}

// 测试-----------

// 初始化停车场
const floors = [];
for (let i = 0; i < 3; i++) {
  const places = [];
  for (let j = 0; j < 100; j++) {
    places[j] = new Place();
  }
  floors[i] = new Floor(i, places);
}
const park = new Park(floors);

// 初始化车辆
const car1 = new Car("100");
const car2 = new Car("200");
const car3 = new Car("300");
console.log("第一辆车进入");
console.log(park.emptyNum());
park.in(car1);
console.log("第二辆车进入");
console.log(park.emptyNum());
park.in(car2);
console.log("第一辆车离开");
park.out(car1);
console.log("第三辆车进入");
console.log(park.emptyNum());
park.in(car3);
console.log("第二辆车离开");
park.out(car2);

export const test = {};

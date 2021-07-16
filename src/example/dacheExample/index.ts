class Car {
  number: string;
  name: string;
  constructor(number: string, name: string) {
    this.number = number;
    this.name = name;
  }
}

class Kuaiche extends Car {
  price: number;
  constructor(number: string, name: string) {
    super(number, name);
    this.price = 1;
  }
}

class Zhuanche extends Car {
  price: number;
  constructor(number: string, name: string) {
    super(number, name);
    this.price = 2;
  }
}

class Route {
  car: any;
  constructor(car: any) {
    this.car = car;
  }
  start() {
    console.log(`行程开始，名称：${this.car.name}, 车牌号：${this.car.number}`);
  }
  end() {
    console.log(`行程结束，价格为${this.car.price * 5}`);
  }
}

const kuaiche = new Kuaiche("xx1", "别克");
const route1 = new Route(kuaiche);
route1.start();
route1.end();

const zhuanche = new Zhuanche("xx2", "奥迪");
const route2 = new Route(zhuanche);
route2.start();
route2.end();

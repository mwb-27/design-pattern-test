// 封装 public private protected

// 父类
class People {
  name: string
  age: number
  private weight: number
  protected father: string
  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My name is ${this.name} age ${this.age}`)
  }
}


// 子类继承父类
class Student extends People {
  number: number
  private teacher: string
  constructor(name: string, age: number, number: number, weight?: number) {
    super(name, age, weight);
    this.number = number;
  }
  study() {
    alert(`${this.name} study`);
  }
  speak() {
    alert(`my teacher is ${this.teacher}, father is ${this.father}`)
  }
}

const mwb = new Student('mwb', 27, 12);
mwb.speak();

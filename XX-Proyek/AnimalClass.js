class Animal {
  constructor(gms, miles) {
    this.gms = gms;
    this.miles = miles;
  }
  eat() {
    console.log(`Parrots can eat up to ${this.gms} gms in a day`);
  }
  fly() {
    console.log(`Parrots can fly up to ${this.miles} miles in a day`);
  }
  makeSound() {
    console.log(`Parrots make sound of screech`);
  }
}

let burung = new Animal(100, 50);
console.log(burung.fly());

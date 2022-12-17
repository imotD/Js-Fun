class Person {
  constructor(name) {
    this.name = name
  }
}

Person.prototype.sayBye = function () {
  console.info(`Hi goodbye jm`)
}
Person.prototype.run = function () {
  console.info(`runningg....`)
}

const eko = new Person('Eko')
console.log(eko.name)

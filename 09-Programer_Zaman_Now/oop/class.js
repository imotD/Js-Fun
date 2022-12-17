class Person {}

Person.prototype.sayBye = function () {
  console.info(`Hi goodbye jm`)
}
Person.prototype.run = function () {
  console.info(`runningg....`)
}

const eko = new Person()

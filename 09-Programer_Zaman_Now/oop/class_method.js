class Person {
  constructor(name) {
    this.name = name
  }

  sayHello(name) {
    console.info(`Hi ${name} congratulation, welcome JM`)
  }
}

const eko = new Person('Tommy')
console.log(eko.name)
eko.sayHello('tommy')

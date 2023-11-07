function Person(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
  //method
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstname}`)
  }
}

const eko = new Person('Eko', 'Setiadi')
eko.sayHello('Bambang')

const budi = new Person('Budi', 'Prakoso')
budi.lastname = 'Angkasa'

console.log(eko)
console.log(budi)

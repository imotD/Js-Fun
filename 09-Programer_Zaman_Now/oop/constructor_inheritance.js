function Employe(firstname) {
  this.firstname = firstname
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstname}`)
  }
}

function Manager(firstname, lastname) {
  this.lastname = lastname
  Employe.call(this, firstname)
}

const eko = new Manager('Eko', 'Bilar')

console.info(eko.sayHello('tommy'))

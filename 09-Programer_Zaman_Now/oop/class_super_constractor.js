class Employe {
  constructor(firstname) {
    this.firstname = firstname
  }
  sayHello(name) {
    console.info(`Hello ${name}, my name is employe ${this.firstname}`)
  }
}

class Manager extends Employe {
  // untuk child jika ingin membuat constructor wajib menggunaan super

  constructor(firstname, lastname) {
    super(firstname)
    this.lastname = lastname
  }
  sayHello(name) {
    console.info(`Hello ${name}, my name is manager ${this.firstname} ${this.lastname}`)
  }
}

const eko = new Employe('Babanghadi')
const arya = new Manager('arya', 'abigail')

eko.sayHello('Tommy')
arya.sayHello('Tommy')

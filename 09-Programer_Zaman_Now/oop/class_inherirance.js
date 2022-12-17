class Employe {
  sayHello(name) {
    console.info(`Hello ${name}, my name is employe ${this.name}`)
  }
}

class Manager extends Employe {
  sayHello(name) {
    console.info(`Hello ${name}, my name is manager ${this.name}`)
  }
}

const eko = new Employe()
const arya = new Manager()
eko.name = 'Babangadi'
arya.name = 'Arya'

eko.sayHello('Tommy')
arya.sayHello('Tommy')

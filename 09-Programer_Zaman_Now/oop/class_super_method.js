class Employe {
  sayHello() {
    console.info(`Hallo ini bagian employe`)
  }
}

class Manager extends Employe {
  sayHello() {
    super.sayHello()
    console.info(`Hallo ini bagian Manager`)
  }
}

const probotion = new Manager()
probotion.sayHello()



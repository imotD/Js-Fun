function Person(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    this.sayHello = function (name) {
      console.info(`Hello ${name}, my name is ${this.firstname}`)
    }
  }

  Person.prototype.sayBye = function () {
    console.info(`Hi ${this.firstname} goodbye modoc`)
  }
  Person.prototype.run = function () {
    console.info(`Hi ${this.firstname} runningg....`)
  }
  
  const eko = new Person('Eko', 'Setiadi')
  eko.sayHello('Bambang')
  eko.run()
  eko.sayBye()
  const budi = new Person('Budi', 'Prakoso')
  budi.lastname = 'Angkasa'
  
  console.log(eko)
  console.log(budi)
  
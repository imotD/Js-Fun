class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name)
    } else {
      this.#sayWithoutName()
    }
  }

  #sayWithoutName() {
    console.log('tanpa nama')
  }

  #sayWithName(name) {
    console.log('nama', name)
  }

}

const eko = new Person()
eko.say()

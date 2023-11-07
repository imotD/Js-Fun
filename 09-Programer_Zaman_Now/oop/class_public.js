class Person {
  firstName;
  lastName;
  balance = 0

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
  }
}

const eko = new Person('eko','nana')
console.log(eko)

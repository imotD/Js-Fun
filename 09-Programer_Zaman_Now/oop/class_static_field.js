class Configuration {
  static name = "nama"
  static version = 1
  static author = "tommy"

}

const config = new Configuration()

console.log(config)

//bisa di buka
console.log(Configuration.version)

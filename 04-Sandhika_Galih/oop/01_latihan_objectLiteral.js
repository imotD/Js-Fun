// *  Cara untuk membuat Object pada javascript

// * Object Literal
let mahasiswa = {
  nama: 'Tommy',
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi
    console.log(`Hai ${this.nama}, Selamat Makan! Energi Kamu menjadi ${this.energi}`)
  }
}

// console.log(mahasiswa.makan(3))

// * Function Declaration

function Mahasiswa(nama, energi) {
  let mahasiswa = {}
  mahasiswa.nama = nama
  mahasiswa.energi = energi

  mahasiswa.makan = function (porsi) {
    this.energi += porsi
    console.log(`Energi kamu bertambah ${porsi} , Total Energi ${this.energi}`)
  }
  mahasiswa.main = function (jam) {
    this.energi -= jam
    console.log(`Energi kamu terkuras ${jam}, Total Energi ${this.energi}`)
  }
  return mahasiswa
}
// let tommy = Mahasiswa('Tommy', 20)
// tommy.makan(4)
// tommy.main(10)
// console.log(tommy)


// * Constructor Funcstion

function Mahasiswa(nama, energi) {
  this.nama = nama
  this.energi = energi

  this.makan = function (porsi) {
    this.energi += porsi
    console.log(`Energi kamu bertambah ${porsi} , Total Energi ${this.energi}`)
  }
  this.main = function (jam) {
    this.energi -= jam
    console.log(`Energi kamu terkuras ${jam}, Total Energi ${this.energi}`)
  }
}
let tommy = new Mahasiswa('Tommy', 20)
tommy.makan(4)
tommy.main(10)
console.log(tommy)

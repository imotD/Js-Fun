
function Mahasiswa(nama, energi) {
  this.nama = nama
  this.energi = energi
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi
  console.log(`Energi kamu bertambah ${porsi} , Total Energi ${this.energi}`)
}

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam
  console.log(`Energi kamu terkuras ${jam}, Total Energi ${this.energi}`)
}

let tommy = new Mahasiswa('tommy', 10)
tommy.makan(3)
console.log(tommy)

// * Gaya Class

class Mordern {
  constructor(nama, energi) {
    this.nama = nama
    this.energi = energi
  }

  makan(porsi) {
    this.energi += porsi
    return `Energi kamu bertambah ${porsi} , Total Energi ${this.energi}`
  }
  minum(jam) {
    this.energi -= jam
    return `Energi kamu terkuras ${jam}, Total Energi ${this.energi}`
  }
}

let saya = new Mordern('Shandika', 30)
saya.makan(4)
console.log(saya)
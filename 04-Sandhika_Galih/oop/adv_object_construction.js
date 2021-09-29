function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(
      `Hi ${this.nama} energi kamu bertambah ${porsi} total menjadi ${this.energi} `
    );
  };
}

let politeknik = new Mahasiswa("tommy", 10); //keyword new
console.log(politeknik);
console.log(politeknik.makan(4));

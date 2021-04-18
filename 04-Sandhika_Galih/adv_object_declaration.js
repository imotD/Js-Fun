function mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(
      `Hi ${this.nama} energi kamu bertambah ${porsi} total menjadi ${this.energi} `
    );
  };
  return mahasiswa;
}

let politeknik = mahasiswa("tommy", 10);
console.log(politeknik);
console.log(politeknik.makan(4));

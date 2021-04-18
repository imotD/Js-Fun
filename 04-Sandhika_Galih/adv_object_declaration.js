const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(
      `Hi ${this.nama} energi kamu bertambah ${porsi} total menjadi ${this.energi} `
    );
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(
      `Hi ${this.nama} energi kamu berkurang ${jam} total menjadi ${this.energi} `
    );
  },

  // this problem jika membuat metod baru harus didaftarkan di mahasiswa. artinya harus mengelola 2 objek . jadi kerja 2 kali
  // cara efektifnya menggunakan obj.create
};

function mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = methodMahasiswa.makan;
  mahasiswa.main = methodMahasiswa.main;

  // mahasiswa.makan = function (porsi) {
  //   this.energi += porsi;
  //   console.log(
  //     `Hi ${this.nama} energi kamu bertambah ${porsi} total menjadi ${this.energi} `
  //   );
  // };
  // mahasiswa.main = function (jam) {
  //   this.energi -= jam;
  //   console.log(
  //     `Hi ${this.nama} energi kamu bertambah ${jam} total menjadi ${this.energi} `
  //   );
  // };

  // this problem kurang efektif karena metod disimpan di memori pada masing2 objek
  // cara agar lebih efektif dengan cara membuat obejk metod terpisah

  return mahasiswa;
}

let politeknik = mahasiswa("tommy", 10);
let universitas = mahasiswa("Ali", 15);
console.log(politeknik);
console.log(universitas);
console.log(politeknik.main(4));
console.log(universitas.makan(4));
console.log(politeknik);
console.log(universitas);

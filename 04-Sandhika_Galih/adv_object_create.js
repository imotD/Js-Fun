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
};

function mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa); // memanggil objek
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;

  //this problem kita hanya membutuhkan obj mahasiswa. disini kita membuat objek tambahan yaitu methodMahasiswa. untuk lebih efektif menggunakan obj. prototoype
}

let politeknik = mahasiswa("tommy", 10);
let universitas = mahasiswa("Ali", 15);
console.log(politeknik);
console.log(universitas);
console.log(politeknik.main(4));
console.log(universitas.makan(4));
console.log(politeknik);
console.log(universitas);

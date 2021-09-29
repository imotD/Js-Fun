function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log(
    `Hi ${this.nama} energi kamu bertambah ${porsi} total menjadi ${this.energi} `
  );
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  console.log(
    `Hi ${this.nama} energi kamu bertambah ${jam} total menjadi ${this.energi} `
  );
};

let politeknik = new Mahasiswa("tommy", 10);
let universitas = new Mahasiswa("Ali", 15);
console.log(politeknik);
console.log(universitas);
console.log(politeknik.makan(3));
console.log(universitas.main(4));
console.log(politeknik);
console.log(universitas);

// versi class

class Murid {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    console.log(
      `Hi ${this.nama} energi kamu bertambah ${porsi} total menjadi ${this.energi} `
    );
  }
  main(jam) {
    this.energi -= jam;
    console.log(
      `Hi ${this.nama} energi kamu bertambah ${jam} total menjadi ${this.energi} `
    );
  }
}

let muridkoding = new Murid("shanum", 5);
console.log(muridkoding);

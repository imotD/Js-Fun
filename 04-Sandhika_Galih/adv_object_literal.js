let mahasiswa = {
  nama: "Tomy",
  energy: 10,

  makan: function (porsi) {
    this.energy = this.energy + porsi;
    console.log(
      `Hi ${this.nama} energi kamu bertambah ${porsi} total menjadi ${this.energy} `
    );
  },
};

mahasiswa.makan(10);

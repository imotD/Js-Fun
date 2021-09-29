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

//Problem tidak efektif untuk objek yang banyak saran menggunakan obj declaration

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot masih kosong!");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Uwen", ["Pandeglang", "Serang"], [], 0);
angkot1.penumpangNaik("ina");
angkot1.penumpangTurun("ina", 5000);
angkot1.penumpangNaik("tommy");
angkot1.penumpangNaik("icha");
angkot1.penumpangTurun("icha", 7000);
angkot1.penumpangTurun("ina", 5000);
console.log(angkot1);

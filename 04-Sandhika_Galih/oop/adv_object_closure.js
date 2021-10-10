function mobil(merk) {
  var tahun = "2002";
  return function(type) {
      return merk +" "+type+" "+tahun;
  }
}

var sedan = mobil("Honda");
var minivan = mobil("Mitsubisi");
sedan("Civic"); //mencetak "Honda Civic 2002"
minivan("Pajero"); //mencetak "Mitsubisi Pajero 2002"
console.dir(sedan);

// 0: Closure (mobil)
// merk: "Honda"
// tahun: "2002"

// * Clousure
// Jika ada fungsion didalam fungsion
// dan yang inner fungsion itu ada pemanggilan suatu variabel. namun tidak ada deklerasi
// maka inner fungsion akan mengecek di parent apakah ada variabel serupa.
// jika ada maka inner funsion akan mengambil itu. itu yang dinamakan clousure
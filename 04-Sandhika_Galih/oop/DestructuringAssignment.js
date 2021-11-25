// * Array Destructring

const arr = ["senin", "selasa", "rabu"];
const [pagi, siang, malam] = arr;

const obj = {
//   nama: "tommy",
//   umur: "17",
//   alamat: "kadu gajah"
};

const {
  nama = "default nama",
  umur = "default umur",
  alamat = "default alamat"
} = obj;

console.log(nama);

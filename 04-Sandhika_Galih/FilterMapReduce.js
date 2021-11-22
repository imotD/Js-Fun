const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const hitung = [1, 2, 3, 4];
// * cari angka
// const newAngka = angka.filter(a => a >= 3);

// * kalikan angka
// const newAngka = angka.map(a => a * 2);

// * jumlah
// const newAngka = hitung.reduce((acc, curr) => acc * curr);

// * Chain
const newAngka = angka
  .filter(a => a >= 3)
  .map(a => a + 2)
  .reduce((acc, curr) => acc + curr);

console.log(newAngka);

var angka = [1, 2, 3, 4, 5];

var bil2 = angka.map((e) => {
  return e * 2;
});

console.log(bil2.join('-'));

// sama seperti forEach namun lebih baik
// mengembalikan nilai array

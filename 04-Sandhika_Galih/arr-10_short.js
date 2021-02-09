var angka = [1, 6, 2, 3, 4, 5];

angka.sort();
console.log(angka);

var angka1 = [1, 15, 30, 6, 2, 10, 3, 4, 5];

angka1.sort((a, b) => {
  return a - b;
  //a-b itu untuk ascending (mengurut menaik), jika kamu pakai b-a maka akan descending (menurun)
});
console.log(angka1);

// mengurut

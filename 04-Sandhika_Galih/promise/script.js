// * Latihan Promise

// Promise ==> Pending

//     * FullFill
//         => Then() *
//     * Reject
//         => catch() * Error Handling
//     * Pending

// Callback( resolve / reject / finally * waktu tunggu selesai)
// finaly => berjalan ketika resolve/reject sudah mendapatkan jawaban

// Promise ==> Result

// Promise ALL == menajalankan promise secara bersamaan

// * Contoh 1

let Ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (Ditepati) {
    resolve("Jaji ditepati");
  } else {
    reject("Ingkar Janji");
  }
});

// console.log(janji1);

// janji1
//   .then(res => console.log("OK janji1 :" + res))
//   .catch(res => console.log("Not OK janji1:" + res));

// * Contoh 2

let Ditepati2 = true;
const janji2 = new Promise((resolve, reject) => {
  if (Ditepati2) {
    setTimeout(() => {
      resolve("Ditepati janji 2 setelah beberapa waktu !");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("Tidak ditepati janji 2 setelah beberapa waktu !");
    }, 2000);
  }
});

console.log("mulai");
janji2
  .finally(() => console.log("selesai menunggu"))
  .then(res => console.log("OK  :" + res))
  .catch(res => console.log("Not OK :" + res));
console.log("selesai");

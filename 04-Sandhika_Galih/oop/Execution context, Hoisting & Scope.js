// * Execution context, Hoisting & Scope

console.log(nama) // undifined
var nama = "tommy"

// * Execution context ada 2
// * 1. Create Phase
// Jadi alurnya sebelum console.log dijalankan.
// program akan mengecek dan membuat variabel/ fungsi terlebih dahulu.
// kemudian akan di naikan/dilemparkan keatas (*hositing).Create

// contoh diatas kenapa saaat esekusi nilainya undifined karena proses hoisting tadi
// karena variable nama sudah dibuat namun valuenya belum didefinisikan.

// * 2. Execute Phase
// mengesekusi code dari atas kebawah
// sehingga hasil console.log nama itu undifined karena proses hoising tadi

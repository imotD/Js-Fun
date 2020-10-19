// belajar tipe data
//----------------------- ES5
var game = "Ubisoft Free";

game = "Assassins";
// console.log(game);

// variabel var bisa dimanipulasi jika dipanggil kelas yang sama

// const text = document.getElementById('learn');

// const says = "ES6";
// text.innerHTML = "belajar" + says + "mantap";

// Object Literal

// const paket = document.getElementById('learn');

// function belajarOnline ( name , materi ){
//    return{
//       name : name ,
//       materi: materi
//    }
// }

// const belajar = belajarOnline('tomy', 'php');
// console.log(belajar);



// ----------------------ES6
// const virtual = "Game Online";
// virtual = "Android";

// console.log(virtual);


// const text = document.getElementById('learn');

// const says = "ES6";
// text.innerHTML = `hebat ya ${says} haha `;

// Object Literal

// const paket = document.getElementById('learn');

// function belajarOnline ( name , materi ){
//    return{
//       name ,
//       materi
//    }
// }

// const belajar = belajarOnline('tomy', 'php');
// paket.innerHTML = `Sekarang ${belajar.name} Belajar ${belajar.materi} dengan Biayanya 50rb`;


// array

const merek = document.getElementById('aryBrand');

const brand = ['dottom' , 'Tas Home' , ' Eiger' , 'Miyako'];

let parent = '<ul>';

brand.forEach((lebel) => {
   parent += '<li>' + lebel + '</li>';
   console.log(` ${lebel}`);
});

parent += '</ul>';
merek.innerHTML = `${parent}`

// variable const tidak bisa dipanggil kedua kalinya untuk diubah


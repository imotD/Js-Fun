// * Higher Order Function
// singkat kata adalah sebuah function yang memiliki function sebagai argument-nya ataupun
// function sebagai nilai return dari function tersebut.

// Function yang menjadi argument atau nilai return dari sebuah Higher Order function disebut callback function.

const angka = [1, 2, 3, 4, 5, -5, -4, -3, -2, -1];
const saring = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    saring.push(angka[i]);
  }
}

console.log(saring);

// * Function Belajar disebut High_Order_Function
// * Argument Run disebut Callback

function Belajar(learn, run) {
  console.log(`Tomi sedang belajar ${learn} ...`);
  run();
}

function run() {
  console.log(`Mulai mengerjakan`);
}

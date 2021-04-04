const close = document.querySelector(".close");
const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

//DOM Traversal -- penulusuran

const allClose = document.querySelectorAll(".close");
const allCards = document.querySelectorAll(".card");

// for (let i = 0; i < allClose.length; i++) {
//   allClose[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

//alternatif menggunakan forEach

// allClose.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// allCards.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     alert("Hey");
//   });
// });

// Dom Traversal Efektif
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});

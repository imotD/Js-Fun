const close = document.querySelector(".close");
const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

//DOM Traversal -- penulusuran

const all = document.querySelectorAll(".close");

// for (let i = 0; i < all.length; i++) {
//   all[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

//alternatif menggunakan forEach

all.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});

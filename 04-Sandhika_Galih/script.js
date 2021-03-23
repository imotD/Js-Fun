// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "green";
judul.style.backgroundColor = "yellow";
judul.innerHTML = "Percobaan";

// document.getElementsByTagName() -> HTMLCollection

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}

// document.getElementsByClassName() -> HTMLCollection

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Paragraf yee";

// document.querySelector() -> element

const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "25px";

// document.querySelectorAll() -> element

const all = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.color = "white";
}

// document.classList

const p2 = document.getElementsByClassName("p2")[0];
p2.classList.add("label");
p2.classList.remove("label");
p2.classList.toggle("label");
p2.classList.item(1); //seperti array
p2.classList.contains("label"); //pengecekan
p2.classList.replace("label", "baru"); //pergantian

// DOM Part 2
// create new element
const pn = document.createElement("p");
const tn = document.createTextNode("Paragraf ke 4");
// simpan tulisan ke dalam paragraf
pn.appendChild(tn);
const secA = document.getElementById("a");
secA.appendChild(pn);

// insertBefore
const list = document.createElement("li");
const litext = document.createTextNode("item baru");
list.appendChild(litext);
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(list, li2);

//remove child
const delLInk = document.getElementsByTagName("a")[0];
secA.removeChild(delLInk);

//replace child
const secB = document.getElementById("b");
const replP = secB.querySelector("p");
const replN = document.createElement("h2");
const repTx = document.createTextNode("Baru Cuy");
replN.appendChild(repTx);
secB.replaceChild(replN, replP);

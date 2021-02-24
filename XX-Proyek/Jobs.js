// Task Online Dosen Sandhika Galih - Semester 1

// ## Cerita
// Ada sebuah projek IT untuk membuat sebuah aplikasi
// untuk variabelnya terdapat nama projek, task , nama tim yang terlibat, serta modal

// jadi untuk functionnya mengenai tim2 yang terlibat jika tidak kuat dia akan keluar.

function helpIT(project, task, team, capital) {
  this.project = project;
  this.task = task;
  this.team = team;
  this.capital = capital;

  this.teamMasuk = function (name) {
    this.team.push(name);
    return this.team;
  };

  this.teamKeluar = function (name, pinalty) {
    if (this.team.length === 0) {
      console.log("Belum tersedia team ");
      return false;
    }

    for (var i = 0; i < this.team.length; i++) {
      if (this.team[i] == name) {
        this.team[i] = undefined;
        this.capital += pinalty;
        return this.team;
      }
    }
  };
}

var team1 = new helpIT(
  "Aplikasi Pencatatan Pajak",
  ["Membuat Proyek", "Menentukan Anggaran", "Membentuk Team"],
  [],
  120000
);

console.log(team1);
team1.teamMasuk("Tommy");
team1.teamMasuk("Tiput");
team1.teamMasuk("Tyga");
console.log(team1);
team1.teamKeluar("Tiput", 35000);
console.log(team1);
team1.teamKeluar("Tommy", 15000);
team1.teamKeluar("Tyga", 15000);
console.log(team1);
team1.teamKeluar("Tyga", 15000);
console.log(team1);
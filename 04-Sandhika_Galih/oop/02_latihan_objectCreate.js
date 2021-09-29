const Aktif = {
    makan: function (porsi) {
        this.energi += porsi
        console.log(`Energi kamu bertambah ${porsi} , Total Energi ${this.energi}`)
    },
    main: function (jam) {
        this.energi -= jam
        console.log(`Energi kamu terkuras ${jam}, Total Energi ${this.energi}`)
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(Aktif)
    mahasiswa.nama = nama
    mahasiswa.energi = energi
    return mahasiswa
}

let tommy = Mahasiswa('tommy', 10)
tommy.makan(3)
console.log(tommy)
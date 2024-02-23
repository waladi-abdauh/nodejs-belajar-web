let coach = 'aji kowiyu'
let profesi = 'programmer'

function cetak_biodata(coach, profesi) {
    console.log(
        `Data Karyawan Course-net
        Nama coach: ${coach}
        Profesi: ${profesi}`
    )
}

//mengekspor object/variabel/data yg ingin dikonsumsi oleh file lain
module.exports = {
    coach,
    profesi,
    cetak: cetak_biodata(coach, profesi)
}
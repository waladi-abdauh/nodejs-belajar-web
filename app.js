const express   = require('express')
const app       = express()
const port      = 3000


app.set('view engine', 'ejs')   //setting penggunaan template engine untuk express
app.set('views', './view-ejs')  //setting penggunaan folder untuk menyimpan file .ejs


app.get('/', (req,res)=>{
    res.send('Hello World!')
})


app.get('/profil', (req,res)=>{
    res.send('<h1>Halaman Profil</h1>')
})


// gaya penulisan 1: route + tampilkan view + kirim data ke view
app.get('/pengalaman', function(req,res) {
    res.render('daftar-pengalaman', {
        nama: 'Aji Kowiyu',
        jabatan: 'Sr. Developer & Analyst',
        perusahaan: 'Agung Podomoro Group',
        gaji: 12000000,
        tunjangan: 'BPJS, Asuransi, Parkir',
    })
})


// gaya penulisan 2: callbacknya dikeluarkan
// app.get('/pengalaman', render_pengalaman)

// function render_pengalaman(req,res) {
//     res.render('daftar-pengalaman', {
//         nama: 'Aji Kowiyu',
//         jabatan: 'Sr. Developer & Analyst',
//         perusahaan: 'Agung Podomoro Group',
//         gaji: 12000000,
//         tunjangan: 'BPJS, Asuransi, Parkir',
//     })
// }



app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})
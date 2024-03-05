const express       = require('express')
const app           = express()
const port          = 3000
const c_pengalaman  = require('./controller/c_pengalaman')
const c_karyawan    = require('./controller/c_karyawan')


app.set('view engine', 'ejs')
app.set('views', './view-ejs')


app.get('/', (req,res)=>{
    res.send('Hello World!')
})


app.get('/profil', (req,res)=>{
    res.send('<h1>Halaman Profil</h1>')
})


app.get('/pengalaman', c_pengalaman.render_pengalaman)
app.get('/karyawan/all', c_karyawan.all )
app.get('/karyawan/detail/:id_karyawan', c_karyawan.detail)
app.get('/karyawan/create', c_karyawan.create)



app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})
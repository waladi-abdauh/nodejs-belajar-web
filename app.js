const express       = require('express')
const app           = express()
const port          = 3000
const c_pengalaman  = require('./controller/c_pengalaman')
const c_karyawan    = require('./controller/c_karyawan')
const c_beranda     = require('./controller/c_beranda')



app.use(express.urlencoded({extended: false}))


app.set('view engine', 'ejs')
app.set('views', './view-ejs')



app.get('/', c_beranda.index)
app.get('/pengalaman', c_pengalaman.render_pengalaman)
app.get('/karyawan/all', c_karyawan.all )
app.get('/karyawan/detail/:id_karyawan', c_karyawan.detail)
app.get('/karyawan/create', c_karyawan.create)
app.post('/karyawan/insert', c_karyawan.insert)
app.post('/karyawan/delete/:id_karyawan', c_karyawan.remove)
app.get('/karyawan/edit/:id_karyawan', c_karyawan.edit)



app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})
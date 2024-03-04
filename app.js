const express   = require('express')
const app       = express()
const port      = 3000


app.set('view engine', 'ejs')   //setting penggunaan template engine untuk express
app.set('views', './view-ejs')  //setting penggunaan folder untuk menyimpan file .ejs

// import file controller
const c_pengalaman = require('./controller/c_pengalaman')


app.get('/', (req,res)=>{
    res.send('Hello World!')
})


app.get('/profil', (req,res)=>{
    res.send('<h1>Halaman Profil</h1>')
})


app.get('/pengalaman', c_pengalaman.render_pengalaman)



app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})
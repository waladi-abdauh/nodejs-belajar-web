const express   = require('express')
const app       = express()
const port      = 3000

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/profil', (req,res)=>{
    res.send('<h1>Halaman Profil</h1>')
})

app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})
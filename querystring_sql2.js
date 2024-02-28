const http          = require('http') //modul bawaan
const URL           = require('url') //modul bawaan
const querystring   = require('querystring') //modul bawaan
const Pool          = require('pg').Pool //modul dari npm
const port          = 3000


//koneksi ke database
const db = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'db_coba',
    user: 'postgres',
    password: 'root',
    max: 20, //maksimal jumlah koneksi
    idleTimeoutMillis: 30000, //30 detik
    connectionTimeoutMillis: 2000, //2 detik
})


//menyiapkan server untuk aplikasi web menggunakan http
http.createServer( function(req,res){
    console.log( querystring.parse(URL.parse(req.url).query).lk )
    res.writeHead(200, {"Content-type": "text/html"})
    res.write('<h1>Hello World</h1>')
    res.end()
}).listen(3000)

console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)







// let motor = require('sepeda-motor')
//didalam modul spd motor ada berbagai macam fungsi

//#bagasi
//#bensin
//#mesin => nyala, mati
//nyala {gas, sensor abs}
//mati {klakson, dashboard}

//tujuan kita adalah ingin pergi ke suatu tempat dengan modul spd-motor
//callback

//ilustrasi susunan function & objek yg ada di dalam modul
// motor.mesin( function(nyala, mati){
//     mati.klason(3)
//     mati.dashboard(statusbensin, statusoli, jam)
//     nyala.gas('ngebut')
//     nyala.sensorabs('aktif')
// })

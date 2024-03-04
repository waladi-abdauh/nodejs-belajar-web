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
    let urlpathname = URL.parse( req.url ).pathname
    let urlquery    = URL.parse( req.url ).query
    let qstring     = querystring.parse(urlquery)

    switch (urlpathname) {
        case '/':
            res.writeHead(200, {"Content-type": "text/html"})
            res.write('<h1>Beranda</h1>')
            res.end()
            break;
        case '/karyawan/detail':
            res.writeHead(200, {"Content-type": "text/html"}) //setelah user sukses request
            
            //cari data dari postgre
            db.query(`SELECT * FROM karyawan WHERE nama = $1`, [qstring.nama], function(error,hasil){
                if (error) throw error
                if (hasil.rows.length > 0) {
                    res.write(
                        `<h1>karyawan detail</h1>
                        <ul>
                            <li>Nama: ${hasil.rows[0].nama}</li>
                            <li>Jabatan: ${hasil.rows[0].jabatan}</li>
                            <li>Tanggal lahir: ${hasil.rows[0].tanggal_lahir.toLocaleString('id-ID')}</li>
                        </ul>`
                    )
                } else {
                    res.write(`<h1>tidak ada karyawan dengan nama ${qstring.nama}</h1>`)
                }
                res.end()
            })
            break;
        case '/karyawan/cari':
            res.writeHead(200, {"Content-type": "text/html"})
            db.query(`SELECT * FROM karyawan WHERE jabatan = $1`, [qstring.jabatan], function(error,hasil){
                if (error) throw error
                if (hasil.rows.length > 0) {
                    let html = ''
                    for (let i=0; i < hasil.rows.length; i++) {
                        html +=
                        `<h1>karyawan detail</h1>
                        <ul>
                            <li>Nama: ${hasil.rows[i].nama}</li>
                            <li>Jabatan: ${hasil.rows[i].jabatan}</li>
                            <li>Tanggal lahir: ${hasil.rows[i].tanggal_lahir.toLocaleString('id-ID')}</li>
                        </ul>`
                    }
                    res.write(html)
                } else {
                    res.write(`<h1>tidak ada karyawan dengan jabatan ${qstring.jabatan}</h1>`)
                }
                res.end()
            })
            break;
        default:
            res.writeHead(404, {"Content-type": "text/html"})
            res.write('<h1>Halaman tidak ada</h1>')
            res.end()
            break;
    }
    // console.log( querystring.parse(URL.parse(req.url).query).lk )
    
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

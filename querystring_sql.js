const http          = require('http') //modul bawaan
const URL           = require('url') //modul bawaan
const querystring   = require('querystring') //modul bawaan
const port          = 3000
const Pool          = require('pg').Pool //modul npm

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'db_coba',
    user: 'postgres',
    password: 'root',
    max: 20,
    idleTimeoutMillis: 30000, //30 detik
    connectionTimeoutMillis: 2000, //2 detik
})


http.createServer( function(req,res) {
    
    let urlparse = URL.parse(req.url).query
    let qstring = querystring.parse(urlparse)

    res.writeHead(200, {"Content-Type": "text/html"})
    pool.query('SELECT * FROM karyawan WHERE nama = $1', [qstring.nama], function (err, hasil) {
        if (err) throw err
        if (hasil.rows.length > 0) {
            res.write(
                `<ul>
                    <li>Nama: ${hasil.rows[0].nama}</li>
                    <li>Jabatan: ${hasil.rows[0].jabatan}</li>
                    <li>Tgl Lahir: ${hasil.rows[0].tanggal_lahir}</li>
                    <li>Departemen: ${hasil.rows[0].departemen}</li>
                </ul>`
            )
        } else {
            res.write( 'tidak ada karyawan dengan nama ' + qstring.nama )
        }
        res.end()
    })

}).listen(port)

console.log( 'aplikasi siap, buka http://localhost:' + port )
const Pool = require('pg').Pool
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

let varnama = 'Erwin Smith'
let varjabatan = 'Direktur'
let vartgl = '1988-08-18'
let vardept = 2
let sqlquery = 
`INSERT INTO karyawan
(nama, jabatan, tanggal_lahir, departemen)
VALUES
($1, $2, $3, $4);`
let sqlparam = [varnama, varjabatan, vartgl, vardept]

pool.query(
    sqlquery, sqlparam, function(err, hasil) {
    if (err) {
        console.log(err)
    }
    if (hasil.rowCount > 0) {
        console.log('berhasil input ke database')
    } else {
        console.log('gagal input')
    }
})
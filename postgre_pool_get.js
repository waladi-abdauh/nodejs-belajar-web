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

let id = 3
pool.query('SELECT * FROM karyawan WHERE id = $1', [id], function (err, hasil) {
    if (err) {
        console.log(err)
    }
    console.log(hasil.rows)
})
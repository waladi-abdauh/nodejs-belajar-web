const moment    = require('moment')
const Pool      = require('pg').Pool

const db = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'db_coba',
    user: 'postgres',
    password: 'root',
    max: 20,
    idleTimeoutMillis: 30000, //30 detik
    connectionTimeoutMillis: 2000, //2 detik
})

moment.locale('id')


function all(req,res) {
    db.query(`SELECT
    karyawan.*, departemen.nama as departemen_nama
    FROM karyawan
    LEFT JOIN departemen ON departemen.id = karyawan.departemen
    ORDER BY nama ASC`, function(error,hasil) {
        if (error) {
            throw error
        } else {
            res.render('karyawan/all', {
                datakaryawan: hasil,
                moment: moment,
            })
        }
    })
}


module.exports = {
    all
}
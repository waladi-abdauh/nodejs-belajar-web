const db = require('../config/database').db

async function get_all() {
    try {
        let hasil = await db.query(
            `SELECT
                karyawan.*, departemen.nama as departemen_nama
            FROM karyawan
            LEFT JOIN departemen ON departemen.id = karyawan.departemen
            ORDER BY nama ASC`
        )
        return hasil.rows
    } catch (error) {
        return error
    }
}


module.exports = {
    get_all
}
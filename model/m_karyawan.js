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



async function get_one(id_kry) {
    try {
        let data_dari_sql = await db.query(`
            SELECT
                karyawan.*, departemen.nama as departemen_nama
            FROM karyawan
            LEFT JOIN departemen ON departemen.id = karyawan.departemen
            WHERE karyawan.id = $1
            ORDER BY nama ASC`,
            [id_kry]
        )
        return data_dari_sql.rows
    } catch (error) {
        return error
    }
}


module.exports = {
    get_all,
    get_one,
}
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



async function add_new(data) {
    try {
        let hasil = await db.query(
            `INSERT INTO karyawan (nama, jabatan, tanggal_lahir, departemen)
            VALUES ($1, $2, $3, $4);`,
            [data.nama, data.jabatan, data.tgl_lahir, data.dept]
        )
        return hasil
    } catch (error) {
        return error
    }
}



async function remove(id_kry) {
    try {
        let hasil = await db.query(
            `DELETE FROM karyawan WHERE id = $1;`,
            [id_kry]
        )
        return hasil
    } catch (error) {
        return error
    }
}



async function update_kry(dataform, id_kry) {
    try {
        let hasil = await db.query(
            `UPDATE karyawan
            SET nama = $1, jabatan = $2, tanggal_lahir = $3, departemen = $4
            WHERE id = $5;`,
            [dataform.nama, dataform.jabatan, dataform.tgl_lahir, dataform.dept, id_kry]
        )
        return hasil
    } catch (error) {
        return error
    }
}



module.exports = {
    get_all,
    get_one,
    add_new,
    remove,
    update_kry,
}
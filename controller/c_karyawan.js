const moment        = require('moment')
const m_karyawan    = require('../model/m_karyawan')
const db            = require('../config/database').db //koneksi database

moment.locale('id')


async function all(req,res) {
    res.render('karyawan/all', {
        datakaryawan: await m_karyawan.get_all(),
        moment: moment
    })
}


async function detail(req,res) {
    let id_kry = req.params.id_karyawan
    let data_dari_sql;

    try {
        data_dari_sql = await db.query(`
            SELECT
                karyawan.*, departemen.nama as departemen_nama
            FROM karyawan
            LEFT JOIN departemen ON departemen.id = karyawan.departemen
            WHERE karyawan.id = $1
            ORDER BY nama ASC`,
            [id_kry]
        )
    } catch (error) {
        console.log(error)
    }

    res.render('karyawan/detail', {
        data_karyawan: data_dari_sql.rows,
        moment: moment,
    })
}


module.exports = {
    all,
    detail
}
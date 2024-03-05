const moment        = require('moment')
const m_karyawan    = require('../model/m_karyawan')
const db            = require('../config/database').db //koneksi database
const moment    = require('moment')
const Pool      = require('pg').Pool

const db = new Pool({
    host: 'localhost',
    port: 5433,
    database: 'db_coba',
    user: 'postgres',
    password: 'root',
    max: 20,
    idleTimeoutMillis: 30000, //30 detik
    connectionTimeoutMillis: 2000, //2 detik
})

moment.locale('id')


async function all(req,res) {
    res.render('karyawan/all', {
        datakaryawan: await m_karyawan.get_all(),
        moment: moment
    })
}


async function detail(req,res) {
    let id_kry = req.params.id_karyawan

    res.render('karyawan/detail', {
        data_karyawan: await m_karyawan.get_one(id_kry),
        moment: moment,
    })
}


module.exports = {
    all,
    detail,
}
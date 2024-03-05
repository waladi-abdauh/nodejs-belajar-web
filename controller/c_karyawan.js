const moment        = require('moment')
const m_karyawan    = require('../model/m_karyawan')

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
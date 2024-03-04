const moment        = require('moment')
const m_karyawan    = require('../model/m_karyawan')

moment.locale('id')


async function all(req,res) {
    res.render('karyawan/all', {
        datakaryawan: await m_karyawan.get_all(),
        moment: moment
    })
}


module.exports = {
    all
}
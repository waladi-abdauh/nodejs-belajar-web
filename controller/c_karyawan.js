const moment        = require('moment')
const m_karyawan    = require('../model/m_karyawan')
const m_departemen  = require('../model/m_departemen')

moment.locale('id')



async function all(req,res) {
    res.render('karyawan/all', {
        datakaryawan: await m_karyawan.get_all(),
        moment: moment,
        notifikasi: req.query.notif,
    })
}



async function detail(req,res) {
    let id_kry = req.params.id_karyawan

    res.render('karyawan/detail', {
        data_karyawan: await m_karyawan.get_one(id_kry),
        moment: moment,
    })
}



async function create(req,res) {
    res.render('karyawan/form-tambah', {
        departemen: await m_departemen.get_all()
    })
}



async function insert(req,res) {
    let dataform = {
        nama        : req.body.form_nama,
        jabatan     : req.body.form_jabatan,
        tgl_lahir   : req.body.form_tanggal_lahir,
        dept        : req.body.form_departemen,
    }
    try {
        let insert = await m_karyawan.add_new(dataform)
        if (insert.command == 'INSERT' && insert.rowCount == 1) {
            // res.send('berhasil input ke database')
            res.redirect('/karyawan/all?notif=berhasil input karyawan baru ke database')
        }
    } catch (error) {
        res.send(error)
    }
}



module.exports = {
    all,
    detail,
    create,
    insert,
}
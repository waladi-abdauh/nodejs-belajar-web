function render_pengalaman(req,res) {
    res.render('daftar-pengalaman', {
        nama: 'Aji Kowiyu',
        jabatan: 'Sr. Developer & Analyst',
        perusahaan: 'Agung Podomoro Group',
        gaji: 12000000,
        tunjangan: 'BPJS, Asuransi, Parkir',
    })
}

module.exports = {
    render_pengalaman
}
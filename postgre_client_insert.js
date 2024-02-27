const Client = require('pg').Client //memanggil library pg -> class Client
//koneksi ke postgre
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'db_coba',
    user: 'postgres',
    password: 'root',
})
client.connect()

new Promise((resolve, reject) => {
    let varnama = 'Eren Yeagar'
    let varjabatan = 'Manager'
    let vartgl = '1999-09-29'
    let vardept = 2
    let data = client.query(
        `INSERT INTO karyawan
        (nama, jabatan, tanggal_lahir, departemen)
        VALUES
        ($1, $2, $3, $4)`,
        [varnama, varjabatan, vartgl, vardept]
    )
    if (data) {
        resolve(data)
    } else {
        reject('ada yg salah')
    }
}).then((result) => {
    if (result.rowCount > 0) {
        console.log('berhasil input ke database')
    } else {
        console.log('gagal input')
    }
    client.end()
}).catch((error) => {
    console.log( error )
})
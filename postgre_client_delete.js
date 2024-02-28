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
    let data = client.query(
        `DELETE FROM karyawan WHERE id = $1`,
        [7]
    )
    if (data) {
        resolve(data)
    } else {
        reject('ada yg salah')
    }
}).then((result) => {
    if (result.rowCount > 0) {
        console.log('berhasil hapus ke database')
    } else {
        console.log('gagal')
    }
    client.end()
}).catch((error) => {
    console.log( error )
})
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
        `UPDATE karyawan
        SET nama = $1, jabatan = $2
        WHERE id = 7`,
        ['Zeke Yeagar', 'UI/UX Designer']
    )
    if (data) {
        resolve(data)
    } else {
        reject('ada yg salah')
    }
}).then((result) => {
    console.log(result)
    if (result.rowCount > 0) {
        console.log('berhasil input ke database')
    } else {
        console.log('gagal input')
    }
    client.end()
}).catch((error) => {
    console.log( error )
})
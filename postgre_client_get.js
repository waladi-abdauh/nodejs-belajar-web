// import { Client } from "pg" //cara penulisan es6
const Client = require('pg').Client
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'db_coba',
    user: 'postgres',
    password: 'root',
})
client.connect()


new Promise((resolve, reject) => {
    let data = client.query('SELECT * FROM karyawan WHERE id = 1')
    if (data) {
        resolve(data)
    } else {
        reject('ada yg salah')
    }
}).then((result) => {
    console.log( result.rows )
    client.end()
}).catch((error) => {
    console.log( error )
})


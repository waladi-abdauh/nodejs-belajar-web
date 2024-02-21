const http = require('http') //memanggil modul http, fitur bawaan node.js

http.createServer( function (request, response) {
    if (request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write('<h1>text ini berasal dari server node.js</h1>')
        response.end()
    } else if (request.url == '/kontak') {
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.write('ini halaman kontak')
        response.end()
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.write('halaman belum tersedia<hr>')
        response.end()
    }
}).listen(3000)

console.log('server sudah on, buka http://localhost:3000')
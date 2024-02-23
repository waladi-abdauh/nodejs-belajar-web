const http = require('http')

http.createServer( function(req, res) {
    switch (req.url) {
        case '/':
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write('<h1>halaman utama</h1>')
            res.end()
        break
        case '/profil':
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(
                `<p>Nama: Aji</p>
                <p>Pekerjaan: Programmer</p>`
            )
            res.end()
        break
        default:
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.write('<h1>404: not found<h1>')
            res.end()
        break
    }
}).listen(3000)

console.log('server sudah on, buka http://localhost:3000')
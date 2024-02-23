const http = require('http')
const fs = require('fs')

http.createServer( function(req, res) {
    switch (req.url) {
        case '/':
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.createReadStream('./view/index.html').pipe(res)
        break
        case '/profil':
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.createReadStream('./view/profil.html').pipe(res)
        break
        default:
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.write('<h1>404: not found<h1>')
            res.end()
        break
    }
}).listen(3000)

console.log('server sudah on, buka http://localhost:3000')
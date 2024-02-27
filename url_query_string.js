const http          = require('http') //modul bawaan
const URL           = require('url') //modul bawaan
const querystring   = require('querystring') //modul bawaan
const port          = 3000

http.createServer( function(req,res) {
    // console.log( req.url )
    // console.log( URL.parse(req.url) )
    // console.log( URL.parse(req.url).query )
    let urlparse = URL.parse(req.url).query
    let qstring = querystring.parse(urlparse)
    //buka browser, masukkan url http://localhost:3000/profil?nama=aji
    //lihat hasilnya di console atau terminal
    console.log( qstring.nama )
}).listen(port)

console.log( 'aplikasi siap, buka http://localhost:' + port )
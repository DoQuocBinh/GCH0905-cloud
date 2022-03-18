//load Module http va save vao bien http
var http = require('http')

//Tao server: req: data user gui len server; res: gui du lien cho client
var server = http.createServer(function(req,res){
    if(req.url =='/About'){
        //dinh dang tai lieu:  html
        res.writeHead(200,{'content-Type' : 'text/html'})
        //Gui dong chu Hello world cho nguoi dung
        res.write('<a href="/">Home</a><br>')
        res.end('<h1>About page!</h1>')
    }else{
        //dinh dang tai lieu:  html
        res.writeHead(200,{'content-Type' : 'text/html'})
        //Gui dong chu Hello world cho nguoi dung
        res.write('<a href="/About">About us</a><br>')
        res.end('Good morning122!')
    }
    
})

//server listen cac yeu cau(request) tu cac clients or cong 5000
const PORT = 5000
server.listen(PORT)

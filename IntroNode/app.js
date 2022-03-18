//load Module http va save vao bien http
var http = require('http')
var fs = require('fs')

//Tao server: req: data user gui len server; res: gui du lien cho client
var server = http.createServer((req,res)=>{
    if(req.url =='/About'){
        //dinh dang tai lieu:  html
        res.writeHead(200,{'content-Type' : 'text/html'})
        //Gui dong chu Hello world cho nguoi dung
        res.write('<a href="/">Home</a><br>')
        //doc thong tin tu file va in ra
        //const data = fs.readFileSync('myfile.txt',"utf-8") //doc file, ky tu la unicode
        const data = fs.readFile("myfile4444.txt",(err,data)=>{ // (err,data) la callback duoc goi khi doc xong file
            if(err){ //neu co loi khi doc
                res.write("da co loi khi doc file")
            }else{ //doc file k bi loi, du lieu file save vao data
                res.write("<span style='color:red'>" +data + '</span>')
            }
        })
        res.write('<h1>About page!</h1>')
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

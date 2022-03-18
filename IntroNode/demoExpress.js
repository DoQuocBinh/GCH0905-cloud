const express = require('express')
const app = express()

//thu muc public chua cac file: images, stylesheet
app.use(express.static('public'))


//trang home
app.get('/',(req,res)=>{
    res.writeHead(200,{'content-Type' : 'text/html'})
    res.write('<img src="images/ipad.jpg"/>')
    res.write("<a href='/about'>About</a><br>")
    res.end("Home Page")
})

//trang about
app.get('/about',(req,res)=>{
    res.writeHead(200,{'content-Type' : 'text/html'})
    res.write("<a href='/'>Home</a><br>")
    res.end("About Page")
})

const PORT =5000
app.listen(PORT)
console.log("Server is running!")
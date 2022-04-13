const express = require('express')
const async = require('hbs/lib/async')
const Author = require('./models/Author')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/newAuthor', async (req,res)=>{
    const name= req.body.txtAuthorName
    let newAuthor = new Author({'name':name})
    await newAuthor.save()
    res.redirect('/')

})

const PORT = process.env.PORT || 5000

app.listen(PORT)
console.log('Server is running!')
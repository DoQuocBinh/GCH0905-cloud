const express = require('express')
const async = require('hbs/lib/async')
const Author = require('./models/Author')
const Story = require('./models/Story')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.get('/',async (req,res)=>{
    const query = await Author.find()
    res.render('home',{'author':query})
})

app.post('/newStory',async (req,res)=>{
    const title = req.body.txtStory
    const authorId = req.body.author

    var story = new Story({'title':title,author:authorId})
    await story.save()
    console.log(story._id)
    res.redirect('/')
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
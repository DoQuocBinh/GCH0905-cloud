const express = require('express')
const async = require('hbs/lib/async')
const Author = require('./models/Author')
const Story = require('./models/Story')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))


app.post('/search',async (req,res)=>{
    const authorId = req.body.txtAuthor
    //muon hien thi them thong tin tu bang Author
    const query = await Story.find({'author':authorId}).populate('author')
    res.render('searchResult',{'stories':query}) 

})

app.get('/',async (req,res)=>{
    const query = await Author.find()
    const storyQuery = await Story.find().populate('author')
    res.render('home',{'author':query,'storyQuery':storyQuery})
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
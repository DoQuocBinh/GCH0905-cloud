const express = require('express')
const async = require('hbs/lib/async')
const Author = require('./models/Author')
const Story = require('./models/Story')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))


app.post('/search',async (req,res)=>{
    const authorName = req.body.txtAuthor
    //muon hien thi them thong tin tu bang Author
    //const query = await Story.find({'author':authorId}).populate('author')
    const query = await Story.find().populate('author')
    console.log(query)
    const query2 = query.filter(s=>s.author.name.includes(authorName))
    res.render('searchResult',{'stories':query2}) 

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
    if(name.length > 5){
        const errorMsg = "Ten qua dai!"
        res.render('home',{'errorMsg': errorMsg})
        return;
    }
    let newAuthor = new Author({'name':name})
    await newAuthor.save()
    res.redirect('/')

})

const PORT = process.env.PORT || 5000

app.listen(PORT)
console.log('Server is running!')
const express = require('express')
const Product = require('./models/Product')
const mongoose = require('mongoose')

const app = express()
app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/new',(req,res)=>{
    res.render('newProduct')
})

app.post('/newProduct',(req,res)=>{
    const name = req.body.txtName
    const price  = req.body.txtPrice
    const picURL  = req.body.txtPic
    
    var mongoDB = 'mongodb://tommy:123456789mu@cluster0-shard-00-00.lkrga.mongodb.net:27017,cluster0-shard-00-01.lkrga.mongodb.net:27017,cluster0-shard-00-02.lkrga.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    const productEntity = new Product({'name':name,'price':price,'picURL':picURL})
    productEntity.save((err)=>{
        if(err)
            res.end(err)
        else
            res.end('Produce saved!')
    })

    
})

const PORT = process.env.PORT || 5000

app.listen(PORT)
console.log("Server is running!")

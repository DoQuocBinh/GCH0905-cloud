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
app.post('/search',async (req,res)=>{
    const searchText = req.body.txtSearch
    const query = await  Product.find({'name':searchText})
    res.render('allProduct',{'products':query})
})
app.get('/delete',async (req,res)=>{
    const id = req.query.id
    await Product.deleteOne({'_id':id})
    res.redirect('/viewAll')
})

app.get('/viewAll', async (req,res)=>{  
    var page = req.query.page

    if(page ==1){
        const query = await  Product.find().limit(5)
        res.render('allProduct',{'products':query})
    }else if(page==2){
        //bo qua 5 ban ghi dau tien, lay 5 ban ghi tiep theo
        const query = await  Product.find().skip(5).limit(5)
        res.render('allProduct',{'products':query})
    }else{
        const query = await  Product.find()
        res.render('allProduct',{'products':query})
    }
    // const query =  Product.find({},(err,result)=>{
    //     if(err)
    //         console.log(err)
    //     else{
    //         // result.forEach(element => {
    //         // console.log(element.name)
    //         // });
    //         res.render('allProduct',{'products':result})
    //     }            
    // })
    
})

app.post('/newProduct',async (req,res)=>{
    const name = req.body.txtName
    const price  = req.body.txtPrice
    const picURL  = req.body.txtPic
    
    // var mongoDB = 'mongodb://tommy:123456789mu@cluster0-shard-00-00.lkrga.mongodb.net:27017,cluster0-shard-00-01.lkrga.mongodb.net:27017,cluster0-shard-00-02.lkrga.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
    // mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    // var db = mongoose.connection;
    const productEntity = new Product({'name':name,'price':price,'picURL':picURL})
    await productEntity.save()
    res.redirect('/')

    
})

const PORT = process.env.PORT || 5000

app.listen(PORT)
console.log("Server is running!")

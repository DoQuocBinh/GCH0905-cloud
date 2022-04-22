const express = require('express')
const Product = require('./models/Product')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.post('/newproduct',async (req,res)=>{
    const name = req.body.txtName
    const pic = req.body.txtPic
    //mot dictionary rong ban dau
    let error = new Object()
    let flag = true
    if(name.trim().length ==0){
        error["name"] = "Ten khong de trang!"
        flag =false
    }
    if(pic.trim().length < 10){
        error["pic"] = "Duong dan anh khong hop le"
        flag =false
    }
    
    if(flag==true){ // khong co loi
         let product = new Product({'name':name,'picURL': pic})
        await product.save()
        console.log("New product was saved!" + product._id)
         res.redirect('/')
    }else{
        res.render('home',{'error':error})
    }
   
   
})

app.get('/', async (req,res)=>{
    let allProduct = await Product.find()
    res.render('home',{'prods':allProduct})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running!")
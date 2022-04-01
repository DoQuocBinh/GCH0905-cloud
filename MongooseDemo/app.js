var mongoose = require('mongoose');
const Author = require('./models/Author');

var mongoDB = 'mongodb://tommy:123456789mu@cluster0-shard-00-00.lkrga.mongodb.net:27017,cluster0-shard-00-01.lkrga.mongodb.net:27017,cluster0-shard-00-02.lkrga.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//const authorJohn = new Author({first_name:'Kien','family_name':'Nguyen Trung'})
//const authorJohn = new Author({first_name:'Minh','family_name':'Nguyen The',
//                                    'date_of_birth': '1970-8-19','date_of_death':'2029-4-25'})
// authorJohn.save((error)=>{
//     if(error)
//         console.log(error)
//     else
//         console.log('Author saved ')
// })
const query = Author.find({'first_name':'Kien122'},(error,result)=>{
    if(result.length ==0)
        console.log('Khong tim thay')
    else{
            result.forEach(au => {
            console.log(au.family_name)
        });
    }
    
})


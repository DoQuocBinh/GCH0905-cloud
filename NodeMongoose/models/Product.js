var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mongoDB = 'mongodb://tommy:123456789mu@cluster0-shard-00-00.lkrga.mongodb.net:27017,cluster0-shard-00-01.lkrga.mongodb.net:27017,cluster0-shard-00-02.lkrga.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;

const ProductSchema = new Schema({
    name : {type:String, required:true},
    price: {type:Number},
    picURL: {type:String}

})

module.exports = mongoose.model('Product', ProductSchema);
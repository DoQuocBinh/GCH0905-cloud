var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var mongoDB = "mongodb://localhost:27017/ReviewNode"
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});

var productSchema =Schema({
    name: String,
    picURL: String
})

module.exports = mongoose.model('Product',productSchema)
var mongoose = require('mongoose')
  , Schema = mongoose.Schema

//var mongoDB = "mongodb://localhost:27017/NoSQLBoosterSamples"
var mongoDB = "mongodb://tommy:123456789mu@cluster0-shard-00-00.lkrga.mongodb.net:27017,cluster0-shard-00-01.lkrga.mongodb.net:27017,cluster0-shard-00-02.lkrga.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin"
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
});

module.exports = mongoose.model('Story', storySchema);

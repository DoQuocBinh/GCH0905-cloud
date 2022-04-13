var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var mongoDB = "mongodb://localhost:27017/NoSQLBoosterSamples"
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});

var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

module.exports = mongoose.model('Author', authorSchema);
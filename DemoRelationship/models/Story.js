var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var mongoDB = "mongodb://localhost:27017/NoSQLBoosterSamples"
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
});

module.exports = mongoose.model('Story', storySchema);

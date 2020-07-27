const mongoose = require('mongoose');
const theaterSchema = mongoose.Schema({
  cityId:mongoose.Schema.Types.ObjectId,
  theaterName:String,
  location:String
});
module.exports = mongoose.model('theater',theaterSchema);

const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
   cityId:mongoose.Schema.Types.ObjectId,
   theaterId:mongoose.Schema.Types.ObjectId,
   movieName:String,
   director:String,
   certificate:String,
   language:String,
});

module.exports = mongoose.model('movies',moviesSchema);

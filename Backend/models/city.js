const mongoose = require('mongoose');
const citySchema = mongoose.Schema({
     city:{
     type:String,
    unique:true
    }
}
);
module.exports = mongoose.model('city',citySchema);

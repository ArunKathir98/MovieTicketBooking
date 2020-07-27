const mongoose = require('mongoose');

const showSchema = mongoose.Schema({
    city:mongoose.Schema.Types.ObjectId,
    theaterId:mongoose.Schema.Types.ObjectId,
    movieId:mongoose.Schema.Types.ObjectId,
    showTime:[{
        type:String
    }],
    availability:Number,
    price:Number
});

module.exports = mongoose.model('show',showSchema);

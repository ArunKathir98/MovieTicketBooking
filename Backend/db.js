var Mongoose = require("mongoose"),
config = require('./config/config');
// console.log(config.database.host);
Mongoose.connect("mongodb://"+ config.database.host +'/'+ config.database.db,{ useUnifiedTopology: true,useNewUrlParser: true});
var db = Mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once("open",()=>{
    console.log(`connection with database success ${config.database.db}`)
})
exports.Mongoose = Mongoose;
exports.db=db;
const mongoose = require('mongoose');



var mongoURL = 'MONGO_URI';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});


var db = mongoose.connection;

db.on('connected', ()=>{
    console.log('MongoDb Connection Successfull');
})

db.on('error', ()=>{
    console.log('MongoDB Connection Fail');
})


module.exports = mongoose;
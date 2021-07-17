const mongoose = require('mongoose');



var mongoURL = 'mongodb+srv://ayan:ayan12345@cluster0.yxmmy.mongodb.net/mern-food';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});


var db = mongoose.connection;

db.on('connected', ()=>{
    console.log('MongoDb Connection Successfull');
})

db.on('error', ()=>{
    console.log('MongoDB Connection Fail');
})


module.exports = mongoose;
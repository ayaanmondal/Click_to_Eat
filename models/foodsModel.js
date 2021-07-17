const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({

    name : {type: String, require},
    varients : [],
    prices : [],
    category : {type: String, require},
    image : {type: String, require},
    description : {type: String, require},
} , {
    timstamps: true,
})

const foodsModel = mongoose.model('foods', foodSchema);

module.exports = foodsModel;
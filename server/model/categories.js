const mongoose = require("mongoose");

const category = mongoose.Schema({
    name:{
        type: String
    }
})

const Categories = mongoose.model("categories", category);

module.exports = Categories
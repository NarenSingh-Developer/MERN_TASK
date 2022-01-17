const mongoose = require("mongoose")

const product = mongoose.Schema({
    name: {
        type: String
    },
    model: {
        type: String
    },
    categoryId: {
        type: Number
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
})

const Product = mongoose.model("products", product)

module.exports = Product;
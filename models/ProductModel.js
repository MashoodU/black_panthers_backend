const mongoose = require('mongoose');

// Create a Schema
const ProductSchema = new mongoose.Schema(
    {
        bookName: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        },
        productImage: {
            type: String,
            required: false
        }
    }
)

// Create a Model
const ProductModel = mongoose.model('products', ProductSchema);

// Export
module.exports = ProductModel;
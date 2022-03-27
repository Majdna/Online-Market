const mongoose = require('mongoose');

export const ProductSchema = new mongoose.Schema({
    "id": String,
    "name": String,
    "price": Number,
    "catagory": String,
    "quantity": Number,
    "amount": Number,
    "description": String,
    "Url": String
}) 

const Products  = mongoose.model('Products',ProductSchema);
export default Products;

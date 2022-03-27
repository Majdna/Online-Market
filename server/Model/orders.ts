
//import ProductSchema  from './products';
const mongoose = require('mongoose');
const {ProductSchema} = require('./products');

 export const OrderSchema = new mongoose.Schema({
    "Id": String,
    "OwnerId": String,
    "groupId": String,
    "cartProducts": [ProductSchema]
}) 

const Orders = mongoose.model('Orders',OrderSchema);
export default Orders;

const mongoose = require('mongoose');
import  {GroupSchema}  from './groups';
import  {OrderSchema} from "./orders";
//const {GroupSchema} = require('./groups');

export const UserSchema = new mongoose.Schema({
    "id": String,
    "fullName": String,
    "address": String,
    "city": String,
    "Email": String,
    "phone": String,
    "password": String,
    "groups": [GroupSchema],
    "orders": [OrderSchema]
}) 

const Users = mongoose.model('Users',UserSchema);
export default Users;

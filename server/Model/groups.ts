

const mongoose = require('mongoose');

const  {UserSchema} = require("./users");


 export const GroupSchema = new mongoose.Schema({

    "Id": String,
    "Name": String,
    "adminId": String,
    "Members": [{"id":String}]

}) 

const Groups = mongoose.model('Groups',GroupSchema);
export default Groups;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    creator_name:{type:String,required:true,trim:true,unique:true},
    user_id:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    id:{type:String},
},{timestamps:true});

const User = mongoose.model('user',userSchema);

module.exports = User;
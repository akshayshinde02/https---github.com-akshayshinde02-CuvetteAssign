const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    companyEmail:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    companySize:{
        type:Number,
        required:true
    },

})

module.exports = mongoose.model('User',userSchema)
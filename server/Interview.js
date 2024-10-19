const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    candidate:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },

})

module.exports = mongoose.model('Interview',interviewSchema)
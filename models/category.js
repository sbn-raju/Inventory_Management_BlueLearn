const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    }
})

let Category = mongoose.model('Category',categorySchema);

module.exports = Category;
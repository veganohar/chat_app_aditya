const mongoose = require("mongoose");

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
        name:String,
        city:String,
        phone:Number,
        createdOn:{
            type:Date,
            default: Date.now
        }        
    })
)

module.exports = Customer;
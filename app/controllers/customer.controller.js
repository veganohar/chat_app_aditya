const db = require("../models");
const Customer = db.customer;

exports.saveNewCustomer = (req,res)=>{
    let data = req.body;
    let customer = new Customer();
    for(let p in data){
        customer[p] = data[p];
    }
    customer.save((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }   
        res.send({
            message:"New Customer created",
            data:response
        })     
    })
}
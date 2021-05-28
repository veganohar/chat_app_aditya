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

exports.getAllCustomers = (req,res)=>{
    Customer.find((err,customers)=>{
        if(err){
            return res.status(500).send({message:err});
        } 
        res.status(201).send({
            message:"Customers retrieved Successfully",
            data:customers
        })
    })
}

exports.getCustomerById = (req,res)=>{
    Customer.findOne({_id:req.params.cid},(err,customer)=>{
        if(err){
            return res.status(500).send({message:err});
        } 
        res.status(201).send({
            message:"Customer retrieved Successfully",
            data:customer
        })
    })
}

exports.updateCustomer = (req,res)=>{
    let data = req.body;
    Customer.updateOne({_id:data.id},data,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        } 
        res.status(201).send({
            message:"Customer Updated Successfully",
            data:response
        })
    })
}

exports.deleteCustomer = (req,res)=>{
    Customer.deleteOne({_id:req.params.cid},(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        } 
        res.status(201).send({
            message:"Customer Deleted Successfully",
            data:response
        })
    })
}
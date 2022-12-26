const express = require("express");
const server = express.Router();
let Admin = require("./admin.model")
server.post("/",async(req,res)=>{
    const {totalTransactions,totalProducts,totalAmount} = req.body;
    try{
        let admin = await Admin.create({totalAmount,totalTransactions,totalProducts})

        return res.status(201).json({success:true,data:admin});
    }
    catch(err){
        return res.status(404).json({message: err.message});
    }
})

module.exports = server;
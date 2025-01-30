var express=require("express")
var userrouter=express.Router()

userrouter.get("/user",(req,res)=>{
    res.send("user is krrish")
})

userrouter.get("/details",(req,res)=>{
    res.send("user details")
})

module.exports=userrouter;
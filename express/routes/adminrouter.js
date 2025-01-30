var express=require("express")
var adminrouter=express.Router()

adminrouter.get("/dashboard",(req,res)=>{
    res.send("Dashboard")
})

adminrouter.get("/dashboard/:userid",(req,res)=>{
    var userid=req.params.userid;
    console.log(userid)
    res.send(userid)
})
module.exports=adminrouter; 
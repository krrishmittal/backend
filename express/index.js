var express=require("express") 
var userrouter=require("./routes/userrouter")
var adminrouter=require("./routes/adminrouter")
// const { stat } = require("fs")
// var path=require("path")

var app=express()
app.use("/auth",userrouter)
app.use("/admin",adminrouter)
// // var fs=require("fs")
// // var data=fs.readFileSync("./public/index.html","utf-8")
// var staticpath=path.join(__dirname,"public")
// app.use(express.static(staticpath))


// app.get("/",(req,res)=>{
//     res.sendFile(path.join(staticpath,"index.html"))
// })

// app.get("/about",(req,res)=>{
//     res.sendFile(path.join(staticpath,"about.html"))
// })

// app.get("/contact",(req,res)=>{
//     res.sendFile(path.join(staticpath,"contact.html"))
// })

app.listen(4000,()=>{
    console.log("listening to server")
})

var http=require("http")
// console.log(http)

// 200 code means everything running ok

// var server=http.createServer(function(req,res){
//     // res.write("server is running")
//     // res.write("server is running")
//     // res.write("server is running")
//     // res.write("server is running")
//     res.end("<h1>hello pls subscribe</h1> ")
//     // res.end()
// })

var fs=require("fs")
var server=http.createServer(function(req,res){
    const file=fs.readFileSync("./static/index.html","utf-8")
    // console.log(file)
    if(req.url==="/"){
        res.end(file)
    }
    else if(req.url==="/about"){
        res.end("<h1>About page</h1>")
    }
    else if(req.url==="/contact"){
        res.end("<h1>contact page</h1>")
    }
    else{
        res.end("error pag")
    }
})
server.listen(4000,function(){
    console.log("listining to 4000")
})
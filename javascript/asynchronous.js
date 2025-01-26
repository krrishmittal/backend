// console.log("1")
// setTimeout(function(){
//     console.log("2")
// },2000)
// console.log("3")


// const promise=new Promise(function(resolve,reject){
//     var a=false;
//     if(a){
//         resolve("user")
//     }
//     else{
//         reject("error")
//     }
// })

// // .then and .catch for printing promise but cant extract the data
// // if we are interested in getting what it resolved then we pass result in the function
// promise.then(function(result){ // if my promise is resolved then only .then works
//     console.log(result)
// }).catch(function(err){
//     console.log()
// })


// proimise chaining
// whenever there is a fetch operation we have to implement promise chaining
let data=fetch("https://official-joke-api.appspot.com/random_joke")
data.then(function(result){
    return result.json()
}).then(function(Response){
    console.log(Response)
})
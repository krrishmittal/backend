// var a=10;
// console.log(a);
// var a='krrish';
// console.log(a)


// data type
// int, float, 

// var d=10
// console.log(d-"20");// implicit conversion =>type cohesion

// var f
// console.log(typeof(f))

// var h=4539857982369586382n // big integer add n at the number
// console.log(h)

// non primitive  arrays objects function
// var marks=[10,20,30,40,50,60]

// function f(x){
//     console.log(x**2+2)
// }
// f(5)

// console.log("Adfar")
// console.log(20+30)
// function greet(){
//     console.log("Hello")
//     // return "execution"
// }
// var a=greet()
// console.log(a)
// greet()
// greet()


// callback function passed as other function 
// function greet(x,y){
//     x()
//     console.log(y)
// }
// function hello(){
//     console.log("hello")
// }
// greet(hello,"krrish")// higher order function

// greet(function(){
//     console.log("variable")
// },"bello")

var arr=[1,2,3,4,5,6,7,8,9]
// var arr2=arr.filter(function(item,index){
// //var arr2=arr.map(function(item,index){
//     // console.log("item is: ",index,item)
//     return item>5
// })
// console.log(arr2)
// for(var i=0;i<arr.length;i++){
//     arr2.push(arr[i]*2); // declarative design
// }

// arr.splice(3,1,"x")
// console.log(arr)

// objects=> key value pairs
let obj={
    name:"krrish",
    age:20,
    salary:100000,
    saymyName:function(){
        console.log(this.name) // this keyword=> this keyword points to the object. it will point to the object it belongs to
    }
}
// console.log(obj.name)
// console.log(obj["name"])
obj.saymyName()
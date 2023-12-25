doubt 1 :- click on start it sould be stop and again stat
doubt 2 :- when we are clicking then it increase thir speed from one second ;
timing sped:- time management 

example1:- this is the example of call back through which all 
function executed one by one as they set.



function open (callback,callback2){
    console.log("open flipkart")
callback(callback2);
}
function search (callback){
    setTimeout(() => {
        console.log("seRCH t-shirt..");
        callback();
    },2000);
}
function addtocart (){
    console.log("add t-shirt to cart");
}
open(search,addtocart);


exaple 2 :-
// function fetchData(callback) {
//   console.log("Fetching data asynchronously...");
//   setTimeout(function () {
//     console.log("Data fetched asynchronously!");
//     // Simulate data retrieval, which takes 2 seconds
//     var data = { name: "Batman", age: 23, isMarried: false, hobbies: ['fighting crime', 'martial arts'] };
// 		// We then invoke the provided callback function with the data as an argument ( imagine you got some data back from server and you are printing the same ). This allows the callback to process the retrieved data.
//     callback(data);
//   }, 2000);
// }

// console.log("Start");

// function printData(result) {
//   console.log("Received data:", result);
// }

// // Call fetchData and pass a callback function
// fetchData(printData);

// console.log("End");

example 3:-  set intervalof time and stop it after a time as llike loop.
let count =0;
let id = setInterval(()=>{
count ++;
console.log(count);
if(count>=10){
    clearTimeout(id);
}
},1000);
//setTimeout(id);

//example 4:-
// function open (callback,callback2){
//     console.log("open flipkart")
// callback(callback2);
// }
// function search (callback){
//     setTimeout(() => {
//         console.log("seRCH t-shirt..");
//         callback();
//     },2000);
// }
// function addtocart (){
//     console.log("add t-shirt to cart");
// }
// open(search,addtocart);


//example 5 :-
// let count =0;
// let id = setInterval(()=>{
// count ++;
// console.log(count);
// if(count>=10){
//     clearTimeout(id);
// }
// },1000);
//setTimeout(id);
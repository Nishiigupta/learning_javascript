// javascript console api's
/*
console.log("msg")
console.warn("msg")
console.error("msg")
console.assert(4==6)
console.log("the sum of", 8+2,"gives the answer")
*/

// javascript variables

//number data types in js
var num1 = 10;
var num2 = 20;
// console.log(num1+num2);

//string datta types in js
var str1 = "nishi is beautiful";
var str2 = "harsh is brainy";
// console.log(str1);
// console.log(str2);

// object data types in js - object data types are data types that store key value pairs in java
var marks = { // here marks is an object type we are storing the name and marks of students hence key and value pair
    Nishi: 45,
    Harhs: 98,
    Yash : 88,
}
// console.log(marks)

//boolean data types in js
var a = true;
var b = false;
// console.log(a,b);

//undefined vars in js - when a var is made and is left undefined by defaut its value is undefined.
var nishi;
// console.log(nishi);     //here nishi var does not have any value hence when we print its value result is :- undefined
var n = null    // null is defining that a var does not have or must not have ny value
// console.log(n)

/*  At a very high level there are basically 2 data types in js:-
1. Primitive data type - boolean, number, null, undefined, string, symbol
2. Refrence data type - Arrays and objects
*/
// arrays in js
var arr = [1,2,3,4,5,"nishi",10,"harsh"]
// console.log(arr)
//  console.log(arr[7])

// Operators in js:-
// 1. Arthmetic operators in js - add, sub, multiply, divide
var n1 = 100;
var n2 = 10;
// console.log("the value of n1 + n2 is:- ",n1+n1);
// console.log("the value of n1 - n2 is:- ",n1-n2);
// console.log("the value of n1 * n2 is:- ",n1*n2);
// console.log("the value of n1 / n2 is:- ",n1/n2);
// 2. Assignment operators
var c = n1;
 c += 2;
console.log(c);
// 3. Comparison operators
var p = 10;
var q = 20;
// console.log(p==q);
// console.log(p<=q)
//  console.log(p>=q)
// // 4. Logical operators
// console.log(true && true)   //logical and
// console.log(true && false)
// console.log(true || true)   //logical or
// console.log(true || false)
// console.log(!false)     //logical not
// console.log(!true)

// Functions in js -
function average(n1,n2){
    return (n1+n2)/2;
}
d1 = average(100,20);
d2 = average(40,20);
// console.log(d1,d2);

// Conditional statements in js
var age = 17;
// if(age>18)
//     console.log("You can drive");
// else if(age >15)
//     console.log("You can have learning license");
// else
//     console.log("You just cannot drive")
// // array iteration using for loops - 1st method
// var a = [1,2,3,4,5,"harsh",6,7]
// for(var i =0;i<a.length;i++){
//     // if(i==2){
//     //     break; //o-p : 1 2
//     //     continue; /// op - 1 2 4 5....
//     // }
//    // console.log(a[i]);
// }
// // array iteration using forEach in js - 2nd method
// a.forEach(function(element){
//     //console.log(element);
// });
// // while loops -
// // let j = 0;
// // while(j<a.length){
// //     console.log(a[j]);
// //     j++;
// // }
// // Array methods
// let arr1 = ["nishi","harsh",2,3,4,5,true]
// console.log(arr1.length);
// arr1.pop();     // to remove the last element from the array
// console.log(arr1)
// arr1.push("yash"); //adds new ele to the array
// console.log(arr1)
// arr1.shift();   //removes the first ele from the array
// arr1.unshift("google","microsoft");     //adds new eles to the begning of the array 
// console.log(arr1)   // to display the new changed array with added eles in the beg
// let len = arr1.unshift()
// console.log(len)    // unshift returns the new array length after addition of the new eles in the beg.....
// //  console.log(arr1.unshift()) - returns the array length
// console.log(arr1.sort());   //sorts on the alphabetical basis
// console.log(arr1.toString())    //shows the array eles in the string format

// // String methods in js
// let strr = "i love you dimpy";
// console.log(strr.length);
// console.log(strr.indexOf("you"));   //returns the index of the ele at postion it starts
// console.log(strr.lastIndexOf("dimpy"));     //returns the last index of the ele
// console.log(strr.slice(0,8));      // returns the string that is wthin the range of the slice
// console.log(strr.replace("i","nishi"))
// // search more string methods from the internet

// // date methods in js
// // let mydate = new Date();    //is ued to create new date
// // console.log(mydate);
// // console.log(mydate.getMonth())  //explore more methods

// // DOMmanipulation (document object model) - Documents in js are used to acces the html elements
// // there are menthods in our dom using which we can dynamically improve and manipulate our html content/eles.
// // dom methods - 
// //1. document.getElementById('id of the ele in our htm page').style.border = '2px solid red'; css code for style inside js
// let elem = document.getElementById('click');
// console.log(elem);
// let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);
// //elemclass[0].style.background = "yellow";
// //elemclass[0].classList.add("bg-primary");  //add a class directly from the css to the js code.
// elemclass[0].classList.add("nishi-gupta");
// //elemclass[0].remove("bg-primary");
// // console.log(elemclass[0].innerHTML);
// // console.log(elemclass[0].innerText);
// // console.log(elemclass[1].innerText)

// // // Selecting using QyerrySelector
// // sel = document.querySelector('.container');     // return the first container class element
// // console.log(sel);
// // sel = document.querySelectorAll('.container');     // returns a nodelist containg all the containers of the container class
// // console.log(sel);

//Events in js
// window.onload = function() {
//     console.log("the document was loaded");
// }
//  first_container.addEventListener('click',function(){
//     // using querryselector[1] we selct the 2nd element of the container and then change the content of the html
//     // whenevr we click on the first or top ele of the container.
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We are the coders</b>"
//     console.log('click done')
//  })
// first_container.addEventListener('mouseover',function(){
//     console.log('mouseover done')
// })
// let prev = document.querySelectorAll('.container')[1].innerHTML;
// first_container.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prev;
//     console.log('mouseup done');
// })
// first_container.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We are the coders</b>"
//     console.log('mousedown done')
// })
// // arrow functions
// // function summ(a,b){
// //     return a+b;
// // }   // this can also be written as arrow fun type
// summ = (a,b) =>{
//     return a+b;
// }
// // Set timeout as setinterval
// logkaro = () =>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> The set interval has fired</b>";
//     console.log("the login just happened")  // scheduling can be done using it
// }
// setTimeout(logkaro,2000);
// setInterval(logkaro,2000);  //to occur something repeatedly
// local storage
//localstorage.setItem('name','harsh')
// localstorage - to display the local storage values
// localstorage.getItem('name') - to get the local storage value of the defined key

// json - JavaScript object notation
// obj = {name: "harsh",length:1,"a":{this:"that"}}  //object made in js
// jso = JSON.stringify(obj)   //json.stringfy() - converts the defined obj to string. the json data returned is of string typ
// console.log(jso);
// console.log(typeof jso) //typeof jso - returns the datatype of the passed data
// console.log(obj)
// console.log(typeof obj) // typeof jso - returns the datatype of the paased value
// parse = JSON.parse('{"name":"harsh","length":1,"a":{"this":"that"}}`)
// console.log(parse);  // use Json.parse to convert the string type json data to object
// Backticks are called Template literals
ab = 34;
console.log(`this is my value of a ${a}`); 



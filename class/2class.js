// js is synchronous or asunchronous 

// function
// function greet(){
//     console.log('Hey there');
// }

// greet();


// let a=function greet()   // 1. anynomous function
// //An anonymous function in JavaScript, also known as a "function expression," is a function that does not have a name.

// {
//     console.log('Hey there');
// }

// a();


// 2. arrow function 
// let a=()=>{
//     console.log('hey there');
// }
// a();


// // feature of arrow function
// let a=()=> console.log('hey there');
// a();


// 3. higher order function (HOF)
// HOF: can take other function as parameter or return  a function

function indicator()
{
    console.log("the process has been started");
}
function mul(c,d, callback){ // callback is a referce to indicator 
    callback();
    console.log(c*d);
}
mul(2,3,indicator);


/* 
A Higher-Order Function (HOF) is a function that does at least one of the following:

Takes one or more functions as arguments.
Returns a function as its result.
*/


console.log('Entry Point');
setTimeout(()=>console.log('midle point') ,1000); // delay //asynchronous
console.log('end point');

// JavaScript is both synchronous and asynchronous ( using SetTimeout)
// is asynchronous is beneficial or not

//callback is used to tackle this problem
let c;
function add(a,b)
{
    return a+b;
}
function mul(c,d) // c will be the result of add function c=a+b
{
    console.log(c*d);
}
setTimeout(()=>c=add(2,3),1000); // c will be produces after 1 sec 
f_res=mul(c,5); // here c is using the result os add

// to solve this problem we use callback


/*
SOLID principle in coding
*/



function add(a,b)
{
    return a+b;
}
function mul(c,d) // c will be the result of add function c=a+b
{
    console.log(c*d);
}
setTimeout(()=>c=add(2,3),1000); // c will be produces after 1 sec 
f_res=mul(c,5); // here c is using the result os add


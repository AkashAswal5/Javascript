// javascript is dynamically typed because its datatype is decidec in the runtype
/*
let var const 

let: block scope
var: function scope
const: block scope
*/


// var a=10;
// console.log(a); //10
// {
//     var a=8;
//     console.log(a);  // 8
// }

// console.log(a); // 8


// let a=10;
// console.log(a); //10
// {
//     let a=8;
//     console.log(a);  // 8
// }

// console.log(a); // 10


// // hoisting 
// greet();
// function greet(){
//     console.log('good Evening');
// }

// let a; //TDZ
// console.log(a);
// a=10;


// datatype: 
// 1) numbers 
// 2) String
// 3) boolean
//  4) object  
//  5) undefine

a=['abc' , 1,34,'abcd', 'true']

a.forEach((data)=>{
    if(typeof data =='number'){
        console.log(data);
    }
})

for(let i ; i<a.length ; i++){
    if (typeof a[i]==='number'){
        console.log(a[i]);
    }
}

a.sort();
console.log(a);

// destructuring
b=a;
b.push(3);
console.log(a);

// destructing
a=['abc' , 1,34] //shallow copy

console.log('5'===5);
console.log('5'==5);

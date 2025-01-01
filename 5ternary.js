/* 
ternary operator 
*/

let age = prompt("Enter your age", "18");

age = Number(age); // Convert the input to a number

let ans = age >= 18 ? "You are an adult" : "You are a kid";
alert(`Your age is: ${age}. ${ans}`);

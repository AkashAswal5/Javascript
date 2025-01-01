/*
Exercise 5: Write a program that prompts the user to enter a number and
displays a message indicating whether it's even or odd, using the ternary
operator.
*/

var num=prompt("Enter a number","0"); // prompt the user to input a number
num=Number(num); // convert the input string to a number

var num1= num%2==0 ? "Number is even" : "Number is odd";
console.log(num1);

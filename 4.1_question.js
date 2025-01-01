/*
Exercise 1: Write a program that prompts the user to enter a number and
displays a message if the number is positive, negative or zero.
*/

let num=prompt("Enter the number","0"); // Default value is 0

num=Number(num); // convert the string input to a number
if(num>0){
    console.log("number is positive.");
}

else if (num==0){
    console.log("number is equa to zero.");
}
else{
    console.log("number is negative.");
}
